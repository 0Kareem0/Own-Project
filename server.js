// server.js
const express = require('express');
const connectDB = require('./db');
const path = require('path');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // (optional) for JSON requests

app.use(express.static(path.join(__dirname, 'public')));

// ✅ Make sure the path is correct
app.use('/auth', require('./src/routes/auth'));
app.use('/profile', require('./src/routes/profile'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
