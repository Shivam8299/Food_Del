// import React from "react";
// import { assets } from "../assets/assets";
// import { NavLink } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div className="w-44 h-screen mt-[87px] ml-12 border-r">
//       <div className="py-7">
//         <NavLink
//           to="/add"
//           className={({ isActive }) =>
//             `w-44 p-1 flex gap-2 mb-4 border ${isActive ? "bg-red-100" : ""}`
//           }
//         >
//           <img className="h-5" src={assets.add_icon} alt="" />
//           <p className="text-sm text-black">Add Items</p>
//         </NavLink>

//         <NavLink
//           to="/list"
//           className={({ isActive }) =>
//             `w-44 p-1 flex gap-2 mb-4 border ${isActive ? "bg-red-100" : ""}`
//           }
//         >
//           <img className="h-5" src={assets.order_icon} alt="" />
//           <p className="text-sm text-black">List Item</p>
//         </NavLink>

//         <NavLink
//           to="/order"
//           className={({ isActive }) =>
//             `w-44 p-1 flex gap-2 mb-4 border ${isActive ? "bg-red-100" : ""}`
//           }
//         >
//           <img className="h-5" src={assets.order_icon} alt="" />
//           <p className="text-sm text-black">Orders</p>
//         </NavLink>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen mt-[87px] md:ml-12 border-r lg:w-44 md:w-36  sm:w-16">
      <div className="py-7">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `p-1 flex items-center gap-2 mb-4 border ${
              isActive ? "bg-red-100" : ""
            }`
          }
        >
          <img className="h-5 " src={assets.add_icon} alt="" />
          <p className="text-sm text-black hidden md:hidden lg:block">
            Add Items
          </p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `p-1 flex items-center gap-2 mb-4 border ${
              isActive ? "bg-red-100" : ""
            }`
          }
        >
          <img className="h-5" src={assets.order_icon} alt="" />
          <p className="text-sm text-black hidden md:hidden lg:block">
            List Item
          </p>
        </NavLink>

        <NavLink
          to="/order"
          className={({ isActive }) =>
            `p-1 flex items-center gap-2 mb-4 border ${
              isActive ? "bg-red-100" : ""
            }`
          }
        >
          <img className="h-5" src={assets.order_icon} alt="" />
          <p className="text-sm text-black hidden md:hidden lg:block">
            Orders
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
