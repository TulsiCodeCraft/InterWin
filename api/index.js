
// File: /api/index.js
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UsersModel = require('./models/Users');
const bodyParser = require('body-parser');
const hiringFormRoutes = require('./routes/hiringFormRoutes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
// Middleware
const mongoURI = 'mongodb://localhost:27017/job_recruiter';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Could not connect to MongoDB', err);
    process.exit(1);
  });

  app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UsersModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("The password is incorrect")
                }
            }else{
                res.json("No record existed")
            }
        })
})

app.post('/register', (req, res) => {
    UsersModel.create(req.body)
        .then(Users => res.json(Users))
        .catch(err => res.json(err))
})

//instructor login register api
app.post("/instructor-login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UsersModel.findOne({ email: email });
  
      if (!user) {
        return res.status(401).json({ message: "No record existed" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "The password is incorrect" });
      }
  
      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        'your-secret-key', // Replace with a secure secret key in production
        { expiresIn: '1h' }
      );
  
      res.json({
        message: "Success",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });
  
  // Register endpoint
  app.post('/instructor-register', async (req, res) => {
    try {
      const { name, email, password, calendlyUrl } = req.body;
  
      // Check if user already exists
      const existingUser = await UsersModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = await UsersModel.create({
        name,
        email,
        password: hashedPassword,
        calendlyUrl
      });
  
      res.status(201).json({
        message: "Registration successful",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Registration failed" });
    }
  });

// Routes


app.use('/api/hiring-forms', hiringFormRoutes);





app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

