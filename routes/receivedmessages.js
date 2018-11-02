var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var RecvdMsgs = require('../models/ReceivedMessages.js');

/* GET ALL MESSAGES for User */
router.get('/allforid/:id', function(req, res, next) {
  RecvdMsgs.find({'Solved': false, 'Receiver_id': req.params.id})
  .exec(function (err, messages) {
    if (err) return next(err);
    res.json(messages);
  });
});

/* GET SINGLE MSG BY ID */
router.get('/:id', function(req, res, next) {
  RecvdMsgs.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE MSG */
router.post('/', function(req, res, next) {
  console.log(req)
  RecvdMsgs.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE MSG */
router.put('/:id', function(req, res, next) {
  RecvdMsgs.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE MSG */
router.delete('/:id', function(req, res, next) {
  RecvdMsgs.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;