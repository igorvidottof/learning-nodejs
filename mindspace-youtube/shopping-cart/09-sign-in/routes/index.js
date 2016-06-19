var express = require('express');
var router = express.Router();
// import csurf for csrf protection, avoiding that a user session gets stolen
var csrf = require('csurf');
var passport = require('passport');

// import Product model
var Product = require('../models/product');

// start csrf protection
var csrfProtection = csrf();
router.use(csrfProtection); // all routers should be protected by csrfProtection

/* GET home page. */
router.get('/', function(req, res, next) {
  // fetch all products(docs) and send them to the index.hbs file
  Product.find(function(err, docs) {
    // each row must contain only 3 thumbnails, therefore 3 products
    var productChunks = [];
    var chunkSize = 3;
    // create multiple arrays containing 3 docs(products) each
    for(var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
  });
});

// user routes
router.get('/user/signup', function(req, res, next) {
  // extract error messages from the flash package
  var messages = req.flash('error');
  res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/user/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true // display the flash msg created in passport.js
}));

router.get('/user/profile', function(req, res, next) {
  res.render('user/profile');
});

router.get('/user/signin', function(req, res, next) {
  // extract error messages from the flash package
  var messages = req.flash('error');
  res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/user/signin', passport.authenticate('local.signin', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signin',
  failureFlash: true
}));

module.exports = router;
