// My solution
var filterFiles = require('./filterFiles');

var dirName = process.argv[2];
var fileExtension = process.argv[3];

filterFiles.byExtension(dirName, fileExtension, function(err, data) {
  if(err) {
    console.error(err);
  }
  
  data.forEach(function(file) {
    console.log(file);
  });
});

// Official solution
var filterFn = require('./solution_filter.js');

var dir = process.argv[2];  
var filterStr = process.argv[3];  
  
filterFn(dir, filterStr, function (err, list) {  
  if (err)  
    return console.error('There was an error:', err);  
  
  list.forEach(function (file) {  
    console.log(file);  
  });  
});  


