const bcrypt = require("bcryptjs");
const { readUsersFromFile, writeUsersToFile } = require("../utils/fileUtils");
const e = require("express");

const registerUser = async (req, res) => {
  const { username, password, name, last_name, email } = req.body;
  if (!username || !password || !name || !last_name || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const users = readUsersFromFile();

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    username,
    password: hashedPassword,
    name,
    last_name,
    email,
  };
  users.push(newUser);
  writeUsersToFile(users);
  res.status(201).json({ message: "Hello, your account is now created!" });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  const users = readUsersFromFile();
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: "Username is not registered" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Incorrect password" });
  }
  res.status(200).json({ message: `Hi ${username}, welcome back again !` });
};

const getAllUsers = (req, res) => {
  const users = readUsersFromFile();
  res.json(users);
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const users = readUsersFromFile();
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

const updateUser = (req, res) => {
  const { name, last_name, email } = req.body;
  const users = readUsersFromFile();
  const userIndex = users.findIndex(
    (user) => user.id === parseInt(req.params.id)
  );

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  if (name) users[userIndex].name = name;
  if (last_name) users[userIndex].last_name = last_name;
  if (email) users[userIndex].email = email;

  writeUsersToFile(users);

  res.json({ message: "User updated successfully" });
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
};
