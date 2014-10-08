'use strict';

var Result = require('../models/result');

exports.getPlayers = function(req, res){
  Result.getPlayers(req.body.listId, function(err, list){
    res.send(list);
    res.status(200).end();
  });
};

exports.getTweets = function(req, res){
  console.log('getTweets FIRED FROM CONTROLLER 1');
  Result.getTweets(function(rawTweets){
    //console.log('debug', err, data, response);
    res.send(rawTweets);
    res.status(200).end();
  });
};
