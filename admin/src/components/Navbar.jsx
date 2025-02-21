import React from 'react';
import { assets } from '../assets/assets';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-50 py-4 flex justify-between items-center px-4 md:px-10 lg:px-16 border-b">
      {/* Logo */}
      <img className="h-12 md:h-14" src={assets.logo} alt="Logo" />

      {/* Profile Image */}
      <img className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover" src={assets.profile_image} alt="Profile" />
    </div>
  );
}

export default Navbar;
