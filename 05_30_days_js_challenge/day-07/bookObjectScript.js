// Create a book object
let book = {
  title: "1984",
  author: "George Orwell",
  yearPublished: 1949,
  genre: "Dystopian",
  getSummary: function () {
    return `${this.title} is a ${this.genre} novel written by ${this.author} in ${this.yearPublished}.`;
  },
};

// Log the book's properties
console.log(`Title: ${book.title}`); // Output: Title: 1984
console.log(`Author: ${book.author}`); // Output: Author: George Orwell
console.log(`Year Published: ${book.yearPublished}`); // Output: Year Published: 1949
console.log(`Genre: ${book.genre}`); // Output: Genre: Dystopian

// Call the getSummary method and log the result
console.log(book.getSummary());
// Output: 1984 is a Dystopian novel written by George Orwell in 1949.
