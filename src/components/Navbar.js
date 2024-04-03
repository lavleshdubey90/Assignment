import React from 'react'
import { useState } from 'react';
import logo from "../assests/logo.jpg"

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className='p-6 flex justify-between items-center'>
      <div className="right flex items-center gap-10 lg:gap-20 w-1/2">
        <img src={logo} alt="" className='w-10' />
        <div className='hidden md:block text-blue-900 text-sm lg:text-base space-x-10'>
          <a href="#">Personal</a>
          <a href="#">Business</a>
          <a href="#">Developer</a>
          <a href="#">Help</a>
        </div>
      </div>

      {/* Hamburger menu */}
      <div className='block md:hidden space-y-1 p-2 cursor-pointer' onClick={() => setShowDropdown(!showDropdown)}>
        <div className='w-7 rounded-full h-1 bg-gray-600'></div>
        <div className='w-7 rounded-full h-1 bg-gray-600'></div>
        <div className='w-7 rounded-full h-1 bg-gray-600'></div>
      </div>

      {/* Dropdown menu */}
      {showDropdown && (
        <div className="md:hidden absolute z-10 top-16 right-10 bg-white w-fit p-5 border border-gray-300 rounded-lg">
          <a href="#" className="block py-2 text-blue-900 w-full">Personal</a>
          <a href="#" className="block py-2 text-blue-900 w-full">Business</a>
          <a href="#" className="block py-2 text-blue-900 w-full">Developer</a>
          <a href="#" className="block py-2 text-blue-900 w-full">Help</a>
          <button className='px-8 w-full py-2 rounded-full block my-2 border-2 border-blue-900 text-blue-900'>Log In</button>
          <button className='px-8 w-full py-2 rounded-full block border-2 bg-blue-900 text-white'>Sign Up</button>
        </div>
      )}

      <div className="left w-1/2 hidden md:flex gap-5 justify-end">
        <button className='px-8 py-2 rounded-full border-2 border-blue-900 text-blue-900'>Log In</button>
        <button className='px-8 py-2 rounded-full border-2 bg-blue-900 text-white'>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar