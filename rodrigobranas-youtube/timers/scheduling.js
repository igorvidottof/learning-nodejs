/*Scheduling functions with setTimeout or setImmediate*/

// setTimeout
console.log('A = ' + new Date()); // Execute
setTimeout(function() {
  console.log('C = ' + new Date()); // Schedule
}, 0);
console.log('B = ' + new Date()); // Execute
// then it executes that function scheduled


// setImmediate
console.log('A = ' + new Date()); // Execute
setImmediate(function() {
  console.log('I = ' + new Date()); // Schedule
});
console.log('B = ' + new Date()); // Execute
// then it executes that function scheduled


// Performance setTimeout x setImmediate
console.time('setTimeout');
setTimeout(function() {
  var i = 0;
  while(i < 1000000000) {
    i++;
  }
  console.timeEnd('setTimeout');
}, 0);

console.time('setImmediate');
setImmediate(function() {
  var i = 0;
  while(i < 1000000000) {
    i++;
  }
  console.timeEnd('setImmediate');
}); 

