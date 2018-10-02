require('../lib/db');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
var Comment = mongoose.model('Comment');

/* DELETE article. */
router.get('/delete/:id', function(req, res, next) {
  Blog.remove({ _id: req.params.id }, (err) => {
    if (err) {
      if (err) {
        console.log('Delete failed.');
        return;
      }
      console.log('Delete successed.');
    }
  });
  res.redirect('/users/profile');
});

/* POST user login. */
router.post('/login', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    res.redirect('/users/signin');
    return;
  }
  req.session.email = email;
  req.session.password = password;
  req.session.logined = true;
  res.redirect('/');
});

/* POST user logout. */
router.post('/logout', function(req, res, next) {
  delete req.session.email;
  delete req.session.password;
  delete req.session.logined;
  res.redirect('/users/signin');
});

/* POST forget password. */
router.post('/forget_password', function(req, res, next) {
  // TODO
});

/* POST add article. */
router.post('/add', function(req, res, next) {
  if (!req.session.logined) {
    res.redirect('/');
    return;
  }
  new Blog({
    Email: req.session.email,
    Article: req.body.content,
    CreateDate: Date.now()
  })
    .save(err => {
      if (err) {
        console.log('Save failed.');
        return;
      }
      console.log('Save successed.');
    });
  res.redirect('/');
});

/* POST update article. */
router.post('/update/:id', function(req, res, next) {
  res.send('Update article.');
});

/* POST add article comment. */
router.post('/comment/:id', function(req, res, next) {
  res.send('Add article comment.');
});

module.exports = router;