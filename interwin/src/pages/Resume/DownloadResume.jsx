import React from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadResume = () => {
    const location = useLocation();
    const { formData, templateId } = location.state || {};

    const downloadResume = () => {
        const input = document.getElementById('resumeContent');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgProps= pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save("resume.pdf");
            });
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-8">
                <div className="flex-1">
                
                    <span className='text-2xl font-extrabold text-left bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text'>Your resume is ready...</span>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">1</div>
                        <div className="h-1 w-16 bg-gray-300 mx-2"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">2</div>
                        <div className="h-1 w-16 bg-gray-300 mx-2"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">3</div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>Choose template</span>
                        <span>Enter your details</span>
                        <span>Download resume</span>
                    </div>
                </div>
                <div className="flex-1"></div>
            </div>

            <div id="resumeContent" className="bg-white p-6 rounded-lg shadow mb-6">
                <h1 className="text-3xl font-bold mb-4">{formData.firstName} {formData.lastName}</h1>
                <p className="text-xl mb-2">{formData.jobTitle}</p>
                <p className="mb-4">{formData.email} | {formData.phone}</p>
                <p>{formData.city}, {formData.country}</p>
                
                <h2 className="text-2xl font-semibold mt-6 mb-2">Professional Summary</h2>
                <p>{formData.professionalSummary}</p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Employment History</h2>
                {formData.employmentHistory.map((job, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-xl font-semibold">{job.position} at {job.company}</h3>
                        <p>{job.startDate} - {job.endDate}</p>
                        <p>{job.description}</p>
                    </div>
                ))}

                <h2 className="text-2xl font-semibold mt-6 mb-2">Education</h2>
                {formData.education.map((edu, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-xl font-semibold">{edu.degree} in {edu.fieldOfStudy}</h3>
                        <p>{edu.institution}</p>
                        <p>{edu.startDate} - {edu.endDate}</p>
                    </div>
                ))}

                <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
                <ul className="list-disc list-inside">
                    {formData.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Projects</h2>
                {formData.projects.map((project, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-xl font-semibold">{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}

                <h2 className="text-2xl font-semibold mt-6 mb-2">Extra-Curricular Activities</h2>
                {formData.extraCurricularActivities.map((activity, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-xl font-semibold">{activity.name}</h3>
                        <p>{activity.description}</p>
                    </div>
                ))}

                <h2 className="text-2xl font-semibold mt-6 mb-2">Hobbies</h2>
                <ul className="list-disc list-inside">
                    {formData.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Certifications</h2>
                {formData.certifications.map((cert, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-xl font-semibold">{cert.name}</h3>
                        <p>Issuer: {cert.issuer}</p>
                        <p>Date: {cert.date}</p>
                        <p>{cert.description}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <button
                    onClick={downloadResume}
                    className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-green-600"
                >
                    Download Resume
                </button>
            </div>
        </div>
    );
};

export default DownloadResume;