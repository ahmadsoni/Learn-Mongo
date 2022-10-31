// $expr mengunakan aggregation operation
// select *  from product where price > 1000000
db.product.find({
    $expr: {
        $gt:["$price", 1000000]
    }
});
// select *  from product where toUpper(_id) = "SONI"
db.customers.find({
    $expr: {
        $eq: [
            {$toUpper: "$_id"},
            "SONI"
        ]
    }
});
// $jsonSchema validasi document sesui dengan JSON schema
// select * from product where name is not null and category is not null
db.product.find({
    $jsonSchema: {
        required: ["name", "category"]
    }
});
// select * from product where name is not null and type(name) = "string" and type(price) = "long"
db.product.find({
    $jsonSchema: {
        required: ["name"],
        properties: {
            name: {
                bsonType: "string"
            },
            price: {
                bsonType: "long"
            }
        }
    }
});
// $mod melakukan operator operasi modulo
// select * from product where price % 5 = 0
db.product.find({
    price:{
        $mod: [5,0]
    }
});

// $regex mengambil document sesuai dengan regular expression (PCRE)
// select * from product where name like "%mie"
db.product.find({
    name: {
        $regex: /mie/,
        $options: "i"
    }
});
// select * from product where name like "%mie"
db.product.find({
    name: {
        $regex: /^Mie/
    }
});
// $text melakukan pencarion mengunakan text

// index
db.product.createIndex({
    name:"text",
    category: "text"
});

// select * from product where (name like "%mie" or name like "%sedap%")
db.product.find({
    $text: {
        $search: '"mie sedap"'
    }
});
// select * from products where name like "%mie sedap%"

// $where mengambil document dengan javascript function
// select * from customer where _id = "soni"
db.customer.find({
    $where: function(){
         this.name = "Ahmad Shonhaji"
        return this._id == "soni";
    }
});
