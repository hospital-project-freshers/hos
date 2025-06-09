const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find().lean();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
});

router.post('/', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create patient' });
  }
});

module.exports = router;