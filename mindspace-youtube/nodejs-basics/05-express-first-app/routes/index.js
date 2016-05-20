var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', isTrue: false });
});

/* igor - GET "users" paths*/
router.get('/users', function(req, res, next) {
  res.send('Users\' page');
});

router.get('/users/details', function(req, res, next) {
  res.send('Users\' details');
});

module.exports = router;
