require('../lib/db');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

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
  if (req.session.logined) {
    res.redirect('/');
    return;
  }
  res.render('users/forget_password');
});

/* GET users profile page. */
router.get('/profile', function(req, res, next) {
  Blog.find({ Email: req.session.email }, (err, blogs, count) => {
    res.render('users/profile', { blogs: blogs });
  });
});

/* GET users add article page. */
router.get('/add_article', function(req, res, next) {
  res.render('users/add_article');
});

/* GET users article modify page. */
router.get('/modify_article/:id', function(req, res, next) {
  Blog.findOne({ _id: req.params.id }, (err, blog, count) => {
    res.render('users/modify_article', { blog: blog});
  });
});

/* GET users message page. */
router.get('/message/:id', function(req, res, next) {
  res.send('Message page.');
});

module.exports = router;
