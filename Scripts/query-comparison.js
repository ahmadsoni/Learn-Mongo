// $eq untuk membandingkan value dengan value lain
db.customer.find({
    _id: {
        $eq: "soni"
    }
});

// $gt untuk membandingkan dengan value yang lebih besar
// select * from product where price > 1000
db.product.find({
    price: {
        $gt: 2000
    }
});

// $gte untuk membandingkan value yang lebih besar atau sama dengan value lain
// select * from product where price >= 2000
db.product.find({
    price: {
        $gte: 2000
    }
});

// lt untuk membandingkan value lebih kecil dari value lain <
db.product.find({
    price: {
        $lt: 3000
    }
});

// lte untuk membadingkan value lebih kecil atau sama dengan value lain <=
db.product.find({
    price: {
        $lte: 2000
    }
});

// insert 
db.product.insertMany([
    {
        _id: 3,
        name: "Bakso Malang",
        price: new NumberLong(2500),
        category: "food"
    },
    {
        _id: 4,
        name: "Realme 8 Pro",
        price: new NumberLong(10000000),
        category: "handphone"
    },
    {
        _id: 5,
        name: "Asus Tuf Gaming 505",
        price: new NumberLong(25000000),
        category: "laptop"
    }

]);
// $in untuk membandingkan value dengan value yang ada di array
// select * product where category in ('handphone', 'laptop') and price > 5000000
db.product.find({
    category: {
        $in: ["handphone", "laptop"]
    },
    price:{
        $gt: 5000000
    }
});

// $nin untuk membandingkan value tidak ada dalam value yang ada di array
db.product.find({
    category: {
        $nin: ["handphone", "laptop"]
    },
    price:{
        $gt: 500
    }
});


// ne untuk membuat  membadingkan value tidak sama dengan value lain
db.product.find({
    category: {
        $ne: ["handphone", "laptop"]
    },
    price:{
        $gt: 2000
    }
});