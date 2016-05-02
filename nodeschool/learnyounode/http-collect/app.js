// My solution
var http = require('http');
var bl = require('bl');
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

// Using a third-party package
// bl - Buffer List
http.get(urlStr, function(res) {
  res.setEncoding('utf8');
  // console.log('Got response: ' + res.statusCode);
  res.pipe(bl(function(err, data) {
    if(err) {
      console.error(err);
    } 
    else {
      console.log(data.length);
      console.log(data.toString());
    }
  }));
});

// Official solution
var http = require('http');  
var bl = require('bl');  

http.get(process.argv[2], function (response) {  
 response.pipe(bl(function (err, data) {  
   if (err)  
    return console.error(err);  
   data = data.toString();  
   console.log(data.length);  
   console.log(data);  
 }));    
});  
