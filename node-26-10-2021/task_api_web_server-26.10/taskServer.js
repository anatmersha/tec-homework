const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const port = 2020;
let freeId = 0;
const publicPath = path.join(__dirname, 'public');
const tasks = [
    { id: 1, Name: "dishes", date: "20.10.94", completed: false },
    { id: 2, Name: "laundrey", date: "20.10.96", completed: true },
    { id: 3, Name: "homework", date: "20.10.95", completed: true },
];
// const tasks = [];
// const tasksJson = JSON.stringify(tasks);
app.use(express.static(publicPath));
app.use(express.json());
app.get('/', (req, res) => {
    res.send("index");
})

app.get('/tasks', (req, res) => {
    res.send(tasks);
})

app.post('/tasks', (req, res) => {
    // todo: add task object to array-take task name from request, add date, id, completed.
    const name = req.body.name;
    if (name == "" || name == undefined) {
        res.sendStatus(400);
    } else {
        const newTask = { id: freeId, name: name, date: new Date(), completed: false };
        tasks.push(newTask);
        freeId++;
        console.log(newTask);
        res.sendStatus(201);
    }
})


app.get('/tasks/:id', (req, res) => {
    const params = req.params;
    task = tasks.find(it => it.id == params.id);
    console.log(task);
    task ? res.send(task) : res.sendStatus(404);
});


app.delete('/tasks/:id', (req, res) => {
    const params = req.params;
    task = tasks.find(it => it.id == params.id);
    taskIndex = tasks.findIndex(task);
    if (taskIndex == -1) {
        res.sendStatus(404);
    } else {
        tasks.splice(taskIndex, 1);
        res.sendStatus(201);
    }
});


app.get("*", (req, res) => {
    res.send(`got to Error page`)
})

app.listen(port, (req, res) => {
    console.log(`listening to: ${port}`);
});