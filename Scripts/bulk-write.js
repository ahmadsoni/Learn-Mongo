// bulkWrite() melakukan operasi write(insert, update, delete) secara sekaligus
// support bulk write operation
// insertOne, updateOne, updateMany, replaceOne, deleteOne, deleteMany
db.customers.bulkWrite([
    {
        insertOne: {
            document: {
                _id: "sun",
                full_name: "suny"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "zaki",
                full_name: "zakiiii"
            }
        }
    },
    {
        updateMany: {
            filter:{
                _id: {
                    $in: ["soni", "sun", "zaki"]
                }
            },
            update: {
                $set: {
                    full_name: "Ahmad Shonhaji"
                }
            }
        }
    }
]);