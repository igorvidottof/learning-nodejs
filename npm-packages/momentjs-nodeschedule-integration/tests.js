const moment = require('moment');
const schedule = require('node-schedule');

setTimeout(function() {
  console.log('time is up');
}, 10000);

var date = moment().add(5, 's').toDate();

var j = schedule.scheduleJob(date, function() {
  console.log('It worked');
});