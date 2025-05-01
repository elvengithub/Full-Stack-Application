const express = require('express');
const router = express.Router();

const authRoutes = require('./backend/routes/auth');
const employeeRoutes = require('./backend/routes/employees');

router.use('/auth', authRoutes);
router.use('/employees', employeeRoutes);

module.exports = router;
