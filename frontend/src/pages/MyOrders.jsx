import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { assets } from "../assets/frontend_assets/assets";
import ShowTracker from "./ShowTracker";
import { useNavigate } from "react-router-dom";

function MyOrders() {
  const [tracker, setTracker] = useState(false);
  const [data, SetData] = useState([]);
  const { backendUrl, token } = useContext(StoreContext);
  const navigate = useNavigate();
  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );
      SetData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  //   const status = data.map(status =>status.status)
  console.log(data);

  return (
    <div className="mx-1 sm:mx-2 md:mx-16 lg:mx-32">
      <p className="text-xl md:text-2xl mb-6 font-bold text-center md:text-start lg:ml-2">
        My Orders
      </p>
      {data.length === 0 ? (
        <div className="w-full h-80 flex flex-col justify-center items-center md:h-56 border border-gray-200 shadow rounded-xs md:rounded-lg bg-gray-50">
          <p className="text-xl text-gray-700 font-semibold">No Orders found</p>
          <p className="text-base text-gray-700 mt-1 mb-5">Once you place an order, it will appear here.</p>
          <button
            className="bg-red-500 px-7 text-sm md:text-base py-3 text-[#FFFFFF] hover:bg-red-600 transition-all duration-200 font-semibold cursor-pointer rounded-sm"
            onClick={() => navigate("/")}
          >
            Back to Shopping
          </button>
        </div>
      ) : (
        data
          .filter((order) => order.status !== "Delivered") // Filtering orders
          .map((order, index) => (
            <div
              key={index}
              className="grid grid-cols-3 lg:grid-cols-6 items-center border mb-4 pb-4 py-4 px-2"
            >
              <img
                className="h-12 ml-2 md:ml-0 md:h-14"
                src={assets.parcel_icon}
                alt=""
              />
              <p className="text-sm w-28 md:w-36 lg:w-44 font-serif text-gray-700">
                {order.items.map((item, idx) =>
                  idx === order.items.length - 1
                    ? item.name + " x " + item.quantity
                    : item.name + " x " + item.quantity + ", "
                )}
              </p>
              <p className="text-sm ml-8 md:ml-16 lg:ml-6 text-gray-700">
                ${order.amount}.00
              </p>
              <p className="text-sm ml-2 md:ml-0 lg:ml-4 text-gray-700 font-serif">
                Items: {order.items.length}
              </p>
              <p className="text-xs sm:text-sm font-serif text-gray-800">
                <span>&#x25cf;</span> <b>{order.status}</b>
              </p>
              <button
                onClick={() => setTracker(tracker === index ? null : index)}
                className="mx-4 md:mx-6 font-serif py-[6px] bg-red-100 text-xs md:text-sm rounded-sm hover:bg-red-400 hover:text-white cursor-pointer transition-all duration-300"
              >
                Track Order
              </button>
              {tracker === index && (
                <ShowTracker setTracker={setTracker} status={order.status} />
              )}
            </div>
          ))
      )}
    </div>
  );
}

export default MyOrders;
