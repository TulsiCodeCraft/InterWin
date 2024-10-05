import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { companies } from '../../lib/dummyData';
import { useNavigate } from 'react-router-dom';

const CompanyCard = ({ logo, name, rating, reviews, description, companyId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/companies/${companyId}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col h-full justify-between">
      <div>
        <div className="flex justify-center mb-3">
          <img src={logo} alt={name} className="w-30 h-30 object-contain" />
        </div>
        <h3 className="text-lg font-semibold mb-1 text-center text-purple-700">{name}</h3>
        <div className="flex items-center justify-center mb-2">
          <Star className="text-yellow-400 w-4 h-4 mr-1" />
          <span className="font-medium text-sm">{rating}</span>
          <span className="text-gray-500 text-xs ml-1">{reviews} reviews</span>
        </div>
        <p className="text-gray-700 text-sm mb-3 text-center">{description}</p>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-300" onClick={handleClick}>
          View jobs
        </button>
      </div>
    </div>
  );
};

const FeaturedCompaniesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (filteredCompanies.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (filteredCompanies.length - 3)) % (filteredCompanies.length - 3));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentIndex(0); // Reset the carousel to the first slide when the category changes
  };

  // Filter the companies based on the selected category
  const filteredCompanies = selectedCategory === 'All'
    ? companies
    : companies.filter((company) => company.industry === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
        Featured companies actively hiring
      </h2>
      <div className="flex justify-center space-x-4 mb-8">
        {['All', 'Technology', 'IT Services & Consulting', 'Design & Creative'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full border ${selectedCategory === category ? 'bg-gray-300' : 'border-gray-300 hover:bg-gray-100'} transition-colors duration-300`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
            {filteredCompanies.map((company, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 px-2">
                <CompanyCard {...company} />
              </div>
            ))}
          </div>
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors duration-300">
          View all companies
        </button>
      </div>
    </div>
  );
};

export default FeaturedCompaniesCarousel;
