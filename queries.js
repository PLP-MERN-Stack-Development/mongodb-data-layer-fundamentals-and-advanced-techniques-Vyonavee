

//Find all books in a specific genre (e.g., Fiction)
db.books.find({ genre: "Fiction" });
//Find books published after a certain year (e.g., 1951)
db.books.find({ published_year: { $gt: 1951} });

//Find books by a specific author (e.g., Paulo Coelho)
db.books.find({ author: "Paulo Coelho" });
//Update the price of a specific book
db.books.updateOne({ title: "The Alchemist" }, { $set: { price: 12.99 } });

//Delete a book by its title (eg moby Dick)
db.books.deleteOne({ title: "Moby Dick" });


// ===== TASK 3: ADVANCED  QUERIES =====
//a query to find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

//Use projection to return only the title, author, and price fields in your queries
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })


//Implement sorting to display books by price (both ascending and descending)
//Ascending
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: 1 })
//Descending
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: -1 })



//// Pagination: Page 1 (first 5 books)
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
)
.sort({ title: 1 })
.limit(5);

// Pagination: Page 2 (next 5 books)
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
)
.sort({ title: 1 })
.limit(5)
.skip(5);

// ===== TASK 4: Aggregation Pipeline =====
// aggregation pipeline to calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// aggregation pipeline to find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
]);
//a pipeline that groups books by publication decade and counts them
db.books.aggregate([
  {
    $addFields: {
      decade: {
        $multiply: [
          { $floor: { $divide: ["$published_year", 10] } },
          10
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);

// ===== TASK 5: Indexing =====
// an index on the title field for faster searches
db.books.createIndex({ title: 1 });

//compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

//Use the explain() method to demonstrate the performance improvement with your indexes
//1. Create required indexes
db.books.createIndex({ title: 1 }) // Index on title
db.books.createIndex({ author: 1, published_year: 1 }) // Compound index on author and published_year

// ===== TASK 5:  explain() =====

// 2.  query on 'title' (using index)
db.books.find({ title: "The Martian" }).explain("executionStats");

// 3. query on compound index (author + published_year)
db.books.find({
  author: "George Orwell",
  published_year: { $gt: 1940 }
}).explain("executionStats");


// db.books.find({ title: "The Martian" }).hint({ $natural: 1 }).explain("executionStats");