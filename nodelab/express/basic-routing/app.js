var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.post('/', function(req, res) {
  res.send('Got a post request');
});

app.put('/user', function(req, res) {
  res.send('Got a put request at /user');
});

app.delete('/user', function(req, res) {
  res.send('Got a delete request at /user');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});