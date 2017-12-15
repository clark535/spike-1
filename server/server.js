require('dotenv').config()//for process.env
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

// Serve back static files by default
app.use(express.static('server/public'));

app.listen(port, function (req, res) {
  console.log('Listening on port', port);
});