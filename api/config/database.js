const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/job_recruiter';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Could not connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;