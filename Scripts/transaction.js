// session.startTransaction.js untuk memulai transaksi
// session.commitTransaction.js untuk commit transaksi
// session.abortTransaction.js untuk membatalkan transaksi
// readprefrences
// primanry semua query akan di ambil dari primary replica set
// primaryPreferred semua query di ambil dari primary replica set namun jika tidak ada primary replica set maka di ambil dari secondari 
// Setting replication
// docker-compose -f docker-compose.yml up -d
// docker container ls
// docker container exec -it mongo1 /bin/sh


rs.initiate({
    _id: 'my-mongo-set',
    members: [
        {_id: 0, host: "mongo1:27017"},
        {_id: 1, host: "mongo2:27017"},
        {_id: 2, host: "mongo3:27017"}
    ]
});

// Create collection
db.createCollection("products");
db.createCollection("orders");

// Insert products
db.product.insertMany([
    {
        _id: 1,
        name: "Indomie Ayam Bawang",
        price: new NumberLong(2000),
        quantity: 10
    },
    {
        _id: 2,
        name: "Mie Sedap",
        price: new NumberLong(2000),
        quantity: 10
    }
]);

// Sample abort transaction
var session = db.getMongo().startSession({readPreference: {mode: "primary"}});
session.startTransaction({readConcern: {level: "majority"}, writeConcern: {w:"majority"}});
session.getDatabase("test").orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong(8000),
    items: [
        {
            product_id: 1,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        },
        {
            product_id: 2,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        }
    ]
});

session.getDatabase("test").product.updateOne({
    _id: 1
},{
    $inc: {
        quantity: -2
    }
});

session.getDatabase("test").product.updateOne({
    _id: 2
},{
    $inc: {
        quantity: -2
    }
});
session.abortTransaction();
session.endSession();

// Sample commit transaction
var session = db.getMongo().startSession({readPreference: {mode: "primary"}});
session.startTransaction({readConcern:{level:"majority"},writeConcern: {w:"majority"}});
session.getDatabase("test").orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong(8000),
    items: [
        {
            product_id: 1,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        },
        {
            product_id: 2,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        }
    ]
});

session.getDatabase("test").product.updateOne({
    _id: 1
},{
    $inc: {
        quantity: -2
    }
});
session.getDatabase("test").product.updateOne({
    _id: 2
},{
    $inc: {
        quantity: -2
    }
});
session.commitTransaction();
session.endSession();