import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("home");

  const menuItems = ["home", "menu", "mobile-app", "contact"];

  return (
    <div className="flex justify-between mb-8 mt-4 p-3 px-3">
      <img className="h-7" src={assets.logo} alt="Logo" />
      <ul className="flex justify-between items-center gap-10">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`text-sm font-semibold cursor-pointer capitalize ${
              activeMenu === item ? "text-red-500 border-b border-red-500 p-1" : "text-gray-600"
            }`}
            onClick={() => setActiveMenu(item)}
          >
            {item }
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center gap-6">
        <img className="h-5 mt-1" src={assets.search_icon} alt="Search" />
        <div>
          <img className="h-5 mt-1" src={assets.basket_icon} alt="Basket" />
          <div className="h-2 w-2 rounded-full bg-red-500 relative bottom-7 left-4"></div>
          <div></div>
        </div>
        <button className="px-5 py-[6px] border rounded-full">Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
