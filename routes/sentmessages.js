var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var SentMsgs = require('../models/SentMessages.js');

/* GET ALL MESSAGES */
router.get('/', function(req, res, next) {
  SentMsgs.find(function (err, messages) {
    if (err) return next(err);
    console.log('get all sentmsgs');
    res.json(messages);
  });
});

/* GET SINGLE MSG BY ID */
router.get('/:id', function(req, res, next) {
  SentMsgs.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE MSG */
router.post('/', function(req, res, next) {
  SentMsgs.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE MSG */
router.put('/:id', function(req, res, next) {
  SentMsgs.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE MSG */
router.delete('/:id', function(req, res, next) {
  SentMsgs.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;