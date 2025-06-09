const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3022;

// Import models
// const Patient = require('./models/patient');
// const Doctor = require('./models/doctor');
// const DateTime = require('./models/date');
// const Confirmation = require('./models/conformation');

// Import routes
const patientRoutes = require('./routes/patients');
const doctorRoutes = require('./routes/doctors');
const dateRoutes = require('./routes/dates');
const confirmationRoutes = require('./routes/confirmations');
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public','confirmation.html')));

// MongoDB connection
const mongoURI = 'mongodb+srv://ashuaswini517:Akhila%402002@cluster0.hujiyvh.mongodb.net/booking';
mongoose.connect(mongoURI);

mongoose.connection.once('open', () => console.log('MongoDB connected'));
mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err));

// Use patient routes
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/dates', dateRoutes);
app.use('/api/confirmations', confirmationRoutes);

// Serve frontend pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'confirmation.html'));
});

// app.get('/second', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'second.html'));
// });

// --- Doctors CRUD ---
// app.get('/api/doctors', async (req, res) => {
//   try {
//     const doctors = await Doctor.find();
//     res.json(doctors);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch doctors' });
//   }
// });

// app.post('/api/doctors', async (req, res) => {
//   try {
//     const doctor = new Doctor(req.body);
//     await doctor.save();
//     res.status(201).json(doctor);
//   } catch (error) {
//     res.status(400).json({ error: 'Failed to create doctor' });
//   }
// });

// // --- DateTime CRUD ---
// app.get('/api/date-times', async (req, res) => {
//   try {
//     const dateTimes = await DateTime.find();
//     res.json(dateTimes);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch date-times' });
//   }
// });

// app.post('/api/date-times', async (req, res) => {
//   try {
//     const dateTime = new DateTime(req.body);
//     await dateTime.save();
//     res.status(201).json(dateTime);
//   } catch (error) {
//     res.status(400).json({ error: 'Failed to create date-time' });
//   }
// });

// // --- Confirmations CRUD ---
// app.get('/api/confirmations', async (req, res) => {
//   try {
//     const confirmations = await Confirmation.find();
//     res.json(confirmations);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch confirmations' });
//   }
// });

// app.post('/api/conformation', async (req, res) => {
//   try {
//     const booking = new Booking(req.body);
//     await booking.save();
//     res.json({ message: 'Appointment booked successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to book appointment' });
//   }
// });

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});