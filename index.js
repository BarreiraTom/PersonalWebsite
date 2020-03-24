const path = require('path');
const express= require("express");
const fs = require('fs');

const app= express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'resources')));

let jsonHome = fs.readFileSync('resources/json/home.json');

app.get("/", (req,res) => {
    res.render('app-interface/home', {
        pageTitle: 'Home',
        jsonData: JSON.parse(jsonHome)
    });
});

app.listen(3000, () => {
    console.log('Hello');  
});