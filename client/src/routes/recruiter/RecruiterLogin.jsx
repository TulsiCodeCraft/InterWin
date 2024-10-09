import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecruiterLogin = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleFormToggle = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to authenticate the user
    // For this example, we'll just simulate a successful login
    console.log('Login attempt with:', { email, password });
    
    // Simulate successful login
    if (email && password) {
      // Navigate to the dashboard
      navigate('/dashboard');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-2 items-center justify-center flex-wrap">
        {/* Left Side: Form */}
        <div className="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-5 flex flex-col md:mr-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            {isRegistering ? 'Register' : 'Login'}
          </h2>
          
          <form onSubmit={handleSubmit}>
            {isRegistering && (
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                />
              </div>
            )}

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              />
            </div>

            <button type="submit" className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
              {isRegistering ? 'Register' : 'Login'}
            </button>
          </form>

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