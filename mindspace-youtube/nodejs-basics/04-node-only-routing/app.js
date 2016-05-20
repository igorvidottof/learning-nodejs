var url = require('url');
var fs = require('fs');

function renderHTML(file, res) {
  fs.readFile(file, function(err, data) {
    if(err) {
      res.writeHead(404);
      res.write('File not found');
    } 
    else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    }
    res.end();
  });
}

module.exports = {
  handleRequest: function(req, res) {
    var path = url.parse(req.url).pathname;
    switch(path) {
      case '/':
        renderHTML('./index.html', res);
        break;
      case '/login': 
        renderHTML('./login.html', res);
        break;
      default: 
        res.writeHead(404);
        res.write('Route not found');
        res.end();
    }
  }
};