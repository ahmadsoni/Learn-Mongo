// drop current index text
db.product.dropIndex("name_text_category_text");

// create index text
db.product.createIndex({
    name:"text",
    category: "text",
    tags: "text"
},{
    weight: {
        name: 10,
        category: 5,
        tags: 1
    }
});

// search products with text "mie"
db.product.find({
    $text: {
        $search: "mie"
    }
}).explain();

// search products with text "mie" OR "laptop"
db.product.find({
    $text: {
        $search: "mie laptop"
    }
});

// search products with text "mie sedap"
db.product.find({
    $text: {
        $search: '"mie sedap"'
    }
});

// search products with text "mie" and NOT "sedap"
db.product.find({
    $text: {
        $search: '"mie -sedap"'
    }
});

// Debugging query optimization
db.product.find({
    $text: {
        $search: "mie -sedap"
    }
}).explain();