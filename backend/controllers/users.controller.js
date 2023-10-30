const bcrypt = require("bcrypt");
const Users = require("../models/users.model");

const { generateToken } = require("../middlewares/authorize");

const register = async (req, res) => {
  const { username, password, userType } = req.body;

  const user = await Users.findOne({ username });
  if (user) {
    return res.status(401).json({
      message: "Username already exists. Choose new username or login",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Users({
      username,
      password: hashedPassword,
      userType,
    });

    await user.save();
    res.status(201).json({
      message: "User registered successfully",
      userId: user.id,
    });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findOne({ username });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid username or User not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid/Incorrect password" });
    }

    const token = generateToken(user.id);
    res.status(200).json({ token, message: "Login Successful", username });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = { register, login };
