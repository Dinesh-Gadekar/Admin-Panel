import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white h-screen p-5 pt-8 ${open ? 'w-64' : 'w-20'} duration-300 relative`}>
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute -right-3 top-6 w-7 h-7 bg-white text-gray-800 rounded-full shadow-md flex items-center justify-center"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>

        <h1 className={`text-xl font-bold duration-200 ${!open && 'scale-0'}`}>
          MySidebar
        </h1>

        <ul className="pt-6 space-y-4">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">🏠 {open && 'Dashboard'}</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">📄 {open && 'Reports'}</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">⚙️ {open && 'Settings'}</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">📞 {open && 'Contact'}</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold">Welcome to the Main Content</h1>
        <p className="mt-4 text-gray-600">Click the toggle button to collapse or expand the sidebar.</p>
      </div>
    </div>
  );
};

export default Sidebar;
