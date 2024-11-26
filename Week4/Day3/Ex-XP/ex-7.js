const allBooks = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image:
      "https://shop.mtwyouth.org/cdn/shop/files/51HSkTKlauL.jpg?v=1723488103",
    alreadyRead: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg",
    alreadyRead: false,
  },
];

const bookSection = document.querySelector(".listBooks");

allBooks.forEach((book) => {
  const divBook = document.createElement("div");
  if (book.alreadyRead == true) {
    divBook.style.color = "red";
  }

  const bookDetails = `
  <p> ${book.title}</p>
  <p> author: ${book.author}</p>
  <img src="${book.image}" width="100px" >
  `;
  divBook.innerHTML = bookDetails;
  bookSection.appendChild(divBook);
});
