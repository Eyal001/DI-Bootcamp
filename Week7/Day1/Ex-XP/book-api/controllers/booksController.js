const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../models/booksModel");

const getBooks = async (req, res) => {
  try {
    const books = await getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await getBookById(bookId);
    if (!book) {
      res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const createNewBook = async (req, res) => {
  const { title, author, published_year } = req.body;

  try {
    const [newBook] = await createBook({ title, author, published_year });
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const updateExistingBook = async (req, res) => {
  const { bookId } = req.params;
  const { title, author, published_year } = req.body;
  try {
    const [updatedBook] = await updateBook(bookId, {
      title,
      author,
      published_year,
    });
    if (!updatedBook) {
      res.status(404).json({ error: "Book not found" });
    }
    res.json(200).json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const deleteExistingBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const result = await deleteBook(bookId);
    if (!result) {
      res.status(404).json({ message: "Book not found" });
    }
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getBooks,
  getBook,
  createNewBook,
  updateExistingBook,
  deleteExistingBook,
};
