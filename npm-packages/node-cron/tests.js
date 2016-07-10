const CronJob = require('cron').CronJob;
/*
var CronJob = require('cron').CronJob;
new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true);*/

var test = false;

var jobDate = new Date('2016, 7, 9');

var job = new CronJob(jobDate, function() {
  /* runs once at the specified date. */
    test = true;
  }, function () {
    /* This function is executed when the job stops */
    if(test) {
      console.log('It worked');
    }
  },
  true /* Start the job right now */
  // timeZone /* Time zone of this job. */
);
