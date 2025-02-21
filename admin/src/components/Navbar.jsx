import React from 'react'
import {assets} from '../assets/assets'

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-50  py-4 flex justify-between items-center px-4 md:px-16  border-b ">
         <img className='h-14' src={assets.logo} alt="" />
         <img src={assets.profile_image} alt="" />
    </div>

  )
}

export default Navbar