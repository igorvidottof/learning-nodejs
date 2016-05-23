var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2);
var count = 0;
var results = [];

function printResults() {
  for(var i = 0; i < urls.length; i++) {
    console.log(results[i]);
  }
}

function getContentAssync(index) {
  http.get(urls[index], function(res) {
    res.setEncoding('utf8');
    // console.log('Got response: ' + res.statusCode);
    res.pipe(bl(function(err, data) {
      if(err) {
        console.error(err);
      } 
      results[index] = data.toString();
      count++;
      if(count == urls.length) {
        printResults();
      }
    }));
  });
}

for(var i = 0; i < urls.length; i++) {
  getContentAssync(i);
}