// Define a book constructor
function Book(title, author, yearPublished, genre) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genre = genre;
  this.getSummary = function () {
    return `${this.title} is a ${this.genre} novel written by ${this.author} in ${this.yearPublished}.`;
  };
}

// Create several book objects
let book1 = new Book("1984", "George Orwell", 1949, "Dystopian");
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
let book3 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  1925,
  "Classic"
);

// Create a library object containing an array of book objects
let library = {
  name: "City Library",
  location: "123 Library St, Booktown",
  books: [book1, book2, book3],
  getLibrarySummary: function () {
    return `${this.name} located at ${this.location} contains ${this.books.length} books.`;
  },
};

// Log the library's details
console.log(`Library Name: ${library.name}`);
console.log(`Library Location: ${library.location}`);
console.log(library.getLibrarySummary());

// Log details of each book in the library
library.books.forEach((book, index) => {
  console.log(`\nBook ${index + 1} Details:`);
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Year Published: ${book.yearPublished}`);
  console.log(`Genre: ${book.genre}`);
  console.log(`Summary: ${book.getSummary()}`);
});
