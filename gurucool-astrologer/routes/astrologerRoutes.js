const express = require('express');
const router = express.Router();
const FlowController = require('../controllers/FlowController');

// GET all astrologers and their flow details
router.get('/astrologers', (req, res) => {
  const astrologers = FlowController.getAstrologers();
  res.status(200).json(astrologers);
});

// POST to distribute users among astrologers
router.post('/distribute', (req, res) => {
  const distributedUsers = FlowController.distributeUsers();
  res.status(200).json({
    message: 'Users have been distributed',
    users: distributedUsers
  });
});

// POST to toggle top astrologer status
router.post('/astrologers/toggleTop', (req, res) => {
  const { astrologerId } = req.body;
  const astrologer = FlowController.toggleTopAstrologer(astrologerId);

  if (astrologer) {
    res.status(200).json({
      message: `Astrologer ${astrologer.name} top status updated.`,
      astrologer
    });
  } else {
    res.status(404).json({ message: 'Astrologer not found' });
  }
});

module.exports = router;
