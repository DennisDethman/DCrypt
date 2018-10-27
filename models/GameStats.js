var mongoose = require( 'mongoose' );

var gamestatsSchema = new mongoose.Schema({
  User_id: {
    type: String,
    unique: false,
    required: true
  },
  UserScore: {
    type: Number,
    unique: false,
    required: false
  }
},
{
  timestamps: true,
  collection: 'GameStats'
});

module.exports = mongoose.model('GameStats', gamestatsSchema);
mongoose.model('GameStats', gamestatsSchema);
