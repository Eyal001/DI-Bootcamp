import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "The Shining", author: "Stephen King", genre: "Horror" },
    { id: 2, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" },
    { id: 3, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
