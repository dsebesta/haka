const express = require('express');
const app = express();
const port = 80;
const path = require('path');

app.use(express.static(__dirname));
app.use(express.static('d4d'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/d4d', function(req, res) {
    res.status(301).redirect("https://forms.zoho.com/pbhllc/form/DrivingForDollars")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));