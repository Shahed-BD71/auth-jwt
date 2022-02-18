const bcrypt = require("bcryptjs");
const router = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { requireLogin } = require("../middleware/auth");

// Reg user..
router.post("/register", async (req, res) => {
  const { email, name, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User Already exists" });
    }
    const hashedPass = await bcrypt.hash(password, 10);
    user = new User({
      name,
      email,
      password: hashedPass,
    });
    await user.save();
    return res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log(error.message);
  }
});

// Login User
router.post("/login", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not exists" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "User not exists" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1hr",
    });
    if (res !== undefined) {
      return res.json({ token });
    }
  } catch (error) {
    console.log(error);
  }
});

// example protected route..
router.get("/", requireLogin, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
