import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/frontend_assets/assets";

function Cart() {
  // console.log(itemCounts)
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  console.log(cartItems._id);
  return (
    <div className=" mx-4 md:mx-16 lg:mx-32 mt-12">
      <div className="flex border-b border-gray-400 pb-2 justify-between">
        <p className="font-semibold text-md">item</p>
        <p className="font-semibold text-md">Title</p>
        <p className="font-semibold text-md">Price</p>
        <p className="font-semibold text-md">Quantity</p>
        <p className="font-semibold text-md">total</p>
        <img className="h-5 " src={assets.cross_icon} alt="" />
      </div>
      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div
              key={index}
              className="flex justify-between border-b border-gray-400 items-center py-2 mt-4 mb-8"
            >
              <img className="h-10 " src={item.image} alt="" />
              <p className="text-sm text-gray-700 ">{item.name}</p>
              <p className="text-gray-700">${item.price}</p>
              <p className="text-gray-700">{cartItems[item._id]}</p>
              <p className="text-gray-700">
                ${item.price * cartItems[item._id]}
              </p>
              <img
                onClick={() => removeFromCart(item._id)}
                className="h-4 mt-1 cursor-pointer"
                src={assets.cross_icon}
                alt=""
              />
            </div>
          );
        }
      })}
 
      <div className="mt-16 mb-8 md:flex justify-between  ">
        <div className="w-full md:w-72 lg:w-96 px-2">
          <p className=" p-1 font-bold text-xl  mb-6">Cart Total</p>
          <div className="flex justify-between border-b-[1.5px] border-gray-300">
            <p className="text-sm p-[6px]">Subtotal</p>
            <p className="text-sm mr-1 text-gray-800">0</p>
          </div>
          <div className=" flex justify-between border-b-[1.5px] border-gray-300 p-[6px]">
            <p className="text-sm ">Delivery</p>
            <p className="text-sm text-gray-800 ">2</p>
          </div>
          <div className=" flex justify-between p-[6px]">
            <p className="p-1 mb-2 text-sm font-semibold text-gray-800 ">
              Total
            </p>
            <p className="text-gray-800">0</p>
          </div>
          <button className="px-6 py-2 rounded-sm ml-20 sm:ml-24 md:ml-4 bg-orange-600 text-xs text-white">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="mt-10">
          <p className="text-sm text-gray-700 ">If you have a promo code, Enter it here</p>
            <form  className="flex mt-4 ">
            <input className=" w-48 lg:w-64  px-4 text-sm outline-none rounded bg-gray-300" type="text" placeholder="promo code" />
            <button className="px-8 py-2 bg-black text-white text-xs rounded">Sumbit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Cart;
