
// File: /api/index.js
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UsersModel = require('./models/Users');
const bodyParser = require('body-parser');
const hiringFormRoutes = require('./routes/hiringFormRoutes');
const instructorRoutes=require('./routes/instructor');
const authRoutes = require('./routes/auth'); 

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/job_recruiter';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Could not connect to MongoDB', err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });

// Routes


app.use('/api/hiring-forms', hiringFormRoutes);



// Use auth routes
app.use('/login', authRoutes);
app.use('/register', authRoutes);
app.use('/login', instructorRoutes);
app.use('/register', instructorRoutes); // Prefixing routes with /api

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

