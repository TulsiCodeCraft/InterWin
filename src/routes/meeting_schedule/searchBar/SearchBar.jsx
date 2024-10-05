import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ handleSearch, handleFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value); // Send search term to parent component
  };

  const handleAgeFilterChange = (e) => {
    setAgeFilter(e.target.value);
    handleFilter({ age: e.target.value, experience: experienceFilter });
  };

  const handleExperienceFilterChange = (e) => {
    setExperienceFilter(e.target.value);
    handleFilter({ age: ageFilter, experience: e.target.value });
  };

  return (
    <div className="search-bar mb-4">
      <input
        type="text"
        placeholder="Search by name or category"
        value={searchTerm}
        onChange={handleInputChange}
        className="border p-2 rounded w-full" // Add some styles
      />

      <div className="filters mt-2">
        <select value={ageFilter} onChange={handleAgeFilterChange} className="border p-2 rounded">
          <option value="">Filter by Age</option>
          <option value="20-30">20-30</option>
          <option value="31-40">31-40</option>
          <option value="41-50">41-50</option>
        </select>

        <select value={experienceFilter} onChange={handleExperienceFilterChange} className="border p-2 rounded ml-2">
          <option value="">Filter by Experience</option>
          <option value="0-3">0-3 years</option>
          <option value="4-7">4-7 years</option>
          <option value="8+">8+ years</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
