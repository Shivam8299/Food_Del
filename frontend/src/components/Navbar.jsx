import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Search, ShoppingCart } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { totalCartAmmount, token, setToken } = useContext(StoreContext);
  const [showOrder, setShowOrder] = useState(false)
  const navigate = useNavigate()

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

  const logout = ()=>{
      localStorage.removeItem("token")
      toast.success("Logged out successfully! See you soon. 👋", {
              position: "top-right", 
              icon: <AiOutlineCheckCircle size={24} className="text-green-600" />, 
      });
      setToken("")
      navigate('/')


  }

  return (
    <>
      {/* Fixed Navbar */}
      <nav id="home" className="fixed z-50 top-0 left-0 w-full bg-[#FFFFFF]   py-4 flex justify-between items-center px-4 md:px-16 lg:px-32">
        <Link 
        to="/" 
        onClick={()=>scrollTo({ top: 0, behavior: "smooth" })} 
        >
        
          <img className=" h-5 md:h-6 lg:h-7" src={assets.logo} alt="Logo" />
        </Link>

        {/* Right Side (Cart, Search, Sign-in) - Hidden in Mobile */}
       
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl-space-x-7">
          <Search className="text-gray-600 cursor-pointer" size={23} />
          <div className="relative">
            <Link to="/cart" onClick={()=>scrollTo({ top: 0, behavior: "smooth" })} >
              {/* <img
                className="h-5 cursor-pointer"
                src={assets.basket_icon}
                alt="Basket"
              /> */}
               <ShoppingCart className="text-gray-700 cursor-pointer" size={24} />
            </Link>
            {totalCartAmmount() !== 0 && (
              <div className="h-2 w-2 rounded-full bg-red-500 absolute -top-1 -right-1"></div>
            )}
          </div>
          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className="px-5 py-[6px] border border-amber-500 rounded-full text-sm hover:bg-gray-100 transition"
            >
              Sign in
            </button>
          ) : (
              <img
                onClick={()=>setShowOrder(!showOrder)}
                className={`h-6 w-6 p-1 cursor-pointer border rounded-full  `}
                src={assets.profile_icon}
                alt=""
              />             
          )}
          {showOrder && 
          <div className=" w-32 h-[90px] shadow-md  border-gray-400 p-2 absolute top-11 right-9 bg-white">
                <div className="flex gap-1 border-b border-amber-400 pb-2 mb-1 ">
                  <img
                    onClick={()=>{setShowOrder(false),navigate('/myorders')}}
                    className="h-5  cursor-pointer hover:text-orange-600"
                    src={assets.bag_icon}
                    alt=""
                  />
                  <p  
                  className="text-black text-base hover:text-orange-600 cursor-pointer"
                  onClick={()=>{setShowOrder(false),navigate('/myorders'),scrollTo({ top: 0, behavior: "smooth" })}}
                  >
                    My Orders
                  </p>
                </div>
                <div className="flex gap-1 mt-1 ">
                  <img
                    onClick={() => {
                      setShowOrder(false);
                      logout();
                    }}
                    className="h-6 w-6 cursor-pointer hover:text-orange-600"
                    src={assets.logout_icon}
                    alt=""
                  />
                  <p  
                  onClick={() => {
                    setShowOrder(false);
                    logout();
                  }}
                  
                  className="text-black text-base  hover:text-orange-600  cursor-pointer">
                    Log Out
                  </p>
                </div>
              </div>
}
          {showLogin && <Login setShowLogin={setShowLogin} />}
        </div>

        {/* Mobile View: Cart & Search Icons next to Menu Button */}
        <div className="md:hidden flex items-center space-x-4 lg:space-x-6">
        <Search className="text-gray-600 cursor-pointer" size={23} />
          <div className="relative">
            <Link to="/cart">
              {/* <img
                className="h-5 cursor-pointer"
                src={assets.basket_icon}
                alt="Basket"
              /> */}
               <ShoppingCart className="text-gray-700 cursor-pointer" size={24} />
            </Link>
            {totalCartAmmount() !== 0 && (
              <div className="h-2 w-2 rounded-full bg-red-500 absolute -top-1 -right-1"></div>
            )}
          </div>
          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className="px-3 md:px-6 py-1 md:py-[6px] border border-amber-500 rounded-full text-xs sm:text-sm hover:bg-gray-100 transition"
            >
              Sign in
            </button>
          ) : (
              <img
                onClick={()=>setShowOrder(!showOrder)}
                className={`h-6 w-6 p-1 cursor-pointer border rounded-full  `}
                src={assets.profile_icon}
                alt=""
              />             
          )}
          {showOrder && 
            <div className=" w-[105px] h-[85px] shadow-lg rounded-xs p-1 absolute top-[46px] pt-3 right-[-16px] bg-white">
                <div className="flex gap-1 border-b border-amber-400 pb-2 mb-1 mt-1">
                  <img
                    onClick={()=>{setShowOrder(false),navigate('/myorders')}}
                    className="h-[18px] p cusor-pointer hover:text-orange-600"
                    src={assets.bag_icon}
                    alt=""
                  />
                  <p  
                  className="text-black  hover:text-orange-600 text-sm  cursor-pointer"
                  onClick={()=>{setShowOrder(false),navigate('/myorders'),scrollTo({ top: 0, behavior: "smooth" })}}
                  >
                    My Orders
                  </p>
                </div>
                <div className="flex gap-1 mb-2">
                  <img
                    onClick={()=>{setShowOrder(false),logout()}}
                    className="h-5 w-6  cursor-pointer hover:text-orange-600"
                    src={assets.logout_icon}
                    alt=""
                  />
                  <p  
                  onClick={() => {
                    logout();
                    setShowOrder(false);
                  }}
                  
                  className="text-black text-sm hover:text-orange-600 cursor-pointer">
                    Log Out
                  </p>
                </div>
              </div>
}
          {showLogin && <Login setShowLogin={setShowLogin} />}

          {/* Mobile Menu Button */}
          <button className="text-3xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars size={23}/>}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center md:space-x-5 lg:space-x-7 xl:space-x-8 absolute left-[47%] lg:left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            onClick={()=>scrollTo({ top: 0, behavior: "smooth" })} 
            className="cursor-pointer hover:border-b border-gray-600 hover:font-semibold"
          >
            Home
          </Link>
          <a
            onClick={() => scrollToSection("menu")}
            className="cursor-pointer hover:border-b border-gray-600 hover:font-semibold"
          >
            Menu
          </a>
          <a
            onClick={() => scrollToSection("mobile-app")}
            className="cursor-pointer hover:border-b border-gray-600 hover:font-semibold"
          >
            Mobile App
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:border-b border-gray-600 hover:font-semibold"
          >
            Contact
          </a>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-white shadow-lg flex flex-col items-start space-y-6 py-10 px-6 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <button
            className="absolute top-5 right-6 text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes/>
          </button>

          <a
            onClick={() => scrollToSection("home")} 
            className="cursor-pointer text-lg font-semibold"
          >
            Home
          </a>
          <a
            onClick={() => scrollToSection("menu")}
            className="cursor-pointer text-lg font-semibold"
          >
            Menu
          </a>
          <a
            onClick={() => scrollToSection("mobile-app")}
            className="cursor-pointer text-lg font-semibold"
          >
            Mobile App
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer text-lg font-semibold"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Offset to prevent content from hiding behind navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}

export default Navbar;
