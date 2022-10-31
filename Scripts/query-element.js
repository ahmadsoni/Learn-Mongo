// select * from prodyuct where category is null
db.product.find({
    category:{
        $exists: false
    }
});


// select * from product where type(category) = "string"
db.product.find({
    category: {
        $type: "string"
    }
});

// select * from product where type(price) in ("int", "long")
db.product.find({
    price: {
        $type: ["int", "long"]
    }
});