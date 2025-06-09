const express = require('express');
const router = express.Router();
const Confirmation = require('../models/confirmation'); 



router.post('/', async (req, res) => {
  try {
    const confirmation = new Confirmation(req.body);
    await confirmation.save();
    res.status(201).json(confirmation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const confirmations = await Confirmation.find();
    res.status(200).json(confirmations);
  } catch (error) {
    console.error(' Failed to fetch confirmations:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;