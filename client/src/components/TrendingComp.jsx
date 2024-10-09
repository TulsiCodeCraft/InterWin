import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InterviewCompanies } from '../lib/dummyData';  // Import data from dummyData.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';



// Custom Arrow Components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-700 text-white flex justify-center items-center rounded-full cursor-pointer`}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    

    <div
      className={`${className} bg-gray-700 text-white flex justify-center items-center rounded-full cursor-pointer`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

const CompanyCard = ({ name, logo }) => (
  <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center mx-2 transition transform hover:scale-105 hover:shadow-lg">
    <img
      src={logo}
      alt={name}
      className="h-24 w-auto object-contain mb-4"
    />
    <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
  </div>
);

const CompanySlider = () => {

  const navigate = useNavigate();
  const ExploreMore =()=>{
    navigate('/company')
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Custom next arrow
    prevArrow: <PrevArrow />,  // Custom previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full h-full px-8 py-10">
      <div className=' flex items-center justify-between  p-10'>
      <h2 className="text-3xl font-bold ">Interview Practices in Top Companies</h2>
      <h3 onClick={ExploreMore}  className=' cursor-pointer text-purple-500 font-semibold ' >Explore More <span><FontAwesomeIcon icon={faChevronRight} /></span></h3>
      </div>
      <Slider {...settings}>
        {InterviewCompanies.map((company) => (
          <CompanyCard key={company.id} name={company.name} logo={company.logo} />
        ))}
      </Slider>
    </div>
    </>
  );
};

export default CompanySlider;
