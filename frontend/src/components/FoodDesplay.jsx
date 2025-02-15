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
      <h1 className="text-xl ml-1 sm:ml-2 md:ml-3 lg:ml-4 font-semibold mb-4">Top Dishes Near to you </h1>
      <div className="grid mx-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-4 mb-44 ">
        {food_list.map((item) => {
          return (
            <div className=" shadow-lg flex flex-col mx-1 justify-center" key={item._id}>
              <img className="rounded-t-xl" src={item.image} alt="" />
              <div className="">
                {!itemCount ? (
                  <img onClick={()=>setItemCount(1)}  className="cursor-pointer relative bottom-13 md:bottom-10 left-75 md:left-45 w-10 h-10  md:w-8 md:h-8" src={assets.add_icon_white} alt="" />
                ) : (
                  <div className="flex gap-1 relative bottom-11 left-65 md:bottom-10 md:left-35">
                    <img
                      className="w-7 h-7 cursor-pointer"
                      onClick={()=>setItemCount(itemCount+1)}
                      src={assets.add_icon_green}
                      alt=""
                    />
                    <p className="text-white ">{itemCount}</p>
                    <img
                      className="w-7 h-7 cursor-pointer"
                      onClick={()=>setItemCount(itemCount-1)}
                      src={assets.remove_icon_red}
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="text-sm m-2 ">
                <div className="flex justify-between ">
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
