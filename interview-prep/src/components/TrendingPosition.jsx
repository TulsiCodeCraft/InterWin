import React from 'react';
import Slider from 'react-slick';
import { mockInterviewData } from '../dummyData'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from 'react-router-dom';

const sliderSettings = {

  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3, 
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2, 
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, 
      settings: {
        slidesToShow: 1, 
        slidesToScroll: 1,
      },
    },
  ],
};

export default function CardSlider() {

  const navigate = useNavigate();
  const ExploreMore =()=>{
    navigate('/position')
  }
  const displayedData = mockInterviewData.slice(0, 6);

  return (
    <div className="w-full h-full px-8 py-10">
      <div className=' flex items-center justify-between  p-10'>
      <h2 className="text-3xl font-bold ">Trending Interview Practices</h2>
      <h3  onClick={ExploreMore}  className='   cursor-pointer text-purple-500 font-semibold ' >Explore More <span><FontAwesomeIcon icon={faChevronRight} /></span></h3>
      </div>

      <Slider {...sliderSettings}>
        {displayedData.map((interview, index) => (
          <div key={index} className="px-3">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl">
              <img
                className="w-full h-40 object-cover"
                src={interview.image}
                alt={interview.position}
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-purple-600 transition-colors">
                  {interview.position}
                </h3>
                <p className="text-gray-600 mb-4">Number of questions: {interview.questions.length}</p>
                <button
                  className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-purple-800 hover:shadow-md transition-all"
                >
                  Start Interview
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
