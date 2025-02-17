import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./Login";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile menu
  // const [login, setlogin] = useState('sign in')
  const [showLogin, setShowLogin] = useState(false)

  const menuItems = ["home", "menu", "mobile-app", "contact"];

  return (
    <nav className="flex justify-between items-center mt-4 lg:px-6 py-4 mb-6 bg-white md:mx-32 mx-1">
      {/* Logo */}
      <img className="h-7 ml-4 sm:ml-0" src={assets.logo} alt="Logo" />

      {/* Desktop Menu */}
      <ul className="hidden lg:flex justify-between items-center md:gap-6 lg:gap-10">
        {menuItems.map((item) => (
          <Link
            key={item}
            className={`text-sm font-semibold cursor-pointer capitalize ${
              activeMenu === item ? "text-red-500 border-b-2 border-red-500 pb-1" : "text-gray-600"
            } transition-all`}
            onClick={() => setActiveMenu(item)}
          >
            {item}
          </Link>
        ))}
      </ul>

      {/* Right Section (Cart, Search, Sign-up) */}
      <div className="hidden lg:flex justify-between items-center gap-6">
        <img className="h-5 mt-1 cursor-pointer" src={assets.search_icon} alt="Search" />
        <div className="relative">
          <img className="h-5 mt-1 cursor-pointer" src={assets.basket_icon} alt="Basket" />
          <div className="h-2 w-2 rounded-full bg-red-500 absolute -top-1 -right-1"></div>
        </div>
        <button 
          onClick={()=>setShowLogin(true)}
        className="px-5 py-[6px] border rounded-full text-sm hover:bg-gray-100 transition cursor-pointer">
          sign in
        </button>
        {showLogin && <Login setShowLogin={setShowLogin}/>}
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-3xl pr-5 " onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 shadow-lg bg-white flex flex-col gap-6 py-10 px-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <button className="absolute top-5 right-6 text-3xl font-thin" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </button>

        {menuItems.map((item) => (
          <li
            key={item}
            className={`text-lg font-semibold cursor-pointer capitalize ${
              activeMenu === item ? "text-red-500 border-b-2 border-red-500 pb-1" : "text-gray-600"
            }`}
            onClick={() => {
              setActiveMenu(item);
              setIsOpen(false);
            }}
          >
            {item}
          </li>
        ))}

        <div className="flex gap-4 mt-6">
          <img className="h-5 cursor-pointer" src={assets.search_icon} alt="Search" />
          <div className="relative">
            <img className="h-5 cursor-pointer" src={assets.basket_icon} alt="Basket" />
            <div className="h-2 w-2 rounded-full bg-red-500 absolute -top-1 -right-1"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
