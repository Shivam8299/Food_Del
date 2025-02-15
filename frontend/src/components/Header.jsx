// import React from "react";
// import { assets } from "../assets/frontend_assets/assets";

// function Header() {
//   return (
//     <div>
//       <div
//         className="bg-cover bg-center h-[450px] rounded-xl w-full"
//         style={{ backgroundImage: `url(${assets.header_img})` }}
//       >
//         <div className="max-w-[600px] pt-40 pl-2 md:pl-24 ">
//         <h1 className=" text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-4  sm:leading-8 md:leading-12 lg:leading-16">Order your <br /> Favorite food here</h1>
//         <p className="text-sm text-white leading-5 mb-4">
//           Choose from a diverse menu featuring a delectable array of dishes
//           crafted with the finest ingredients and culinary expertise. Our
//           mission is to satisfy your cravings and elevate your dining
//           experience, one delicious meal at a time.
//         </p>
//         <button className="px-8 py-3 bg-zinc-100 rounded-full text-xs">View Menu</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;


import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Header() {
  return (
    <div className="px-4">
      <div
        className="bg-cover bg-center h-[450px] rounded-xl w-full flex items-center"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="max-w-[600px] px-4 md:px-10 lg:px-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            Order your <br /> Favorite food here
          </h1>
          <p className="text-sm sm:text-base text-white leading-6 mb-4">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-black rounded-full text-xs sm:text-sm hover:bg-gray-200 transition">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
