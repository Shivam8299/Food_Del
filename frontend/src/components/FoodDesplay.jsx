import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/frontend_assets/assets";

function FoodDisplay({ category }) {
  const [itemCounts, setItemCounts] = useState({});
  const { food_list } = useContext(StoreContext);

  // Function to handle incrementing item count
  const handleIncrement = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  // Function to handle decrementing item count
  const handleDecrement = (id) => {
    setItemCounts((prevCounts) => {
      const updatedCount = (prevCounts[id] || 0) - 1;
      if (updatedCount <= 0) {
        const { [id]: _, ...rest } = prevCounts; // Remove the item if count is 0
        return rest;
      }
      return { ...prevCounts, [id]: updatedCount };
    });
  };

  return (
    <div>
      <h1 className="text-xl ml-1 sm:ml-2 md:ml-3 lg:ml-4 font-semibold mb-4">
        Top Dishes Near You
      </h1>
      <div className="grid mx-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-4 mb-28">
        {food_list
          .filter((item) => category === "All" || item.category === category)
          .map((item) => {
            const count = itemCounts[item._id] || 0;
            return (
              <div className="shadow-lg flex flex-col mx-1 justify-center" key={item._id}>
                <img className="rounded-t-xl" src={item.image} alt={item.name} />
                <div>
                  {count === 0 ? (
                    <img
                      onClick={() => handleIncrement(item._id)}
                      className="cursor-pointer relative bottom-13 md:bottom-10 left-75 md:left-60 lg:left-45 w-10 h-10 md:w-8 md:h-8"
                      src={assets.add_icon_white}
                      alt="Add"
                    />
                  ) : (
                    <div className="flex gap-1 relative bottom-11 left-65 md:bottom-10 md:left-50 lg:left-35">
                      <img
                        className="w-7 h-7 cursor-pointer"
                        onClick={() => handleIncrement(item._id)}
                        src={assets.add_icon_green}
                        alt="Increase"
                      />
                      <p className="text-white">{count}</p>
                      <img
                        className="w-7 h-7 cursor-pointer"
                        onClick={() => handleDecrement(item._id)}
                        src={assets.remove_icon_red}
                        alt="Decrease"
                      />
                    </div>
                  )}
                </div>
                <div className="text-sm mx-2">
                  <div className="flex justify-between">
                    <p className="text-md font-semibold text-black mt-1">{item.name}</p>
                    <div className="mt-1">
                      <img className="w-18 mt-1" src={assets.rating_starts} alt="Rating" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">{item.description}</p>
                  <p className="text-md text-amber-700 font-semibold mt-2 mb-6">
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
