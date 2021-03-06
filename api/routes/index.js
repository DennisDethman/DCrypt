var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var jwtKey = require('../../keys');

var auth = jwt({
  secret: Object(jwtKey.jwtKeys.secretKey).toString(),
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
