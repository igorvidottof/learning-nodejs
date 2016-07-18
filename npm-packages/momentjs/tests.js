const moment = require('moment');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format());
console.log(moment().startOf('day').fromNow());

var now = moment();
var tenDaysAhead = now.clone().add(10, 'days');
var tenDaysAgo = now.clone().subtract(10, 'days');

console.log(now.format('L'));
console.log(tenDaysAhead.format('L'));
console.log(tenDaysAgo.format('L'));

console.log(tenDaysAhead.isSameOrAfter(now));
console.log(tenDaysAgo.isSameOrBefore(now));

// locales
console.log(moment().locale('pt-BR'));
