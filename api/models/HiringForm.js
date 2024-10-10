const mongoose = require('mongoose');

const hiringFormSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  department: { type: String, required: true },
  duration: { type: String, required: true },
  salary: { type: String, required: true },
  location: { type: String, required: true },
  openings: { type: Number, required: true },
  industryType: { type: String, required: true },
  employmentType: { type: String, required: true },
  jobDescription: { type: String, required: true },
  education: { type: String, required: true },
  keySkills: { type: String, required: true },
  additionalRequirements: { type: String, required: true },
}, { collection: 'hiringforms' }); // Explicitly set the collection name

module.exports = mongoose.model('HiringForm', hiringFormSchema);