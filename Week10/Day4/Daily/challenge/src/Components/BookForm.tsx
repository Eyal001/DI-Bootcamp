import { useState } from "react";
import { Book } from "../types/Book";

interface BookFormProps {
  addBook: (newBook: Book) => void;
}

const BookForm = ({ addBook }: BookFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuhtor] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBook: Book = {
      id: Date.now(),
      title,
      author,
    };
    addBook(newBook);
    setTitle("");
    setAuhtor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Book Author"
        value={author}
        onChange={(e) => setAuhtor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
