const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const { getAlumniDirectory } = require('../controllers/userController');

// Only logged-in, verified users can hit this endpoint
router.get('/directory', protect, getAlumniDirectory);

module.exports = router;