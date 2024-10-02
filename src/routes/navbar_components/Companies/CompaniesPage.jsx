import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CompanyCard from './CompanyCard';  // Import the modified CompanyCard

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
            name="TechInnovate Solutions"
            companyId="101"
            industry="Technology"
            location="San Francisco, CA"
            employees="5000+"
            rating="4.7"
            openings={25}
          />
           <CompanyCard
            name="DevOps Engineer"
            companyId="102"
            industry="IT Services & Consulting"
            location="San Francisco, CA"
            employees="5000+"
            rating="4.7"
            openings={25}
          />
          <CompanyCard
            name="CreativePixel Design Studio"
            companyId="103"
            industry="Design & Creative"
            location="San Francisco, CA"
            employees="5000+"
            rating="4.7"
            openings={25}
          />
          {/* Add more CompanyCards */}
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
