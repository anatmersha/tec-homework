const express = require("express");
let mongo = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/jsonPlaceholder";
let ObjectId = mongo.ObjectId;
const client = MongoClient.connect(url);

function addTodo(req, res) {
    client
        .then((db) => {
            let dbo = db.db("jsonPlaceholder");
            const newTodo = {
                title: req.body.title,
                completed: req.body.completed
            }
            dbo.collection("todos").insertOne(newTodo, (result) => {
                console.log(result);
                res.sendStatus(201).end()
                db.close()
            })
        })
        .catch((err) => {
            console.log(err);
            console.log("error");
        })
}

function getTodos(req, res) {
    client
        .then((db) => {
            let dbo = db.db("jsonPlaceholder");
            dbo.collection("todos").find({}).toArray().then((todos) => {
                console.log(todos);
                res.sendStatus(201).end()
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
            let dbo = db.db("jsonPlaceholder");
            const newTodo = {
                title: req.body.title,
                completed: req.body.completed
            }
            const params = { _id: ObjectId(req.params.id) };
            console.log(params);
            dbo.collection("todos").updateOne(params, { $set: newTodo }).then((result) => {
                console.log(result);
                res.sendStatus(201).end()
                db.close()
            })
        })
        .catch((err) => {
            console.log(err);
            console.log("error");
        })
}

function deleteTodo(req, res) {
    client
        .then((db) => {
            let dbo = db.db("jsonPlaceholder");
            const params = { _id: ObjectId(req.params.id) };
            console.log(params);
            dbo.collection("todos").deleteOne(params).then((result) => {
                console.log(result);
                res.sendStatus(201).end()
                db.close()
            })
        })
        .catch((err) => {
            console.log(err);
            console.log("error");
        })
}

module.exports = { addTodo, getTodos, updateTodo, deleteTodo }