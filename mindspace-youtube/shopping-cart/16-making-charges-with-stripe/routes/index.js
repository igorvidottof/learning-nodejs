var express = require('express');
var Cart = require('../models/cart');

var router = express.Router();

// import Product model
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  var successMsg = req.flash('success')[0]; // charge success message
  // fetch all products(docs) and send them to the index.hbs file
  Product.find(function(err, docs) {
    // each row must contain only 3 thumbnails, therefore 3 products
    var productChunks = [];
    var chunkSize = 3;
    // create multiple arrays containing 3 docs(products) each
    for(var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg });
  });
});

router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  // if a cart is already living in a session, receives this cart
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
    if(err) {
      // added by myself
      return res.render('views/error', { message: err });
      // original code: return res.redirect('/');
    }
    cart.add(product, productId);
    // assign the new cart to a session variable
    req.session.cart = cart;
    res.redirect('/');
  });
});

router.get('/shopping-cart', function(req, res, next) {
  if(!req.session.cart) {
    return res.render('shop/shopping-cart', { products: null });
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });
});

router.get('/checkout', function(req, res, next) {
  if(!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0]; // charge error message
  res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noErrors: !errMsg});
});

router.post('/checkout', function(req, res, next) {
  if(!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);

  var stripe = require('stripe')('sk_test_JM9HpLb6YWMIO3GeKGHoUViy');

  stripe.charges.create({
    amount: cart.totalPrice * 100, // minor currency value
    currency: 'usd',
    source: req.body.stripeToken, // obtained with Stripe.js
    description: 'Test charge'
  }, function(err, charge) {
    if(err) {
      req.flash('error', err.message);
      return res.redirect('/checkout');
    }
    req.flash('success', 'Successfully bought product!');
    req.session.cart = null;
    res.redirect('/');
  });
});

module.exports = router;
