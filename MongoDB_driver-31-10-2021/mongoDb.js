const process = require("process");
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/blog";
const ObjectId = mongo.ObjectId;

const action = process.argv[2];
const DB_Name = process.argv[3];
const coll = process.argv[4];


// creating a database:

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });

// creating a collection -"posts":

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("blog");
//     dbo.createCollection("posts", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });

// creating a collection -"authors":

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("blog");
//     dbo.createCollection("authors", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });

//  pushing documents to collection-"posts":

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("blog");
//     dbo.collection("posts").insertMany([{ title: "first post", author: "author 1", creationDate: "28.10.2021", updateDate: "31.10.2021" }, { title: "second post", author: "author 2", creationDate: "29.10.2021", updateDate: "31.10.2021" }, { title: "third post", author: "author 3", creationDate: "30.10.2021", updateDate: "31.10.2021" }],
//         function(err, res) {
//             if (err) throw err;
//             console.log("1 document inserted");
//             db.close();
//         });
// });

//  pushing documents to collection-"authors":

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("blog");
//     dbo.collection("authors").insertMany([{ name: "first author", age: 20, posts: [] }, { name: "second author", age: 30, posts: [] }, { name: "third author", age: 40, posts: [] }],
//         function(err, res) {
//             if (err) throw err;
//             console.log("1 document inserted");
//             db.close();
//         });
// });

// // 1
// MongoClient.connect(url, (err, db) => {
//     if (err) { console.log(err); }
//     const dbo = db.db("blog");
//     createCollections(dbo, "bags");
// })


// //A function that creates a new - collection by the name you pass, and pushes to a - dataBase by the name you pass:

// function createCollections(dbName, collectionName) {
//     dbName.createCollection(collectionName, (err, coll) => {
//         if (err) { console.log(err); }
//         console.log(coll);
//     })
// }

// // 2
// MongoClient.connect(url, (err, db) => {
//     if (err) { console.log(err); }
//     const dbo = db.db("blog");
//     newObj = { name: "fourt author", age: 50, posts: [] };
//     insertToAuthor(dbo, "authors", newObj);
// })


// //A function that pushes a new - document by the name you pass, and pushes to the - collection you pass:
//                           ADD
function insertToAuthor(dbName, collectionName, document) {
    dbName.collection(collectionName).insertOne(document, function(err, doc) {
        if (err) { console.log(err); }
        console.log(doc);
    })
}

// // 3
// MongoClient.connect(url, (err, db) => {
//     if (err) { console.log(err); }
//     const dbo = db.db("blog");
//     getAllDocs(dbo, "posts");
// })

// A

// function that print all the - documents of the - collection you pass:
//                        PRINTS ALL
function getAllDocs(dbName, collectionName) {
    dbName.collection(collectionName).find({}).toArray(function(err, result) {
        if (err) { console.log(err); }
        console.log(result);
    })
}
// // 4 + 5
// MongoClient.connect(url, (err, db) => {
//     if (err) { console.log(err); }
//     const dbo = db.db("blog");
//     // const postsArray = [{ title: "fourt post", author: "author 4", creationDate: "31.10.2021", updateDate: "31.10.2021" }, { title: "fifth post", author: "author 5", creationDate: "01.11.2021", updateDate: "31.10.2021" }];
//     // logObjectsArray(dbo, "posts", postsArray)
//     const authorsArray = [{ name: "fourt author", age: 50, posts: [] }, { name: "fourt author", age: 60, posts: [] }];
//     logObjectsArray(dbo, "authors", authorsArray)
// })

// function logObjectsArray(dbName, collectionName, documentArray) {
//     dbName.collection(collectionName).insertMany(documentArray, (err, docs) => {
//         if (err) { console.log(err); }
//         console.log(docs);
//     })
// }
// // 6
// MongoClient.connect(url, (err, db) => {
//     if (err) { console.log(err); }
//     const dbo = db.db("blog");
//     const objId = "617e4803270dd368ccb2418f"
//     deleteDocById(dbo, "authors", objId)
// })


//                   DELETE
function deleteDocById(dbName, collectionName, documentId) {
    dbName.collection(collectionName).deleteOne({ _id: ObjectId(documentId) }, (err, res) => {
        if (err) { console.log(err); }
        console.log(res);
    })
}
// // 7
// MongoClient.connect(url, (err, db) => {
//     if (err) { console.log(err); }
//     const dbo = db.db("blog");
//     const objId = "617e81f9b07ca49798538e14";
//     const newObj = { age: 80 };
//     updateDocById(dbo, "authors", objId, newObj)
// })


//                       UPDATE
function updateDocById(dbName, collectionName, documentId, newValue) {
    dbName.collection(collectionName).updateOne({ _id: ObjectId(documentId) }, { $set: newValue }, (err, res) => {
        if (err) { console.log(err); }
        console.log(res);
    })
}
// 8
// MongoClient.connect(url, (err, db) => {
//     if (err) { console.log(err); }
//     const dbo = db.db("blog");
//     // sortBy = { age: 1 }; // ascending
//     sortBy = { age: -1 }; // descending
//     sortDocs(dbo, "authors", sortBy)
// })

