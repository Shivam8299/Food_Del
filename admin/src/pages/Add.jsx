import React, { useState } from 'react'
import { assets } from '../assets/assets'

function Add() {
    const [image, setImage] =useState("")
    const [data, setData] = useState({
        name:"",
        description:"",
        category:"Salad",
        price:""

    })
  return (
    <div className='mt-20'>
        <form className='py-6 ml-8'>
            <div className='mb-4'>
            <p className='text-sm mb-2'>Uplaod Image</p>
            <img className='h-12' src={assets.upload_area} alt="" />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div>
            <div className='mb-4'>
                <p className='text-sm mb-2' >Product Name</p>
                <input className='w-full md:w-80 rounded-xs text-sm outline-none p-1  border' type="text" name='name' placeholder='Product Name' />
            </div>
            <div className='mb-4'>
                <p className='text-sm mb-2'>Product Description</p>
                <textarea  className='w-full  md:w-80 rounded-xs text-sm outline-none p-1  border'  name='description' rows='6' placeholder='Write Description' id=""></textarea>
            </div>   
            <div className='flex gap-4 mb-4'>
                <div className=''>
                    <p className='text-sm mb-2'>product category</p>
                    <select className='border outline-none rounded-xs' name='category'>
                        <option value="salad">salad</option>
                        <option value="rolls">rolls</option>
                        <option value="Cake">cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value=""Deserts>Deserts</option>
                        
                    </select>
                </div>
                <div>
                    <p className='text-sm mb-2'>Product Price</p>
                    <input className='border outline-none rounded-xs w-24 px-1' type="Number" name='price' placeholder='$20' />
                </div>
             </div>     
             <button type='sumbit' className='px-8 py-1 bg-black text-white text-sm rounded-xs cursor-pointer'>Add</button>    
        </form>
    </div>
  )
}

export default Add