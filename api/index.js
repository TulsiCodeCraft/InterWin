
// File: /api/index.js
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UsersModel = require('./models/Users');
const bodyParser = require('body-parser');
const hiringFormRoutes = require('./routes/hiringFormRoutes');

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
      } else {
        res.json("No record existed")
      }
    })
});

app.post('/register', (req, res) => {
  UsersModel.create(req.body)
    .then(Users => res.json(Users))
    .catch(err => res.json(err))
});

app.use('/api/hiring-forms', hiringFormRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});


const authRoutes = require('./routes/auth'); // Importing auth routes




// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Users", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Use auth routes
app.use('/api', authRoutes); // Prefixing routes with /api

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

