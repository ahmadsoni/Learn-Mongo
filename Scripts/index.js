// createIndex() membuat index baru
    // Create index at category in products collection
    db.product.createIndex({
        category: 1
    });
   
// getIndexes() melihat semua index
     // Get all indexes in products collection
     db.product.getIndexes();
     // Debugging query optimization
     db.product.find({
        category: "food"
     }).explain();

     db.product.find({}).sort({
        category: 1
     }).explain();
     // Create index at price and tags in products collection
     db.product.createIndex({
        stock: 1,
        tags: 1
     });
    //  find product by stock and tags (will use index)
    db.product.find({
        stock: 10,
        tags: "popular"
    }).explain();
    // Debugging query optimization
    db.products.find({
        stock: 10
    }).explain();

    db.products.find({
        stock: 10,
        tags: "popular"
    }).explain();
    
    db.products.find({
        tags: "popular"
    }).explain();
// dropIndex() mengahapus index
    // Drop index at category in products collection
    db.product.dropIndex({ 
        category: 1
    });