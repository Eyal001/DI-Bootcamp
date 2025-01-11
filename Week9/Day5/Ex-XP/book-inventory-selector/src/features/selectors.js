import { createSelector } from "@reduxjs/toolkit";

const selectBookSelector = (state) => state.books;

export const selectBooks = createSelector(
  [selectBookSelector],
  (books) => books
);

export const selectHorrorBooks = createSelector([selectBookSelector], (books) =>
  books.filter((book) => book.genre === "Horror")
);

export const selectFantasyBooks = createSelector(
  [selectBookSelector],
  (books) => books.filter((book) => book.genre === "Fantasy")
);

export const selectScienceFictionBooks = createSelector(
  [selectBookSelector],
  (books) => books.filter((book) => book.genre === "Science Fiction")
);
