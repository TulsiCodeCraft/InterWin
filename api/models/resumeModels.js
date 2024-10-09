import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ResumeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  jobTitle: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  professionalSummary: {
    type: String,
    required: true,
    trim: true
  },
  employmentHistory: [{
    company: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    description: { type: String, trim: true }
  }],
  skills: [{
    type: String,
    trim: true
  }],
  projects: [{
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true }
  }],
  extraCurricularActivities: [{
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true }
  }],
  education: [{
    institution: { type: String, required: true, trim: true },
    degree: { type: String, required: true, trim: true },
    fieldOfStudy: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date }
  }],
  hobbies: [{
    type: String,
    trim: true
  }],
  certifications: [{
    name: { type: String, required: true, trim: true },
    issuer: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    description: { type: String, trim: true },
    certificateFile: { type: String } // This will store the file path or URL
  }]
}, {
  timestamps: true 
});

const resumeModel = mongoose.model("user-resume",ResumeSchema);

export default resumeModel;