import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../assets/frontend_assets/assets";

function FoodDesplay() {
  const [itemCount, setItemCount] = useState(0);
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Top Dishes Near to you </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {food_list.map((item) => {
          return (
            <div className="shadow-lg  " key={item._id}>
              <img className=" rounded-t-xl" src={item.image} alt="" />
              <div className="relative bottom-10 left-48">
                {!itemCount ? (
                  <img onChangeCapture={setItemCount(1)} className="cursor-pointer  w-8 h-8" src={assets.add_icon_white} alt="" />
                ) : (
                  <div className="flex gap-1">
                    <img
                      className="w-7 h-7 cursor-pointer"
                      src={assets.add_icon_green}
                      alt=""
                    />
                    <p className="text-white ">{itemCount}</p>
                    <img
                      className="w-7 h-7 cursor-pointer"
                      src={assets.remove_icon_red}
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="text-sm m-2">
                <div className="flex justify-between">
                  <p className="text-md font-semibold text-black mt-1 ">
                    {item.name}
                  </p>
                  <div className="mt-1">
                    <img src={assets.rating_starts} alt="" />
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">{item.description}</p>
                <p className="text-md text-amber-700 font-semibold mt-2 mb-6">
                  {" "}
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

export default FoodDesplay;
