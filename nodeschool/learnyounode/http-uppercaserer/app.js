var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
  if(req.method != 'POST') {
    return res.end('Invalid Request. Only post requests are accepted\n');
  }
  
  req.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(port, function() {
  console.log('Server listening on port ' + port);
});

