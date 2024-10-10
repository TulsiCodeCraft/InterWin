import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { jobListings } from '../../../lib/dummyData';
import { useJobs } from '../../../context/JobContext';

const JobListingPage = () => {
  const { jobs } = useJobs();
  const [profile, setProfile] = useState('');
  const [location, setLocation] = useState('');
  const [workFromHome, setWorkFromHome] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [salary, setSalary] = useState(0);
  const [experience, setExperience] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Helper function to safely extract salary range
  const extractSalary = (salaryStr) => {
    if (!salaryStr) return 0; // If no salary data, return 0
    const salaryRange = salaryStr.split('-'); // Split the range
    if (salaryRange.length < 2) return 0; // If there's no range, return 0
    // Extract the upper salary, remove non-numeric characters
    const upperSalary = salaryRange[1].replace(/[₹, PA]/g, '');
    return parseFloat(upperSalary) / 100000; // Convert to lakhs
  };

  // Helper function to match experience
  const matchExperience = (jobExperience, selectedExperience) => {
    if (!selectedExperience) return true;
    const jobExpRange = jobExperience.split('-');
    if (jobExpRange.length === 1) {
      return selectedExperience.includes(jobExpRange[0]);
    }
    const minExp = parseFloat(jobExpRange[0]);
    const maxExp = jobExpRange[1].includes('+') ? Infinity : parseFloat(jobExpRange[1]);
    const selectedExpRange = selectedExperience.split('-');
    const selectedMinExp = parseFloat(selectedExpRange[0]);
    const selectedMaxExp = selectedExpRange[1]?.includes('+') ? Infinity : parseFloat(selectedExpRange[1]);

    return (minExp <= selectedMaxExp) && (maxExp >= selectedMinExp);
  };

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter((job) => {
    const matchesProfile = profile === '' || job.title.toLowerCase().includes(profile.toLowerCase());
    const matchesLocation = location === '' || job.location.toLowerCase().includes(location.toLowerCase());
    const matchesWorkFromHome = !workFromHome || job.tags.includes('Remote') || job.tags.includes('Work From Home');
    const matchesPartTime = !partTime || job.tags.includes('Part-time');
    const jobSalary = extractSalary(job.salary);
    const matchesSalary = salary === 0 || jobSalary >= salary;
    const matchesExperience = experience === '' || matchExperience(job.experience, experience);
    const matchesSearchQuery =
      searchQuery === '' ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      matchesProfile &&
      matchesLocation &&
      matchesWorkFromHome &&
      matchesPartTime &&
      matchesSalary &&
      matchesExperience &&
      matchesSearchQuery
    );
  });

  const JobCard = ({ job }) => (
    <Link to={`/job/${job.id}`} className="block">
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
    </Link>
  );

  return (
    <div className="container mx-auto p-4 bg-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Skills That Shine, Jobs That Align!</h1>
        <p className="mt-2 text-purple-100">Find jobs with salaries up to ₹30 LPA</p>
      </div>

      {/* Job count and breadcrumb */}
      <div className="bg-white p-4 mt-4 rounded-lg shadow-sm">
        <div className="flex items-center text-sm text-purple-600">
          <span>Home</span>
          <span className="mx-2">&gt;</span>
          <span>Jobs</span>
        </div>
        <h2 className="text-2xl font-bold mt-4 text-purple-800">{filteredJobs.length} Jobs</h2>
        <p className="text-sm text-purple-600">Search and Apply to Latest Job Vacancies & Openings in India</p>
      </div>

      {/* Main content */}
      <div className="flex mt-6 space-x-6">
        {/* Sidebar */}
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
  
  {/* Display current salary value above the range slider */}
  <div className="text-center text-purple-700 font-bold mb-1">
    ₹{salary} LPA
  </div>

  <input
    type="range"
    min="0"
    max="60"
    step="0.5"
    className="w-full"
    value={salary}
    onChange={(e) => setSalary(parseFloat(e.target.value))}
  />
  <div className="flex justify-between text-xs text-gray-600">
    <span>0</span>
    <span>60</span>
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
            <button
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 mt-4"
              onClick={() => {
                setProfile('');
                setLocation('');
                setWorkFromHome(false);
                setPartTime(false);
                setSalary(0);
                setExperience('');
              }}
            >
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 hover:text-purple-700">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Job listings */}
        <div className="w-3/4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="text-purple-600">No jobs found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListingPage;
