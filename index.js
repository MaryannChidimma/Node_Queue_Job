
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser")
const database = require("./database/config")
const {createUser} = require("./api/controllers/user")
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/register", createUser);
app.get("/", (req, res) => {
    res.send("Hello  World");
});

app.listen(port, () => {
 database()
console.log(`App listening on port ${port}`);
})