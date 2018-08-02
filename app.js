var express = require('express');

var app = express();

app.get('/', function (req, res) {
     res.sendFile(__dirname + '/index.html');
});

// Accessed via front-end
// Returns { message: "Hello Alex" }
app.get('/json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: "Hello Alex!" }));
});

app.listen(3000, function () {
    console.log('App listening on port 3000');
});
