import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function AppDownload() {
  return (
    <div id='mobile-app' className="py-24 mb-10">
      <p className=" text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-10 leading-10 lg:leading-14 xl:leading-16" >For Better Experience Download <br />
      <span className="text-center ">Tomato App</span></p>
      <div className="flex justify-center gap-2 md:gap-3 lg:gap-4">
        <img className="h-14 hover:shadow-xl cursor-pointer"  src={assets.play_store} alt="" />
        <img  className="h-14 hover:shadow-xl cursor-pointer" src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
