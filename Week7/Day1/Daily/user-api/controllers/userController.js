const bcrypt = require("bcryptjs");
const { db } = require("../config/knex.js");
const {
  getAllUsers,
  getUserByUsername,
  createUser,
  createHashPassword,
  getUserWithId,
} = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;

    const existingUser = await getUserByUsername(username);
    if (existingUser) {
      res.status(400).json({ message: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(email, username, first_name, last_name);
    await createHashPassword(username, hashedPassword);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await getUserByUsername(username);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const hashRecord = await db("hashpwd").where({ username }).first();
    const isMatch = await bcrypt.compare(password, hashRecord.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await getUserWithId(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser, getUsers, getUserById };
