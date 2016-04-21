// My solution
var fs = require('fs');
var pathToFile = process.argv[2];
var bufferContent = fs.readFileSync(pathToFile); // returns a buffer object
var strContent = bufferContent.toString();
var lines = strContent.split('\n');
console.log(lines.length - 1);


// Official solution
var fs = require('fs');  
var contents = fs.readFileSync(process.argv[2]);  
var lines = contents.toString().split('\n').length - 1;  
console.log(lines);