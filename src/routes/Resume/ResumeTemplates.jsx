import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const templates = [
    { id: 1, name: 'Santiago', users: '430,000+', image: 'https://career.io/assets/templates/singapore-a24660c6abb19f0085b7131d0577ee94d5f870bb05eec5368d7b445580a738f7.jpg' },
    { id: 2, name: 'Singapore', users: '760,000+', image: 'https://career.io/assets/templates/santiago-7731f8a09e7a087fb0afd53dea178161760fe285484a71b9eb0314eaa503ca5d.jpg' },
    { id: 3, name: 'Oslo', users: '620,000+', image: 'https://career.io/assets/templates/madrid-bc095a295e2cb823011a46c1a04d94cc958aaec00a51a4594b2888e37d490320.jpg' },
    { id: 4, name: 'Cape Town', users: '63,000+', image: 'https://career.io/assets/templates/amsterdam-393d3251fb67197cc2c3b4ee38c896624abf736b5bfa478b9c877d978a910e72.jpg' },
    { id: 5, name: 'Paris', users: '590,000+', image: 'https://career.io/assets/templates/geneva-16043ba1106c42f3084f3a20167b872b6b48f412fb0ab6a60668a74c22c9efec.jpg' },
    { id: 6, name: 'Tokyo', users: '800,000+', image: 'https://career.io/assets/templates/vancouver-1fd35e18cab3f126ce26cdefece6829038a19c43c48bfc961aa65ff7a1a1a7a0.jpg' },
    { id: 7, name: 'New York', users: '950,000+', image: 'https://career.io/assets/templates/lisbon-b058b5a6a20aae606542908f3a46c01b61d505386f990781b09fa7a584ed26a6.jpg' },
];

const ResumeTemplates = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const navigate = useNavigate();

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === templates.length - 3 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? templates.length - 3 : prevIndex - 1
        );
    };

    const handleTemplateSelection = (templateId) => {
        setSelectedTemplate(templateId);
        navigate('/enter-details', { state: { templateId } });
    };

    return (
        <div className="container mx-auto px-4 py-10 mb-32">
            <div className="flex justify-between items-center mb-8">
                <div className="flex-1">
                    <span className='text-2xl font-extrabold text-left text-purple-600'>InterWin</span>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">1</div>
                        <div className="h-1 w-16 bg-gray-300 mx-2"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">2</div>
                        <div className="h-1 w-16 bg-gray-300 mx-2"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">3</div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>Choose template</span>
                        <span>Enter your details</span>
                        <span>Download resume</span>
                    </div>
                </div>
                <div className="flex-1"></div>
            </div>

            <div className="relative">
                <div className="flex gap-6 transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className="w-1/3 flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => handleTemplateSelection(template.id)}
                        >
                            <img src={template.image} alt={template.name} className="w-full h-96 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{template.name}</h3>
                                <p className="text-sm text-gray-600">{template.users} users chose this template</p>
                                {selectedTemplate === template.id && (
                                    <button   onClick={() => handleTemplateSelection(template.id)} className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                                        Use This Template
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default ResumeTemplates;