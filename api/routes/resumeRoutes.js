import express from 'express';
import resumeController from '../controllers/resumeController.js';
const router = express.Router();

// GET all resumes
router.get('/', resumeController.getAllResumes);
router.get('/:id', resumeController.getResumeById);
router.post('/', resumeController.createResume);

export default router;

 