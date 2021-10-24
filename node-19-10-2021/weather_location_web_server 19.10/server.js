const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 8080;
const publicPath = path.join(__dirname, "public");
const apiKey = `e349d23c445383fae0196ca17e08c262`;

app.use(express.static(publicPath));

app.get("/city", (req, res) => {
    let inputCity = req.query.city;

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}`;

    axios.get(url)
        .then((res) => {
            if (res.status === 200) {
                let longitude = res.data.coord.lon;
                let latitude = res.data.coord.lat;
                console.log(res.data);
                // res.send(`
                // <h1>${res}</h1>
                // <h1>${latitude}</h1>
                // <h1>${longitude}</h1>
                // <h1>${inputCity}</h1>`);
                res.send("hello")
                    // res.send(`<p>${res.data}</p>`)
            }
        })
        .catch((err) => {
            res.send("err");
        })
});
app.listen(port);