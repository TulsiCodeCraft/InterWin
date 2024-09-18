import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const templates = [
    { name: 'Toronto', description: 'A web-inspired resume template perfect for chatting up your achievements.', image: 'https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3367/persistent-resource/toronto-resume-templates.jpg' },
    { name: 'Stockholm', description: 'Perfect balance of fresh and functional resume template design.', image: 'https://career.io/assets/templates/sydney-4ff1d903f8ab166f23681aae5c9451dd55db7ca41b6714c5670618539fa540c6.jpg' },
    { name: 'London', description: 'Classically structured resume template for a robust career history.', image: 'https://career.io/assets/templates/amsterdam-393d3251fb67197cc2c3b4ee38c896624abf736b5bfa478b9c877d978a910e72.jpg' },
    
];


   

const TemplateCard = ({ template }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative bg-white rounded-lg shadow-md overflow-hidden border-2 border-purple-200 h-[550px] flex flex-col"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
        >
            <div className="border-spacing-8 border-purple-100 m-2 rounded-lg overflow-hidden flex-grow">
                <img src={template.image} alt={template.name} className="w-full h-[100%] object-cover" />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                <p className="text-gray-600 text-sm">{template.description}</p>
            </div>
            <div className="p-4 flex items-center justify-between mt-auto">
                <div className="flex space-x-2">
                    {['bg-gray-800', 'bg-blue-600', 'bg-purple-600', 'bg-green-500', 'bg-red-500'].map((color, index) => (
                        <div key={index} className={`w-4 h-4 rounded-full ${color}`}></div>
                    ))}
                </div>
                <div className="text-sm text-gray-500">PDF</div>
            </div>
            {isHovered && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-blue-500 bg-opacity-90 flex items-center justify-center text-white font-bold text-lg"
                >
                    Use This Template
                </motion.button>
            )}
        </motion.div>
    );
};

const ResumeMaker = () => {
    const navigate = useNavigate();
  const handleCreateResume = () => {
    // Use a relative path to prevent duplication of the base path
    navigate('/resume/templates');
  };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Job-winning resume templates</h1>
            <p className="text-center mb-8 text-gray-600">
                Each resume template is designed to follow the exact rules you need to get hired faster.
                <br />
                Use our resume templates and get free access to 18 more career tools!
            </p>
            <div className="flex justify-center mb-8">
                <button className=" bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-blue-600"
                      onClick={handleCreateResume}
                >
                    Create my resume
                </button>
            </div>
            <div className="flex space-x-4 mb-8 justify-center">
                <button className="text-blue-500 font-semibold">All templates</button>
                <button className="text-gray-500">Simple</button>
                <button className="text-gray-500">ATS</button>
                <button className="text-gray-500">Modern</button>
                <button className="text-gray-500">Creative</button>
                <button className="text-gray-500">Professional</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {templates.map((template, index) => (
                    <TemplateCard key={index} template={template} />
                ))}
            </div>
        </div>
    );
};

export default ResumeMaker;