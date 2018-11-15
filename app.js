const express = require('express');
const bodyParser = require("body-parser");
//const fortunes = require('./data/fortunes.json');
const fs = require('fs');
const rawdata = fs.readFileSync('./data/fortunes.json');
const fortunes = JSON.parse(rawdata);

console.log(rawdata,fortunes[0]);

const app = express();

app.use(bodyParser.json());

app.get('/fortunes', (req,res) => {
    res.json(fortunes);
});

app.get('/fortunes/random', (req,res) => {
    console.log("Display a random");
    res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

app.get('/fortunes/:id', (req,res) => {
    console.log(req.params);
    res.json(fortunes.find(f => f.id == req.params.id));
    
});

app.post('/fortunes', (req,res) => {
console.log(req.body);
});

module.exports = app;