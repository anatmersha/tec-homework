const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 8080;
const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));
app.use(express.json());

app.get('/', (req, res) => {

    res.send("/html/index.html")
        // res.sendFile(path.join(__dirname, "public", "./html", "./index.html"));
})

app.get("/city", (req, res) => {
    let inputCity = req.query.city;
    console.log(inputCity);
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}`;

    axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                let longitude = response.data.coord.lon;
                let latitude = response.data.coord.lat;
                res.send(`
                <h1>${inputCity}</h1>
                <h1>${latitude}</h1>
                <h1>${longitude}</h1>`);
            }
        })
        .catch((err) => {
            res.sendFile(path.join(__dirname, "public", "./html", "./error.html"));
        })
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "./html", "./error.html"));
})
app.listen(port);