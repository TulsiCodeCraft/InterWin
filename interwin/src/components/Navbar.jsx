import React, { useState } from 'react';
import chatbot from '../assets/chatbot.png';

const Navbar = () => {
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);

  const toggleLoginDropdown = () => {
    setLoginDropdownOpen(!loginDropdownOpen);
  };

  const toggleAvatarDropdown = () => {
    setAvatarDropdownOpen(!avatarDropdownOpen);
  };

  return (
    <nav className="bg-purple-100 shadow-md p-4 px-20 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="text-2xl font-extrabold text-left text-purple-600">
        Interwin
      </div>

      {/* Center items */}
      <div className="flex space-x-8 text-lg">
        <a href="#jobs" className="hover:underline hover:text-purple-600">Jobs</a>
        <a href="#internships" className="hover:underline hover:text-purple-600">Internships</a>
        <a href="#internships" className="hover:underline hover:text-purple-600">Services</a>
        <a href="#internships" className="hover:underline hover:text-purple-600">Companies</a>
      </div>

      {/* Right side items */}
      <div className="flex items-center space-x-8">
        {/* Chatbot Icon */}
        <div className="relative">
          <button>
            <img
              src={chatbot}
              alt="Chatbot"
              className="h-8 w-8"
            />
          </button>
        </div>

        {/* Login Button with Dropdown */}
        <div className="relative">
          <button
            onClick={toggleLoginDropdown}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 flex items-center"
          >
            Login
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {loginDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-purple-100 border border-gray-200 shadow-md rounded-lg z-50">
              <a href="#login-recruiter" className="block px-4 py-2 text-gray-800 hover:bg-purple-200">
                Login as Recruiter
              </a>
            </div>
          )}
        </div>

        {/* Register Button */}
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
          Register
        </button>

        {/* Avatar with Dropdown */}
        <div className="relative">
          <button
            onClick={toggleAvatarDropdown}
            className="focus:outline-none"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png"
              alt="Avatar"
              className="h-8 w-8"
            />
          </button>
          {avatarDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-purple-100 border border-gray-200 shadow-md rounded-lg z-50">
              <a href="#profile" className="block px-4 py-2 text-gray-800 hover:bg-purple-200">
                Profile
              </a>
              <a href="#settings" className="block px-4 py-2 text-gray-800 hover:bg-purple-200">
                Settings
              </a>
              <a href="#logout" className="block px-4 py-2 text-gray-800 hover:bg-purple-200">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
