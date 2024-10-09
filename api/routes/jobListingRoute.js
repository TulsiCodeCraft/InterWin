import express from "express";
const router = express.Router();

import { createJobListing, getJobListings } from "../controllers/jobListingController.js";

router.post('/', createJobListing);
router.get('/', getJobListings);

module.exports = router;

