const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user, expiresIn = '15m') => {
    return jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn });
};

const generateRefreshToken = (user, expiresIn = '7d') => {
    return jwt.sign({ sub: user.id }, process.env.JWT_SECRET, { expiresIn });
};

module.exports = { generateToken, generateRefreshToken };
