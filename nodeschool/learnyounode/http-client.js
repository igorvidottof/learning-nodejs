// My solution
var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
  res.setEncoding('utf8'); // emits string rather than buffer
  console.log('Status Code: ' + res.statusCode);

  res.on('error', function(error) {
    console.error('Got an error: ' + error.message);
  });

  res.on('data', function(data) {
    console.log(data);
  });
});

// Official solution
var http = require('http');  
http.get(process.argv[2], function (response) {  
  response.setEncoding('utf8');  
  response.on('data', console.log);  
  response.on('error', console.error);  
}); 
