const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const employeeRoutes = require('./employees');

router.use('/auth', authRoutes);
router.use('/employees', employeeRoutes);

module.exports = router;
