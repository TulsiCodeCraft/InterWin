import React, { useState } from 'react';

const AddHiringForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    department: '',
    duration: '',
    salary: '',
    location: '',
    openings: '',
    industryType: 'Select industry',
    employmentType: 'Select type',
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
      // Update this URL to match your backend API endpoint
      const response = await fetch('http://localhost:3001/api/hiring-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          openings: parseInt(formData.openings, 10)
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      setSubmitStatus({
        type: 'success',
        message: 'Hiring form submitted successfully!'
      });
      
      // Reset form after successful submission
      setFormData({
        jobTitle: '',
        department: '',
        duration: '',
        salary: '',
        location: '',
        openings: '',
        industryType: 'Select industry',
        employmentType: 'Select type',
        jobDescription: '',
        education: '',
        keySkills: '',
        additionalRequirements: ''
      });

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: `Failed to submit form: ${error.message}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
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
                <option>Select industry</option>
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
                <option>Select type</option>
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
                required
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
  );
};

export default AddHiringForm;