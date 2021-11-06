const express = require("express");
let mongo = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/jsonPlaceholder";
let ObjectId = mongo.ObjectId;
const client = MongoClient.connect(url);
const dbName = "jsonPlaceholder";


function getTodo(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) { console.log(err); }
        let dbo = db.db(dbName);
        const params = { _id: ObjectId(req.params.id) };
        dbo.collection("todos").findOne(params, function(err, todo) {
            if (err) { console.log(err); }

            if (todo) {
                res.send(todo);
            } else { res.sendStatus(404) }
            db.close();
        })
    })
}

function findAndDeleteTodo(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) { console.log(err); }
        let dbo = db.db(dbName);
        const params = { _id: ObjectId(req.params.id) };
        dbo.collection("todos").findOneAndDelete(params, function(err, deletedTodo) {
            if (err) { console.log(err); }

            if (deletedTodo.value) {
                console.log(deletedTodo);
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
        const params = { _id: ObjectId(req.params.id) };
        console.log(params);
        dbo.collection("todos").findOneAndUpdate(params, { $set: newTodo }, (err, todo) => {
            if (err) { console.log(err); }
            if (!Number(newTodo.userId) || !Number(newTodo.id)) {
                res.sendStatus(404);
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


module.exports = { getTodo, findAndDeleteTodo, findAndUpdateTodo };