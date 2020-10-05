const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Post', post);