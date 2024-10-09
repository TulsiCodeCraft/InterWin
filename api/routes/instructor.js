const express = require("express");
const router = express.Router();
const instructorModel = require('../models/instructor');

// User Login Route
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    instructorModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record existed");
            }
        })
        .catch(err => res.status(500).json(err));
});

// User Registration Route
router.post('/register', (req, res) => {
  instructorModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
