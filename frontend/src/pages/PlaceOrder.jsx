import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function PlaceOrder() {
  const { totalCartAmmount } = useContext(StoreContext);
  return (
    <div className="md:flex justify-between mt-6  mx-1 sm:mx-2 md:mx-16 lg:mx-24 xl:mx-28">
      <form className="">
        <p className="text-xl sm:2xl md:text-3xl text-center md:text-start ml-1 font-bold mb-10 text-black">
          Add Delivery Address
        </p>
        <div className=" flex gap-2 mb-4">
          <input
            className="outline-none border rounded-xs px-2 text-sm py-1"
            type="text"
            placeholder="first name"
          />
          <input
            className="outline-none border rounded-xs px-2 text-sm py-1"
            type="text"
            placeholder="last name"
          />
        </div>
        <input
          className="outline-none border rounded-xs px-2 text-sm py-1 w-full mb-4"
          type="text"
          placeholder="Email address"
        />
        <input
          className="outline-none border rounded-xs px-2 text-sm py-1 w-full mb-4"
          type="text"
          placeholder="street"
        />
        <div className=" flex gap-2 mb-4">
          <input
            className="outline-none border rounded-xs px-2 text-sm py-1"
            type="text"
            placeholder="City"
          />
          <input
            className="outline-none border rounded-xs px-2 text-sm py-1"
            type="text"
            placeholder="state"
          />
        </div>
        <div className=" flex gap-2 mb-4">
          <input
            className="outline-none border rounded-xs px-2 text-sm py-1"
            type="text"
            placeholder="Zip Code "
          />
          <input
            className="outline-none border rounded-xs px-2 text-sm py-1"
            type="text"
          />
        </div>
        <input
          className="outline-none border rounded-xs px-2 text-sm py-1 w-full"
          type="text"
          placeholder="phase"
        />
      </form>
      <div className="w-full md:w-72 lg:w-96 mt-8 md:mt-0 px-2">
        <p className=" p-1 font-bold text-xl md:text-2xl  mb-6  text-center md:text-start">Cart Total</p>
        <div className="flex justify-between border-b-[1.5px] border-gray-300">
          <p className="text-sm p-[6px]">Subtotal</p>
          <p className="text-sm mr-1 text-gray-800">{totalCartAmmount()}</p>
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
          onClick={() => navigate("/order")}
          className="px-6 py-2 rounded-xs mt-6 ml-20 sm:ml-24 md:ml-4 bg-orange-600 hover:bg-orange-700 cursor-pointer text-xs text-white"
        >
          PROCEED TO PAYMENT
        </button>
      </div>
    </div>
  );
}

export default PlaceOrder;
