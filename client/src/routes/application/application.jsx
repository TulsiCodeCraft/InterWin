import React from 'react';
import { formatDistanceToNow } from 'date-fns'; // Import the date-fns library for easier date manipulation

const JobHistory = () => {
  const jobHistory = [
    {
      title: 'Software Engineer',
      company: 'Tech Solutions',
      position: 'Frontend Developer',
      appliedDate: '2023-09-10', // ISO format date for easy manipulation
      companyLogo: 'https://via.placeholder.com/100?text=Tech+Solutions', // Replace with actual company logo
    },
    {
      title: 'Full Stack Developer',
      company: 'Innovatech',
      position: 'Full Stack Engineer',
      appliedDate: '2023-08-20',
      companyLogo: 'https://via.placeholder.com/100?text=Innovatech', // Replace with actual company logo
    },
    {
      title: 'Data Analyst',
      company: 'DataWorks',
      position: 'Junior Analyst',
      appliedDate: '2023-08-01',
      companyLogo: 'https://via.placeholder.com/100?text=DataWorks', // Replace with actual company logo
    },
    {
      title: 'Backend Developer',
      company: 'CodeHouse',
      position: 'Backend Developer',
      appliedDate: '2023-07-05',
      companyLogo: 'https://via.placeholder.com/100?text=CodeHouse', // Replace with actual company logo
    },
    {
      title: 'Mobile App Developer',
      company: 'Appify',
      position: 'React Native Developer',
      appliedDate: '2023-07-25',
      companyLogo: 'https://via.placeholder.com/100?text=Appify', // Replace with actual company logo
    },
  ];

  const calculateTimeAgo = (dateString) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {jobHistory.map((job, index) => (
            <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
              {/* Logo and company name container */}
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center">
                <img
                  src={job.companyLogo}
                  className="w-16 h-16 object-cover rounded-full mb-2"
                  alt={`${job.company} logo`} // Alt text for accessibility
                />
                <span className="font-semibold title-font text-gray-700">{job.company}</span>
                <span className="mt-1 text-gray-500 text-sm">{job.appliedDate}</span>
                <span className="text-sm text-gray-500">
                  {calculateTimeAgo(job.appliedDate)} {/* This will display "x days/weeks/months ago" */}
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{job.title}</h2>
                <p className="leading-relaxed">Position: {job.position}</p>
                <p className="leading-relaxed">Company: {job.company}</p>
                <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobHistory;
