import React, { createContext, useContext, useState } from 'react';
import { jobListings as initialJobListings } from '../lib/dummyData';

const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState(initialJobListings);

  const addJob = (newJob) => {
    const jobId = Math.max(...jobs.map(job => job.id), 0) + 1;
    const formattedJob = {
      id: jobId,
      title: newJob.jobTitle,
      company: "Your Company Name", // You might want to make this dynamic
      location: newJob.location,
      experience: newJob.duration,
      salary: newJob.salary,
      logo: "/api/placeholder/100/100", // Placeholder logo
      tags: [
        newJob.employmentType,
        newJob.industryType,
        ...(newJob.location.toLowerCase().includes('remote') ? ['Remote'] : [])
      ],
      description: newJob.jobDescription,
      requirements: {
        education: newJob.education,
        skills: newJob.keySkills.split(',').map(skill => skill.trim()),
        additional: newJob.additionalRequirements
      }
    };
    
    setJobs([formattedJob, ...jobs]);
    return formattedJob;
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
};

export function useJobs() {
  return useContext(JobContext);
}