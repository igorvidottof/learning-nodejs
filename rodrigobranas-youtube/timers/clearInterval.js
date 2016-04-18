var interval = setInterval(function() {
  console.log('I ' + new Date());
}, 1000);

// it'll cancel the interval "loop" after 5 seconds
setTimeout(function() {
  clearInterval(interval);
}, 5000);