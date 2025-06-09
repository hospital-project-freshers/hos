const express = require('express');
const router = express.Router();
const DateTime = require('../models/date');


router.post('/', async (req, res) => {
  try {
    const { doctorId, date, timeSlots } = req.body;

    const newDateEntry = new DateTime({
      doctorId,
      date,
      timeSlots,
    });

    const saved = await newDateEntry.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('Error saving date:', error);
    res.status(500).json({ error: 'Failed to save date entry' });
  }
});


router.get('/', async (req, res) => {
  try {
    const dates = await DateTime.find().populate('doctorId');
    res.json(dates);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve date entries' });
  }
});

module.exports = router;