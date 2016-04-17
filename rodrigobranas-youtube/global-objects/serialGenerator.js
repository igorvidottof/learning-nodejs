// Using the global scope
exports.generate = function() {
  return Math.floor(Math.random() * global.max); // or simply max
};


// Without using the global scope
// global variables from globalVariables.js
var globalVariables = require('./globalVariables.js');
exports.generate = function() {
  return Math.floor(Math.random() * globalVariables.max);
};