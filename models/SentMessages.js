var mongoose = require( 'mongoose' );

var sentMsgSchema = new mongoose.Schema({
    Sender_id: {
      type: String,
      unique: false,
      required: true     
    },
    SentTo_id: {
      type: String,
      unique: false,
      required: true
    },
    SentTo_Alias: {
      type: String,
      unique: true,
      required: true
    },
    DecryptedMsg: {
      type: String,
      unique: false,
      required: true
    },
    EncryptedMsg: {
      type: String,
      unique: false,
      required: true
    },
    EncryptionKey: {
      type: Number,
      unique: false,
      required: true
    },
    AttemptsAllowed: {
      type: Number,
      unique: false,
      required: true,
    },
    AttemptsRemaining: {
      type: Number,
      unique: false,
      required: true
    },
    Solved: {
      type: Boolean,
      unique: false,
      default: false
    },
    MessageScore: {
      type: Number,
      unique: false,
      required: false
    }
},
{
  timestamps: true,
  collection: 'SentMessages'
});

module.exports = mongoose.model('SentMessages', sentMsgSchema);
mongoose.model('SentMessages', sentMsgSchema);
