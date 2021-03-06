var express = require('express');
var router = express.Router();
// igor - import mongodb package 
var mongo = require('mongodb').MongoClient;
// igor - import mongodb.ObjectID to parse object ids
var objectId = require('mongodb').ObjectID;
// igor - import assert to check values and work with the db
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
  // create the array that will store the docs from the db
  var resultArray = [];
  // connect to the db
  mongo.connect(url, function(err, db) {
    // check if there aren't errors
    assert.equal(null, err);
    // retrieve the pointer to the data
    var cursor = db.collection('user-data').find();
    // run through the data 
    cursor.forEach(function(doc, err) {
      // check if there aren't errors
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() { // "end callback" - it's invoked when the iteration is finished
      // close the connection
      db.close();
      // render the index page with the data collected
      res.render('index', {items: resultArray});
    });
  });
});

router.post('/insert', function(req, res, next) {
  // get the values from the form 
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  // connect to the db
  mongo.connect(url, function(err, db) {
    // check if there aren't errors
    assert.equal(null, err);
    // access the collection
    db.collection('user-data').insertOne(item, function(err, result) {
      // check if there aren't errors
      assert.equal(null, err);
      console.log('Item inserted\n' + result);
      // close the db connection
      db.close();
    });
  });
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

  // connect to the db
  mongo.connect(url, function(err, db) {
    // check if there aren't errors
    assert.equal(null, err);
    // access the collection
    db.collection('user-data').updateOne({'_id': objectId(id)}, {$set: item}, function(err, result) {
      // check if there aren't
      assert.equal(null, err);
      console.log('item updated\n' + result);
      // close the db connection 
      db.close();
    });
  });
  // after updated
  res.redirect('/get-data');
});

router.post('/delete', function(req, res, next) {
  // get the id from the form
  var id = req.body.id;

  // connect to the db
  mongo.connect(url, function(err, db) {
    // check if there aren't errors
    assert.equal(null, err);
    // access the collection
    db.collection('user-data').deleteOne({'_id': objectId(id)}, function(err, result) {
      // check if there aren't errors
      assert.equal(null, err);
      console.log('Item deleted\n' + result);
      db.close();
    });
  });
  // after deleted
  res.redirect('/get-data');
});

module.exports = router;
