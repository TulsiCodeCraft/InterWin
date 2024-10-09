import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useApplicationContext } from '../../../context/ApplicationContext';
import { jobListings } from '../../../lib/dummyData';

const JobApplicationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addApplication } = useApplicationContext();

  const [jobDetails, setJobDetails] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNo: '',
    gender: '',
    currentEducationInstitute: '',
    degree: '',
    specialization: '',
    graduationStatus: '',
    graduationYear: '',
    resume: null,
    additionalDocumentsLink: '',
  });

  useEffect(() => {
    // Fetch job details based on id from dummyData
    const fetchJobDetails = () => {
      const job = jobListings.find(job => job.id === parseInt(id));
      if (job) {
        setJobDetails(job);
      } else {
        console.error('Job not found');
        // Handle job not found scenario (e.g., redirect to 404 page)
      }
    };

    fetchJobDetails();
  }, [id]);
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = {
      ...formData,
      title: jobDetails.title,
      company: jobDetails.company,
      appliedDate: new Date().toISOString().split('T')[0],
      companyLogo: 'https://via.placeholder.com/100?text=' + jobDetails.company.replace(/\s+/g, '+'),
      position: formData.degree + ' in ' + formData.specialization,
    };
    addApplication(newApplication);
    console.log('Form submitted:', newApplication);
    alert('Application submitted successfully!');
    navigate('/my-applications');
  };

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  const RequiredLabel = ({ children }) => (
    <span className="block text-gray-700 text-sm font-bold mb-2">
      {children} <span className="text-red-500">*</span>
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gradient-to-r from-purple-100 to-blue-100">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Job Details
      </button>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          Apply for {jobDetails?.title} at {jobDetails?.company}
        </h2>
        <p className="text-center text-gray-600 mb-6">{jobDetails?.location}</p>
        

        {/* Form fields */}
      
          <div className="mb-4">
          <RequiredLabel htmlFor="fullName">Full Name</RequiredLabel>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
          <RequiredLabel htmlFor="email">Email</RequiredLabel>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <RequiredLabel htmlFor="contactNo">Contact No</RequiredLabel>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contactNo"
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <RequiredLabel>Gender</RequiredLabel>
            <div className="mt-2 space-x-4">
              {['Male', 'Female', 'Other'].map((option) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value={option}
                    checked={formData.gender === option}
                    onChange={handleChange}
                    required
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <RequiredLabel htmlFor="currentEducationInstitute">Current Education Institute</RequiredLabel>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="currentEducationInstitute"
              type="text"
              name="currentEducationInstitute"
              value={formData.currentEducationInstitute}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <RequiredLabel htmlFor="degree">Degree</RequiredLabel>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="degree"
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <RequiredLabel htmlFor="specialization">Specialization</RequiredLabel>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="specialization"
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <RequiredLabel>Graduation Status</RequiredLabel>
            <div className="mt-2 space-x-4">
              {['Completed', 'Pursuing'].map((option) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="graduationStatus"
                    value={option}
                    checked={formData.graduationStatus === option}
                    onChange={handleChange}
                    required
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <RequiredLabel htmlFor="graduationYear">Graduation Year</RequiredLabel>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="graduationYear"
              type="number"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <RequiredLabel htmlFor="resume">Upload Resume</RequiredLabel>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="resume"
              type="file"
              name="resume"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              required
            />
          </div>

          <div className="mb-4">
            <RequiredLabel htmlFor="additionalDocumentsLink">Additional Documents Link</RequiredLabel>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="additionalDocumentsLink"
              type="url"
              name="additionalDocumentsLink"
              value={formData.additionalDocumentsLink}
              onChange={handleChange}
              placeholder="Paste your public Google Drive or Dropbox link here"
            />
            <p className="text-sm text-gray-600 mt-1">
              If you want to share any additional documents or files, please upload them on Google Drive or Dropbox and paste the public link in the field above.
            </p>

            {/* Add more form fields here */}
          </div>


        <div className="flex items-center justify-center mt-6">
          <button
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            type="submit"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;