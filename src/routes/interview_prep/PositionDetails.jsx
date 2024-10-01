import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockInterviewData } from '../../lib/dummyData';
import PracticeSheet from '../interview_prep/PracticeSheet'; // Import PracticeSheet

const PositionDetails = () => {
  const { position } = useParams(); // Get the position from the URL
  const [activeSection, setActiveSection] = useState('mockInterview'); // Default to mockInterview section

  // Filter data based on the selected position
  const formattedPosition = position.replace('-', ' ').toLowerCase().trim();
  const mockInterviews = mockInterviewData.filter(item => item.position.toLowerCase() === formattedPosition);

  return (
    <div className="p-4 bg-purple-50 h-fulll w-full">
      <h2 className="text-2xl font-bold mb-4">
        <span className='text-purple-500'>Position:</span> {position.replace('-', ' ')}
      </h2>

      {/* Toggle buttons to switch between mock interview and practice */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeSection === 'mockInterview' ? 'bg-purple-500 text-white' : 'bg-white border border-purple-500 text-purple-500'}`}
          onClick={() => setActiveSection('mockInterview')}
        >
          Mock Interview
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'practice' ? 'bg-purple-500 text-white' : 'bg-white border border-purple-500 text-purple-500'}`}
          onClick={() => setActiveSection('practice')}
        >
          Practice
        </button>
      </div>

      {/* Display Mock Interviews */}
      {activeSection === 'mockInterview' && mockInterviews.length > 0 && (
    <div className="w-full h-screen">
      {mockInterviews.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-2">Mock Interview: {item.position}</h4>
          <div className="grid grid-cols-3 gap-4">
            {/* Easy Questions Card */}
            <div className="bg-purple-100 p-4 rounded-lg shadow-md">
              <h5 className="text-md font-bold mb-2 text-green-500">Easy Questions</h5>
              <p>{item.questions.easy.length} Questions available</p>
              <Link 
                to={`/interview_prep/mock-interview/${item.position}/easy`} 
                className="mt-2 inline-block px-4 py-2 bg-purple-500 text-white rounded"
              >
                Start 
              </Link>
            </div>
            {/* Medium Questions Card */}
            <div className="bg-purple-100 p-4 rounded-lg shadow-md">
              <h5 className="text-md font-bold mb-2 text-yellow-500">Medium Questions</h5>
              <p>{item.questions.medium.length} Questions available</p>
              <Link 
                to={`/interview_prep/mock-interview/${item.position}/medium`} 
                className="mt-2 inline-block px-4 py-2 bg-purple-500 text-white rounded"
              >
                Start 
              </Link>
            </div>
            {/* Professional (Hard) Questions Card */}
            <div className="bg-purple-100 p-4 rounded-lg shadow-md">
              <h5 className="text-md font-bold mb-2   text-red-500">Professional Questions</h5>
              <p>{item.questions.professional.length} Questions available</p>
              <Link 
                to={`/interview_prep/mock-interview/${item.position}/professional`} 
                className="mt-2 inline-block px-4 py-2 bg-purple-500 text-white rounded"
              >
                Start 
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}


      {/* Display Practice Data */}
      {activeSection === 'practice' && (
        <PracticeSheet position={position} />  
      )}

      {/* Handle cases when no data is available */}
      {activeSection === 'mockInterview' && mockInterviews.length === 0 && (
        <p className="text-gray-500">No mock interview data available for this position.</p>
      )}
    </div>
  );
};

export default PositionDetails;
