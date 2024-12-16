const { Router } = require("express");
const {
  getAllPosts,
  getAPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postsController.js");

const router = Router();

router.get("/posts", getAllPosts);
router.get("/posts/:id", getAPost);
router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

module.exports = {
  postsRouter: router,
};
