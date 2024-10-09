import React from "react";
import { useNavigate } from "react-router-dom";  // Ensure you import useNavigate
import { Star, MapPin, Users } from "lucide-react";

const CompanyCard = ({ name, industry, location, employees, rating, openings,companyId }) => {
  const navigate = useNavigate();  // Correctly define the navigate function

  // Handle the click to navigate to the company's detailed page
  const handleViewCompany = () => {
    navigate(`/companies/${encodeURIComponent(companyId)}`, {
      state: { name, industry, location, employees, rating, openings,companyId }
    });
  };

  return (
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
      <button
        onClick={handleViewCompany}
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-blue-600 py-2 px-4 rounded"
      >
        View Company
      </button>
    </div>
  );
};

export default CompanyCard;
