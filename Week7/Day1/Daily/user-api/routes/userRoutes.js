const express = require("express");
const {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/users", getUsers);

router.get("/users/:id", getUserById);

module.exports = router;
