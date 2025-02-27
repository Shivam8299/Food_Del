import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);
import { toast } from "react-toastify";
import { AiOutlineCheckCircle } from "react-icons/ai";
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [food_list, setFood_list] = useState([]);
  const backendUrl = "https://food-delivery-osyy.onrender.com";
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
      toast.success("Product added in the Cart", {
        position: "top-right", 
       
        icon: <AiOutlineCheckCircle size={24} className="text-green-600" />, 
      });
      
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      toast.success("Added one more Product in the Cart", {
        position: "top-right", 
        icon: <AiOutlineCheckCircle size={24} className="text-green-600" />, 
      });
    }
    if(token){
      await axios.post(backendUrl+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(backendUrl+"/api/cart/remove",{itemId},{headers:{token}});
      toast.success("Product removed from Cart", {
        position: "top-right", 
        icon: <AiOutlineCheckCircle size={24} className="text-green-600" />, 
      });
  
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
