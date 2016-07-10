const CronJob = require('cron').CronJob;
const moment = require('moment');

setTimeout(function() {
  console.log('time is up');
}, 10000);

var test = false;
var afterFiveSec = moment().add(5, 's').toDate();
console.log(afterFiveSec);

var job = new CronJob(afterFiveSec, function() {
  test = true;
  console.log('job finished');
  job.stop();
}, function() {
  if(test) {
    console.log('it worked');
  }
}, true);