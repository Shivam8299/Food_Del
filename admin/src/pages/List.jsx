import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function List({backendUrl}) {
  const [list, setList] = useState([]);


  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/food/list`);
      if (response.status === 200) {
        // console.log(response.data.data)
        setList(response.data.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  };

  const removeItem = async (itemId) => {
    try {
      const response = await axios.post(`${backendUrl}/api/food/remove`, {
        id: itemId,
      });
      await fetchList();

      if (response.status === 200) {
        toast.success("Product removed successfully!", {
                 position: "top-right",
                 autoClose: 2000,
               });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  
  // console.log(list.map(data => data._id))
  return (
    <div className="mt-16 md:mt-20 py-4 px-1 md:px-8">
      <h1 className=" text-lg text-center md:text-start md:text-xl lg:font-bold text-black font-semibold mb-4">
      Food Items
      </h1>
      <div className="flex justify-between px-2 md:px-6 py-4 mb-4 text-sm">
        <b className="text-gray-800">Image</b>
        <b className="text-gray-800">Name</b>
        <b className="text-gray-800">Category</b>
        <b className="text-gray-800">Price</b>
        <b className="text-gray-800">Action</b>
      </div>
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className="flex justify-between bg-gray-50 pr-4 md:pr-8 lg:pr-16 items-center py-2 px-1 md:px-4  shadow-sm border  mb-3 border-amber-500"
          >
            <img
              className=" h-12 w-12 md:h-14 md:w-14  rounded-xs"
              src={`${backendUrl}/images/${item.image}`}
              alt=""
            />
            <p className="text-sm text-gray-700 font-semibold">{item.name}</p>
            <p className="text-sm text-gray-700 font-semibold">
              {item.category}
            </p>
            <p className="text-sm text-gray-700 font-semibold">${item.price}</p>
            <p
              onClick={() => removeItem(item._id)}
              className="cursor-pointer hover:font-semibold hover:text-red-600"
            >
              x
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default List;
