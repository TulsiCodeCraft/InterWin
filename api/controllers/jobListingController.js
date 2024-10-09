import JobListing from "../models/jobListing.js";

exports.createJobListing = async (req, res) => {
  try {
    const newJobListing = new JobListing(req.body);
    await newJobListing.save();
    res.status(201).json(newJobListing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getJobListings = async (req, res) => {
  try {
    const jobListings = await JobListing.find();
    res.json(jobListings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};