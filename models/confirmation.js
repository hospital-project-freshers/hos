const mongoose = require('mongoose');

const confirmationSchema = new mongoose.Schema({
  patient: { type: String, required: true },
  age: Number,
  gender: String,
  blood: String,
  contact: String,
  // lastVisit: String,
  doctor: String,
  date: String,
  time: String,
  // timestamp: String
}, { timestamps: true });

module.exports = mongoose.model('Confirmation', confirmationSchema);