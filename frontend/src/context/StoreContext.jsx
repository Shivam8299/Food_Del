import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [food_list, setFood_list] = useState([]);
  const backendUrl = "http://localhost:3000";
  const [token, setToken] = useState("");

  useEffect(() => {
    async function loadData (){
      await fetchFoodList();
      if (localStorage.getItem("token")){ 
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem('token'))
      }
    }
    loadData()

  }, []);

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/food/list`);
      if (response.status === 200) {
        setFood_list(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(backendUrl+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(backendUrl+"/api/cart/remove",{itemId},{headers:{token}});
  
    }
  };

  const loadCartData = async (token)=>{
      const response = await axios.post(backendUrl+"/api/cart/get",{},{headers:{token}});
      setCartItems(response.data.cartData)
  }

  const totalCartAmmount = (itemId) => {
    let totalAmmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalCartAmmount,
    backendUrl,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
