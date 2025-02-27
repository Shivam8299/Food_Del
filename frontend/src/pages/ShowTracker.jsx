import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Check, X} from "lucide-react";

function ShowTracker({ setTracker, status }) {
  console.log("this is status", status)
  return (
    <div className="fixed inset-0 z-50 flex mt-36 md:mt-40 lg:mt-0 lg:items-center justify-center bg-opacity-100 backdrop-blur-[1px]">
      <div className="w-72 relative bg-[#FFFAFA] shadow-xl rounded-sm p-4 h-80 md:w-80">
        <X
          size={26}
          onClick={() => setTracker(null)}
          src={assets.cross_icon}
          className="text-black absolute right-2 top-2 cursor-pointer"
        />
          <div>
            <img className=" w-52 md:w-56 m-auto" src="https://www.ourshopee.com/images/delivery-track.gif" alt="" />
          </div>
        
        <p className="text-black font-serif mt-6 text-center">
          Tracking No: <span className="font-normal">18000-1800-999</span>
        </p>
         <div className="flex gap-2 mt-3 ml-[60px]">
         <Check
            size={28}
            className={`${status === "dispatched" || status === "Out for Delivery" || status === "Delivered" ? " border-green-600  text-green-500 " :"text-white border-black "} bg-gray-500   border-2 p-1 rounded-full`}
          />
          {/* dispatched */}
         <p className="text-black font-serif">Dispatch</p>
         </div>
         <div className="flex gap-2 mt-3 ml-[60px]">
         <Check
            size={28}
            className={ `bg-gray-500 border-2 p-1 rounded-full ${status === "Out for Delivery" || status === "Delivered"  ? " border-green-600  text-green-500 " :"text-white border-black"}`}
          />
         <p className="text-black font-serif"> Out for Delivery</p>
         </div>
         <div className="flex gap-2 mt-3 ml-[60px]">
         <Check
            size={28}
            className={ `bg-gray-500 border-2 p-1 rounded-full ${status === "Delivered" ? " border-green-600  text-green-500 " :"text-white border-black "}`}
          />
         <p className="text-black font-serif">Delivered</p>
         </div>
         <p className="text-white text-sm mt-3 text-center">{status === "Food Processing" ? "Order will be delivered within 45 minutes": status === "dispatched" ? "Order will be delivered within 30 minutes":status === "Out for Delivery" ? "Order will be delivered within few mitutes":''}</p>
      </div>
    </div>
  );
}

export default ShowTracker;
