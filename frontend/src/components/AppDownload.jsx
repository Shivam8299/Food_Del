import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function AppDownload() {
  return (
    <div className=" mb-20">
      <h1 className=" ml-6 sm:ml-24 md:ml-44 lg:ml-64 xl:ml-96 text-2xl sm:text-3xl md:4xl font-semibold  mb-8" >For Better Experience Download <br />
      <span className="ml-28 md:ml-36">Tomato App</span></h1>
      <div className="flex justify-center gap-4">
        <img className="h-14 hover:shadow-xl cursor-pointer  "  src={assets.play_store} alt="" />
        <img  className="h-14 hover:shadow-xl cursor-pointer" src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
