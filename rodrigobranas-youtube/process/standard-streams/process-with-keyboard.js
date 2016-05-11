var help = require('./help');
var keyboard = require('./keyboard');

keyboard.onReadable(function(option) {
  switch(option) {
    case 'a':
      console.log('pid: ' + process.pid);
      break;
    case 'b': 
      console.log('title: ' + process.title);
      break;
    case 'c':
      console.log('arch: ' + process.arch);
      break;
    case 'd': 
      console.log('platform: ' + process.platform);
      break;
    case 'e':
      console.dir(process.env); // environment variables
      break;
    case 'm':
      console.log(process.memoryUsage());
      break;
    case 'u':
      console.log(process.uptime()); // time that the process remains alive
      break;
    case 'v': 
      console.dir(process.versions);
      break;
    case 'q':
      process.exit();
      break;
    default: 
      help.showOptions();
  }
});

process.on('exit', function() {
  console.log('bye');
});

// prevent the application to abort on errors
// not recommended on production
process.on('uncaughtException', function() {
  console.log('error');
});

// test uncaughtException
a.b();