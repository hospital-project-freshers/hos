const mongoose = require('mongoose');

const dateTimeSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: { type: Date, required: true },
  timeSlots: [String],
}, { timestamps: true });

module.exports = mongoose.model('DateTime', dateTimeSchema);