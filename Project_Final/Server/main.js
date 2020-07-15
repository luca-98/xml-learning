const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");
app.use(cors());
app.get('/menu', function (req, res) {
    res.contentType('text/xml');
    res.sendFile(path.join(__dirname, 'data/menu.xml'));
});


const server = app.listen(8080, () => {
    console.log('Started listening on 8080');
});