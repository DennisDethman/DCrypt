var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var GameStats = require('../models/GameStats.js');

/* GET top 5 Stats */
router.get('/', function(req, res, next) {
   //GameStats.find(function (err, stats) {
  GameStats.find({})
  .sort({'Score': -1})
  .limit(5)
  .exec(function (err, stats) {
    if (err) return next(err);
    res.json(stats);
  });
});

/* GET SINGLE STAT BY ID */
router.get('/:id', function(req, res, next) {
  GameStats.find({'User_id': req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Stat */
router.post('/', function(req, res, next) {
  GameStats.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE STAT */
router.put('/:id', function(req, res, next) {
  //GameStats.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
  GameStats.update(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE STAT */
router.delete('/:id', function(req, res, next) {
  GameStats.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;