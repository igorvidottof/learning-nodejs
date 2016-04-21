// My solution
var fs = require('fs');
var pathToFile = process.argv[2];
fs.readFile(pathToFile, 'utf8', function (err, data) { 
  // defining the option utf8, the function will return a string instead of a buffer
  if (err) {
    throw err;
  }
  var strContent = data;
  var lines = strContent.split('\n');
  console.log(lines.length - 1);
});

// Official solution
var fs = require('fs');  
var file = process.argv[2];  
fs.readFile(file, function (err, contents) {  
  // fs.readFile(file, 'utf8', callback) can also be used  
  var lines = contents.toString().split('\n').length - 1;  
  console.log(lines);  
});  
