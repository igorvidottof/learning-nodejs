// My solution
var http = require('http');
var urlStr = process.argv[2];
var allData = '';

var req = http.request(urlStr, function(res) {
  // console.log('STATUS: ' + res.statusCode);
  // console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    allData += chunk;
  });
  res.on('end', function() {
    console.log(allData.length);
    console.log(allData);
  });
});

// handle errors
req.on('err', function(err) {
  console.error('Got an error: ' + err.message);
});
// ends the request
req.end();


