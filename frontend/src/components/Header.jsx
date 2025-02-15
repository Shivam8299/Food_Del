import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Header() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[450px] rounded-xl w-full"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="max-w-[600px] pt-40 pl-24 ">
        <h1 className="text-6xl font-semibold text-white mb-4 leading-16">Order your <br /> Favorite food here</h1>
        <p className="text-sm text-white leading-5 mb-4">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="px-8 py-3 bg-zinc-100 rounded-full text-xs">View Menu</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
