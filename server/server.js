'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Post = require('./models/post');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://danielgynn:secret@ds161041.mlab.com:61041/react-crud-blog');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'API is running!'});
});

router.route('/posts')
  .get(function(req, res) {
    Post.find(function(err, posts) {
      if (err) {
        res.send(err);
      } else {
        res.json(posts);
      }
    });
  })

  .post(function(req, res) {
    var post = new Post();
    post.author = req.body.author;
    post.text = req.body.text;

    post.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Post successfully posted!'});
      }
    });
  });

app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
