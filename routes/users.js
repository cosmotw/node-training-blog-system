var express = require('express');
var router = express.Router();

/* GET users register page. */
router.get('/register', function(req, res, next) {
  res.send('Register page.');
});

/* GET users signin page. */
router.get('/signin', function(req, res, next) {
  res.send('Signin page.');
});

/* GET users signout page. */
router.get('/signout', function(req, res, next) {
  res.send('Signout page.');
});

/* GET users forget page. */
router.get('/forget', function(req, res, next) {
  res.send('Forget page.');
});

/* GET users profile page. */
router.get('/profile', function(req, res, next) {
  res.send('Profile page.');
});

/* GET users add article page. */
router.get('/add_article', function(req, res, next) {
  res.send('Article page.');
});

/* GET users article modify page. */
router.get('/modify/:id', function(req, res, next) {
  res.send('Article modify page.');
});

/* GET users guest message page. */
router.get('/guest_message/:id', function(req, res, next) {
  res.send('Guest message page.');
});

module.exports = router;
