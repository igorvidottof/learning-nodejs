var express = require('express');
var router = express.Router();
// import Product model
var Product = require('../models/product');
// import csurf for csrf protection, avoiding that a user session gets stolen
var csrf = require('csurf');

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
  res.render('user/signup', { csrfToken: req.csrfToken() });
});

router.post('/user/signup', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
