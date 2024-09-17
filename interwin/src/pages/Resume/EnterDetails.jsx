import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EnterDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const templateId = location.state?.templateId;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        jobTitle: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        professionalSummary: '',
        employmentHistory: [{ company: '', position: '', startDate: '', endDate: '', description: '' }],
        skills: [''],
        projects: [{ name: '', description: '' }],
        extraCurricularActivities: [{ name: '', description: '' }],
        education: [{ institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '' }],
        hobbies: [''],
        certifications: [{ name: '', issuer: '', date: '', description: '', certificateFile: null }],
    });

    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleArrayInputChange = (index, field, subfield, value) => {
        const newArray = [...formData[field]];
        if (subfield) {
            newArray[index][subfield] = value;
        } else {
            newArray[index] = value;
        }
        setFormData({ ...formData, [field]: newArray });
    };

    const handleFileChange = (index, field, e) => {
        const file = e.target.files[0];
        const newArray = [...formData[field]];
        newArray[index].certificateFile = file;
        setFormData({ ...formData, [field]: newArray });
    };

    const addArrayItem = (field) => {
        const newItem = {
            employmentHistory: { company: '', position: '', startDate: '', endDate: '', description: '' },
            skills: '',
            projects: { name: '', description: '' },
            extraCurricularActivities: { name: '', description: '' },
            education: { institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '' },
            hobbies: '',
            certifications: { name: '', issuer: '', date: '', description: '', certificateFile: null },
        }[field];
        setFormData({ ...formData, [field]: [...formData[field], newItem] });
    };

    const removeArrayItem = (field, index) => {
        const newArray = formData[field].filter((_, i) => i !== index);
        setFormData({ ...formData, [field]: newArray });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/download-resume', { state: { formData, templateId } });
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-8">
                <div className="flex-1">
                    <span className='text-2xl font-extrabold text-left text-purple-600'>InterWin</span>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">1</div>
                        <div className="h-1 w-16 bg-gray-300 mx-2"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">2</div>
                        <div className="h-1 w-16 bg-gray-300 mx-2"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">3</div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>Choose template</span>
                        <span>Enter your details</span>
                        <span>Download resume</span>
                    </div>
                </div>
                <div className="flex-1"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-purple-700">Personal Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-slate-300 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-slate-300 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="jobTitle"
                            placeholder="Job Title"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-slate-300 rounded"
                            required
                        />
                        <input
                            type="file"
                            name="photo"
                            className="w-full px-3 py-2 border border-slate-300 rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-slate-300 rounded"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-slate-300 rounded"
                        />
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-slate-300 rounded"
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-slate-300 rounded"
                        />
                    </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-purple-700">Professional Summary</h2>
                    <textarea
                        name="professionalSummary"
                        placeholder="Enter your professional summary"
                        value={formData.professionalSummary}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded h-32"
                        required
                    />
                </div>

                <div className="bg-purple-50 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-purple-700">Employment History</h2>
                    {formData.employmentHistory.map((job, index) => (
                        <div key={index} className="mb-4 p-4 border rounded">
                            <input
                                type="text"
                                placeholder="Company"
                                value={job.company}
                                onChange={(e) => handleArrayInputChange(index, 'employmentHistory', 'company', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded mb-2"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Position"
                                value={job.position}
                                onChange={(e) => handleArrayInputChange(index, 'employmentHistory', 'position', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded mb-2"
                                required
                            />
                            <div className="grid grid-cols-2 gap-2 mb-2">
                                <input
                                    type="date"
                                    placeholder="Start Date"
                                    value={job.startDate}
                                    onChange={(e) => handleArrayInputChange(index, 'employmentHistory', 'startDate', e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded"
                                    required
                                />
                                <input
                                    type="date"
                                    placeholder="End Date"
                                    value={job.endDate}
                                    onChange={(e) => handleArrayInputChange(index, 'employmentHistory', 'endDate', e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded"
                                />
                            </div>
                            <textarea
                                placeholder="Job Description"
                                value={job.description}
                                onChange={(e) => handleArrayInputChange(index, 'employmentHistory', 'description', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded h-24 mb-2"
                                required
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => removeArrayItem('employmentHistory', index)}
                                    className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addArrayItem('employmentHistory')}
                        className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                    >
                        Add Employment
                    </button>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-purple-700">Education</h2>
                    {formData.education.map((edu, index) => (
                        <div key={index} className="mb-4 p-4 border rounded">
                            <input
                                type="text"
                                placeholder="Institution"
                                value={edu.institution}
                                onChange={(e) => handleArrayInputChange(index, 'education', 'institution', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded mb-2"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Degree"
                                value={edu.degree}
                                onChange={(e) => handleArrayInputChange(index, 'education', 'degree', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded mb-2"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Field of Study"
                                value={edu.fieldOfStudy}
                                onChange={(e) => handleArrayInputChange(index, 'education', 'fieldOfStudy', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded mb-2"
                                required
                            />
                            <div className="grid grid-cols-2 gap-2 mb-2">
                                <input
                                    type="date"
                                    placeholder="Start Date"
                                    value={edu.startDate}
                                    onChange={(e) => handleArrayInputChange(index, 'education', 'startDate', e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded"
                                    required
                                />
                                <input
                                    type="date"
                                    placeholder="End Date"
                                    value={edu.endDate}
                                    onChange={(e) => handleArrayInputChange(index, 'education', 'endDate', e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded"
                                />
                            </div>
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => removeArrayItem('education', index)}
                                    className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addArrayItem('education')}
                        className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                    >
                        Add Education
                    </button>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-purple-700">Skills</h2>
                    {formData.skills.map((skill, index) => (
                        <div key={index} className="mb-2 flex">
                            <input
                                type="text"
                                placeholder="Skill"
                                value={skill}
                                onChange={(e) => handleArrayInputChange(index, 'skills', null, e.target.value)}
                                className="flex-grow px-3 py-2 border border-slate-300 rounded mr-2"
                                required
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => removeArrayItem('skills', index)}
                                    className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addArrayItem('skills')}
                        className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                    >
                        Add Skill
                    </button>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-purple-700">Projects</h2>
                    {formData.projects.map((project, index) => (
                        <div key={index} className="mb-4 p-4 border rounded">
                            <input
                                type="text"
                                placeholder="Project Name"
                                value={project.name}
                                onChange={(e) => handleArrayInputChange(index, 'projects', 'name', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded mb-2"
                                required
                            />
                            <textarea
                                placeholder="Project Description"
                                value={project.description}
                                onChange={(e) => handleArrayInputChange(index, 'projects', 'description', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded h-24 mb-2"
                                required
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => removeArrayItem('projects', index)}
                                    className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addArrayItem('projects')}
                        className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                    >
                        Add Project
                    </button>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-purple-700">Extra Curricular Activities</h2>
                    {formData.extraCurricularActivities.map((activity, index) => (
                        <div key={index} className="mb-4 p-4 border rounded">
                            <input
                                type="text"
                                placeholder="Activity Name"
                                value={activity.name}
                                onChange={(e) => handleArrayInputChange(index, 'extraCurricularActivities', 'name', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded mb-2"
                                required
                            />
                            <textarea
                                placeholder="Activity Description"
                                value={activity.description}
                                onChange={(e) => handleArrayInputChange(index, 'extraCurricularActivities', 'description', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded h-24 mb-2"
                                required
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => removeArrayItem('extraCurricularActivities', index)}
                                    className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addArrayItem('extraCurricularActivities')}
                        className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                    >
                        Add Extra Curricular Activity
                    </button>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-purple-700">Hobbies</h2>
                    {formData.hobbies.map((hobby, index) => (
                        <div key={index} className="mb-2 flex">
                            <input
                                type="text"
                                placeholder="Hobby"
                                value={hobby}
                                onChange={(e) => handleArrayInputChange(index, 'hobbies', null, e.target.value)}
                                className="flex-grow px-3 py-2 border border-slate-300 rounded mr-2"
                                required
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => removeArrayItem('hobbies', index)}
                                    className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addArrayItem('hobbies')}
                        className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                    >
                        Add Hobby
                    </button>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-purple-700">Certifications</h2>
                    {formData.certifications.map((cert, index) => (
                        <div key={index} className="mb-4 p-4 border border-slate-300 rounded">
                            <input
                                type="text"
                                placeholder="Certification Name"
                                value={cert.name}
                                onChange={(e) => handleArrayInputChange(index, 'certifications', 'name', e.target.value)}
                                className="w-full px-3 py-2 border rounded mb-2"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Issuer"
                                value={cert.issuer}
                                onChange={(e) => handleArrayInputChange(index, 'certifications', 'issuer', e.target.value)}
                                className="w-full px-3 py-2 border rounded mb-2"
                                required
                            />
                            <input
                                type="date"
                                placeholder="Date"
                                value={cert.date}
                                onChange={(e) => handleArrayInputChange(index, 'certifications', 'date', e.target.value)}
                                className="w-full px-3 py-2 border rounded mb-2"
                                required
                            />
                            <textarea
                                placeholder="Description"
                                value={cert.description}
                                onChange={(e) => handleArrayInputChange(index, 'certifications', 'description', e.target.value)}
                                className="w-full px-3 py-2 border rounded h-24 mb-2"
                                required
                            />
                            <input
                                type="file"
                                onChange={(e) => handleFileChange(index, 'certifications', e)}
                                className="w-full px-3 py-2 border rounded mb-2"
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => removeArrayItem('certifications', index)}
                                    className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addArrayItem('certifications')}
                        className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                    >
                        Add Certification
                    </button>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className=" text-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EnterDetails;