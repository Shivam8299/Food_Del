import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Header() {
  return (
      <div
        className="bg-cover bg-center h-[450px]  md:rounded-lg lg:rounded-xl w-full flex items-center"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="max-w-[600px] px-4 md:px-10 lg:px-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            Order your <br /> Favorite food here
          </h1>
          <p className="text-[18px] sm:text-base leading-6 md:leading-relaxed text-[#FFFFFF] mb-4">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-black rounded-full text-xs sm:text-sm hover:bg-gray-200 transition">
            View Menu
          </button>
        </div>
      </div>
  
  );
}

export default Header;
