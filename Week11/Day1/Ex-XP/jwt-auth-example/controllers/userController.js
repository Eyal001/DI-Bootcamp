const userModel = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  registerUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await userModel.createUser(email, password);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      console.log(error);
      if (error.code === "23505") {
        res.status(400).json({ message: "Email already exists" });
        return;
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await userModel.getUserByEmail(email);
      if (!user) {
        res.status(500).json({ message: "User not found" });
        return;
      }
      const passwordMatch = await bcrypt.compare(password + "", user.password);
      if (!passwordMatch) {
        res.status(404).json({ message: "Wrong password" });
        return;
      }
      const { ACCESS_TOKEN_SECRET } = process.env;
      const accessToken = jwt.sign(
        { userid: user.id, email: user.email },
        ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie("token", accessToken, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
      });
      res.status(200).json({
        message: "Login Successfully",
        user: { userid: user.id, email: user.email },
        token: accessToken,
      });
    } catch (error) {}
  },
  getUsers: async (req, res) => {
    try {
      const users = await userModel.getUsers();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },
  logoutUser: (req, res) => {
    res.clearCookie("token");
    req.cookies.token = null;
    delete req.cookies.token;
    res.sendStatus(200);
  },
  verifyAuth: (req, res) => {
    const { userid, email } = req.user;
    const { ACCESS_TOKEN_SECRET } = process.env;
    const newAccessToken = jwt.sign({ userid, email }, ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", newAccessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });
    res.json({
      message: "Verified",
      user: { userid, email },
      token: newAccessToken,
    });
  },
};
