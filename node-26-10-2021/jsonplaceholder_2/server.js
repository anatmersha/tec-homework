const express = require("express");
const app = express();
const port = 8080;
let commentId = 0;

const fs = require('fs');
const fileName = "comments.json";
const commentsFile = fs.readFileSync(fileName, "utf8");
const commentsFileJson = JSON.stringify(commentsFile);

app.use(express.json());

app.get('/', (req, res) => {
    res.send(commentsFile);
})
app.get('/comments', (req, res) => {
    res.send(commentsFile);
})
app.post('/comments', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const body = req.body.body;
    if (name == "" || name == undefined) {
        res.sendStatus(400);
    } else {
        const newComment = { id: commentId, name: name, email: email, body: body };
        commentsFileJson.push(newComment);
        commentId++;
        console.log(newComment);
        fs.writeFileSync(fileName, commentsFileJson);
        res.sendStatus(201);
    }
})
app.get('/comments/:id', (req, res) => {
    const params = req.params;
    comment = commentsFile.find(it => it.id == params.id);
    console.log(commentsFile);
    comment ? res.send(comment) : res.sendStatus(404);
});
app.delete('/comments/:id', (req, res) => {
    const params = req.params;
    comment = commentsFileJson.find(it => it.id == params.id);
    commentIndex = commentsFileJson.findIndex(comment);
    if (commentIndex == -1) {
        res.sendStatus(404);
    } else {
        commentsFileJson.splice(commentIndex, 1);
        fs.writeFileSync(fileName, commentsFileJson);
        res.sendStatus(201);
    }
});

app.patch('/comments/:id', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const body = req.body.body;
    const params = req.params;
    comment = commentsFileJson.find(it => it.id == params.id);
    comment.name = name;
    comment.email = email;
    comment.body = body;
    if (comment != undefined) {
        fs.writeFileSync(fileName, commentsFileJson);
        res.send(comment);
    } else { res.sendStatus(404); }
})

app.get("*", (req, res) => {
    res.send(`got to Error page`)
})

app.listen(port, (req, res) => {
    console.log(`listening to: ${port}`);
})