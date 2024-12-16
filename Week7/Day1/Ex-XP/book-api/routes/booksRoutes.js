const { Router } = require("express");
const {
  getBooks,
  getBook,
  createNewBook,
  updateExistingBook,
  deleteExistingBook,
} = require("../controllers/booksController.js");

const router = Router();

router.get("/books", getBooks);
router.get("/books/:bookId", getBook);
router.post("/books", createNewBook);
router.put("/books/:bookId", updateExistingBook);
router.delete("/books/:bookId", deleteExistingBook);

module.exports = { booksRouter: router };
