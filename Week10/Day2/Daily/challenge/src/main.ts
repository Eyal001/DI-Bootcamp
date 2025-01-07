interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): string {
    const book = this.books.find((b) => b.isbn === isbn);
    if (book) {
      return `Title: ${book.title}, Author: ${book.author}, ISBN: ${
        book.isbn
      }, Published Year: ${book.publishedYear}, Genre: ${book.genre || "N/A"}`;
    }
    return "Book not found";
  }
}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }
  public listBooks(): string[] {
    return this.books.map((book) => book.title);
  }
}

const myLibrary = new DigitalLibrary("https://www.library.com");

myLibrary.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "9780743273565",
  publishedYear: 1925,
  genre: "Fiction",
});

myLibrary.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "9780451524935",
  publishedYear: 1949,
});

console.log(myLibrary.listBooks());
