const CronJob = require('cron').CronJob;
/*
var CronJob = require('cron').CronJob;
new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true);*/

setTimeout(function() {
  console.log('time is up');
}, 60000);

var test = false;

var jobDate = new Date(2016, 6, 9, 23, 24, 0);
console.log(jobDate);


var job = new CronJob(jobDate, function() {
  /* runs once at the specified date. */
    test = true;
    console.log('This job is done');
    job.stop();
  }, function () {
    /* This function is executed when the job stops */
    if(test) {
      console.log('It worked');
    }
  },
  true /* Start the job right now */
  // timeZone /* Time zone of this job. */
);
