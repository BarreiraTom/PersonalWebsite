const express= require("express");
const fs = require('fs');

const app= express();
app.set("view engine", "ejs");

let jsonHome = fs.readFileSync('resources/json/home.json');

app.get("/", (req,res) => {
    res.render('home', {
        pageTitle: 'Home',
        jsonData: JSON.parse(jsonHome)
    });
});

app.listen(3000, () => {
    console.log('Hello');
});