const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.json());

let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  {
    id: 2,
    title: "Brave New World",
    author: "Aldous Huxley",
    publishedYear: 1932,
  },
  {
    id: 3,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    publishedYear: 1953,
  },
];

app.get("/api/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const { bookId } = req.params;
  const book = books.find((b) => b.id == bookId);
  if (!book) {
    res.status(404).json({ message: "Book not found." });
  }
  res.status(200).json(book);
});

app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ msg: "Missing required book data" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put("/api/books/:bookId", (req, res) => {
  const { bookId } = req.params;
  const { title, author, publishedYear } = req.body;
  const bookIndex = books.findIndex((b) => b.id == bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ msg: "Book not found." });
  }

  const updateBook = {
    id: books[bookIndex].id,
    title: title || books[bookIndex].title, // Use the new value or keep the old one
    author: author || books[bookIndex].author,
    publishedYear: publishedYear || books[bookIndex].publishedYear,
  };

  books[bookIndex] = updateBook;
  res.status(200).json(updateBook);
});

app.delete("/api/books/:bookId", (req, res) => {
  const { bookId } = req.params;
  const bookIndex = books.findIndex((b) => b.id == bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ msg: "Book not found." });
  }

  books.splice(bookIndex, 1);
  res.status(200).json({ msg: "book successfully deleted" });
});
