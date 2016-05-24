var net = require('net');
var port = process.argv[2];

function zeroFill(chunk) {  
  return (chunk < 10 ? '0' : '') + chunk;
}  

var d = new Date();
var formatedDate = '';
formattedDate = d.getFullYear() + '-';
formattedDate += zeroFill(d.getMonth() + 1) + '-';
formattedDate += zeroFill(d.getDate()) + ' ';
formattedDate += zeroFill(d.getHours()) + ':';
formattedDate += zeroFill(d.getMinutes()) + '\n';


var server = net.createServer(function(socket) {
  socket.end(formattedDate);
});
server.listen(port, function() {
  console.log('Listening on port ' + port);
});