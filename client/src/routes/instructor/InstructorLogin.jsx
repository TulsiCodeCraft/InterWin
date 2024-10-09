import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const InstructorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <section className="text-gray-600 body-font flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-5 py-24 flex flex-wrap items-center">
        {/* Left Side: Description and Image */}
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex flex-col items-center">
          <img className="w-80 h-80 mb-6 object-cover rounded" src="https://www.shutterstock.com/image-vector/happy-students-learning-college-flat-260nw-1903361545.jpg" alt="Instructor Poster" />
          <h1 className="title-font font-medium text-3xl text-gray-900">Join as an Instructor</h1>
          <p className="leading-relaxed mt-4 text-center">
            Become a part of our instructor community and help learners develop new skills. Set up your profile, provide your credentials, and get started with easy scheduling via Calendly.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">Instructor Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              />
            </div>
            <button type="submit" className="w-full text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Sign In</button>
          </form>
          <p className="text-xs text-gray-500 mt-3 text-center">
            <Link to="/InstructorRegister">Don't have an account? Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstructorLogin;