const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users } = require('../models/userModel');
require('dotenv').config();

async function register(req, res) {
  const { name, email, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const hashed = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), name, email, password: hashed };
  users.push(newUser);
  res.json({ message: 'User registered successfully' });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: 'Invalid password' });

  // Include name in JWT
  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  // Send token AND name
  res.json({ token, name: user.name });
}

module.exports = { register, login };
