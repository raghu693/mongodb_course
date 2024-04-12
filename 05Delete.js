db.inventory.deleteMany({}) // - To Delete all documents

db.inventory.deleteOne({}) // - To Delete one documents

// We can also give Conditions Init

// For DeleteMany

// db.inventory.deleteMany({condition}) 
// EX - 
db.inventory.deleteMany({item:"mousepad"}) // - Deletes all the documents with item mousepad

// For DeleteOne
// db.inventory.deleteOne({condition}) 
// EX -
db.inventory.deleteOne({item:"journal"}) // - Deletes the first document with item journal