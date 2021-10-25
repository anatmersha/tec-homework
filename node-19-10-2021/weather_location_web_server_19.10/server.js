const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 8080;
const publicPath = path.join(__dirname, "public");

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
app.listen(port);