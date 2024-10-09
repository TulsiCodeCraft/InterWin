import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobListings, internshipListings } from '../../../lib/dummyData';

const CompanyDetails = () => {
  const { companyId } = useParams();

  // Filter job listings and internship listings for the specific company
  const filteredJobs = jobListings.filter(job => job.companyId === companyId);
  const filteredInternships = internshipListings.filter(job => job.companyId === companyId);

  // If companyId is not present or no jobs or internships are available
  if (!companyId) {
    return <p>Error: Company ID not found!</p>;
  }

  if (filteredJobs.length === 0 && filteredInternships.length === 0) {
    return <p>No jobs or internships available for this company.</p>;
  }

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

  // Get the first job or internship to display the company details
  const companyDetails = filteredJobs.length > 0 ? filteredJobs[0] : filteredInternships[0];

  const CompanyCard = () => (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4 flex items-center">
      <img src={companyDetails.logo} alt={`${companyDetails.company} logo`} className="w-16 h-16 object-contain rounded-full border-2 border-purple-200 mr-4" />
      <h2 className="text-2xl font-semibold text-purple-700">{companyDetails.company}</h2>
    </div>
  );

  return (
    <div className="container mx-auto p-4 bg-purple-50">
      {/* Display Company Information */}
      {companyDetails && <CompanyCard />}

      {/* Job Listings */}
      <h2 className="text-2xl font-bold mt-6 text-purple-800">Available Jobs and Internships</h2>
      {filteredJobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
      {filteredInternships.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default CompanyDetails;
