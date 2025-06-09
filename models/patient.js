const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  gender: String,
  blood:String,
  contact: Number,
  lastvisit:Date
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);