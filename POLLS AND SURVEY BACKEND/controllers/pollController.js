const Poll = require('../models/Poll');

// Fetch all polls created by the authenticated user
const getPolls = async (req, res) => {
    try {
        const polls = await Poll.find({ createdBy: req.user.id }); // Fetch polls created by the authenticated user
        res.json(polls);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

module.exports = { getPolls };
