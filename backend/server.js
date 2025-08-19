 require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // connect to MongoDB

app.get('/api/health', (req, res) => res.json({ ok: true }));

// mount routes (create routes files later)
app.use('/api/auth', require('./routes/auth'));
//app.use('/api/buses', require('./routes/buses'));
// ... schedules, bookings, payments

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
