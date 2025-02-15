import React from "react";
import { menu_list } from "../assets/frontend_assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="mt-8 w-full ">
      <div className="ml-1 sm:ml-2 md:ml-3">
      <h1 className="mb-6">Explore our menu</h1>
      <p className="max-w-[600px] text-xs text-black mb-10">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      </div>

      {/* Scrollable Container */}
      <div
        className="w-full overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-8 w-max ">
          {menu_list.map((item, index) => (
            <div
            onClick={() =>
              setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))
            }
              key={index}
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                className={
                  category === item.menu_name
                    ? "border-2 rounded-full p-[2px] border-red-400"
                    : ""
                }
                src={item.menu_image}
                alt=""
              />
              <p className="text-[#747474] mt-3 cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[1.5px] rounded-full mb-2 bg-zinc-300 mt-12"></div>
    </div>
  );
}

export default ExploreMenu;
