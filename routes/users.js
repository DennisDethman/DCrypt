var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/Users.js');

/* GET ALL Users */
router.get('/', function(req, res, next) {
  User.find(function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* GET top 5 Stats */
router.get('/stats', function(req, res, next) {
  User.find({})
  .sort({'gameScore': -1})
  .limit(5)
  .exec(function (err, stats) {
    if (err) return next(err);
    res.json(stats);
  });
});

/* GET SINGLE STAT BY ID */
router.get('/stats/:id', function(req, res, next) {
  User.find({'_id': req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE User BY ID */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* SAVE User */
router.post('/', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE User */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE User */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;