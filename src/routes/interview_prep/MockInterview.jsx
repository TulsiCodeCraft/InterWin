import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // For accessing the position from the URL
import { mockInterviewData } from '../../lib/dummyData'

const MockInterview = () => {
  const { position } = useParams(); // Get the position from the URL
  const navigate = useNavigate(); // To navigate back when interview ends
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds per question
  const [interviewOver, setInterviewOver] = useState(false);

  // Get the list of questions for the given position
  const formattedPosition = position.replace('-', ' ').toLowerCase().trim();
  const interview = mockInterviewData.find(item => item.position.toLowerCase() === formattedPosition);

  useEffect(() => {
    if (timeLeft === 0) {
      nextQuestion();
    }
    
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const nextQuestion = () => {
    if (currentQuestionIndex < interview.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(60); // Reset timer for the next question
    } else {
      setInterviewOver(true); // End the interview when all questions are answered
    }
  };

  const endInterview = () => {
    setInterviewOver(true);
    navigate(`/position/${position}`); 
  };

  if (!interview) {
    return <p>No mock interview data available for this position.</p>;
  }

  return (
    <div className="p-4 bg-gray-100 h-screen w-full flex flex-col justify-center items-center">
      {interviewOver ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Mock Interview Completed</h2>
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded"
            onClick={endInterview}
          >
            Go Back
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-3/4 lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">
            Mock Interview for {position.replace('-', ' ')}
          </h2>
          <p className="mb-4 text-gray-700">
            Question {currentQuestionIndex + 1} of {interview.questions.length}
          </p>
          <p className="mb-6 text-lg font-semibold">
            {interview.questions[currentQuestionIndex]}
          </p>

          <div className="flex justify-between items-center">
            <button
              className="px-4 py-2 bg-purple-500 text-white rounded"
              onClick={nextQuestion}
            >
              Next Question
            </button>
            <p className="text-gray-700 font-bold">
              Time Left: {timeLeft} seconds
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MockInterview;
