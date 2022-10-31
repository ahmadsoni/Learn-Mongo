// $ mengupdate data array pertama sesuai kondisi query
    // update products set ratings = [90, 80, 70]
    db.product.updateMany({},{
        $set: {
            ratings: [90,80,70]
        }
    });
    // update first element of array, query must include array fields
    db.product.updateMany({
        ratings: 90
    },{
        $set: {
            "ratings.$": 100
        }
    });

// $[] mengupdate semua data array sesui kondisi query
    // update all element of array
    db.product.updateMany({}, {
        $set: {
            "ratings.$[]": 100
        }
    });
    // update products set ratings = [90, 80, 70]
    db.product.updateMany({},{
        $set: {
            ratings: [90,80,70]
        }
    });
// $[<identifier>] mengupdate semua data array yang sesuai kondisi array filter
    // update element of array based on arrayFilters
    db.product.updateMany({},{
        $set: {
            "ratings.$[element]": 100
        }
    },{
        arrayFilters: [
            {
                element: {
                    $gte: 80
                }
            }
        ]
    });
    
// <index> mengupdate data array sesuai dengan nomer index
    // update element of array with given index
    db.product.updateMany({},
        {
            $set: {
                "ratings.0": 50,
                "ratings.1": 60
            }
        });
        
    
// $addToset menambahkan ke array di hiraukan jika sudah ada
        // add "popular" to array if not exists
        db.product.updateOne({
            _id:1
        },{
            $addToSet: {
                tags: "populer"
            }
        });

// $pop mengahapus element pertama (-1) atau terakhir (1) array
         // remove first element of array
         db.product.updateMany({},{
            $pop: {
                ratings: -1
            }
        });

// $pull menghapus semua element array yang sesuai kondisi 
        // update products set rating = [90, 80, 70]
        db.product.updateMany({},{
            $set:{
                ratings:[90,80,70]
            }
        });
        // remove all element where ratings >= 80
        db.product.updateMany({},{
            $pull:{
                ratings:{
                    $gte:80
                }
            }
        });
// $push menambah element ke array
        // add 100 to ratings
        db.product.updateMany({},{
            $push:{
                ratings:100
            }
        });


// $pullAll mengahapus semua element di array
    // remove element 100 
    db.product.updateMany({},{
        $pullAll:{
            ratings: [100]
        }
    });
    

// $each digunakan di $addToSet dan $push untuk menambahkan multiple element
    // add 100, 200, 300 to ratings
    db.product.updateMany({},{
        $push:{
            ratings:{
                $each: [100,200,300]
            }
        }
    });
    // add trending, popular to tags
    db.product.updateMany({},{
        $addToSet: {
            tags: {
                $each: ["trending", "populer"]
            }
        }
    });

// $position digunakan di $push untuk mengubah posisi menambhakan data
     // add hot in posititon 1
     db.product.updateMany({},{
        $push: {
            tags: {
                $each: ["hot"],
                $position: 1
            }
        }
    });
// $slice digunakan di $push untuk mengubah posisi menambahkan data
    // add all element, but limit with slice
    db.product.updateMany({},{
        $push: {
            ratings: {
                $each: [100,200,300,400, 500],
                $slice: -5
            }
        }
    });

// $sort digunakan untuk mengurutkan array setelah operasi $push 
    // add all element, and sort desc
    db.product.updateMany({},{
        $push:{
            ratings:{
                $each: [100,200,300,400,500],
                $sort: -1
            }
        }
    });
   
    
    



