var http = require('http');
var myModule = require('./myModule');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(myModule.myVariable);
  myModule.myFunction();
  res.end();
}).listen(8000);