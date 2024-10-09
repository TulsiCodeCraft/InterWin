import React, { useState } from 'react';

const RecruiterLogin = () => {
  // State to toggle between Login and Register
  const [isRegistering, setIsRegistering] = useState(false);

  // Function to handle form toggle
  const handleFormToggle = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-2 py-16 items-center justify-center flex-wrap">

        {/* Left Side: Form */}
        <div className="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-0">
          {/* Toggle between Login and Register */}
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            {isRegistering ? 'Register' : 'Login'}
          </h2>

          {/* Name Input (only for Register form) */}
          {isRegistering && (
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          )}

          {/* Email Input */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          {/* Submit Button */}
          <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
            {isRegistering ? 'Register' : 'Login'}
          </button>

          {/* Toggle between Login and Register */}
          <p className="text-sm text-gray-600 mt-4 cursor-pointer" onClick={handleFormToggle}>
            {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 md:w-1/2 flex items-center justify-center">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src="https://static.vecteezy.com/system/resources/previews/003/689/225/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
            alt="Recruitment Poster"
          />
        </div>
      </div>
    </section>
  );
};

export default RecruiterLogin;
