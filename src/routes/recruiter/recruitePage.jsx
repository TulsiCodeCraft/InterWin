import React, { useState } from 'react';
import RecruiterLogin from './RecruiterLogin';
import HiringForm from './hiring'; // Assuming you want to use InstructorLogin for register

const HiringPlatform = () => {
  const [activeForm, setActiveForm] = useState('hiring'); // Default to hiring form

  // Function to toggle forms
  const handleFormToggle = (formType) => {
    setActiveForm(formType);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-2 py-16 flex-col items-center justify-center"> {/* Reduced padding on x-axis and y-axis */}
        
        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-2 mb-4"> {/* Reduced space between buttons */}
          <button
            className={`text-lg font-medium ${activeForm === 'hiring' ? 'text-purple-600' : 'text-gray-600' }`}
            onClick={() => handleFormToggle('hiring')}
          >
            Hiring
          </button>
          <button
            className={`text-lg font-medium ${activeForm === 'login' ? 'text-purple-600' : 'text-gray-600'}`}
            onClick={() => handleFormToggle('login')}
          >
            Login/Register
          </button>
        </div>

        {/* Conditional Rendering */}
        {activeForm === 'hiring' ? (
          // Display the Hiring Form
          <div className="w-full lg:w-full md:w-full"> {/* Utilize full width */}
            <HiringForm />
          </div>
        ) : (
          // Display the Login/Register Form
          <div className="w-full lg:w-full md:w-full"> {/* Utilize full width */}
            <RecruiterLogin />
          </div>
        )}
      </div>
    </section>
  );
};

export default HiringPlatform;
