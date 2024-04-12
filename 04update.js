db.inventory.updateOne(
    { item: "mousepad" },
    {
        $set: {
            qty: 90
        },
        $currentDate: { lastUpdated: true }
    })

db.inventory.updateMany(
    { item: "mousepad" },
    {
        $set: {
            qty: 90
        },
        $currentDate: { lastUpdated: true }
    })

db.inventory.replaceOne(
    { qty: 90 },
    { qty: 69}
)