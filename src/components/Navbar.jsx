import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaUserCheck } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <FaUserCheck/>
          <div className="text-xl font-bold text-blue-600">
           Admin
          </div>

          
          <div className="hidden md:flex space-x-6">
            
            <Link to='/' className='text-gray-700 hover:text-blue-600'>Home</Link>
            
            <Link to='/login' className='text-gray-700 hover:text-blue-600'>Login</Link>
            
          </div>

         
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl focus:outline-none">
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

   
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
