db.inventory.find() // - Fetch all documents
db.inventory.find({qty:85}) // - Fetch the selected documents

db.inventory.find({tags:{$in:["red", "gray"]}}) // - find the documents which matches the condition