var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Connect and keep the connection open (not recommended on production)
mongoose.connect('localhost:27017/test');

// Defines blueprints to create models from them
var Schema = mongoose.Schema;
var userDataSchema = new Schema({
  title: {type: String, required: true},
  content: String,
  author: String
}, {collection: 'user-data'});

// Create models
var UserData = mongoose.model('UserData', userDataSchema); // ('name', Schema)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
  UserData.find().then(function(docs) {
    res.render('index', {items: docs});
  });
});

router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  // create an instance of UserData
  var data = new UserData(item);
  // save the modifications
  data.save();

  // after inserted
  res.redirect('/get-data');
});

router.post('/update', function(req, res, next) {
  var id = req.body.id;

  UserData.findById(id, function(err, doc) {
    if(err) {
      console.error('Error, no entry found\n' + err);
    }
    // set new values to the document
    doc.title = req.body.title;
    doc.content = req.body.content;
    doc.author = req.body.author;
    // save the modifications
    doc.save();
  });


  // after updated
  res.redirect('/get-data');
});

router.post('/delete', function(req, res, next) {
  var id = req.body.id;

  UserData.findByIdAndRemove(id).exec();
  
  // after deleted
  res.redirect('/get-data');    
});

module.exports = router;
