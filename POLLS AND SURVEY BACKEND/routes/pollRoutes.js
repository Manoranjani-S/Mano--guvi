const express = require('express');
const { getPolls } = require('../controllers/pollController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

// Fetch all polls (user-specific)
router.get('/', authenticate, getPolls);

module.exports = router;
