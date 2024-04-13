db.inventory.find().sort({qty: 1}) // - Sort all the documents in ascending order accroding to the condition
db.inventory.find().sort({qty: -1}) // - Sort all the documents in decending order accroding to the condition

db.inventory.find().skip(1) // - Skips the first document
db.inventory.find().skip(n) // - skips the n documents

db.inventory.find().limit(1) // - sets the limit to 1 for displaying the output(only one document will be shown)
db.inventory.find().limit(n) // - sets the limit to n for displaying the output(only n document will be shown)

// Example Getting from page 1 to 10 and skipping 0

// When this is the data

db.inventory.insertMany([
    {pageNo: 0},
    {pageNo: 1},
    {pageNo: 2},
    {pageNo: 3},
    {pageNo: 4},
    {pageNo: 5},
    {pageNo: 6},
    {pageNo: 7},
    {pageNo: 8},
    {pageNo: 9},
    {pageNo: 10},
])

db.inventory.find().skip(1).limit(10) // - To print pages 1 - 10 in ascending order
db.inventory.find().limit(10).sort({pageNo : -1}) // - To print pages 1 - 10 in decending order

