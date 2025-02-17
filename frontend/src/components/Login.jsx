import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Login({ setShowLogin }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-10 backdrop-blur-[1px]">
      <div className="w-64 sm:w-72 h-80 bg-white shadow-xl rounded-sm p-4 ">
        <div className="flex justify-between mx-2">
          <p className="font-bold text-lg">Login</p>
          <img
            className="h-4 mt-1 cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="mx-2 mt-4">
            <input type="text" placeholder="Your Name"  required className="outline-none border h-8 rounded-sm  w-full px-2  mb-3 text-sm" />
          <input type="text" placeholder="Your Email" required className="outline-none border h-8  rounded-sm  w-full px-2  mb-3 text-sm" />
          <input type="password" placeholder="Password" required className="outline-none border h-8 rounded-sm  px-2 mb-3 w-full text-sm" />
          <button className="w-full bg-orange-500 py-[6px] text-sm  rounded-sm text-white hover:cursor-pointer mb-4 ">Create Account</button>
        </div>
        <div className="flex gap-1 mx-2">
           <input className="h-6" type="checkbox" required />
           <p className="text-gray-700 text-xs mb-1">Before continuing, I am agree to the terms & conditions</p>
        </div>
        <p className="text-xs text-gray-700 mt-2 mx-2">Already have an account? <span className=" font-semibold text-orange-400 hover:text-orange-500 hover:cursor-pointer">Login here</span></p>
      </div>
    </div>
  );
}

export default Login;
