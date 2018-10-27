var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    unique: false,
    required: false
  },
  title: {
    type: String,
    unique: false,
    required: false
  },
  author: {
    type: String,
    unique: false,
    required: false
  },
  description: {
    type: String,
    unique: false,
    required: false
  },
  published_year: {
    type: String,
    unique: false,
    required: false
  },
  published: {
    type: Number,
    unique: false,
    required: false
  },
  updated_date: {
    type: Date,
    default: Date.now(),
    unique: false,
    required: false
  }
},
{
  timestamps: true,
  collection: 'Book'
});

module.exports = mongoose.model('Book', BookSchema);
mongoose.model('Book', BookSchema);
