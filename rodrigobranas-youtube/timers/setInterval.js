/*it'll execute like a loop, 
in which the callback function is called within 1 sec*/

setInterval(function() {
  console.log('I = ' + new Date());
}, 1000);

