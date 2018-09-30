var express = require('express');
var router = express.Router();

/* DELETE article. */
router.delete('/delete/:id', function(req, res, next) {
  res.send('Delete article.');
});

/* POST user login. */
router.post('/login', function(req, res, next) {
  res.send('User login.');
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