var express = require('express');
var router = express.Router();

/* GET users signup page. */
router.get('/signup', function(req, res, next) {
  if (req.session.logined) {
    res.redirect('/');
    return;
  }
  res.render('users/signup');
});

/* GET users signin page. */
router.get('/signin', function(req, res, next) {
  if (req.session.logined) {
    res.redirect('/');
    return;
  }
  res.render('users/signin');
});

/* GET users signout page. */
router.get('/signout', function(req, res, next) {
  res.send('Signout page.');
});

/* GET users forget password page. */
router.get('/forget_password', function(req, res, next) {
  res.send('Forget password page.');
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
router.get('/modify_article/:id', function(req, res, next) {
  res.send('Article modify page.');
});

/* GET users guest message page. */
router.get('/guest_message/:id', function(req, res, next) {
  res.send('Guest message page.');
});

module.exports = router;
