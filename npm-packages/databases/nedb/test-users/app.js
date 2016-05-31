// Type 3: Persistent datastore with automatic loading
var Datastore = require('nedb');
var db = new Datastore({ filename: 'db/users.db', autoload: true, timestampData: true });

db.count({}, function(err, users) {
  if (err) {
    throw err;
  }
  else {
    console.log('Found ' + users + ' users');
  }
});

db.find({}, function (err, docs) {
  if(err) {
    throw err;
  }
  else{
    console.log(docs);
  }
});

