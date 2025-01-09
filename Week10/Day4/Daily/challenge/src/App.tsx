import { useState } from "react";
import BookCard from "./Components/BookCard";
import BookForm from "./Components/BookForm";
import List from "./Components/List";
import { Book } from "./types/Book";

const App = () => {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "Brave New World", author: "Aldous Huxley" },
  ]);

  const addBook = (newBook: Book) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      <h1>Book List</h1>
      <BookForm addBook={addBook} />
      <List items={books} renderItem={(book) => <BookCard book={book} />} />
    </div>
  );
};

export default App;
