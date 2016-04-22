// My solution
// modules
var fs = require('fs');
var path = require('path');

// values
var dirPath = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(dirPath, function(err, list) {
  if(err) {
    throw err;
  }
  var filteredList = list.filter(function(file) {
    return path.extname(file) === ('.' + fileExtension);
  });
  filteredList.forEach(function(item) {
    console.log(item);
  });
});


// Official solution
var fs = require('fs');  
var path = require('path');  
 
fs.readdir(process.argv[2], function (err, list) {  
  list.forEach(function (file) {  
  if (path.extname(file) === '.' + process.argv[3])  
    console.log(file); 
 });
});
