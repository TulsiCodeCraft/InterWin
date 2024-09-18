import React from 'react';
import { ChevronRight } from 'lucide-react';

const OfferButton = ({ children }) => (
  <button className="bg-purple-100 text-purple-700 font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-purple-200 hover:shadow-lg flex items-center justify-between w-full sm:w-auto">
    <span>{children}</span>
    <ChevronRight className="ml-2 h-4 w-4" />
  </button>
);

const WhatWeOfferSection = () => {
  const offers = [
    'chatbot',
    'Video call with Experts',
    'Interview preparatory',
    'feedback system',
    'Skill evaluation',
    'Resume generator',
    
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
          <OfferButton key={index}>
            {offer}
          </OfferButton>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOfferSection;