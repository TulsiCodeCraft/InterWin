import React, { useState } from "react";
import { Companies } from "../../lib/dummyData";
export default function Company() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState(""); // Example filter
  const [selectedSize, setSelectedSize] = useState(""); // Example filter

  // Filters and search
  const filteredCompanies = Companies.filter((company) => {
    return (
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedIndustry ? company.industry === selectedIndustry : true) &&
      (selectedSize ? company.size === selectedSize : true)
    );
  });

  return (
    <div className="w-full h-full bg-purple-50 p-10">
      <div className="bg-gradient-to-r from-purple-600 to-purple-900 p-4 rounded-lg shadow-lg m-auto ">
        <h1 className="text-3xl font-bold text-white">
          Master Interviews with Company Insights!!
        </h1>
        <p className="text-white mt-2 text-lg">
          Find the right company for your next interview
        </p>
      </div>
      <div className="flex  mt-10">
        {/* Filter Section */}
        <div className="w-1/4 h-min bg-white shadow-md rounded-lg p-5">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          {/* Search Box */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Search Company
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
              placeholder="Search by company name"
            />
          </div>

          {/* Industry Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            >
              <option value="">All Industries</option>
              <option value="Tech">Tech</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
              {/* Add more industries */}
            </select>
          </div>

          {/* Company Size Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Company Size
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            >
              <option value="">All Sizes</option>
              <option value="Small">Small (1-50)</option>
              <option value="Medium">Medium (50-500)</option>
              <option value="Large">Large (500+)</option>
            </select>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedIndustry("");
              setSelectedSize("");
            }}
            className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-purple-800 transition-colors"
          >
            Clear Filters
          </button>
        </div>

        {/* Company Cards Section */}
        <div className="w-3/4 flex flex-col pl-10 space-y-6">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-purple-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-20 h-20 object-contain rounded-full border-2 border-purple-100"
                  />
                  <h3 className="text-2xl font-bold text-purple-700">
                    {company.position}
                  </h3>
                </div>
                <h4 className="text-lg font-semibold text-purple-600 mb-2">
                  {company.name}
                </h4>
                <p className="text-gray-500 mb-2">
                  {company.locations.join(", ")}
                </p>
                
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {company.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors">
                    Open Test
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No companies found</p>
          )}
        </div>
      </div>
    </div>
  );
}
