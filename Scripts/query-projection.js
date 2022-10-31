// $ limit array hanya mengembalikan data pertama yang match dengan array operator
// select _id, name, category from product
db.product.find({},
    {
        name: 1,
        category:1
});
db.product.find({},
    {
       tags: 0
});
// $elemMatch limit hanya mengembalikan data yang pertama yang match dengan kondisi query
// select _id, name, category, price, tags[first] from products where tags in ("samsung", "logitech")
db.product.find({
    tags: {
        $elemMatch: {
            $in:  ["samsung", "laptop"]
        }
    }}, {
    name: 1,
    category: 1,
    price: 1,
    "tags.$": 1
    });
    // select _id, name, category, price, tags(in ("samsung", "logitech")) from products
    db.product.find({},
        {
            _id: 0,
            name: 1,
            category: 1,
            price: 1,
            tags: {
                $elemMatch: {
                    $in: ["samsung", "laptop"]
                }
            }
        });
// $meta mengembalikan informasi metadata yang di dapat dari setiap matching document
    // select *, score from products where $search like "monitor"
    db.product.find({
        $text: {
            $search: "monitor"
        }},
        {
            score: {
                $meta:  "textScore"
            }
    });
// $slice mengontrol jumlah data yang di tampilkan pada array
    //select _id, name, price, category, tags[0,2] from products 
    db.product.find({},{
        tags: {
            $slice: 2
        }
    });

    // select _id, name, price, category, tags[last 2] from products
    db.product.find({},{
        tags: {
            $slice: -2
        }
    });
    // select _id, name, price, category, tags[from, limit] from products
    db.product.find({},{
        tags: {
            $slice: [1, 1]
        }
    });