// My solution
var fs = require('fs');
var path = require('path');

filterFiles = {
  byExtension: function (dirName, fileExtension, callback) {
    fs.readdir(dirName, function(err, data) {
      if(err) {
        return callback(err);
      }

      var filteredList = data.filter(function(file) {
        return path.extname(file) === ('.' + fileExtension);
      });
      
      callback(null, filteredList);
    }); 
  }
};

module.exports = filterFiles;

// Official solution      
var fs = require('fs');
var path = require('path');  
  
module.exports = function (dir, filterStr, callback) {  
  
  fs.readdir(dir, function (err, list) {  
    if (err)  
      return callback(err);  
  
    list = list.filter(function (file) {  
      return path.extname(file) === '.' + filterStr;  
    });  
  
    callback(null, list);  
  });  
};  
