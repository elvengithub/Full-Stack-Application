const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const { generateToken, generateRefreshToken } = require('../utils/authUtils');

exports.register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const existingUser = await userModel.findByEmail(email);
        if (existingUser) return res.status(400).json({ message: 'Email already in use.' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = await userModel.createUser({
            first_name: firstName,
            last_name: lastName,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'User registered successfully', userId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Registration failed' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findByEmail(email);
        if (!user) return res.status(400).json({ message: 'User not found.' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials.' });

        const accessToken = generateToken(user);
        const refreshToken = generateRefreshToken(user);

        res.json({ accessToken, refreshToken });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Login failed' });
    }
};
