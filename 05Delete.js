db.inventory.deleteMany({}) // - To Delete all documents

db.inventory.deleteOne({}) // - To Delete one documents

// We can also give Conditions Init

// For DeleteOne
// db.inventory.deleteOne({condition}) 
// EX -
db.inventory.deleteOne({item:"journal"}) // - Deletes the first document with item journal

// For DeleteMany

// db.inventory.deleteMany({condition}) 
// EX - 
db.inventory.deleteMany({item:"mousepad"}) // - Deletes all the documents with item mousepad

// There is one more method called remove

db.inventory.remove({}) // - Removes all the documents

// We can give condition init also

// db.inventory.remove({condition})
// EX -
db.inventory.remove({item:"mat"}) // - Deletes all the documents with item mat

// So, What is the difference between ewmove and deleteMany

// The Major Difference is the return values

// In deleteMany we get the return value of how many documents are deleted (the Number)
// In remove we get the return the writeresult of the documents which are deleted (the writeresult  get returned)