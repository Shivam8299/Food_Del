import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const { totalCartAmmount,token,food_list,cartItems,backendUrl } = useContext(StoreContext);
  const navigate = useNavigate()
  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""

  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data =>({...data,[name]:value}))
  }

  const placeOrder = async(event)=>{
      event.preventDefault();
      let orderItems = [];
      food_list.map((item)=>{
        if(cartItems[item._id]>0){
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo)
        }
      })
      let orderData = {
        address:data,
        items:orderItems,
        amount:totalCartAmmount()+2
      }
      try {
        let response = await axios.post(`${backendUrl}/api/order/place`,orderData,{headers:{token}})
      if(response.status ===200){
        const session_url = response.data.success_url; 
         if (session_url) {
           window.location.href = session_url;
      } else {
        alert("Error: Invalid session URL");
      }
      }
      else{
        alert("error");
      }
      } catch (error) {
        console.error("Order placement error:", error);
        alert("Error placing order. Please check your network or contact support.");
      }
  }

  useEffect(()=>{
    if(!token){
      navigate("/cart")
    }
    else if(totalCartAmmount() === 0  ){
      navigate("/cart")
    }
  },[token])
  return (
    <div className=" mt-6  mx-4 sm:mx-2 md:mx-16 lg:mx-24 xl:mx-28">
      <form onSubmit={placeOrder} className="flex flex-col md:flex-row justify-between">
        <div>
        <p className="text-xl sm:2xl md:text-3xl text-center md:text-start ml-1 font-bold mb-10 text-black">
          Add Delivery Address
        </p>
        <div className="flex gap-2 mb-4  ">
          <input 
          required
            className=" w-full outline-none border rounded-xs px-2 text-sm py-1"
            type="text"
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            placeholder="first name"
          />
          <input
            required
            className=" w-full outline-none border rounded-xs px-2 text-sm py-1"
            type="text"
            onChange={onChangeHandler}
            name="lastName"
            value={data.lastName}
            placeholder="last name"
          />
        </div>
        <input
          required
          className="outline-none border rounded-xs px-2 text-sm py-1 w-full mb-4"
          type="text"
          placeholder="Email address"
          onChange={onChangeHandler}
          name="email"
          value={data.email}
        />
        <input
          required
          className="outline-none border rounded-xs px-2 text-sm py-1 w-full mb-4"
          type="text"
          placeholder="street"
          onChange={onChangeHandler}
          name="street"
          value={data.street}
        />
        <div className=" flex gap-2 mb-4">
          <input
            className=" w-full outline-none border rounded-xs px-2 text-sm py-1"
            type="text"
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            placeholder="City"
          />
          <input
            className=" w-full outline-none border rounded-xs px-2 text-sm py-1"
            type="text"
            placeholder="state"
            name="state"
            required
            onChange={onChangeHandler}
            value={data.value}
          />
        </div>
        <div className=" flex gap-2 mb-4">
          <input
            name="zipcode"
            required
            value={data.zipcode}
            onChange={onChangeHandler}
            className=" w-full outline-none border rounded-xs px-2 text-sm py-1"
            type="text"
            placeholder="Zip Code "
          />
          <input
            className=" w-full outline-none border rounded-xs px-2 text-sm py-1"
            type="text"
            required
            placeholder="Country"
            name="country"
            onChange={onChangeHandler}
            value={data.country}

          />
        </div>
        <input
          className="outline-none border rounded-xs px-2 text-sm py-1 w-full"
          type="text"
          required
          placeholder="Phone no"
          name="phone"
          value={data.phone}
          onChange={onChangeHandler}
        />

        </div>      
      <div className="w-full md:w-72 lg:w-96 mt-8 md:mt-0 px-2">
        <p className=" p-1 font-bold text-xl md:text-2xl  mb-6  text-center md:text-start">Cart Total</p>
        <div className="flex justify-between border-b-[1.5px] border-gray-300">
          <p className="text-sm p-[6px]">Subtotal</p>
          <p className="text-sm mr-1 text-gray-800">${totalCartAmmount()}</p>
        </div>
        <div className=" flex justify-between border-b-[1.5px] border-gray-300 p-[6px]">
          <p className="text-sm ">Delivery</p>
          <p className="text-sm text-gray-800 ">$ 2</p>
        </div>
        <div className=" flex justify-between p-[6px]">
          <p className="p-1 mb-2 text-sm font-semibold text-gray-800 ">Total</p>
          <p className="text-gray-800">${totalCartAmmount() + 2} </p>
        </div>
        <button
          type="sumbit"
          className="w-full lg:ml-6 xl:ml-10  md:w-64 lg:w-72 px-6 py-2 rounded mt-6 bg-orange-600 hover:bg-orange-700 cursor-pointer text-white text-sm"
        >
          PROCEED TO PAYMENT
        </button>
      </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
