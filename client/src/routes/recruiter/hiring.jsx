import React, { useState } from 'react';

const RecruiterLogin = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-1 py-15 items-center justify-center flex-wrap">

        {/* Left Side: Form */}
        <div className="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Recruiter Sign Up</h2>

          {/* Name Input */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          {/* Contact Number Input */}
          <div className="relative mb-4">
            <label htmlFor="contact" className="leading-7 text-sm text-gray-600">Contact Number</label>
            <input type="tel" id="contact" name="contact" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          {/* Company Name Input */}
          <div className="relative mb-4">
            <label htmlFor="company" className="leading-7 text-sm text-gray-600">Company Name</label>
            <input type="text" id="company" name="company" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          {/* Number of Employees Input */}
          <div className="relative mb-4">
            <label htmlFor="employees" className="leading-7 text-sm text-gray-600">Number of Employees</label>
            <input type="number" id="employees" name="employees" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          {/* Designation Input */}
          <div className="relative mb-4">
            <label htmlFor="designation" className="leading-7 text-sm text-gray-600">Designation</label>
            <input type="text" id="designation" name="designation" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          {/* Email Input */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          {/* City Input */}
          <div className="relative mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          {/* Submit Button */}
          <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Sign Up</button>
        </div>

        {/* Right Side: Description and Image */}
        <div className="lg:w-1/2 md:w-1/2 flex flex-col items-center justify-center text-center">
          <h1 className="title-font font-medium text-3xl text-gray-900">Recruit Top Talent</h1>
          <p className="leading-relaxed mt-4">
            Join our platform to recruit top talent from around the globe. Manage your hiring process efficiently, and connect with skilled professionals to grow your team.
          </p>
          <img className="w-120 h-50 mt-6 object-cover rounded" src="https://media.licdn.com/dms/image/D5612AQFvGJsNFy8hRw/article-cover_image-shrink_720_1280/0/1656351677833?e=2147483647&v=beta&t=eNC9a0bArhTaLAeSaNSXFgbR00FmiHNR6jKiGxxQ8II" alt="Recruitment Poster" />
        </div>
      </div>
    </section>
  );
};

export default RecruiterLogin;
