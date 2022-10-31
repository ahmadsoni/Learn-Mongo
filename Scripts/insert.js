// insert document mahasiswa
db.mahasiswa.insertOne({
    _id:"soni",
    name:"Ahmad Shonhaji"
});

// insert document many to matkul
db.matkul.inserMany([
    {
        _id: 1,
        mapel: "Algoritma Struktur Data",
        sks: 2
    },
    {
        _id: 2,
        mapel: "Basis Data",
        sks: 2
    }
]);

// insert document one customer
db.customer.insertOne({
    _id: "soni",
    name: "Ahmad Shonhaji"
});

// inser document many  product
db.product.insertMany([
    {
        _id: 1,
        name: "Indomie Ayam Bawang",
        price: new NumberLong(2000)
    },
    {
        _id: 2,
        name: "Mie Sedap",
        price: new NumberLong(3000)
    }
]);

// insert document order
db.orders.insertOne({
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
            price: new NumberLong(3000),
            quantity: new NumberInt(1)
        }
    ]
});