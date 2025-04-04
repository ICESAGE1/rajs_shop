const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// In-memory user store (you should replace this with a real database)
const users = [];

// Secret key for JWT (you should store this in a .env file)
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// -------------------- REGISTER --------------------
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user
  const newUser = { username, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully" });
});

// -------------------- LOGIN --------------------
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find the user
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Generate JWT token
  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ message: "Login successful", token });
});

module.exports = router;
