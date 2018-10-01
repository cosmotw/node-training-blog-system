var express = require('express');
var router = express.Router();

/* DELETE article. */
router.delete('/delete/:id', function(req, res, next) {
  res.send('Delete article.');
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
  res.send('Add article.');
});

/* PUT update article. */
router.put('/update/:id', function(req, res, next) {
  res.send('Update article.');
});

/* POST add article comment. */
router.post('/comment/:id', function(req, res, next) {
  res.send('Add article comment.');
});

module.exports = router;