import React, { useState } from "react";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";

import { Companies, mockInterviewData } from "../lib/dummyData";
import interviewImagePosition from "../assets/images/select-company1.jpg";
import interviewImageCompany from "../assets/images/select-company2.jpg";

export default function Content() {
  const navigate = useNavigate();

  const handlePositionClick = (position) => {
    navigate(`/interview_prep/position/${formatForRoute(position)}`);
  };
  

  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  // Function to format string to lowercase and replace spaces with dashes
  const formatForRoute = (value) => {
    return value.toLowerCase().split(' ').join('-');
  };

  const handleSearchPosition = () => {
    if (selectedPosition) {
      const formattedPosition = formatForRoute(selectedPosition);
      navigate(`/interview_prep/position/${formattedPosition}`);
    }
  };
  
  const handleSearchCompany = () => {
    if (selectedCompany) {
      const formattedCompany = formatForRoute(selectedCompany);
      navigate(`/interview_prep/company/${formattedCompany}`);
    }
  };
  

  return (
    <div className="w-full  h-full mx-auto bg-purple-50 pt-10">
      <div className="grid grid-cols-2  items-center ">
        <div className=" w-full h-full mx-auto p-10 ">
          <Slider />
        </div>
        <div className="mx-auto  w-z h-[300px]">
          <h1 className="text-3xl font-extrabold">
            {" "}
            <span className="text-purple-500">Interview Mastery </span>Through
            Unlimited Practices
          </h1>
          <p className=" mt-5 text-sm">
            Practice for any job position to boost your confidence and skills
            with unlimited, on-demand interview simulations.
          </p>
          <button
            href="#select"
            onClick={handlePositionClick}
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
        {/* Card for Position */}
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

        {/* Card for Company */}
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
