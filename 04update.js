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