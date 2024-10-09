const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const authRoutes = require('./routes/auth'); // Importing auth routes

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Users", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Use auth routes
app.use('/api', authRoutes); // Prefixing routes with /api

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
