const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());
let mongo = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/jsonPlaceholder";
let ObjectId = mongo.ObjectId;
const utiles = require("./utilies")
const client = MongoClient.connect(url);

// get one by MDB-id
app.get("/todos/:id", (req, res) => {
        utiles.getTodo(req, res);
    })
    // find & delete by MDB-id
app.delete("/todos/:id", (req, res) => {
        utiles.findAndDeleteTodo(req, res);
    })
    // find & update by MDB-id
app.patch("/todos/:id", (req, res) => {
    utiles.findAndUpdateTodo(req, res);
})

app.get("*", (req, res) => { res.send("err"); })

app.listen(port, () => {
    console.log(`server listen to port ${port}`);
});