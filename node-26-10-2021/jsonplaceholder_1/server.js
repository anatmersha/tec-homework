const express = require('express');
const app = express();
const port = 8080;
let commentId = 0;
app.use(express.json())
app.get('/', (req, res) => {
    res.send("index");
})
app.get('/comments', (req, res) => {
    res.send(comments);
})
app.post('/comments', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const body = req.body.body;
    if (name == "" || name == undefined) {
        res.sendStatus(400);
    } else {
        const newComment = { id: commentId, name: name, email: email, body: body };
        comments.push(newComment);
        commentId++;
        console.log(newComment);
        res.sendStatus(201);
    }
})
app.get('/comments/:id', (req, res) => {
    const params = req.params;
    comment = comments.find(it => it.id == params.id);
    console.log(comment);
    comment ? res.send(comment) : res.sendStatus(404);
});
app.delete('/comments/:id', (req, res) => {
    const params = req.params;
    comment = comments.find(it => it.id == params.id);
    commentIndex = comments.findIndex(comment);
    if (commentIndex == -1) {
        res.sendStatus(404);
    } else {
        comments.splice(commentIndex, 1);
        res.sendStatus(201);
    }
});

app.patch('/comments/:id', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const body = req.body.body;
    const params = req.params;
    comment = comments.find(it => it.id == params.id);
    comment.name = name;
    comment.email = email;
    comment.body = body;
    comment ? res.send(comment) : res.sendStatus(404);
})

app.get("*", (req, res) => {
    res.send(`got to Error page`)
})

app.listen(port, (req, res) => {
    console.log(`listening to: ${port}`);
})