const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// In-memory user store (replace this with a database in production)
const users = [];

// JWT secret key (ideally from .env)
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// -------------------- REGISTER CONTROLLER --------------------
const register = async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user
  const newUser = { username, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully" });
};

// -------------------- LOGIN CONTROLLER --------------------
const login = async (req, res) => {
  const { username, password } = req.body;

  // Find user
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Generate JWT
  const token = jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful", token });
};

module.exports = {
  register,
  login,
};
