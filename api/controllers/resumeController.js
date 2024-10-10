import resumeModel from "../models/resumeModels.js"; // Adjust the path as needed
import mongoose from "mongoose";
// Get all resumes
const getAllResumes = async (req, res) => {
    try {
      const resumes = await resumeModel.find();
      res.json(resumes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Get a single resume by ID
  const getResumeById = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    
  
    // Check if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid resume ID format' });
    }
  
    try {
      const resume = await resumeModel.findById(id);
      
      // Check if the resume exists
      if (!resume) {
        return res.status(404).json({ message: 'Resume not found' });
      }
  
      // Return the resume if found
      res.json(resume);
    } catch (err) {
      // Log the error for server-side debugging and return a generic error message to the client
      console.error('Error fetching resume:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Create a new resume
const createResume = async (req, res) => {
    const resume = new resumeModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      jobTitle: req.body.jobTitle,
      email: req.body.email,
      phone: req.body.phone,
      country: req.body.country,
      city: req.body.city,
      professionalSummary: req.body.professionalSummary,
      employmentHistory: req.body.employmentHistory,
      skills: req.body.skills,
      projects: req.body.projects,
      extraCurricularActivities: req.body.extraCurricularActivities,
      education: req.body.education,
      hobbies: req.body.hobbies,
      certifications: req.body.certifications
    });
  
    try {
      const newResume = await resume.save();
      res.status(201).json(newResume);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  export default { getAllResumes, getResumeById, createResume };