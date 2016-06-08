var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
  var urlParsed = url.parse(req.url, true);
  var route = urlParsed.pathname;
  var isoDate = urlParsed.query.iso;
  var actualDate = new Date(isoDate);

  res.writeHead(200, { 'Content-type': 'application/json' });

  switch(route) {
    case '/api/parsetime':
      var hours = {
        hour: actualDate.getHours(),
        minute: actualDate.getMinutes(),
        second: actualDate.getSeconds()
      };
      res.end(JSON.stringify(hours));
      break;

    case '/api/unixtime':
      var unixEpochTime = {
        unixtime: actualDate.getTime()
      };
      res.end(JSON.stringify(unixEpochTime));
      break;

    case '/':
      res.end('routes: \n/api/parsetime\n/api/unixtime');
      break;

    default: 
      res.writeHead(404);
      res.end('Page not found');
      break;
  }
});

server.listen(port, function() {
  console.log('Listening on port ' + port);
});