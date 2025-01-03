const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/users", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUser);

module.exports = router;
