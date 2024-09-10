import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Home, Hospital, Paintbrush, DollarSign, Code } from 'lucide-react';

const jobCategories = [
    { title: 'Real Estate Jobs', jobs: '75,583', icon: Home },
    { title: 'Hospital Jobs', jobs: '58,433', icon: Hospital },
    { title: 'Design and Creative', jobs: '73,203', icon: Paintbrush },
    { title: 'Accounting Jobs', jobs: '43,486', icon: DollarSign },
    { title: 'Software Development', jobs: '92,750', icon: Code },
    { title: 'Marketing', jobs: '61,204', icon: Paintbrush },
    { title: 'Customer Service', jobs: '52,891', icon: DollarSign },
    { title: 'Data Science', jobs: '38,672', icon: Code },
    { title: 'Education', jobs: '47,309', icon: Home },
];

const JobCategoryBrowser = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % jobCategories.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + jobCategories.length) % jobCategories.length);
    };

    const visibleCategories = () => {
        const categories = [];
        for (let i = 0; i < 5; i++) {
            categories.push(jobCategories[(currentIndex + i) % jobCategories.length]);
        }
        return categories;
    };

    return (
        <div className="bg-white mt-14 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Browse By Category</h1>
                <p className="text-gray-600 mb-8">You can locate the category in which your dream job can be found!</p>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-300 ease-in-out">
                            {visibleCategories().map((category, index) => {
                                const Icon = category.icon;
                                return (
                                    <div key={index} className="w-1/5 px-2">
                                        <button
                                            className="w-full min-h-full bg-purple-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 group hover:-translate-y-1 hover:bg-purple-100"
                                        >
                                            <div className="flex items-center mb-2">
                                                <Icon className="w-6 h-6 text-purple-600 mr-2" />
                                                <h3 className="text-lg font-semibold text-purple-800 group-hover:text-purple-900">{category.title}</h3>
                                            </div>
                                            <p className="text-purple-600 group-hover:text-purple-700">{category.jobs} Jobs Available</p>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white text-purple-600 p-2 rounded-full shadow-lg hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white text-purple-600 p-2 rounded-full shadow-lg hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="flex justify-center mt-6">
                    {jobCategories.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${index === currentIndex ? 'bg-purple-600' : 'bg-purple-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobCategoryBrowser;