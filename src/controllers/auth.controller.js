const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password });
    res.status(201).json({ token: generateToken(user._id) });
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error
      return res.status(409).json({ message: "Email already registered." });
    }
    return res.status(500).json({ message: "Server error." });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ token: generateToken(user._id) });
};
