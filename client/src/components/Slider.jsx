import React, { useState } from "react";
import Slide1 from "../assets/images/Slider1.jpg";
import Slide2 from "../assets/images/Slider2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, img: Slide1 },
    { id: 2, img: Slide2 },
    
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden w-full h-fit">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            <div className="w-full h-full   relative">
              <img
                src={slide.img}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
              
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-[50%] left-0 transform -translate-y-1/2 w-[20px] h-[20px] bg-white rounded-full p-2 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-[50%] right-0 transform -translate-y-1/2 m-auto w-[20px] h-[20px] bg-white rounded-full p-1 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

