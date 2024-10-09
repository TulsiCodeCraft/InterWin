import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CompanyCard from './CompanyCard';  // Import the modified CompanyCard
import { companies } from '../../../lib/dummyData';

const CompaniesPage = () => {
  const [sortBy, setSortBy] = useState('rating');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data for companies
  

  // Filter companies based on the search query
  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}  // Update search query state
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company) => (
              <CompanyCard
                key={company.companyId}
                name={company.name}
                companyId={company.companyId}
                industry={company.industry}
                location={company.location}
                employees={company.employees}
                rating={company.rating}
                openings={company.openings}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No companies found matching your search.
            </div>
          )}
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
