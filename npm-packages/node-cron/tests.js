const CronJob = require('cron').CronJob;
/*
var CronJob = require('cron').CronJob;
new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true);*/

var job = new CronJob(new Date(), function() {
  /* runs once at the specified date. */
  console.log('It works');
  }, function () {
    /* This function is executed when the job stops */
    console.log('It worked');
  },
  true /* Start the job right now */
  // timeZone /* Time zone of this job. */
);