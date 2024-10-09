import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const jobCategories = [
  { title: 'Full Stack Developer', jobs: '20.3K+' },
  { title: 'Mobile / App Developer', jobs: '2.2K+' },
  { title: 'Front End Developer', jobs: '3.4K+' },
  { title: 'DevOps Engineer', jobs: '2.2K+' },
  { title: 'Engineering Manager', jobs: '1.3K+' },
  { title: 'Technical Lead', jobs: '11.8K+' },
  { title: 'Backend Developer', jobs: '5.1K+' },
  { title: 'Data Scientist', jobs: '1.8K+' },
  { title: 'UI/UX Designer', jobs: '2.5K+' },
  { title: 'Product Manager', jobs: '3.7K+' },
  { title: 'QA Engineer', jobs: '1.9K+' },
  { title: 'Cloud Architect', jobs: '1.6K+' },
];

const JobDiscoveryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <div className="bg-white  mt-14 mb-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start mb-8 gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="w-96 h-full bg-purple-200 rounded-3xl flex items-center justify-center mb-4">
              <img src="https://static.naukimg.com/s/0/0/i/role-collection-ot.png" alt="Job Discovery" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl font-bold text-purple-900">Discover jobs across popular roles</h1>
            <p className="text-purple-700 text-lg">Select a role and we'll show you relevant jobs for it!</p>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {[0, 1].map((slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-2 gap-4">
                      {jobCategories.slice(slideIndex * 6, slideIndex * 6 + 6).map((category, index) => (
                        <button
                          key={index}
                          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        >
                          <h3 className="text-lg font-semibold text-purple-800 mb-2">{category.title}</h3>
                          <p className="text-purple-600">{category.jobs} Jobs</p>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-purple-500 text-white p-2 rounded-full shadow-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-purple-500 text-white p-2 rounded-full shadow-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="flex justify-center mt-4">
              {[0, 1].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setCurrentSlide(dot)}
                  className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
                    currentSlide === dot ? 'bg-purple-600' : 'bg-purple-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDiscoveryPage;