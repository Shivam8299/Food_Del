import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/frontend_assets/assets";

function FoodDisplay({ category }) {
  const { cartItems, setCartItems, addToCart, removeFromCArt } =
    useContext(StoreContext);

  const { food_list } = useContext(StoreContext);

  // Function to handle incrementing item count
  const handleIncrement = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl mb-6 ml-2  font-semibold ">
        Top Dishes Near You
      </h1>
      <div className="grid mx-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-4 mb-10">
        {food_list
          .filter((item) => category === "All" || item.category === category)
          .map((item) => {
            return (
              <div
                className="shadow-lg flex flex-col mx-1 justify-center"
                key={item._id}
              >
                <img
                  className="rounded-t-lg mb-6"
                  src={item.image}
                  alt={item.name}
                />
                <div className="relative">
                  {!cartItems[item._id] ? (
                    <img
                      onClick={() => addToCart(item._id)}
                      className="cursor-pointer absolute bottom-9 left-[320px]  md:left-58 xl:left-48 w-10 h-10 md:w-8 md:h-8"
                      src={assets.add_icon_white}
                      alt="Add"
                    />
                  ) : (
                    <div className="flex gap-1 absolute bottom-9  left-[280px] sm:left-52 xl:left-38 bg-white py-1 px-2 rounded-full">
                      <img
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => addToCart(item._id)}
                        src={assets.add_icon_green}
                        alt="Increase"
                      />
                      <p className="text-gray-800 ">{cartItems[item._id]}</p>
                      <img
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => removeFromCArt(item._id)}
                        src={assets.remove_icon_red}
                        alt="Decrease"
                      />
                    </div>
                  )}
                </div>
                <div className="text-sm mx-2">
                  <div className="flex justify-between">
                    <p className="text-md font-semibold text-black mt-1">
                      {item.name}
                    </p>
                    <div className="mt-1">
                      <img
                        className="w-18 mt-1"
                        src={assets.rating_starts}
                        alt="Rating"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    {item.description}
                  </p>
                  <p className="text-md text-amber-700 font-semibold mt-2 mb-8">
                    ${item.price}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FoodDisplay;
