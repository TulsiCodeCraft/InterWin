import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PopupButton } from 'react-calendly';

const CardDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, name, desc, img, yearsOfExperience, calendlyUrl } = location.state || {};
  

  // Handle case when card details are missing
  if (!name) {
    return <h1>Card not found</h1>;
  }

  // Go back to the previous page
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative">
        
        {/* Cross Button (Top-right Corner) */}
        <button
          onClick={handleGoBack}
          className="absolute top-5 right-5 bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt={name} src={img} />
        </div>

        {/* Card Details Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{category}</h1>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{name}</h2>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{yearsOfExperience} Year's of Experience</h2>
          <p className="mb-8 leading-relaxed">{desc}</p>

          <div className="flex justify-center">
            {/* Calendly Popup Button for Scheduling */}
            {calendlyUrl ? (
  <PopupButton
    url={calendlyUrl}
    rootElement={document.getElementById('root')}
    text="Contact Instructor"
    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
  />
) : (
  <p>No Calendly URL provided.</p>
)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetail;
