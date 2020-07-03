const path = require('path');
const express= require("express");
const fs = require('fs');

const app= express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'resources')));

let jsonHome = JSON.parse(fs.readFileSync('resources/json/main.json'));

app.get("/", (req,res) => {
    res.render('app-interface/home', {
        pageTitle: `${jsonHome.websiteOwner} - ${jsonHome.websiteTitle}`,
        jsonData: jsonHome
    });
});

app.listen(3000, () => {
    console.log('Hello');  
});