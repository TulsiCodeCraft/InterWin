const Instructor = require('../models/Instructor');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try {
        const { name, email, password, calendlyUrl, image } = req.body;
        
        const existingInstructor = await Instructor.findOne({ email });
        if (existingInstructor) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const instructor = new Instructor({
            name,
            email,
            password: hashedPassword,
            calendlyUrl,
            image
        });

        await instructor.save();
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const instructor = await Instructor.findOne({ email });

        if (!instructor) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, instructor.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.json({
            message: 'Success',
            instructor: {
                id: instructor._id,
                name: instructor.name,
                email: instructor.email,
                calendlyUrl: instructor.calendlyUrl
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};