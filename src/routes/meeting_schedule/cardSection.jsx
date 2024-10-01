import React, { useState } from 'react';
import Card from '../../components/card';
import cardsData from '../../lib/dummyData';

const CardList = () => {
  // State to hold the search term and selected experience filter
  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('All');

  // Function to handle the search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle the experience filter change
  const handleExperienceChange = (event) => {
    setExperienceFilter(event.target.value);
  };

  // Filter cards based on search term and experience filter
  const filteredCards = cardsData.filter((card) => {
    const matchesSearchTerm = 
      card.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesExperience = experienceFilter === 'All' || (
      (experienceFilter === '0-2 years' && card.yearsOfExperience <= 2) ||
      (experienceFilter === '3-5 years' && card.yearsOfExperience >= 3 && card.yearsOfExperience <= 5) ||
      (experienceFilter === '5+ years' && card.yearsOfExperience > 5)
    );

    return matchesSearchTerm && matchesExperience;
  });

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Search Bar and Experience Filter */}
        <div className="mb-6 flex justify-between">
          {/* Search Input */}
          <input
            type="text"
            className="w-1/2 p-3 border rounded-md"
            placeholder="Search by category, name, or description..."
            value={searchTerm}
            onChange={handleSearchChange}
          />

          {/* Experience Filter Dropdown */}
          <select
            className="p-3 border rounded-md"
            value={experienceFilter}
            onChange={handleExperienceChange}
          >
            <option value="All">All Experience Levels</option>
            <option value="0-2 years">0-2 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5+ years">5+ years</option>
          </select>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center -m-4">
          {filteredCards.map((card, index) => (
            <Card
              key={index}
              category={card.category}
              name={card.name}
              desc={card.desc}
              img={card.img}
              yearsOfExperience={card.yearsOfExperience}
              calendlyUrl={card.calendlyUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardList;
