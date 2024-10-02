import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ArrowLeft, Star, MapPin, Clock, Users } from 'lucide-react';


import { jobListings } from '../../../lib/dummyData';

const JobDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const job = jobListings.find(job => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }



  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Job Listings
      </button>
      <div className="bg-white rounded-lg shadow-md p-6 relative">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
            <div className="flex items-center mt-2">
              <span className="text-gray-600 mr-2">{job.company}</span>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-gray-600 ml-1">{job.rating}</span>
              </div>
              <span className="text-gray-600 ml-2">{job.reviews} Reviews</span>
            </div>
          </div>
          <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 object-contain rounded-full border-2 border-gray-200" />
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="flex items-center"><Clock size={16} className="mr-1" />{job.experience}</span>
          <span className="flex items-center">₹ {job.salary}</span>
          <span className="flex items-center"><MapPin size={16} className="mr-1" />{job.location}</span>
        </div>
        <div className="mt-4 flex gap-2">

          <button className=" text-white rounded-full hover:bg-blue-600 bg-gradient-to-r from-purple-500 to-blue-500 font-semibold shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-blue-600 py-2 px-4 ">Apply Now!</button>
        </div>
        <div className="mt-4 flex gap-4 text-sm text-gray-500">
          <span className="flex items-center"><Clock size={16} className="mr-1" />Posted: {job.postedDate}</span>
          <span className="flex items-center"><Users size={16} className="mr-1" />Openings: {job.openings}</span>
          <span>Applicants: {job.applicants}</span>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Job match score</h2>
          <div className="flex flex-wrap gap-2">
            {job.matchScores.map((score, index) => (
              <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">{score}</span>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Job description</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {job.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Key Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Role</h2>
          <p className="text-gray-700">{job.role}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Industry Type</h2>
          <p className="text-gray-700">{job.industryType}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Department</h2>
          <p className="text-gray-700">{job.department}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Employment Type</h2>
          <p className="text-gray-700">{job.employmentType}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Role Category</h2>
          <p className="text-gray-700">{job.roleCategory}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Education</h2>
          <p className="text-gray-700">UG: {job.education.ug}</p>
          <p className="text-gray-700">PG: {job.education.pg}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Key Skills</h2>
          <div className="flex flex-wrap gap-2">
            {job.keySkills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>
       



        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">About company</h2>
          <p className="text-gray-700">{job.aboutCompany}</p>
        </div>
      </div>
    </div>
  );

};

export default JobDetailsPage;