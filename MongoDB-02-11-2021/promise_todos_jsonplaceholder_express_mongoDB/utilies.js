const express = require("express");
let mongo = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/jsonPlaceholder";
let ObjectId = mongo.ObjectId;
const client = MongoClient.connect(url);
const dbName = "jsonPlaceholder";

function addTodo(req, res) {
    client
        .then((db) => {
            let dbo = db.db(dbName);
            const newTodo = req.body;
            if (newTodo.title == "" || newTodo.title == undefined) {
                res.sendStatus(400)
            } else {
                dbo.collection("todos").insertOne(newTodo, (err, result) => {
                    console.log(result);
                    res.sendStatus(201)
                    db.close()
                })
            }
        })
        .catch((err) => {
            console.log(err);
            console.log("error");
        })
}

function getTodos(req, res) {
    client
        .then((db) => {
            let dbo = db.db(dbName);
            dbo.collection("todos").find({}).toArray().then((todos) => {
                console.log(todos);
                res.sendStatus(201)
                db.close()
            });
        })
        .catch((err) => {
            console.log(err);
            console.log("error");
        })
}

function updateTodo(req, res) {
    client
        .then((db) => {
            let dbo = db.db(dbName);

            const newTodo = req.body;

            if (newTodo.title == "" || newTodo.title == undefined) {
                res.sendStatus(400)
            } else {

                const params = { _id: ObjectId(req.params.id) };

                console.log(params);
                dbo.collection("todos").updateOne(params, { $set: newTodo }).then((result) => {
                    console.log(result);
                    res.sendStatus(201)
                    db.close()
                })
            }
        })
        .catch((err) => {
            console.log(err);
            console.log("error");
        })
}

function deleteTodo(req, res) {
    client
        .then((db) => {
            let dbo = db.db(dbName);
            const params = { _id: ObjectId(req.params.id) };
            console.log(params);
            dbo.collection("todos").deleteOne(params).then((result) => {
                console.log(result);
                res.sendStatus(201)
                db.close()
            })
        })
        .catch((err) => {
            console.log(err);
            console.log("error");
        })
}

// function getTodo(req, res) {
//     MongoClient.connect(url, function(err, db) {
//         if (err) { console.log(err); }
//         let dbo = db.db(dbName);
//         const id = req.params.id;
//         dbo.collection("todos").findOne({ id: Number(id) }, function(err, todo) {
//             if (err) { console.log(err); }
//             if (todo) {
//                 res.send(todo);
//                 console.log(todo);
//             } else { res.sendStatus(404) }
//             db.close();
//         })
//     })
// }

function getTodo(req, res) {
    client
        .then((db) => {
            let dbo = db.db(dbName);
            const id = req.params.id;
            dbo.collection("todos").find({ id: Number(id) })
                .then((err, todo) => {
                    console.log(todos);
                    res.sendStatus(201)
                    db.close()
                });
        })
        .catch((err) => {
            console.log(err);
            console.log("error");
        })
}


module.exports = { addTodo, getTodos, updateTodo, deleteTodo, getTodo }