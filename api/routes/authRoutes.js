const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/instructor-register', register);
router.post('/instructor-login', login);

module.exports = router;