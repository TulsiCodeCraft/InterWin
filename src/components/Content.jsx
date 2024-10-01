import React, { useState } from "react";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";

import { Companies, mockInterviewData } from "../lib/dummyData";
import interviewImagePosition from "../assets/images/select-company1.jpg";
import interviewImageCompany from "../assets/images/select-company2.jpg";

export default function Content() {
  const navigate = useNavigate();

  const handlePositionClick = (position) => {
    navigate(`/position`);
    
  };

  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [isPositionSelected, setIsPositionSelected] = useState(true);
  
  const handleToggleChange = () => {
    setIsPositionSelected(!isPositionSelected); // Toggle the state
  };

  const handleSearch = () => {
    if (isPositionSelected) {
      navigate(`/interview_prep/position`); 
    } else {
      navigate(`/interview_prep/company`);
    }
  };

  const formatForRoute = (value) => {
    return value.toLowerCase().split(' ').join('-');
  };

  const handleSearchPosition = () => {
    if (selectedPosition) {
      const formattedPosition = formatForRoute(selectedPosition);
      navigate(`/position/${formattedPosition}`); 
    }
  };

  const handleSearchCompany = () => {
    if (selectedCompany) {
      const formattedCompany = formatForRoute(selectedCompany);
      navigate(`/company/${formattedCompany}`);
    }
  };

  return (
    <div className="w-full h-full mx-auto bg-purple-50 pt-10">
      <div className="grid grid-cols-2 items-center">
        <div className="w-full h-full mx-auto p-10">
          <Slider />
        </div>
        <div className="mx-auto w-z h-[300px]">
          <h1 className="text-3xl font-extrabold">
            <span className="text-purple-500">
               Interview Mastery
            </span>{" "}
            Through Unlimited Practices
          </h1>
          <p className="mt-5 text-sm">
            Practice for any {isPositionSelected ? "job position" : "company"} to boost your confidence and skills with unlimited, on-demand interview simulations.
          </p>

        
          <div className="flex items-center mt-5">
            <span className="font-semibold text-gray-600">Position</span>
            <label className="relative inline-flex items-center mx-2 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={!isPositionSelected}
                onChange={handleToggleChange}
              />
              <div className="w-11 h-6 bg-purple-500 rounded-full peer-focus:ring-2 peer-focus:ring-purple-300 relative transition duration-300">
                <span className={`absolute top-0.5 left-[2px] w-5 h-5 rounded-full bg-white transition-all ${!isPositionSelected ? "translate-x-5" : ""}`}></span>
              </div>
            </label>
            <span className="font-semibold text-gray-600">Company</span>
          </div>

          <button
            onClick={handleSearch}
            className="bg-purple-100 p-2 mt-5 rounded text-xl font-semibold shadow-md hover:bg-purple-200"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="w-full h-full text-center">
        <h1 className="text-3xl font-extrabold">Select Your Preferred <span className="text-purple-500">Interview</span></h1>
      </div>
      <div
        id="select"
        className="w-full h-full flex flex-wrap justify-center items-center gap-6 p-10 bg-purple-50"
      >
      
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <img
            src={interviewImagePosition}
            alt="Interview by Position"
            className="w-full h-40 object-cover rounded-t-lg mb-6"
          />

          <h1 className="text-xl font-bold mb-6 text-gray-800">
            Select Interview by Position
          </h1>

          <div className="mb-6">
            <label
              htmlFor="position"
              className="block text-md font-bold mb-2 text-gray-700"
            >
              Select Position
            </label>
            <select
              id="position"
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            >
              <option value="">--Select Position--</option>
              {mockInterviewData.map((interview) => (
                <option key={interview.id} value={interview.position}>
                  {interview.position}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSearchPosition}
            className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-800 transition-colors"
          >
            Search Position
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <img
            src={interviewImageCompany}
            alt="Interview by Company"
            className="w-full h-40 object-cover rounded-t-lg mb-6"
          />

          <h1 className="text-xl font-bold mb-6 text-gray-800">
            Select Interview by Company
          </h1>

          <div className="mb-6">
            <label
              htmlFor="company"
              className="block text-md font-bold mb-2 text-gray-700"
            >
              Select Company
            </label>
            <select
              id="company"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            >
              <option value="">--Select Company--</option>
              {Companies.map((company) => (
                <option key={company.id} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSearchCompany}
            className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-800 transition-colors"
          >
            Search Company
          </button>
        </div>
      </div>

      <div className="m-10 h-[100px] border-slate-100 border shadow-lg bg-white">
        <div className="h-full grid grid-cols-3 text-center justify-center items-center">
          <div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
              Free
            </h1>
            <p className="font-bold text-md">Interview Practices Forever</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
              20K+
            </h1>
            <p className="font-bold text-md">Interview Questions</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
              200+
            </h1>
            <p className="font-bold text-md">Company Practices</p>
          </div>
        </div>
      </div>
    </div>
  );
}
