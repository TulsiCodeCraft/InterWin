import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const InstructorRegister = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [calendlyUrl, setCalendlyUrl] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password, calendlyUrl, image })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <section className="text-gray-600 body-font flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-5 py-24 flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex flex-col items-center">
          <img className="w-80 h-80 mb-6 object-cover rounded" src="https://www.shutterstock.com/image-vector/happy-students-learning-college-flat-260nw-1903361545.jpg" alt="Instructor Poster" />
          <h1 className="title-font font-medium text-3xl text-gray-900">Join as an Instructor</h1>
          <p className="leading-relaxed mt-4 text-center">
            Become a part of our instructor community and help learners develop new skills. Set up your profile, provide your credentials, and get started with easy scheduling via Calendly.
          </p>
        </div>
        <div className="lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">Instructor Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              />
            </div>
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
            <div className="mb-4">
              <label htmlFor="calendlyUrl" className="block text-sm font-medium text-gray-700 mb-1">Calendly URL</label>
              <input 
                type="url" 
                id="calendlyUrl" 
                name="calendlyUrl" 
                value={calendlyUrl}
                onChange={(e) => setCalendlyUrl(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
              <input 
                type="file" 
                id="image" 
                name="image" 
                onChange={handleImageUpload}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              />
            </div>
            {image && (
              <div className="mb-4">
                <img src={image} alt="Instructor" className="w-full h-40 object-cover rounded" />
              </div>
            )}
            <button type="submit" className="w-full text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Sign Up</button>
          </form>
          <p className="text-xs text-gray-500 mt-3 text-center">
            <Link to="/InstructorLogin">Already have an account? Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstructorRegister;