import React, { useState } from 'react';
import { Home, FileText, History, LineChart, LogOut, Users, Plus } from 'lucide-react';
import { useJobs } from '../../context/JobContext';

const SidebarItem = ({ icon, title, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center px-6 py-3 text-white ${
      active ? 'bg-indigo-800' : 'hover:bg-indigo-600'
    }`}
  >
    {icon}
    <span className="ml-3">{title}</span>
  </button>
);

const AddHiringForm = () => {
  const { addJob } = useJobs();
  const [activeTab, setActiveTab] = useState('addHiring');
  const [formData, setFormData] = useState({
    jobTitle: '',
    department: '',
    duration: '',
    salary: '',
    location: '',
    openings: '',
    industryType: '',
    employmentType: '',
    jobDescription: '',
    education: '',
    keySkills: '',
    additionalRequirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      addJob({
        ...formData,
        openings: parseInt(formData.openings, 10)
      });
      
      setSubmitStatus({
        type: 'success',
        message: 'Job listing added successfully!'
      });

      setFormData({
        jobTitle: '',
        department: '',
        duration: '',
        salary: '',
        location: '',
        openings: '',
        industryType: '',
        employmentType: '',
        jobDescription: '',
        education: '',
        keySkills: '',
        additionalRequirements: ''
      });

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: `Failed to add job listing: ${error.message}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Side Panel */}
      <div className="w-64 bg-indigo-600 text-white flex flex-col">
        {/* Profile Section */}
        <div className="p-6 flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-indigo-400 flex items-center justify-center">
            <span className="text-xl font-bold">RP</span>
          </div>
          <div>
            <h2 className="font-semibold">Recruiter Panel</h2>
            <p className="text-sm text-indigo-200">Admin</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-6">
          <SidebarItem
            icon={<Plus className="w-5 h-5" />}
            title="Add Hiring Form"
            active={activeTab === 'addHiring'}
            onClick={() => setActiveTab('addHiring')}
          />
          <SidebarItem
            icon={<Users className="w-5 h-5" />}
            title="All Applicants"
            active={activeTab === 'applicants'}
            onClick={() => setActiveTab('applicants')}
          />
          <SidebarItem
            icon={<History className="w-5 h-5" />}
            title="History"
            active={activeTab === 'history'}
            onClick={() => setActiveTab('history')}
          />
          <SidebarItem
            icon={<LineChart className="w-5 h-5" />}
            title="Analytics"
            active={activeTab === 'analytics'}
            onClick={() => setActiveTab('analytics')}
          />
        </nav>

        {/* Logout Button */}
        <div className="p-6">
          <button className="w-full flex items-center px-4 py-2 text-white hover:bg-indigo-700 rounded">
            <LogOut className="w-5 h-5" />
            <span className="ml-3">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === 'addHiring' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg m-6">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">New Hiring Form</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Fill out the details for a new job opening.</p>
            </div>
            {submitStatus.message && (
              <div className={`px-4 py-3 ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}
            <div className="border-t border-gray-200">
              <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  {/* Job Title */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                      className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900"
                    />
                  </div>

                  {/* Department */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900"
                    />
                  </div>

                  {/* Duration */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration</label>
                    <input
                      type="text"
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 6 months, 1 year"
                      className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900"
                    />
                  </div>

                  {/* Salary */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
                    <input
                      type="text"
                      id="salary"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      required
                      placeholder="e.g., $50,000 - $70,000"
                      className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900"
                    />
                  </div>

                  {/* Location */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="e.g., New York, NY"
                      className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900"
                    />
                  </div>

                  {/* Number of Openings */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="openings" className="block text-sm font-medium text-gray-700">Number of Openings</label>
                    <input
                      type="number"
                      id="openings"
                      name="openings"
                      value={formData.openings}
                      onChange={handleChange}
                      required
                      min="1"
                      className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900"
                    />
                  </div>

                  {/* Industry Type */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="industryType" className="block text-sm font-medium text-gray-700">Industry Type</label>
                    <select
                      id="industryType"
                      name="industryType"
                      value={formData.industryType}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm h-12 text-base text-gray-900"
                    >
                      <option value="">Select industry</option>
                      <option>Technology</option>
                      <option>Finance</option>
                      <option>Healthcare</option>
                      <option>Education</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Employment Type */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">Employment Type</label>
                    <select
                      id="employmentType"
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm h-12 text-base text-gray-900"
                    >
                      <option value="">Select type</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Internship</option>
                      <option>Temporary</option>
                    </select>
                  </div>

                  {/* Job Description */}
                  <div className="col-span-6">
                    <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">Job Description</label>
                    <textarea
                      id="jobDescription"
                      name="jobDescription"
                      rows="4"
                      value={formData.jobDescription}
                      onChange={handleChange}
                      required
                      className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-base px-4 py-2 bg-gray-100 text-gray-900"
                      placeholder="Provide a detailed description of the job role, responsibilities, and expectations."
                    ></textarea>
                  </div>

                  {/* Education Requirements */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education Requirements</label>
                    <input
                      type="text"
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Bachelor's in Computer Science"
                      className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900"
                    />
                  </div>

                  {/* Key Skills */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="keySkills" className="block text-sm font-medium text-gray-700">Key Skills</label>
                    <input
                      type="text"
                      id="keySkills"
                      name="keySkills"
                      value={formData.keySkills}
                      onChange={handleChange}
                      required
                      placeholder="e.g., JavaScript, React, Node.js"
                      className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900"
                    />
                  </div>

                  {/* Additional Requirements */}
                  <div className="col-span-6">
                    <label htmlFor="additionalRequirements" className="block text-sm font-medium text-gray-700">Additional Requirements</label>
                    <textarea
                      id="additionalRequirements"
                      name="additionalRequirements"
                      rows="4"
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-base px-4 py-2 bg-gray-100 text-gray-900"
                      placeholder="List any additional requirements or qualifications for the position."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'applicants' && (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">All Applicants</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applied Date
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">John Doe</div>
                      <div className="text-sm text-gray-500">john.doe@example.com</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Software Engineer</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Under Review
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2024-03-15
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">View</button>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">History</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <ul className="divide-y divide-gray-200">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="p-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Job Posting Updated</p>
                        <p className="text-sm text-gray-500">Senior Software Engineer position details modified</p>
                      </div>
                      <div className="text-sm text-gray-500">3 hours ago</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Total Applications</h3>
                <p className="text-3xl font-bold text-indigo-600">127</p>
                <p className="text-sm text-gray-500 mt-1">+12% from last month</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Open Positions</h3>
                <p className="text-3xl font-bold text-indigo-600">8</p>
                <p className="text-sm text-gray-500 mt-1">3 new this week</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Time to Hire</h3>
                <p className="text-3xl font-bold text-indigo-600">21 days</p>
                <p className="text-sm text-gray-500 mt-1">Average across all positions</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddHiringForm;