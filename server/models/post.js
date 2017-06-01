'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  author: String,
  text: String
});

module.exports = mongoose.model('Post', PostSchema);
