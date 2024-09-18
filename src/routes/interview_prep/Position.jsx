import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockInterviewData, practiceData } from '../../lib/dummyData';

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPositions, setFilteredPositions] = useState([...new Set([...mockInterviewData, ...practiceData].map(item => item.position))]);

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredMock = mockInterviewData.filter(item =>
      item.position.toLowerCase().includes(value.toLowerCase())
    );
    const filteredPractice = practiceData.filter(item =>
      item.position.toLowerCase().includes(value.toLowerCase())
    );

    const combinedPositions = [...new Set([...filteredMock, ...filteredPractice].map(item => item.position))];
    setFilteredPositions(combinedPositions);
  };

  const handleCardClick = (position) => {
    const formattedPosition = position.toLowerCase().split(' ').join('-');
    navigate(`/position/${formattedPosition}`);
  };

  const getImageForPosition = (position) => {
    const positionData = mockInterviewData.find(item => item.position === position);
    return positionData ? positionData.image : 'https://via.placeholder.com/300x200';
  };

  return (
    <div className="flex">
      <div className="w-1/4 h-screen bg-white p-4">
        <h2 className="text-xl font-bold mb-4">Filters & Preferences</h2>
        <ul>
          <li>Filter 1</li>
          <li>Filter 2</li>
          <li>Filter 3</li>
        </ul>
      </div>

      <div className="w-3/4 bg-purple-50 p-4">
        <h2 className="text-xl font-bold mb-4">Search by Position</h2>

        <div className="flex mb-6">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Search for a position (e.g., Frontend Developer)"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {filteredPositions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <h4 className="text-lg font-bold text-gray-800">{position}</h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No results found for "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
};

export default Layout;
  