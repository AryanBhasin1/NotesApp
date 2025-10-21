const express = require('express');
const path = require('path');
const open = require('open').default; // auto-open browser
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/auth', authRoutes);
app.use('/notes', noteRoutes);

const PORT = process.env.PORT || 5000;

// Start server & open browser
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  open(`http://localhost:${PORT}/register.html`);
});
