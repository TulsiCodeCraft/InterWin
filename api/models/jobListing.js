import mongoose from "mongoose";

const jobListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: String, required: true },
  salary: { type: String, required: true },
  tags: [String],
  logo: String,
  description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('JobListing', jobListingSchema);