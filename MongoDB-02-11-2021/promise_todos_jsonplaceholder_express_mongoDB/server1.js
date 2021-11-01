const express = require("express");
const app = express();
// const port = 8080;
app.use(express.json());
let mongo = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/jsonPlaceholder";
let ObjectId = mongo.ObjectId;
// const utiles = require("./utilies")
const client = MongoClient.connect(url);




client
    .then((db) => {
        let dbo = db.db("jsonPlaceholder");
        const newTodo = {
            title: req.body.title,
            completed: req.body.completed
        }
        dbo.collection("todos").insertOne(newTodo, (result) => {
            console.log(result);
            console.log(result);
            db.close()
        })
    })
    .catch((err) => {
        console.log(error);
        console.log("error");
    })