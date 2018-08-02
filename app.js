const express = require('express');
const app = express();

// Display the html page at the root
app.get('/', function (req, res) {
     res.sendFile(__dirname + '/index.html');
});

// Accessed via front-end
// Returns { message: "Hello Alex" }
app.get('/json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    const possibleNames = [ "Alex", "Snowy", "Boyle" ];
    const randomName = possibleNames[Math.floor(Math.random()*possibleNames.length)];
    const message = "Hello " + randomName + "!";

    res.send(JSON.stringify({ "message": message }));
});

app.listen(3000, function () {
    console.log('App listening on port 3000');
});
