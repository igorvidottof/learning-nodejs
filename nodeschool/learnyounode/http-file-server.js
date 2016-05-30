var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var streamObj = fs.createReadStream(path);
  streamObj.pipe(res);
});

server.listen(port, function() {
  console.log('Listening on port ' + port);
});