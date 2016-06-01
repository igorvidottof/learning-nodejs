var express = require('express');
var router = express.Router();
// import Product model
var Product = require('../models/product');

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

module.exports = router;
