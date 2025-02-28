import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

function Cart() {
  // console.log(itemCounts)
  const { cartItems, backendUrl, food_list, removeFromCart, totalCartAmmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  // console.log(cartItems);
  return (
    <div className=" mx-1 sm:mx-2 md:mx-16 lg:mx-28 mt-12 bg-[#FFFFFF]  ">
      <div className="grid grid-cols-6 items-center text-center gap-4 border-b pr-1  border-amber-400 pb-2">
        <p className="font-semibold text-xs md:text-md flex items-center justify-center">
          Item
        </p>
        <p className="font-semibold text-xs sm:text-sm  md:text-md flex items-center justify-center">
          Title
        </p>
        <p className="font-semibold text-xs sm:text-sm  md:text-md flex items-center justify-center">
          Price
        </p>
        <p className="font-semibold text-xs sm:text-sm  md:text-md flex items-center justify-center">
          Quantity
        </p>
        <p className="font-semibold text-xs sm:text-sm  md:text-md flex items-center justify-center">
          Total
        </p>
        <p className="font-semibold text-xs sm:text-sm  md:text-md flex items-center justify-center">
          Remove
        </p>
      </div>

      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div
              key={index}
              className="grid grid-cols-6 items-center border  text-center gap-4  border-amber-400 py-3 mt-4 mb-8"
            >
              {/* Image */}
              <div className="flex items-center justify-center">
                <img
                  className="h-9 ml-1 md:h-10"
                  src={backendUrl + "/images/" + item.image}
                  alt={item.name}
                />
              </div>

              {/* Name */}
              <p className="text-xs sm:text-sm  text-black flex items-center justify-center">
                {item.name}
              </p>

              {/* Price */}
              <p className="text-black text-xs sm:text-sm flex items-center justify-center">
                ${item.price}
              </p>

              {/* Quantity */}
              <p className="text-black text-xs sm:text-sm  flex items-center justify-center">
                {cartItems[item._id]}
              </p>

              {/* Total Price */}
              <p className="text-black flex items-center text-xs sm:text-sm justify-center">
                ${item.price * cartItems[item._id]}
              </p>

              {/* Remove Button */}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="cursor-pointer text-black rounded"
                >
                  <Trash2  className=" h-4 sm:h-5" />
                </button>
              </div>
            </div>
          );
        }
      })}

      <div className="mt-16 mb-8 flex flex-col  md:flex-row  justify-between">
        <div className="w-full md:w-72 lg:w-96 px-2">
          <p className=" p-1 font-bold text-xl  mb-6  text-center md:text-start">
            Cart Total
          </p>
          <div className="flex justify-between border-b-[1.5px] border-gray-300">
            <p className="text-sm md:text-base font-semibold p-[6px]">
              Sub-Total
            </p>
            <p className="text-sm mr-1 md:text-base font-semibold text-black">
              ${totalCartAmmount()}
            </p>
          </div>
          <div className=" flex justify-between border-b-[1.5px] border-gray-300 p-[6px]">
            <p className="text-sm md:text-base font-semibold ">
              Delivery Charges
            </p>
            <p className="text-sm  md:text-base font-semibold text-black ">
              $2
            </p>
          </div>
          <div className=" flex justify-between p-[6px]">
            <p className="p-1 mb-2 text-sm md:text-base font-semibold text-gray-800 ">
              Final Price
            </p>
            <p className="text-black text-base font-semibold">
              ${totalCartAmmount() + 2}{" "}
            </p>
          </div>
          <button
            onClick={() => navigate("/order")}
            className=" w-full lg:ml-6   md:w-64 lg:w-72 px-6 py-2 text-center rounded mt-10 bg-orange-600 hover:bg-orange-700 cursor-pointer text-white text-sm"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="mt-16">
          <p className="text-md text-center font-semibold text-gray-700 ">
            If you have a promo code, Enter it here
          </p>
          <form className="flex mt-8 ">
            <input
              className=" w-full md:w-44 lg:w-60 xl:w-72  px-4 text-sm outline-none rounded bg-gray-300"
              type="text"
              placeholder="promo code"
            />
            <button className=" w-48 md:w-36 px-8 py-2 bg-black text-white text-xs rounded">
              Sumbit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cart;
