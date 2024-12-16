const { db } = require("../config/knex.js");

const getAllPostsFromDb = () => {
  return db("posts").select("id", "title", "content").orderBy("title");
};

const getAPostFromDb = (id) => {
  return db("posts").select("id", "title", "content").where({ id: id }).first();
};

const createPostInDB = (title, content) => {
  return db("posts").insert({ title, content }).returning("*");
};

const updatePostInDb = (id, title, content) => {
  return db("posts").where({ id }).update({ title, content }).returning("*");
};

const deletePostInDb = (id) => {
  return db("posts").where({ id }).del().returning("*");
};

module.exports = {
  getAllPostsFromDb,
  getAPostFromDb,
  createPostInDB,
  updatePostInDb,
  deletePostInDb,
};
