// const { db } = require("../config/knex.js");
const {
  getAllPostsFromDb,
  getAPostFromDb,
  createPostInDB,
  updatePostInDb,
  deletePostInDb,
} = require("../models/postsModel.js");

const getAllPosts = async (req, res) => {
  try {
    const posts = await getAllPostsFromDb();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getAPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await getAPostFromDb(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await createPostInDB(title, content);
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await updatePostInDb(id, title, content);
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await deletePostInDb(id);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getAllPosts, getAPost, createPost, updatePost, deletePost };
