// updateOne untuk merubah satu document
// updateOne({filter}, {update}, {option})
    // update products set category = "food" where _id = 1
    db.product.updateOne({
        _id: 1
    },{
        $set: {
            category: "food"
        }
    });
    // update products set category = "food" where _id = 2
    db.product.updateOne({
        _id: 2
    },{
        $set: {
            category: "food"
        }
    });

// updateMany untuk merubah banyak document
// updateMany({filter}, {update}, {option})
    // update products set tags = ["food"] where category = "food" and tags is null
    db.product.updateMany({
        $and:[
            {
                category: {
                    $eq: "food"
                }
            },
            {
                tags: {
                    $exists: false
                }
            }
        ]
    },{
        $set: {
            tags: ["food"]
        }
    });

    // update products set wrong = "wrong"
    db.product.updateMany({}, [
        {
            $set: {
                wrong: "wrong"
            }
        }
    ]);
    // update products set wrong = null
    db.product.updateMany({}, [
        {
            $set: {
                wrong: null
            }
        }
    ]);

    db.product.updateMany({}, [
        {
            $unset: ["wrong"]
        }
    ]);

    // insert wrong document
    db.product.insertMany(([
        {
            _id: 9,
            name: "Ups Salah",
            wrong: "Salah Lagi"
        }
    ]));
// replaceOne() mengubah total satu document dengan document baru
db.product.replaceOne({
    _id: 9
},{
    name: "Adidas Pulseboost HD Running Shoes Sepatu lari Pria",
    price: new NumberLong(1100000),
    category: "shoes",
    tags: [
        "adidas", "shoes", "running"
    ]
});