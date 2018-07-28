var express = require('express'),
    path = require('path'),
    http = require('http');

var app = express();

app.use(express.static(path.resolve(__dirname, 'client')));

// Start the server
var server = http.createServer(app).listen(8080);
