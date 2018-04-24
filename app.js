const express = require('express');
const path = require('path');
const os = require('os');
const fs = require('fs');
const bodyParser = require('body-parser');
const Busboy = require('busboy');
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);

// allows us to process submitted form data
app.use(express.urlencoded({
    extended: true
}));

app.post('/', function (req, res) {
    // var name = req.body.user_name;
    var file = req.body.myFile;
    // console.log("Name: " + name);
    console.log("Choose a File" + file);
    res.send(`
    <h1>Thanks ${name}!</h1>
    <p>We received your message below, and will get back to you at <strong>${email}</strong>.</p>
    <blockquote>${message}</blockquote>
    `);
});
app.listen(port);