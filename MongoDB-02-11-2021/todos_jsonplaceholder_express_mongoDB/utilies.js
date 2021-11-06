const express = require("express");
let mongo = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/jsonPlaceholder";
let ObjectId = mongo.ObjectId;
const client = MongoClient.connect(url);
const dbName = "jsonPlaceholder";

function addTodo(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) { console.log(err); }
        let dbo = db.db(dbName);
        const newTodo = req.body;
        if (newTodo.title == "" || newTodo.title == undefined) {
            res.sendStatus(400)
        } else {
            dbo.collection("todos").insertOne(newTodo, (err, result) => {
                if (err) { console.log(err); }
                console.log(result);
                res.sendStatus(201).end()
                db.close()
            })
        }
    })
}

function getTodos(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) { console.log(err); }
        let dbo = db.db(dbName);
        dbo.collection("todos").find().toArray(function(err, todos) {
            if (err) { console.log(err); }
            console.log(todos);
            res.send(todos)
            res.sendStatus(201).end()
            db.close();
        })
    })
}

function updateTodo(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) { console.log(err); }
        let dbo = db.db(dbName);
        const newTodo = req.body;
        if (newTodo.title == "" || newTodo.title == undefined) {
            res.sendStatus(400).end()
        } else {
            const params = { _id: ObjectId(req.params.id) };
            dbo.collection("todos").updateOne(params, { $set: newTodo }, (err, result) => {
                if (err) { console.log(err); }
                console.log(result);
                res.sendStatus(201).end()
                db.close()
            })
        }
    })
}

function deleteTodo(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) { console.log(err); }
        let dbo = db.db(dbName);
        const params = { _id: ObjectId(req.params.id) };
        dbo.collection("todos").deleteOne(params, function(err, result) {
            if (err) { console.log(err); }
            console.log(result);
            res.sendStatus(201).end()
            db.close();
        })
    })
}
// by id:
function getTodo(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) { console.log(err); }
        let dbo = db.db(dbName);
        const id = req.params.id;
        dbo.collection("todos").findOne({ id: Number(id) }, function(err, todo) {
            if (err) { console.log(err); }
            if (todo) {
                res.send(todo);
                console.log(todo);
            } else { res.sendStatus(404) }
            db.close();
        })
    })
}

function findAndDeleteTodo(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) { console.log(err); }
        let dbo = db.db(dbName);
        const id = req.params.id;
        dbo.collection("todos").findOneAndDelete({ id: Number(id) }, function(err, deletedTodo) {
            if (err) { console.log(err); }
            console.log(deletedTodo.value);

            if (deletedTodo.value) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }

            db.close();
        })
    })
}


function findAndUpdateTodo(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) { console.log(err); }
        const newTodo = req.body
        let dbo = db.db(dbName);
        const id = req.params.id;
        dbo.collection("todos").findOneAndUpdate({ id: Number(id) }, { $set: newTodo }, (err, todo) => {
            if (err) { console.log(err); }
            if (!Number(newTodo.userId) || !Number(newTodo.id)) {
                res.sendStatus();
            }
            if (todo.title == undefined || todo.title.length == 0) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }
            db.close()
        })
    })
}
module.exports = { addTodo, getTodos, updateTodo, deleteTodo, getTodo, findAndDeleteTodo, findAndUpdateTodo }