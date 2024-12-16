const { db } = require("../config/knex.js");

const getAllBooks = () => {
  return db("books").select("id", "title", "author", "published_year");
};

const getBookById = (id) => {
  return db("books").where("id", id).first();
};

const createBook = (book) => {
  return db("books").insert(book).returning("*");
};

const updateBook = (id, book) => {
  return db("books").where("id", id).update(book).returning("*");
};

const deleteBook = (id) => {
  return db("books").where("id", id).del();
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
