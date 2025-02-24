import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../src/assets/assets";

function Order({ backendUrl }) {
  const [orders, setOrders] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/order/list`);
      if (response.status === 200) {
        console.log(response.data.data);
        setOrders(response.data.data);
      } else {
        toast.error("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const statusHandler = async (event, orderId)=>{
    // console.log(event,orderId)
    try {
      const response = await axios.post(`${backendUrl}/api/order/status`,{
        orderId,
        status:event.target.value
      })
      if(response.status === 200){
        await fetchData()
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mt-20  md:mx-8 ">
      <p className="text-center lg:text-start mx-2 my-6 text-2xl font-bold">Order Page</p>
      {orders.map((order, index) => (
        <div key={index} className="grid grid-cols-3 py-2 lg:grid-cols-5 justify-between lg:items-center border border-amber-500 px-1 md:px-4 mb-5">
          <img className="h-12" src={assets.parcel_icon} alt="" />
          <div className=" text-sm font-semibold">
            {order.items.map((item, index) => {
              if (index === order.items.length - 1) {
                return item.name + " x " + item.quantity;
              } else {
                return item.name + " x " + item.quantity + ", ";
              }
            })}
            <p className="mt-6 lg:mt-4 font-semibold text-sm md:text-xs text-black leading-relaxed">{order.address.firstName + " " + order.address.lastName}</p>
            <p className=" text-sm font-normal md:text-xs text-gray-700">{`${order.address.street} ${order.address.city} ${order.address.state} ${order.address.country} ${order.address.zipcode} `}</p>
            <p className="text-sm font-normal md:text-xs text-gray-700 mb-6 lg:mb-1"> {order.address.phone}</p>
            </div>
            <p className=" text-sm md:text-xs text-gray-700 ml-7 lg:ml-10">Items: {order.items.length}</p>
            <p className="text-sm md:text-xs text-gray-700 ml-4 lg:ml-10">${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="mb-4 font-semibold lg:mb-0 text-sm md:text-xs rounded-xs outline-none border py-1  md:mr-6 lg:mr-0 lg:mx-6 bg-red-100 text-black">
              <option className="text-xs bg-white" value="Food Processing">Food Processing</option>
              <option  className="text-xs bg-white"value="dispatched">dispatched</option>
              <option className="text-xs bg-white" value="Out for Delivery">Out for Delivery</option>
              <option className="text-xs  bg-white" value="Delivered">Delivered</option>
            </select>
        </div>
      ))}
    </div>
  );
}

export default Order;
