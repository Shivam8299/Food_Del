import React, { useState } from "react";
import { assets } from "../assets/assets"; 
import axios from "axios";
import { toast } from "react-toastify";
function Add() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "salad",
    price: "",
  });

  const backendUrl = "http://localhost:3000";

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category); 
    formData.append("image", image);

    try {
      const response = await axios.post(`${backendUrl}/api/food/add`, formData);

      if (response.status === 200) {
        toast.success("Product added successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
        setData({
          name: "",
          description: "",
          category: "salad",
          price: "",
        });
        setImage(null);
      }
    } catch (error) {
      toast.error("Error submitting form. Try again!", { position: "top-right" });
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-20">
      <form onSubmit={submitHandler} className="py-6 ml-8">
        <div className="mb-4">
          <p className="text-sm mb-2">Upload Image</p>
          <label htmlFor="image">
            <img
              className="h-20 w-32 rounded-xs cursor-pointer"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Preview"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="mb-4">
          <p className="text-sm mb-2">Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className="w-full md:w-96 rounded-xs text-sm outline-none p-2 border"
            type="text"
            name="name"
            placeholder="Product Name"
            required
          />
        </div>

        <div className="mb-4">
          <p className="text-sm mb-2">Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className="w-full md:w-96 rounded-xs text-sm outline-none p-1 border"
            name="description"
            rows="6"
            placeholder="Write Description"
            required
          ></textarea>
        </div>

        <div className="flex gap-4 mb-6">
          <div>
            <p className="text-sm mb-2">Product Category</p>
            <select
              className="border text-sm w-36 outline-none rounded-xs p-2"
              onChange={onChangeHandler}
              name="category"
              value={data.category}
              required
            >
              <option value="salad">Salad</option>
              <option value="rolls">Rolls</option>
              <option value="cake">Cake</option>
              <option value="pure veg">Pure Veg</option>
              <option value="pasta">Pasta</option>
              <option value="noodles">Noodles</option>
              <option value="sandwich">Sandwich</option>
              <option value="desserts">Desserts</option>
            </select>
          </div>

          <div>
            <p className="text-sm mb-2">Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className="border text-sm p-2 outline-none rounded-xs w-36 px-2"
              type="number"
              name="price"
              placeholder="$20"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-10 py-[6px] font-semibold bg-black text-white text-sm rounded-xs cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;
