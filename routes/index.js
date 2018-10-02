require('../lib/db');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

/* GET home page. */
router.get('/', function(req, res, next) {
  Blog.find((err, blogs, count) => {
    res.render('index', { blogs: blogs });
  });
});

module.exports = router;
