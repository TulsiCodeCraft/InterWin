import React, { useState } from 'react';
import { Search } from 'lucide-react';

const JobListingPage = () => {
    const [profile, setProfile] = useState('');
    const [location, setLocation] = useState('');
    const [workFromHome, setWorkFromHome] = useState(false);
    const [partTime, setPartTime] = useState(false);
    const [salary, setSalary] = useState(0);
    const [experience, setExperience] = useState('');

    const jobListings = [
        {
            title: 'Client Servicing Manager',
            company: 'Enseur',
            location: 'Delhi, Gurgaon, Noida',
            duration: '1-4 years',
            salary: '₹3,00,000 - 4,00,000',
            experience: '1-4 years',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONEhY7hu3YemTy0SyShbdzQ30ITuybVCMUw&s',
            tags: ['Actively hiring'],
        },
        {
            title: 'Content Writer',
            company: 'Web3Task',
            location: 'Delhi, Greater Noida, Noida',
            duration: '1-4 years',
            salary: '₹ 2,04,000 - 2,64,000',
            experience: '1-4 years',
            logo: 'https://internshala-uploads.internshala.com/logo%2Fg5d9rsmfc92-21137.jpg.webp',
            tags: ['Actively hiring'],
        },
        {
            title: 'Teacher',
            company: 'M.D. INFOTECH',
            location: 'Delhi',
            duration: '0 years',
            salary: '₹2,00,000',
            experience: 'Fresher',
            logo: 'https://internshala-uploads.internshala.com/logo%2Fe6lg89ogt8o-24833.png.webp',
            tags: ['Actively hiring', 'Fresher Job'],
        },
        {
            title: 'Digital Marketing Specialist',
            company: 'House Of Amber',
            location: 'Mumbai',
            duration: '1-2 years',
            salary: '₹3,00,000 - 4,80,000',
            experience: '1-2 years',
            logo: 'https://internshala.com/static/images/search/placeholder_logo.svg',
            tags: ['Actively hiring'],
        },
        {
            title: 'Marketing & Admin Executive',
            company: 'DreamHii Creatives',
            location: 'Mumbai',
            duration: 'DreamHii Creatives',
            salary: '₹2,00,000 - 3,00,000',
            experience: '1-2 years',
            logo: 'https://internshala-uploads.internshala.com/logo%2F5e2fde5332d731580195411.png.webp',
            tags: ['Actively hiring', 'Fresher Job'],
        },
        {
            title: 'Field Sales Associate',
            company: 'TATA PLAY FIBER',
            location: 'Mumbai',
            duration: '1-2 years',
            salary: '₹ 2,16,000 - 2,50,000',
            experience: '0-2 years',
            logo: 'https://internshala-uploads.internshala.com/logo%2Foseckkhfj8_-5836.png.webp',
            tags: ['Actively hiring'],
        },
        {
            title: 'Full Stack Developer',
            company: 'Ripay Solution',
            location: 'Work from home',
            duration: '2 months',
            salary: '₹3,00,000 - 4,80,000',
            experience: '1-2 years',
            logo: 'https://internshala-uploads.internshala.com/logo%2F61af69f4169651638885876.png.webp',
            tags: ['Actively hiring'],
        },
        {
            title: 'Full Stack Developer',
            company: 'Growth Market Intelligence Private Limited',
            location: 'Mumbai',
            duration: '1-2 years',
            salary: '₹3,00,000 - 4,80,000',
            experience: '1-2 years',
            logo: 'https://internshala-uploads.internshala.com/logo%2F6180ebab06d9d1635838891.png.webp',
            tags: ['Actively hiring', 'Fresher Job'],
        },
    ];

    const JobCard = ({ job }) => (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-purple-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer mb-6">
            <div className="flex justify-between items-start">
                <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-purple-700 hover:text-purple-900">{job.title}</h3>
                    <p className="text-purple-600">{job.company}</p>
                    <div className="flex items-center mt-2 text-sm text-purple-500">
                        <span>{job.location}</span>
                        <span className="mx-2">•</span>
                        <span>{job.experience}</span>
                        <span className="mx-2">•</span>
                        <span>{job.salary}</span>
                    </div>
                    <div className="mt-3">
                        {job.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 object-contain rounded-full border-2 border-purple-200" />
            </div>
        </div>
    );

    return (
        <div className="container mx-auto p-4 bg-purple-50">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold">Skills That Shine, Jobs That Align!</h1>
                <p className="mt-2 text-purple-100">Find jobs with salaries up to ₹30 LPA</p>
            </div>

            <div className="bg-white p-4 mt-4 rounded-lg shadow-sm">
                <div className="flex items-center text-sm text-purple-600">
                    <span>Home</span>
                    <span className="mx-2">&gt;</span>
                    <span>Jobs</span>
                </div>
                <h2 className="text-2xl font-bold mt-4 text-purple-800">5747 Jobs</h2>
                <p className="text-sm text-purple-600">Search and Apply to Latest Job Vacancies & Openings in India</p>
            </div>

            <div className="flex mt-6 space-x-6">
                <div className="w-1/4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4 text-purple-800">Filters</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Profile</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="e.g. Data Analyst"
                                    value={profile}
                                    onChange={(e) => setProfile(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Location</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="e.g. Mumbai"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        checked={workFromHome}
                                        onChange={(e) => setWorkFromHome(e.target.checked)}
                                    />
                                    <span className="ml-2">Work from home</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        checked={partTime}
                                        onChange={(e) => setPartTime(e.target.checked)}
                                    />
                                    <span className="ml-2">Part-time</span>
                                </label>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Annual salary (in lakhs)</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="10"
                                    step="0.5"
                                    className="w-full"
                                    value={salary}
                                    onChange={(e) => setSalary(parseFloat(e.target.value))}
                                />
                                <div className="flex justify-between text-xs text-gray-600">
                                    <span>0</span>
                                    <span>10</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Years of experience</label>
                                <select
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                >
                                    <option value="">Select years of experience</option>
                                    <option value="0-1">0-1 years</option>
                                    <option value="1-3">1-3 years</option>
                                    <option value="3-5">3-5 years</option>
                                    <option value="5+">5+ years</option>
                                </select>
                            </div>
                        </div>
                        <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 mt-4">
                            Clear all
                        </button>
                    </div>
                    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <p className="text-center text-purple-600 mb-3">OR</p>
                        <div className="relative">
                            <input
                                type="text"
                                className="block w-full rounded-lg border-purple-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 pr-10"
                                placeholder="e.g. Design, Mumbai, Infosys"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 hover:text-purple-700">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-3/4">
                    {jobListings.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobListingPage;