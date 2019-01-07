const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(__dirname));
app.use(express.static('d4d'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/d4d', function(req, res) {
    res.sendFile(path.join(__dirname + '/d4d/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));