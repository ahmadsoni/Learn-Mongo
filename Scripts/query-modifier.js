// count() mengambil jumlah data hasil query
    // select count(*) from products
    db.product.find({}).count();

// limit(size) membatasi jumlah data yang di dapat dari query
    // select * from products limit 4
    db.product.find({}).limit(4);

// skip(size) menghiraukan data pertama hasil query sejumlah yang di tentukan
    // select * from products limit 4 offset 2
    db.product.find({}).limit(4).skip(2);

// sort(query) mengurutkan hasil data query -1 descending, 1 ascending
    // select * from products order by name asc, category desc
    db.product.find({}).sort({
        name: 1,
        category: -1,
    });