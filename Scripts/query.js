// select * from customer where _id="soni"
db.customers.find({
    _id: "soni"
});

// select * from customers where name = "Ahmad Shonhaji"
db.customers.find({
    name:"Ahmad Shonhaji"
});

// select * from product where price=2000
db.product.find({
    price: 2000
});

// selct * fom orders where items.product_id = 1
db.orders.find({
    "items.product_id": 1
});
