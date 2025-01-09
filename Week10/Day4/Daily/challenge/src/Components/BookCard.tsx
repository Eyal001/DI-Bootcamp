import { ReactElement } from "react";
import { Book } from "../types/Book";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps): ReactElement => {
  return (
    <div>
      <h3>Title: {book.title}</h3>
      <p>Author: {book.author}</p>
    </div>
  );
};

export default BookCard;
