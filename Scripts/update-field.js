// $set mengubah nilai field di document
db.customers.updateOne({
    _id: 1
}, {
    $set: {
        name: "full_name"
    }
});
// $unset menghapus field di document
db.customers.updateOne({
    _id: 1
}, {
    $unset: {
        name: ""
    }
});
// $rename mengubah nama field di document
    // alter table customers change name full_name
    db.customers.updateMany({},{
        $rename: {
            name: "full_name"
        }
    });

// $inc menaikkan nilai number difield sesuai dengan jumlah tertentu
    // update products set stock = stock + 10
    db.product.updateMany({}, {
        $inc: {
            stock:  10
        }
    });

// $currentDate mengubah field menjadi waktu saat ini
    // update products set lastModifiedDate = current_date()
    db.product.updateMany({},{
        $currentDate: {
            lastModifiedDate:{
                $type: "date"
            }
        }
    });
