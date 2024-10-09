import React, { useState } from 'react';

const InstructorLogin = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file)); // This will display the uploaded image
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-wrap">
        
        {/* Left Side: Form */}
        <div className="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Instructor Sign Up</h2>

          {/* Name Input */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          {/* Email Input */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          {/* Description Input */}
          <div className="relative mb-4">
            <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
            <textarea id="description" name="description" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
          </div>

          {/* Calendly URL Input */}
          <div className="relative mb-4">
            <label htmlFor="calendlyUrl" className="leading-7 text-sm text-gray-600">Calendly URL</label>
            <input type="url" id="calendlyUrl" name="calendlyUrl" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          {/* Image Upload */}
          <div className="relative mb-4">
            <label htmlFor="image" className="leading-7 text-sm text-gray-600">Upload Image</label>
            <input type="file" id="image" name="image" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleImageUpload} />
          </div>

          {/* Display the uploaded image */}
          {image && (
            <div className="relative mb-4">
              <img src={image} alt="Instructor" className="w-full h-40 object-cover rounded" />
            </div>
          )}

          {/* Submit Button */}
          <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Sign Up</button>
        </div>

        {/* Right Side: Description and Image */}
        <div className="lg:w-1/2 md:w-1/2 flex flex-col items-center justify-center text-center">
        <img className="w-80 h-80 mt-6 object-cover rounded" src="https://www.shutterstock.com/image-vector/happy-students-learning-college-flat-260nw-1903361545.jpg" alt="Instructor Poster" />
          <h1 className="title-font font-medium text-3xl text-gray-900">Join as an Instructor</h1>
          <p className="leading-relaxed mt-4">
            Become a part of our instructor community and help learners develop new skills. Set up your profile, provide your credentials, and get started with easy scheduling via Calendly.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default InstructorLogin;
