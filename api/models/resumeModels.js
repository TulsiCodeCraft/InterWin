import mongoose from "mongoose";
const Schema = mongoose.Schema;

const resumeSchema = new mongoose.Schema({
    personalDetails: {
      firstName: String,
      lastName: String,
      jobTitle: String,
      email: String,
      phone: String,
      city: String,
      country: String
    },
    professionalSummary: String,
    employmentHistory: [{
      company: String,
      position: String,
      startDate: String,
      endDate: String,
      currentlyWorking: Boolean,
      jobDescription: String
    }],
    education: [{
      institution: String,
      degree: String,
      fieldOfStudy: String,
      startDate: String,
      endDate: String
    }],
    skills: [String],
    projects: [{
      projectName: String,
      projectDescription: String
    }],
    extraCurricular: [{
      activityName: String,
      activityDescription: String
    }],
    hobbies: [String],
    certifications: [{
      certificationName: String,
      issuer: String,
      date: String,
      description: String
    }],
    themeColor: String
  });

const resumeModel = mongoose.model("user-resume",resumeSchema);

export default resumeModel;