const schedule = require('node-schedule');

setTimeout(function() {
  console.log('just a test...');
}, 60000);

var date = new Date(2016, 6, 9, 22, 49, 0);

console.log(date);

var j = schedule.scheduleJob(date, function(){
  console.log('it worked.');
});