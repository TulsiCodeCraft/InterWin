import React from 'react';


const HeroSection = () => {
  return (
    <section className="relative bg-gray-100 py-12 px-6 flex flex-col items-center justify-center h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.helpside.com/wp-content/uploads/2021/01/AdobeStock_238255151-2048x1365.jpeg"
          alt="Hero"
          className="w-full h-full object-cover filter blur-sm"
        />
      </div>

      
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          From Interview to Career Success
        </h1>
        <p className="text-2xl text-white mb-8">
          JOB finding is becoming smart
        </p>

     
        <div className="flex items-center justify-center mt-6">
          <div className="flex relative max-w-lg w-full shadow-lg">
            <input
              type="text"
              placeholder="Find Jobs & Internships"
              className="w-full p-4 rounded-l-md border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            />
            <button className="bg-purple-600 text-white px-4 rounded-r-md flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 ease-in-out transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
