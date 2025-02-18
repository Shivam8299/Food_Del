import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./Login";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile menu
  const [showLogin, setShowLogin] = useState(false);

  // // Function to handle scrolling
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth"});
  //   }
  //   setIsOpen(false); // Close mobile menu after clicking
  // };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
       // Get target position
      const targetPosition = element.offsetTop;
      // Current scroll position
      const startPosition = window.scrollY; 
      const distance = targetPosition - startPosition;
      let startTime = null;
      //time Duration
      const duration = 1500; 
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensures it stops at target
  
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
    <nav className="flex justify-between items-center mt-4 lg:px-6 py-4 mb-6 bg-white md:mx-24 mx-1">
      {/* Logo */}
      <Link to="/"><img className="h-7 ml-4 sm:ml-0" src={assets.logo} alt="Logo" /></Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex justify-between items-center md:gap-6 lg:gap-10">
        <Link to="/" className="cursor-pointer hover:border-b  border-gray-600 hover:font-semibold">Home</Link>
        <a href="#menu" onClick={() => scrollToSection("menu")} className="cursor-pointer hover:border-b border-gray-600 hover:font-semibold">Menu</a>
        <a href="#mobile-app" onClick={() => scrollToSection("mobile-app")} className="cursor-pointer hover:border-b border-gray-600 hover:font-semibold">Mobile App</a>
        <a href="#contact" onClick={() => scrollToSection("contact")} className="cursor-pointer hover:border-b border-gray-600 hover:font-semibold">Contact</a>
      </ul>

      {/* Right Section (Cart, Search, Sign-up) */}
      <div className="hidden lg:flex justify-between items-center gap-6">
        <img className="h-5 mt-1 cursor-pointer" src={assets.search_icon} alt="Search" />
        <div className="relative">
          <Link to="/cart" ><img className="h-5 mt-1 cursor-pointer" src={assets.basket_icon} alt="Basket" /></Link>
          <div className="h-2 w-2 rounded-full bg-red-500 absolute -top-1 -right-1"></div>
        </div>
        <button onClick={() => setShowLogin(true)}
          className="px-5 py-[6px] border rounded-full text-sm hover:bg-gray-100 transition cursor-pointer">
          Sign in
        </button>
        {showLogin && <Login setShowLogin={setShowLogin} />}
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-3xl pr-5" onClick={() => setIsOpen(!isOpen)}>
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

        <a onClick={() => scrollToSection("home")} className="cursor-pointer text-lg font-semibold">Home</a>
        <a onClick={() => scrollToSection("menu")} className="cursor-pointer text-lg font-semibold">Menu</a>
        <a onClick={() => scrollToSection("mobile-app")} className="cursor-pointer text-lg font-semibold">Mobile App</a>
        <a onClick={() => scrollToSection("contact")} className="cursor-pointer text-lg font-semibold">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
