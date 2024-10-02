import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { mockInterviewData, practiceData } from "../../lib/dummyData";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [experienceLevel, setExperienceLevel] = useState(0);
  const [filteredPositions, setFilteredPositions] = useState([
    ...new Set(
      [...mockInterviewData, ...practiceData].map((item) => item.position)
    ),
  ]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredMock = mockInterviewData.filter((item) =>
      item.position.toLowerCase().includes(value.toLowerCase())
    );
    const filteredPractice = practiceData.filter((item) =>
      item.position.toLowerCase().includes(value.toLowerCase())
    );

    const combinedPositions = [
      ...new Set(
        [...filteredMock, ...filteredPractice].map((item) => item.position)
      ),
    ];
    setFilteredPositions(combinedPositions);
  };

  const handleCardClick = (position) => {
    const formattedPosition = position.toLowerCase().split(" ").join("-");
    navigate(`/interview_prep/position/${formattedPosition}`);
  };

  const getImageForPosition = (position) => {
    const positionData = mockInterviewData.find(
      (item) => item.position === position
    );
    return positionData
      ? positionData.image
      : "https://via.placeholder.com/300x200";
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);

    const filteredMock = mockInterviewData.filter(
      (item) => filter === "All" || item.type === filter
    );
    const filteredPractice = practiceData.filter(
      (item) => filter === "All" || item.type === filter
    );

    const combinedPositions = [
      ...new Set(
        [...filteredMock, ...filteredPractice].map((item) => item.position)
      ),
    ];
    setFilteredPositions(combinedPositions);
  };

  return (
    <>
      <div className="bg-purple-50 ">
        <div className="bg-gradient-to-r from-purple-600 to-purple-900 p-4 rounded-lg    shadow-lg m-5 ">
        <h1 className="text-3xl  font-bold text-white pl-4">
          Ace Interviews for Every Role!!
        </h1>
        <p className="text-xl  text-white p-4">Find the perfect position for your next interview</p>
        </div>
        <div className="flex ">
          <div className="w-1/4 h-min p-4 bg-white shadow-lg rounded-lg m-5">
            <h2 className="text-xl font-bold mb-6 text-purple-700">
              Filters & Preferences
            </h2>

            <input
              type="text"
              className="border border-gray-300 p-3 rounded-lg w-full mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Search for a position (e.g., Frontend Developer)"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            <h3 className="text-lg font-semibold mb-3 text-purple-600">
              Position Type
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="filter"
                    value="All"
                    checked={selectedFilter === "All"}
                    onChange={() => handleFilterChange("All")}
                    className="mr-2"
                  />
                  All
                </label>
              </li>
              <li>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="filter"
                    value="Technical"
                    checked={selectedFilter === "Technical"}
                    onChange={() => handleFilterChange("Technical")}
                    className="mr-2"
                  />
                  Technical
                </label>
              </li>
              <li>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="filter"
                    value="Business"
                    checked={selectedFilter === "Business"}
                    onChange={() => handleFilterChange("Business")}
                    className="mr-2"
                  />
                  Business
                </label>
              </li>
              <li>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="filter"
                    value="Writer"
                    checked={selectedFilter === "Writer"}
                    onChange={() => handleFilterChange("Writer")}
                    className="mr-2"
                  />
                  Writer
                </label>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-purple-600">
              Experience Level
            </h3>
            <div className="mb-6">
              <input
                type="range"
                min="0"
                max="10"
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="w-full"
              />
              <div className="text-sm text-gray-500 mt-2">
                Experience: {experienceLevel} years
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-3 text-purple-600">
              Location
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value="Remote"
                    checked={selectedFilter === "Remote"}
                    onChange={() => handleFilterChange("Remote")}
                    className="mr-2"
                  />
                  Remote
                </label>
              </li>
              <li>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value="On-site"
                    checked={selectedFilter === "On-site"}
                    onChange={() => handleFilterChange("On-site")}
                    className="mr-2"
                  />
                  On-site
                </label>
              </li>
              <li>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value="Hybrid"
                    checked={selectedFilter === "Hybrid"}
                    onChange={() => handleFilterChange("Hybrid")}
                    className="mr-2"
                  />
                  Hybrid
                </label>
              </li>
            </ul>
          </div>

          <div className="w-3/4 p-4 ">
            {filteredPositions.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {filteredPositions.map((position, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                    onClick={() => handleCardClick(position)}
                  >
                    <div className="relative w-full h-48">
                      <img
                        src={getImageForPosition(position)}
                        alt={position}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-gray-800">
                        {position}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                No results found for "{searchTerm}".
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
