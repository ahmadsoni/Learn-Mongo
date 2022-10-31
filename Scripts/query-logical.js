// $and mengabungkan query dengan operasi and mengembalikan nilai true
// select * from produc where category in ('laptop', handphone) and price > 2000000
db.product.find({
    $and: [{
        category: {
            $in: ["laptop", "handphone"]
        },
        price : {
            $gt: 2000000
        }
    }]
});
// $or mengabungkan query dengan operasi OR, mengembalikan documen jika salah satu kondisi benar
db.product.find({
    category: {
        $not: {
            $in: ["laptop", "handphone"]
        }
    }
});
// beetwen
db.product.find({
    $and:[{
        price: {
            $gte: 10000000,
            $lte: 20000000
        }
    },
    {
        category: {
            $ne: "food"
        }
    }
]
});
// $nor mengabungkan query dengan operasi NOR, mengembalikan document yang gagal di semua kondisi
db.product.find({
    $nor: [{
        category: "laptop"
    },
    {
        price: {
            $gt: 2000000
        }
    }]
});
// $not membalikan kondisi, mengembalikan documet yang tidak sesuai dengan kondisi
db.product.find({
    category: {
        $not: {
            $in: ["laptop", "handphone"]
        }
    }
});
