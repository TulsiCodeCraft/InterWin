import React, { useState } from 'react';
import { Search, Building, Star, MapPin, Users, ChevronDown } from 'lucide-react';

const CompanyCard = ({ name, industry, location, employees, rating, openings }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <span className="flex items-center text-yellow-500">
        <Star className="mr-1" size={16} fill="currentColor" />
        {rating}
      </span>
    </div>
    <p className="text-gray-600 mb-2">{industry}</p>
    <div className="flex items-center text-sm text-gray-500 mb-2">
      <MapPin size={16} className="mr-1" />
      {location}
    </div>
    <div className="flex items-center text-sm text-gray-500 mb-4">
      <Users size={16} className="mr-1" />
      {employees} employees
    </div>
    <p className="text-blue-600 font-semibold mb-4">{openings} open positions</p>
    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-blue-600 py-2 px-4 rounded">
      View Company
    </button>
  </div>
);

const CompaniesPage = () => {
  const [sortBy, setSortBy] = useState('rating');

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Top Companies</h1>
          <p className="text-xl mb-8">Discover opportunities at leading organizations across industries</p>
          <div className="flex space-x-4">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Search companies or positions..." 
                className="w-full pl-10 pr-4 py-3 rounded-lg text-black"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-48 bg-white text-black rounded-lg px-4 py-3"
            >
              <option value="rating">Sort by Rating</option>
              <option value="openings">Sort by Openings</option>
              <option value="employees">Sort by Size</option>
            </select>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CompanyCard 
            name="Tech Innovators Inc."
            industry="Technology"
            location="San Francisco, CA"
            employees="5000+"
            rating="4.7"
            openings={25}
          />
          <CompanyCard 
            name="Global Finance Group"
            industry="Finance"
            location="New York, NY"
            employees="10000+"
            rating="4.2"
            openings={18}
          />
          <CompanyCard 
            name="Green Energy Solutions"
            industry="Renewable Energy"
            location="Austin, TX"
            employees="2000-5000"
            rating="4.5"
            openings={12}
          />
          <CompanyCard 
            name="HealthCare Pioneers"
            industry="Healthcare"
            location="Boston, MA"
            employees="5000-10000"
            rating="4.4"
            openings={30}
          />
          <CompanyCard 
            name="Creative Design Studio"
            industry="Design"
            location="Los Angeles, CA"
            employees="500-1000"
            rating="4.8"
            openings={8}
          />
          <CompanyCard 
            name="Data Insights Corp"
            industry="Data Analytics"
            location="Seattle, WA"
            employees="1000-2000"
            rating="4.3"
            openings={15}
          />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Can't find what you're looking for?</p>
          <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-white hover:border-transparent rounded">
            Browse All Companies
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CompaniesPage;