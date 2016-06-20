var express = require('express');
var router = express.Router();
// import csurf for csrf protection, avoiding that a user session gets stolen
var csrf = require('csurf');
var passport = require('passport');

// start csrf protection
var csrfProtection = csrf();
router.use(csrfProtection); // all routers should be protected by csrfProtection

// passing in our isLoggedIn middleware to protect the route
router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('user/profile');
});

router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout(); // method added by passport
  res.redirect('/');
});

// group routes to verify is the user isn't logged-in
/*all routes below this middleware will be grouped,
in that case, only non-logged-in users will be able
to access these routes */
router.use('/', notLoggedIn, function(req, res, next) {
  next(); // continue...
});

router.get('/signup', function(req, res, next) {
  // extract error messages from the flash package
  var messages = req.flash('error');
  res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true // display the flash msg created in passport.js
}));


router.get('/signin', function(req, res, next) {
  // extract error messages from the flash package
  var messages = req.flash('error');
  res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/signin', passport.authenticate('local.signin', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signin',
  failureFlash: true
}));


module.exports = router;

// create a middleware to verify if the user is logged in
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) { // method added by passport
    return next(); // continue...
  }
  res.redirect('/');
}

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) { // method added by passport
    return next(); // continue...
  }
  res.redirect('/');
}
