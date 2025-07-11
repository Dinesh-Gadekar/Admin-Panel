import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [adminOpen, setAdminOpen] = useState(false);
  const location = useLocation();

  const handleMainMenuClick = () => {
    if (adminOpen) setAdminOpen(false);
  };

  const menus = [
    { name: 'Dashboard', icon: '🏠', path: '/dashboard' },
    {
      name: 'Admin',
      icon: '⚙️',
      submenu: true,
      isOpen: adminOpen,
      toggle: () => setAdminOpen(!adminOpen),
      children: [
        { name: 'Role', path: '/admin/role' },
        { name: 'User', path: '/admin/user' },
        { name: 'Menu Mapping', path: '/admin/menu' },
      ],
    },
    { name: 'Employee', icon: '👥', path: '/employee' },
    { name: 'Attendance', icon: '🕒', path: '/attendance' },
    { name: 'Leave', icon: '🏖', path: '/leave' },
    { name: 'Asset', icon: '💼', path: '/asset' },
    { name: 'Expense', icon: '💰', path: '/expense' },
  ];

  return (
    <div className="bg-gray-800 text-white h-screen p-5 pt-8 w-64 hidden md:block">
      <ul className="space-y-4">
        {menus.map((menu, index) =>
          menu.submenu ? (
            <li key={index}>
              <button
                onClick={menu.toggle}
                className="w-full text-left hover:bg-gray-700 p-2 block rounded"
              >
                {menu.icon} {menu.name} ▾
              </button>
              {menu.isOpen && (
                <ul className="ml-4 mt-2 space-y-2 text-sm">
                  {menu.children.map((child, i) => (
                    <li key={i}>
                      <Link
                        to={child.path}
                        className={`block hover:text-blue-300 ${
                          location.pathname === child.path ? 'text-blue-400 font-semibold' : ''
                        }`}
                      >
                        🔹 {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={index}>
              <Link
                to={menu.path}
                onClick={handleMainMenuClick}
                className={`hover:bg-gray-700 p-2 block rounded ${
                  location.pathname === menu.path ? 'bg-gray-700' : ''
                }`}
              >
                {menu.icon} {menu.name}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
