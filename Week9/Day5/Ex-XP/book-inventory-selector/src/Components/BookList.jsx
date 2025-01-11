import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectBooks,
  selectFantasyBooks,
  selectHorrorBooks,
  selectScienceFictionBooks,
} from "../features/selectors";

const BookList = () => {
  const [genre, setGenre] = useState("all Books");

  const allBooks = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const scienceFictionBooks = useSelector(selectScienceFictionBooks);

  let booksFiltered = [];

  switch (genre) {
    case "Horror":
      booksFiltered = horrorBooks;
      break;
    case "Fantasy":
      booksFiltered = fantasyBooks;
      break;
    case "Science Fiction":
      booksFiltered = scienceFictionBooks;
      break;
    default:
      booksFiltered = allBooks;
      break;
  }

  return (
    <div>
      <h1>Books Inventory: </h1>
      <select onChange={(e) => setGenre(e.target.value)} value={genre}>
        <option value="all Books">All Books</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <ul>
        {booksFiltered.map((book) => {
          return (
            <li key={book.id}>
              {" "}
              <strong>{book.title}</strong> by {book.author} ({book.genre})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
