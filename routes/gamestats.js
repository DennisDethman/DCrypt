var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var GameStats = require('../models/GameStats.js');

/* GET ALL Stats */
router.get('/', function(req, res, next) {
  GameStats.find(function (err, messages) {
    if (err) return next(err);
    console.log('get all sentmsgs');
    res.json(messages);
  });
});

/* GET SINGLE STAT BY ID */
router.get('/:id', function(req, res, next) {
  GameStats.findById(req.params.id, function (err, post) {
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
  GameStats.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
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