// function sortDocs(dbName, collectionName, mySort) {
//     dbName.collection(collectionName).find().sort(mySort).toArray(function(err, docs) {
//         if (err) { console.log(err); }
//         console.log(docs);
//     })
// }
// 9
// MongoClient.connect(url, (err, db) => {
//     if (err) { console.log(err); }
//     const dbo = db.db("blog");
//     addPostToAuthor(dbo, "617e4803270dd368ccb24190", "617e4803270dd368ccb2418c");
// })

// function addPostToAuthor(dbName, authorId, postId) {
//     dbName.collection("authors").updateOne({ _id: ObjectId(authorId) }, { $push: { posts: postId } }, (err, res) => {
//         if (err) { console.log(err); }
//         console.log(res);
//     })
// }
// MongoClient.connect(url, (err, db) => {
//     if (err) { console.log(err); }
//     const dbo = db.db("blog");
//     const objId = "617e81f9b07ca49798538e14";
//     getDocById(dbo, "authors", objId)
// })


//                       ADD ONE
function getDocById(dbName, collectionName, documentId) {
    dbName.collection(collectionName).findOne({ _id: ObjectId(documentId) }, (err, res) => {
        if (err) { console.log(err); }
        console.log(res);
    })
}



//     HW
// // 1
// MongoClient.connect(url, (err, db) => {
//     if (err) { console.log(err); }
//     const dbo = db.db("blog");
//     addPostsToAuthor(dbo, "617e4803270dd368ccb24190", "617e4803270dd368ccb24190", "617e4803270dd368ccb24191", "617e81f9b07ca49798538e13");
// })

// function addPostsToAuthor(dbName, authorId, postId1, postId2, postId3) {
//     dbName.collection("authors").updateOne({ _id: ObjectId(authorId) }, { $push: { posts: { $each: [postId1, postId2, postId3] } } }, (err, res) => {
//         if (err) { console.log(err); }
//         console.log(res);
//     })
// }

// 2 ***********************************************************************************************
// MongoClient.connect(url, (err, db) => {
//     if (err) { console.log(err); }
//     const dbo = db.db("blog");
//     showAllAuthorsPosts(dbo);
// })

// function showAllAuthorsPosts(dbName) {
//     dbName.collection("authors").find({ posts: { $gt: 1, $lt: 3 } }).toArray(function(err, res) {
//         if (err) { console.log(err); }
//         console.log(res);
//     })
// }
// 3
MongoClient.connect(url, (err, db) => {
    if (err) { console.log(err); }
    const dbo = db.db("blog");
    // showAllAuthorsUnder40(dbo);
    // showAllAuthorsOver40(dbo);
    // showAllAuthorsBetween20To60(dbo);
    // show3AuthorsBetween20To60(dbo);
    // showAllAuthorsExceptId(dbo);
    // showAllAuthorsNames(dbo);

})

function showAllAuthorsUnder40(dbName) {
    dbName.collection("authors").find({ age: { $lt: 40 } }).toArray(function(err, res) {
        if (err) { console.log(err); }
        console.log(res);
    })
}

function showAllAuthorsOver40(dbName) {
    dbName.collection("authors").find({ age: { $gt: 40 } }).toArray(function(err, res) {
        if (err) { console.log(err); }
        console.log(res);
    })
}

function showAllAuthorsBetween20To60(dbName) {
    dbName.collection("authors").find({ age: { $lte: 60, $gte: 20 } }).toArray(function(err, res) {
        if (err) { console.log(err); }
        console.log(res);
    })
}

function showAllAuthorsExceptId(dbName) {
    dbName.collection("authors").find({}, { projection: { _id: 0 } }).toArray(function(err, res) {
        if (err) { console.log(err); }
        console.log(res);
    })
}

function showAllAuthorsNames(dbName) {
    dbName.collection("authors").find({}, { projection: { _id: 0, age: 0, posts: 0 } }).toArray(function(err, res) {
        if (err) { console.log(err); }
        console.log(res);
    })
}
//part 2
// 1
switch (action) {
    case 'add':
        let name = process.argv[5];
        let age = Number(process.argv[6]);
        let posts = process.argv[7];

        MongoClient.connect(url, (err, db) => {
            if (err) { console.log(err); }
            const dbo = db.db(DB_Name);
            const newObj = { name: name, age: age, posts: posts };
            insertToAuthor(dbo, coll, newObj);
        })
        break;


    case 'update':
        let id = process.argv[5];
        let Name = process.argv[6];
        let Age = Number(process.argv[7]);
        let Posts = process.argv[8];

        MongoClient.connect(url, (err, db) => {
            if (err) { console.log(err); }
            const dbo = db.db(DB_Name);
            const newObj = { name: Name, age: Age, posts: Posts };
            updateDocById(dbo, coll, id, newObj)
        })
        break;


    case 'delete':
        let id = process.argv[5];

        MongoClient.connect(url, (err, db) => {
            if (err) { console.log(err); }
            const dbo = db.db(DB_Name);
            deleteDocById(dbo, coll, id)
        })
        break;


    case 'logOne':
        let id = process.argv[5];

        MongoClient.connect(url, (err, db) => {
            if (err) { console.log(err); }
            const dbo = db.db(DB_Name);
            getDocById(dbo, coll, id)
        })
        break;
    case 'logAll':
        MongoClient.connect(url, (err, db) => {
            if (err) { console.log(err); }
            const dbo = db.db(DB_Name);
            getAllDocs(dbo, coll);
        })
        break;
    default:
        console.log("action not availible");
}