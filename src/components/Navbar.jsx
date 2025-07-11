import { Link } from 'react-router-dom';
import { GoSignIn } from "react-icons/go";
import { MdOutlineHome } from "react-icons/md";
import React, { useState } from 'react';
import { FaUserCheck } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adminOpen,setAdminOpen]=useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <FaUserCheck/>
          <div className="text-xl font-bold text-blue-600">
           HRM
          </div>

          
          <div className="hidden md:flex space-x-6">
            
            <Link to='/dashboard' className='text-gray-700 hover:text-blue-600'>Home<MdOutlineHome/></Link>
            
            <Link to='/login' className='text-gray-700 hover:text-blue-600'>Login<GoSignIn /></Link>
            
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
          <ul>
          <Link to='/dashboard' className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
          <button
                     onClick={() => setAdminOpen(!adminOpen)}
                     className="w-full text-left hover:bg-yellow-700 p-2 block rounded"
                   >
                     ⚙️ Admin ▾
                   </button>
                   {adminOpen && (
                     <ul className="ml-4 mt-2 space-y-2 text-sm">
                       <li><Link to="/admin/role" className="block hover:text-red-300">🔹 Role</Link></li>
                       <li><Link to="/admin/user" className="block hover:text-red-300">🔹 User</Link></li>
                       <li><Link to="/admin/menu" className="block hover:text-red-300">🔹 Menu Mapping</Link></li>
                       
                     </ul>
                   )}
                    <li><Link to="/employee" className="hover:bg-gray-700 p-2 block rounded">👥 Employee</Link></li>
                           <li><Link to="/attendance" className="hover:bg-gray-700 p-2 block rounded">🕒 Attendance</Link></li>
                           <li><Link to="/leave" className="hover:bg-gray-700 p-2 block rounded">🏖 Leave</Link></li>
                           <li><Link to="/asset" className="hover:bg-gray-700 p-2 block rounded">💼 Asset</Link></li>
                           <li><Link to="/expense" className="hover:bg-gray-700 p-2 block rounded">💰 Expense</Link></li>
                         </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
