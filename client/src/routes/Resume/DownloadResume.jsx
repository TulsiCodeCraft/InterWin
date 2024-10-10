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
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('resume.pdf');
            });
    };

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Header with Progress */}
            <div className="flex justify-between items-center mb-10">
                <div className="flex-1">
                    <span className="text-3xl font-extrabold text-left bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                        Your resume is ready...
                    </span>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">
                            1
                        </div>
                        <div className="h-1 w-16 bg-gray-300 mx-2"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">
                            2
                        </div>
                        <div className="h-1 w-16 bg-gray-300 mx-2"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                            3
                        </div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>Choose template</span>
                        <span>Enter your details</span>
                        <span>Download resume</span>
                    </div>
                </div>
            </div>

            {/* Resume Content */}
            <div id="resumeContent" className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                {/* Name and Contact */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold uppercase tracking-wider">{formData.firstName} {formData.lastName}</h1>
                    <p className="text-sm text-gray-600 mt-2">
                        {formData.phone} • {formData.city}, {formData.country}<br />
                        {formData.email} • linkedin.com/company/faangpath • www.faangpath.com
                    </p>
                </div>

                {/* Objective */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold uppercase border-b-2 border-gray-300 mb-2 pb-1">Objective</h2>
                    <p className="text-sm">{formData.professionalSummary}</p>
                </section>

                {/* Education */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold uppercase border-b-2 border-gray-300 mb-2 pb-1">Education</h2>
                    {formData.education.map((edu, index) => (
                        <div key={index} className="mb-2">
                            <div className="flex justify-between">
                                <strong>{edu.degree} in {edu.fieldOfStudy}, {edu.institution}</strong>
                                <span>{edu.endDate}</span>
                            </div>
                            <p className="text-sm">Relevant Coursework: {edu.relevantCoursework}</p>
                        </div>
                    ))}
                </section>

                {/* Skills */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold uppercase border-b-2 border-gray-300 mb-2 pb-1">Skills</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <strong className="text-sm">Technical Skills:</strong> {formData.skills.slice(0, 5).join(', ')}
                        </div>
                        <div>
                            <strong className="text-sm">Soft Skills:</strong> {formData.skills.slice(5).join(', ')}
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold uppercase border-b-2 border-gray-300 mb-2 pb-1">Experience</h2>
                    {formData.employmentHistory.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between">
                                <strong>{exp.position}</strong>
                                <span>{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <p className="italic">{exp.company}, {exp.location}</p>
                            <ul className="list-disc list-inside text-sm mt-2">
                                {exp.description.split('.').filter(item => item.trim()).map((item, i) => (
                                    <li key={i}>{item.trim()}.</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Projects */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold uppercase border-b-2 border-gray-300 mb-2 pb-1">Projects</h2>
                    {formData.projects.map((project, index) => (
                        <div key={index} className="mb-2">
                            <strong>{project.name}:</strong> {project.description}
                        </div>
                    ))}
                </section>

                {/* Extra-Curricular Activities */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold uppercase border-b-2 border-gray-300 mb-2 pb-1">Extra-Curricular Activities</h2>
                    <ul className="list-disc list-inside text-sm">
                        {formData.extraCurricularActivities.map((activity, index) => (
                            <li key={index}>{activity.name}: {activity.description}</li>
                        ))}
                    </ul>
                </section>

                {/* Leadership */}
                <section>
                    <h2 className="text-xl font-semibold uppercase border-b-2 border-gray-300 mb-2 pb-1">Leadership</h2>
                    <ul className="list-disc list-inside text-sm">
                        {formData.hobbies.map((hobby, index) => (
                            <li key={index}>{hobby}</li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Download Button */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={downloadResume}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-blue-600"
                >
                    Download Resume
                </button>
            </div>
        </div>
    );
};

export default DownloadResume;