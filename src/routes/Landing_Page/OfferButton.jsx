import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// OfferButton Component
const OfferButton = ({ children, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-purple-100 text-purple-700 font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-purple-200 hover:shadow-lg flex items-center justify-between w-full sm:w-auto"
    >
      <span>{children}</span>
      <ChevronRight className="ml-2 h-4 w-4" />
    </button>
  );
};

// WhatWeOfferSection Component
const WhatWeOfferSection = () => {
  const offers = [
    { name: 'Chatbot', route: '/chatbot' },
    { name: 'Video call with Experts', route: '/meeting_schedule' },
    { name: 'Interview preparatory', route: '/interview_prep' },
    { name: 'Feedback system', route: '/feedback-system' },
    { name: 'Skill evaluation', route: '/skill-evaluation' },
    { name: 'Resume generator', route: '/resume' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
        What we offer:
      </h2>
      <p className="text-xl mb-8 text-gray-700">
        Solutions that will take your recruitment to the 
        <span className="font-semibold text-purple-600"> next level</span>!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {offers.map((offer, index) => (
          <OfferButton key={index} route={offer.route}>
            {offer.name}
          </OfferButton>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOfferSection;
