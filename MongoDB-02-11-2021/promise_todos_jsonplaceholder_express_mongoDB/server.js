const express = require("express");
const app = express();
// const port = 8080;
app.use(express.json());
let mongo = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/jsonPlaceholder";
let ObjectId = mongo.ObjectId;
const utiles = require("./utilies")
const client = MongoClient.connect(url);

// MongoClient.connect(url, function(err, db) {
//         if (err) { console.log(err); }
//         let dbo = db.db("jsonPlaceholder");
//         dbo.createCollection("todos", function(err, res) {
//             if (err) { console.log(err); }
//             console.log("Collection created!");
//             db.close();
//         })
//     })
// MongoClient.connect(url, function(err, db) {
//     if (err) { console.log(err); }
//     let dbo = db.db("jsonPlaceholder");
//     let task = { userId: 1, id: 0, title: "wash dishes", completed: false };
//     addTodos(dbo, "todos", task);
// })

// function addTodos(dbName, collectionName, todo) {
//     dbName.collection(collectionName).insertOne(todo, function(err, res) {
//         if (err) { console.log(err); }
//         console.log(res);
//     })
// }

app.post("/todos", (req, res) => {
    utiles.addTodo(req, res);
})

app.get("/todos", (req, res) => {
    utiles.getTodos(req, res);
})

app.get("/todos/:id", (req, res) => {
    utiles.getTodo(req, res);
})

app.patch("/todos/:id", (req, res) => {
    utiles.updateTodo(req, res);
})

app.delete("/todos/:id", (req, res) => {
    utiles.deleteTodo(req, res);
})

app.get("*", (req, res) => { res.send("err"); })

app.listen(port, () => {
    console.log(`server listen to port ${port}`);
});