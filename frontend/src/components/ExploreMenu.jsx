import React, { useContext, useEffect, useState } from "react";
import { menu_list } from "../assets/frontend_assets/assets";
import "./autoPlay.css"
function ExploreMenu({ category, setCategory }) {
  let className = "automove"
  console.log(category)
  const [animation, setAnimation] = useState(true)
  animation?className = "automove":className="";

  useEffect(()=>{
    category !== "All" ? setAnimation(false):setAnimation(true)
  },[category])
  

  return (
    <div id='menu' className="pt-8 w-full">
      <div className="md:ml-3">
      <h1 className="mb-6 text-2xl lg:text-3xl text-center md:text-start font-semibold">Explore our menu</h1>
      <p className="max-w-[600px] text-[14px] leading-relaxed text-black px-2 md:px-0 mb-10">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      </div>

      {/* Scrollable Container */}
      <div
        className={className+"_movingMenu w-full overflow-x-auto "}
        style={{ scrollbarWidth: "none", whiteSpace:'nowrap' }}
      >
        <div className="flex gap-4 w-max ">
          {[...menu_list,  ...menu_list, ...menu_list].map((item, index) => (
            
            <div
            onClick={() =>
              setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))
            }
            
              key={index}
              className={`flex flex-col items-center  cursor-pointer`}
            >
              <img
                className={`${category === item.menu_name ? "border-2 rounded-full  p-[2px] border-amber-600" : ""} h-[91px] md:h-[114px] lg:h-[122.2px] xl:h-[139px]`}
                src={item.menu_image}
                alt=""
              />
              <p className="text-gray-700 mt-3 cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[1.5px] rounded-full mb-2 bg-zinc-300 mt-8"></div>
    </div>
  );
}

export default ExploreMenu;
