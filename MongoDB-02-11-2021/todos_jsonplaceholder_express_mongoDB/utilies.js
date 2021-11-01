const express = require("express");
let mongo = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/jsonPlaceholder";
let ObjectId = mongo.ObjectId;
const client = MongoClient.connect(url);

function addTodo(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) { console.log(err); }
        let dbo = db.db("jsonPlaceholder");
        const newTodo = {
            title: req.body.title,
            completed: req.body.completed
        }
        dbo.collection("todos").insertOne(newTodo, (err, result) => {
            if (err) { console.log(err); }
            console.log(result);
            res.sendStatus(201).end()
            db.close()
        })
    })
}

function getTodos(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) { console.log(err); }
        let dbo = db.db("jsonPlaceholder");
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
        let dbo = db.db("jsonPlaceholder");
        const newTodo = {
            title: req.body.title,
            completed: req.body.completed
        }
        const params = { _id: ObjectId(req.params.id) };
        dbo.collection("todos").updateOne(params, { $set: newTodo }, (err, result) => {
            if (err) { console.log(err); }
            console.log(result);
            res.sendStatus(201).end()
            db.close()
        })
    })
}

function deleteTodo(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) { console.log(err); }
        let dbo = db.db("jsonPlaceholder");
        const params = { _id: ObjectId(req.params.id) };
        dbo.collection("todos").deleteOne(params, function(err, result) {
            if (err) { console.log(err); }
            console.log(result);
            res.sendStatus(201).end()
            db.close();
        })
    })
}



module.exports = { addTodo, getTodos, updateTodo, deleteTodo }