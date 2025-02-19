import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./Login";
import { StoreContext } from "../context/StoreContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { totalCartAmmount } = useContext(StoreContext);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.offsetTop;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;
      let duration = id === "menu" ? 500 : 2000;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      }

      requestAnimationFrame(animation);
    }

    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-50  py-4 flex justify-between items-center px-4 md:px-16 lg:px-32">
        {/* Logo (Left Side) */}
        <Link to="/">
          <img className="h-7" src={assets.logo} alt="Logo" />
        </Link>

        {/* Right Side (Cart, Search, Sign-in) - Hidden in Mobile */}
        <div className="hidden lg:flex items-center space-x-6">
          <img className="h-5 cursor-pointer" src={assets.search_icon} alt="Search" />
          <div className="relative">
            <Link to="/cart">
              <img className="h-5 cursor-pointer" src={assets.basket_icon} alt="Basket" />
            </Link>
            {totalCartAmmount() !== 0 && (
              <div className="h-2 w-2 rounded-full bg-red-500 absolute -top-1 -right-1"></div>
            )}
          </div>
          <button onClick={() => setShowLogin(true)}
            className="px-5 py-[6px] border rounded-full text-sm hover:bg-gray-100 transition">
            Sign in
          </button>
          {showLogin && <Login setShowLogin={setShowLogin} />}
        </div>

        {/* Mobile View: Cart & Search Icons next to Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <img className="h-5 cursor-pointer" src={assets.search_icon} alt="Search" />
          <div className="relative">
            <Link to="/cart">
              <img className="h-5 cursor-pointer" src={assets.basket_icon} alt="Basket" />
            </Link>
            {totalCartAmmount() !== 0 && (
              <div className="h-2 w-2 rounded-full bg-red-500 absolute -top-1 -right-1"></div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="text-3xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="cursor-pointer hover:border-b border-gray-600 hover:font-semibold">Home</Link>
          <a onClick={() => scrollToSection("menu")} className="cursor-pointer hover:border-b border-gray-600 hover:font-semibold">Menu</a>
          <a onClick={() => scrollToSection("mobile-app")} className="cursor-pointer hover:border-b border-gray-600 hover:font-semibold">Mobile App</a>
          <a onClick={() => scrollToSection("contact")} className="cursor-pointer hover:border-b border-gray-600 hover:font-semibold">Contact</a>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-white shadow-lg flex flex-col items-start space-y-6 py-10 px-6 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <button className="absolute top-5 right-6 text-3xl" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>

          <a onClick={() => scrollToSection("home")} className="cursor-pointer text-lg font-semibold">Home</a>
          <a onClick={() => scrollToSection("menu")} className="cursor-pointer text-lg font-semibold">Menu</a>
          <a onClick={() => scrollToSection("mobile-app")} className="cursor-pointer text-lg font-semibold">Mobile App</a>
          <a onClick={() => scrollToSection("contact")} className="cursor-pointer text-lg font-semibold">Contact</a>
        </div>
      </nav>

      {/* Offset to prevent content from hiding behind navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}

export default Navbar;

