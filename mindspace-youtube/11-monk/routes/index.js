var express = require('express');
var router = express.Router();
// create db connection with monk
var db = require('monk')('localhost:27017/test');
// get a collection with monk
var userData = db.get('user-data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
  var data = userData.find({}); // returns a promise
  data.on('success', function(docs) {
    res.render('index', {items: docs});
  });
});

router.post('/insert', function(req, res, next) {
  // get the values from the form 
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  userData.insert(item);

  // after inserted
  res.redirect('/');
});

router.post('/update', function(req, res, next) {
  // get the values from the form
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };
  var id = req.body.id;

  userData.updateById(id, item);
  // or userData.update({'_id': db.id(id)}, item);

  // after updated
  res.redirect('/get-data');
});

router.post('/delete', function(req, res, next) {
  // get the id from the form
  var id = req.body.id;

  userData.removeById(id);
  // or userData.remove({'_id': db.id(id)});

  // after deleted
  res.redirect('/get-data');
});

module.exports = router;
