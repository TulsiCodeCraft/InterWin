const HiringForm = require('../models/HiringForm');

exports.createHiringForm = async (req, res) => {
  try {
    const newHiringForm = new HiringForm(req.body);
    const savedHiringForm = await newHiringForm.save();
    res.status(201).json(savedHiringForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllHiringForms = async (req, res) => {
    try {
      const hiringForms = await HiringForm.find();
      res.status(200).json(hiringForms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };