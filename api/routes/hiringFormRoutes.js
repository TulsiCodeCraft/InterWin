const express = require('express');
const router = express.Router();
const hiringFormController = require('../controllers/hiringFormController');

router.post('/', hiringFormController.createHiringForm);
router.get('/', hiringFormController.getAllHiringForms);

module.exports = router;