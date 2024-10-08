import React, { useState, useRef } from 'react';
import chatbot from '../assets/images/chatbot.png';
import ChatbotUI from '../routes/chatbot/ChatbotUI';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const chatbotIconRef = useRef(null);


  const toggleLoginDropdown = () => {
    setLoginDropdownOpen(!loginDropdownOpen);
  };

  const toggleAvatarDropdown = () => {
    setAvatarDropdownOpen(!avatarDropdownOpen);
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      <nav className="bg-purple-100 shadow-md p-4 px-20 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-left text-purple-600">
          <Link to="/" >

            Interwin
          </Link>

        </div>

        <div className="flex space-x-8 text-lg">
          <Link to="/job-listing" className="hover:underline hover:text-purple-600">
            Jobs
          </Link>
          <Link to="/internships-listing" className="hover:underline hover:text-purple-600">
            Internships
          </Link>
          <Link to="/services" className="hover:underline hover:text-purple-600">
            Services
          </Link>
          <Link to="/companies" className="hover:underline hover:text-purple-600">
            Companies
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <div className="relative">
            <button
              ref={chatbotIconRef}
              onClick={toggleChatbot}
              className="transition-transform duration-200 hover:scale-110 focus:outline-none"
            >
              <img
                src={chatbot}
                alt="Chatbot"
                className="h-8 w-8"
              />
            </button>
          </div>

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
                <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-purple-200">
                  Login as Student
                </Link>
                <Link Link to="/RecruiterLogin" className="block px-4 py-2 text-gray-800 hover:bg-purple-200">
                  Login as Recruiter
                </Link>
                <Link Link to="/InstructorLogin" className="block px-4 py-2 text-gray-800 hover:bg-purple-200">
                  Login as Instructor
                </Link>
              </div>
            )}
          </div>

          <Link to="/register" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Register
          </Link>

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
                <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-purple-200">
                  Profile
                </a>
                <a href="/my-applications" className="block px-4 py-2 text-gray-800 hover:bg-purple-200">
                  My Application
                </a>
                <a href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-purple-200">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
      {isChatbotOpen && (
        <>
          <ChatbotUI isOpen={isChatbotOpen} onClose={toggleChatbot} />
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleChatbot}></div>
        </>
      )}
    </>
  );
};

export default Navbar;