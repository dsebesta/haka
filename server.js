const express = require('express');
const app = express();
const port = 80;
const path = require('path');

app.use(express.static(__dirname));
app.use(express.static('d4d'));
app.use(express.static('ref'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/d4d', function(req, res) {
    res.status(301).redirect("https://forms.zohopublic.com/pbhllc/form/DrivingForDollars/formperma/47zEPeEOb4z2P2-cWnLBZ4nb7UTprv1D_T0Pl55nvRM")
});

app.get('/ref', function(req, res) {
    res.status(301).redirect("https://forms.zohopublic.com/pbhllc/form/Referrala/formperma/l81eW63erViL21YcKaR8Be3KC-OUH5iux7KTQjAU14k")
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));