import React from 'react';
import AiResume from '../../assets/images/resume.png'


const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Effortless Resumes with AI Power
          </h1>
          <p className="text-xl mb-6 text-gray-700">
            Create Resumes Easily and Effectively. Tailor Your
            <span className="font-semibold text-purple-600"> Professional Profile </span>
            with
            <span className="font-semibold text-blue-500"> Precision</span>
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-blue-600">
            Start now &gt;
          </button>
        </div>
        <div className="flex justify-end">
          <div className="relative">
            <img src={AiResume} alt="Resume Template" className="w-full h-full mr-20" />
           
          </div>
        </div>
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-purple-100 to-blue-100 py-12 px-4 rounded-lg shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '300k+', label: 'Company hiring' },
            { value: '200k+', label: 'Active students' },
            { value: '500k+', label: 'Internship hiring' },
            { value: '20k+', label: 'Daily hiring' },
          ].map((stat, index) => (
            <div key={index} className="transform transition duration-300 ease-in-out hover:scale-105">
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                {stat.value}
              </h2>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;