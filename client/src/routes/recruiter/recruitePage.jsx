import React from 'react';
import RecruiterLogin from './RecruiterLogin';

const HiringPlatform = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-2 py-5 flex-col items-center justify-center"> {/* Reduced padding on x-axis and y-axis */}
        
        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-2 mb-4"> {/* Reduced space between buttons */}
          <button
            className={`text-lg font-medium text-purple-600`}
          >
            Login/Register
          </button>
        </div>

        {/* Display the Login/Register Form */}
        <div className="w-full lg:w-full md:w-full"> {/* Utilize full width */}
          <RecruiterLogin />
        </div>
      </div>
    </section>
  );
};

export default HiringPlatform;
