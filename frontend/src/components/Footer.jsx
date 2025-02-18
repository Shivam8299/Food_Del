import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Footer() {
  return (
    <div id="contact" className="w-full bg-zinc-700 text-white px-4 md:px-16 py-12 ">
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:mx-20">
        {/* Logo & Description */}
        <div>
          <img className="mx-auto md:mx-0 w-28 md:w-32" src={assets.logo} alt="Logo" />
          <p className="mt-4 text-sm md:text-base font-light ">
          At Tomato, we bring delicious meals straight to your doorstep with speed and freshness. Whether you're craving classic comfort food, gourmet delights, or healthy options, we have a variety of choices to satisfy your taste buds. Enjoy hassle-free ordering, fast delivery, and top-notch service. Your favorite dishes are just a click away—because great food should always be convenient and enjoyable!
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 md:ml-8 lg:ml-12 xl:ml-16">
            <img className="w-8 h-8 cursor-pointer" src={assets.linkedin_icon} alt="LinkedIn" />
            <img className="w-8 h-8 cursor-pointer" src={assets.facebook_icon} alt="Facebook" />
            <img className="w-8 h-8 cursor-pointer" src={assets.twitter_icon} alt="Twitter" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h1 className="text-lg font-semibold">COMPANY</h1>
          <ul className="mt-4 space-y-2 text-sm font-light">
            <li className="cursor-pointer hover:text-gray-300 transition">Home</li>
            <li className="cursor-pointer hover:text-gray-300 transition">About Us</li>
            <li className="cursor-pointer hover:text-gray-300 transition">Delivery</li>
            <li className="cursor-pointer hover:text-gray-300 transition">Privacy & Policy</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h1 className="text-lg font-semibold">GET IN TOUCH</h1>
          <ul className="mt-4 space-y-2 text-sm font-light">
            <li className="cursor-pointer">+91 8665342226</li>
            <li className="cursor-pointer">shivam@navgurukul.org</li>
          </ul>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="h-[2px] w-full bg-zinc-500 my-6 "></div>

      {/* Copyright Text */}
      <div className="text-center text-sm font-light">
        <p>Copyright 2025 @ Tomato.com - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
