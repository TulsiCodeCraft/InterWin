import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ResumePreview() {
  const [resumeInfo, setResumeInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const ResumePreview = ({ resumeId }) => {
    useEffect(() => {
      const fetchResumeData = async () => {
        try {
          setLoading(true);
          if (!resumeId) {
            throw new Error('Invalid or missing resume ID');
          }
  
          console.log('Fetching resume data for id:', resumeId);
          const response = await axios.get(`http://localhost:3001/api/resume-builder/${resumeId}`);
          console.log('Resume data received:', response.data);
          setResumeInfo(response.data);
          setLoading(false);
        } catch (err) {
          console.error('Error fetching resume data:', err);
          setError(err.response ? `Error: ${err.response.status} - ${err.response.statusText}` : err.message);
          setLoading(false);
        }
      };
  
      fetchResumeData();
    }, [resumeId]);
  
    return <div>{/* Render resume preview */}</div>;
  };
  
   // Ensure `resumeId` is properly provided as a dependency
  

  if (loading) return <div>Loading... Please wait.</div>;
  if (error) return <div>Error: {error}</div>;
  if (!resumeInfo) return <div>No resume data found. Please check the resume ID.</div>;

  return (
    <div className='my-6'>
      {/* Personal Details */}
      <h1 className='text-center font-bold text-lg mb-4'>
        {resumeInfo.firstName} {resumeInfo.lastName}
      </h1>
      <h2 className='text-center text-sm mb-2'>
        {resumeInfo.jobTitle}
      </h2>
      <p className='text-center text-xs'>
        {resumeInfo.email} | {resumeInfo.phone}
      </p>
      <p className='text-center text-xs'>
        {resumeInfo.city}, {resumeInfo.country}
      </p>

      {/* Professional Summary */}
      <h2 className='font-bold text-sm mt-4 mb-2'>
        Professional Summary
      </h2>
      <p className='text-xs'>{resumeInfo.professionalSummary}</p>

      {/* Employment History */}
      <h2 className='font-bold text-sm mt-4 mb-2'>
        Employment History
      </h2>
      {resumeInfo.employmentHistory?.map((job, index) => (
        <div key={index} className='my-5'>
          <h3 className='text-sm font-bold'>
            {job.company}
          </h3>
          <h4 className='text-xs'>{job.position}</h4>
          <p className='text-xs'>
            {new Date(job.startDate).toLocaleDateString()} - {job.endDate ? new Date(job.endDate).toLocaleDateString() : 'Present'}
          </p>
          <p className='text-xs my-2'>{job.description}</p>
        </div>
      ))}

      {/* Education */}
      <h2 className='font-bold text-sm mt-4 mb-2'>
        Education
      </h2>
      {resumeInfo.education?.map((edu, index) => (
        <div key={index} className='my-5'>
          <h3 className='text-sm font-bold'>
            {edu.institution}
          </h3>
          <h4 className='text-xs'>{edu.degree}, {edu.fieldOfStudy}</h4>
          <p className='text-xs'>
            {new Date(edu.startDate).toLocaleDateString()} - {new Date(edu.endDate).toLocaleDateString()}
          </p>
        </div>
      ))}

      {/* Skills */}
      <h2 className='font-bold text-sm mt-4 mb-2'>
        Skills
      </h2>
      <ul className='text-xs list-disc pl-5'>
        {resumeInfo.skills?.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {/* Projects */}
      <h2 className='font-bold text-sm mt-4 mb-2'>
        Projects
      </h2>
      {resumeInfo.projects?.map((project, index) => (
        <div key={index} className='my-5'>
          <h3 className='text-sm font-bold'>
            {project.name}
          </h3>
          <p className='text-xs my-2'>{project.description}</p>
        </div>
      ))}

      {/* Extra Curricular Activities */}
      <h2 className='font-bold text-sm mt-4 mb-2'>
        Extra Curricular Activities
      </h2>
      {resumeInfo.extraCurricularActivities?.map((activity, index) => (
        <div key={index} className='my-5'>
          <h3 className='text-sm font-bold'>
            {activity.name}
          </h3>
          <p className='text-xs my-2'>{activity.description}</p>
        </div>
      ))}

      {/* Hobbies */}
      <h2 className='font-bold text-sm mt-4 mb-2'>
        Hobbies
      </h2>
      <ul className='text-xs list-disc pl-5'>
        {resumeInfo.hobbies?.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      {/* Certifications */}
      <h2 className='font-bold text-sm mt-4 mb-2'>
        Certifications
      </h2>
      {resumeInfo.certifications?.map((certification, index) => (
        <div key={index} className='my-5'>
          <h3 className='text-sm font-bold'>
            {certification.name}
          </h3>
          <p className='text-xs'>Issuer: {certification.issuer}</p>
          <p className='text-xs'>{new Date(certification.date).toLocaleDateString()}</p>
          <p className='text-xs my-2'>{certification.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ResumePreview;
