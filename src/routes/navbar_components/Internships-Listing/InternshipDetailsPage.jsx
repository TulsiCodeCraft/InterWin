import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Clock, Users } from 'lucide-react';

import { internshipListings } from './InternshipListingPage';

const InternshipDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const internship = internshipListings.find(internship => internship.id === parseInt(id));

    if (!internship) {
        return <div>Internship not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4 bg-gray-100">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
                <ArrowLeft size={20} className="mr-2" />
                Back to Internship Listings
            </button>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{internship.title}</h1>
                        <div className="flex items-center mt-2">
                            <span className="text-gray-600 mr-2">{internship.company}</span>
                        </div>
                    </div>
                    <img src={internship.logo} alt={`${internship.company} logo`} className="w-16 h-16 object-contain rounded-full border-2 border-gray-200" />
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center"><Clock size={16} className="mr-1" />{internship.duration}</span>
                    <span className="flex items-center">Stipend: {internship.stipend}</span>
                    <span className="flex items-center"><MapPin size={16} className="mr-1" />{internship.location}</span>
                </div>
                <div className="mt-4 flex gap-2">
                    <button className="text-white rounded-full hover:bg-blue-600 bg-gradient-to-r from-purple-500 to-blue-500 font-semibold shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-blue-600 py-2 px-4">Apply Now!</button>
                </div>
                <div className="mt-4 flex gap-4 text-sm text-gray-500">
                    <span className="flex items-center"><Clock size={16} className="mr-1" />Start Date: {internship.startDate}</span>
                </div>
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Internship description</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {internship.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Key Responsibilities</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {internship.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Required Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">About company</h2>
                    <p className="text-gray-700">{internship.aboutCompany}</p>
                </div>
            </div>
        </div>
    );
};

export default InternshipDetailsPage;