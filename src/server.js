const express = require('express');
const path = require('path');
const app = express();

// http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(path.join(__dirname)));
app.listen(8080);
