import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Check, X, Utensils, Pizza} from "lucide-react";

function ShowTracker({ setTracker, status }) {
  console.log("this is status", status)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-100 backdrop-blur-[1px]">
      <div className="w-72 relative bg-[#747474] shadow-xl rounded-sm p-4 h-80 md:w-80">
        <X
          size={26}
          onClick={() => setTracker(null)}
          src={assets.cross_icon}
          className="text-white absolute right-2 top-2 cursor-pointer"
        />
          <div>
            {/* <img className="h-20 w-24 " src="https://meetanshi.com/media/catalog/product/cache/462685a296595c72e220ca4ed4abc3df/a/r/artboard_2_19.png" alt="Food Delivery" /> */}
            <img className="w-60 m-auto" src="https://cdn.shopifycdn.net/s/files/1/0644/2749/1571/files/QQ_20220728155931.png?v=1658995214" alt="" />
          </div>
        
        <p className="text-white font-serif mt-4 text-center">
          Tracking No: <span className="font-normal">18000-1800-999</span>
        </p>
        
         <div className="flex gap-2 mt-3 ml-[70px]">
         <Check
            size={28}
            className="text-green-500 bg-gray-500 border-zinc-600   border-2 p-1 rounded-full"
          />
         <p className="text-white font-serif">Order Placed</p>
         </div>
         <div className="flex gap-2 mt-3 ml-[70px]">
         <Check
            size={28}
            className={`${status === "dispatched" ? "text-green-500" :"text-white"} bg-gray-500 border-zinc-600   border-2 p-1 rounded-full`}
          />
          {/* dispatched */}
         <p className="text-white font-serif">Dispatch</p>
         </div>
         <div className="flex gap-2 mt-3 ml-1 justify-center">
         <Check
            size={28}
            className={`${status === "out for delivery"?"text-green-500":"text-white"} bg-gray-500 border-zinc-600   border-2 p-1 rounded-full`}
          />
         <p className="text-white font-serif"> Out for Delivery</p>
         </div>
      </div>
    </div>
  );
}

export default ShowTracker;
