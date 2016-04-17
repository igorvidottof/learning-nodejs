var max = 10000; // it remains private

/*
Everything that is defined inside a module is private,
so we have to export this module, turning it into public
*/
module.exports.generate = function() {
  return Math.floor(Math.random() * max);
};

// Possible ways to do the same action
/*
exports.generate ...
this.generate ...  
*/

// Exporting through an object 
/*

var generate = function() {
  return Math.floor(Math.random() * max);
};

module.exports = {
  generate: generate
}

*/

/*It's also possible to export a module through patterns, 
such as Factory Function and Constructor Function*/

//Factory Function
/*
var createSerialGenerator = function() {
  var max = 10000;

  var generate = function() {
    return Math.floor(Math.random() * max);
  };

  return {
    generate: generate
  };
};

module.exports = createSerialGenerator();
*/

//Constructor Function
/*
var SerialGenerator = function() {
  var max = 10000;

  this.generate = function() {
    return Math.floor(Math.random() * max);
  };
};

module.exports = new SerialGenerator();
*/
