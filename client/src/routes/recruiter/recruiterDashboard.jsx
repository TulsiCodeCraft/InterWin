import React, { useState } from 'react';
import { Briefcase, Users, FileText, Plus, LogOut } from 'lucide-react';

const RecruiterDashboard = () => {
  const [activeTab, setActiveTab] = useState('addHiring');

  const renderContent = () => {
    switch (activeTab) {
      case 'addHiring':
        return <AddHiringForm />;
      case 'applicants':
        return <ApplicantsList />;
      case 'hiringForms':
        return <HiringFormsList />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Side Panel */}
      <div className="w-64 bg-purple-700 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>
        </div>
        <nav className="mt-6">
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
            icon={<FileText className="w-5 h-5" />}
            title="All Hiring Forms"
            active={activeTab === 'hiringForms'}
            onClick={() => setActiveTab('hiringForms')}
          />
        </nav>
        <div className="absolute bottom-0 w-64 p-6">
          <button className="flex items-center text-white hover:text-purple-200 transition-colors duration-200">
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {activeTab === 'addHiring' && 'Add Hiring Form'}
              {activeTab === 'applicants' && 'All Applicants'}
              {activeTab === 'hiringForms' && 'All Hiring Forms'}
            </h2>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, title, active, onClick }) => (
  <button
    className={`flex items-center w-full px-6 py-3 text-left ${
      active ? 'bg-purple-800 text-white' : 'text-purple-100 hover:bg-purple-600'
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="ml-2">{title}</span>
  </button>
);


const AddHiringForm = () => (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">New Hiring Form</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Fill out the details for a new job opening.</p>
      </div>
      <div className="border-t border-gray-200">
        <form className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
              <input type="text" id="jobTitle" name="jobTitle" className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900" />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
              <input type="text" id="department" name="department" className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900" />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration</label>
              <input type="text" id="duration" name="duration" placeholder="e.g., 6 months, 1 year" className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900" />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
              <input type="text" id="salary" name="salary" placeholder="e.g., $50,000 - $70,000" className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900" />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" id="location" name="location" placeholder="e.g., New York, NY" className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900" />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="opening" className="block text-sm font-medium text-gray-700">Number of Openings</label>
              <input type="number" id="opening" name="opening" min="1" className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900" />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="industryType" className="block text-sm font-medium text-gray-700">Industry Type</label>
              <select id="industryType" name="industryType" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm h-12 text-base text-gray-900">
                <option>Select industry</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">Employment Type</label>
              <select id="employmentType" name="employmentType" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm h-12 text-base text-gray-900">
                <option>Select type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Temporary</option>
              </select>
            </div>
            <div className="col-span-6">
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">Job Description</label>
              <textarea id="jobDescription" name="jobDescription" rows="4" className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-base px-4 py-2 bg-gray-100 text-gray-900" placeholder="Provide a detailed description of the job role, responsibilities, and expectations."></textarea>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education Requirements</label>
              <input type="text" id="education" name="education" className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900" placeholder="e.g., Bachelor's in Computer Science" />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="keySkills" className="block text-sm font-medium text-gray-700">Key Skills</label>
              <input type="text" id="keySkills" name="keySkills" className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12 text-base px-4 bg-gray-100 text-gray-900" placeholder="e.g., JavaScript, React, Node.js" />
            </div>
            <div className="col-span-6">
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">Additional Requirements</label>
              <textarea id="requirements" name="requirements" rows="4" className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-base px-4 py-2 bg-gray-100 text-gray-900" placeholder="List any additional requirements or qualifications for the position."></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );

const ApplicantsList = () => (
  <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">John Doe</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Software Engineer</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Interviewed
                  </span>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

const HiringFormsList = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {/* Sample data, replace with actual data */}
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Frontend Developer</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Department: Engineering</p>
          <p>Open Positions: 2</p>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6">
        <div className="text-sm">
          <a href="#" className="font-medium text-purple-600 hover:text-purple-500">View details</a>
        </div>
      </div>
    </div>
    {/* Add more cards as needed */}
  </div>
);

export default RecruiterDashboard;