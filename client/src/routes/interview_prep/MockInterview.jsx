import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockInterviewData } from '../../lib/dummyData';

const MockInterview = () => {
  const { position, level } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [interviewOver, setInterviewOver] = useState(false);

  const formattedPosition = position.replace('-', ' ').toLowerCase().trim();
  const formattedLevel = level.toLowerCase();

  const interview = mockInterviewData.find(
    item => item.position.toLowerCase() === formattedPosition
  );

  const questions = interview ? interview.questions[formattedLevel] : [];

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
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(60);
    } else {
      setInterviewOver(true);
    }
  };

  const endInterview = () => {
    setInterviewOver(true);
    navigate(`/interview_prep/position/${position}`);
  };

  if (!interview || questions.length === 0) {
    return <p>No mock interview data available for this level or position.</p>;
  }

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/ceo-blue-suit_23-2147626349.jpg?t=st=1727332369~exp=1727335969~hmac=de1d79af984a91516f9aa63f88ffc7334968607b2da36a438cbdb098beaacebc&w=996)',
        }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-1/2 bg-black bg-opacity-30"></div>

      <div className="relative z-10 bg-white p-6 rounded-lg shadow-md w-full sm:w-3/4 lg:w-1/2">
        {interviewOver ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Mock Interview Completed</h2>
            <button
              className="px-4 py-2 bg-purple-500 text-white rounded"
              onClick={endInterview}
            >
              Go Back
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Mock Interview for {position.replace('-', ' ')} - {formattedLevel.charAt(0).toUpperCase() + formattedLevel.slice(1)} Level
            </h2>
            <p className="mb-4 text-gray-700">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
            <p className="mb-6 text-lg font-semibold">
              {questions[currentQuestionIndex]}
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
          </>
        )}
      </div>
    </div>
  );
};

export default MockInterview;
