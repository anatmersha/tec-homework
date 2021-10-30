const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
// const port = 8080;
const hbs = require("hbs");
const publicPath = path.join(__dirname, "..", "public");
const viewsPath = path.join(__dirname, "..", "templates", "views");
const partialsPath = path.join(__dirname, "..", "templates", "partials");
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));
app.get("/city", (req, res) => {
    let inputCity = req.query.city;
    const apiKey = `e349d23c445383fae0196ca17e08c262`;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}`;
    axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                let longitude = response.data.coord.lon;
                let latitude = response.data.coord.lat;
                console.log(response.data);
                res.send(`
                <h1>${inputCity}</h1>
                <h1>${latitude}</h1>
                <h1>${longitude}</h1>
                `);
            }
        })
        .catch((err) => {
            res.sendFile(path.join(__dirname, "public", "./error.html"));
            console.log(err);
        })
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});


app.get("/help", (req, res) => {
    res.render("help");
});
app.listen(port);