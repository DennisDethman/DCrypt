var mongoose = require( 'mongoose' );

var receivedMsgSchema = new mongoose.Schema({
  SentMsg_id: {
    type: String,
    unique: false,
    required: false   
  },
  Receiver_id: {
    type: String,
    unique: false,
    required: true     
  },
  ReceivedFrom_id: {
    type: String,
    unique: false,
    required: true
  },
  ReceivedFrom_Alias: {
    type: String,
    unique: false,
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
  collection: 'ReceivedMessages'
});

module.exports = mongoose.model('ReceivedMessages', receivedMsgSchema);
mongoose.model('ReceivedMessages', receivedMsgSchema);
