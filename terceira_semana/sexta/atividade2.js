const book = {
  title: "Alice's Adventures In Wonderland",
  author: "Lewis Carroll",
  published: 1865,
  genre: "Fantasy",
  bookAvailability: function (i) {
    if (i === "available") {
      return true;
    } else {
      return false;
    }
  },
};

book.available = book.bookAvailability("available");

console.log(book);
