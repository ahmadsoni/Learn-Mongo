// insert
db.product.insertMany([
    {
        _id: 6,
        name: "Logitech M235 Wireless Mouse",
        price: new NumberLong(175000),
        category: "laptop",
        tags: [
            "logitech", "mouse", "accessories"
        ]
    },
    {
        _id: 7,
        name: "Havit Cooler Pad Gaming 5Fan Blue Led F2082",
        price: new NumberLong(200000),
        category: "laptop",
        tags: [
            "cooler", "laptop", "accessories", "fan"
        ]
    },
    {
        _id: 8,
        name: "Samsung LC24F390FHEXXD Curved Monitor",
        price: new NumberLong(1750000),
        category: "computer",
        tags: [
            "samsung", "monitor", "computer"
        ]
    }
]);
// $all mencocokan array yang mengandung elemen-elemen tertentu tipe ini and
// select * from product where (tags = "samsung" and tags = "monitor")
db.product.find({
    tags: {
        $all: ["samsung", "monitor"]
    }
});

// $elemMatch mengambil document jika tiap element di array memenuhi kondisi tertentu tipe ini or
// select * from product where tags in ("samsung", "logitech")
db.product.find({
    tags:{
        $elemMatch: {
            $in: ["samsung", "logitech"]
        }
    }
});

// size mengambil document jika ukuran array sesuai contoh ini yang punya tags 3
// select * from product where size(tags) = 3
db.product.find({
    tags: {
        $size: 3
    }
});