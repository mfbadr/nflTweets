'use strict';

var Player = require('../models/player');

exports.all = function(req, res){
  Player.all(function(err, players){
    if(players){
      res.send({players:players});
      res.status(200).end();
    }else{
      res.status(400).end();
    }
  });
};

exports.getTwitter = function(req, res){
  Player.getTwitter(req.body.name, function(e, data, response){
    res.send(data);
    console.log('get twitter sent data');
    res.status(200).end();
  });
};

exports.addTwitter = function(req, res){
  Player.addTwitter(req.body.playerId, req.body.screen_name, function(err, count, writeResults){
    console.log('WRITERESULTS',writeResults);
    console.log('count', count);
    if(count === 1){
      res.status(200).end();
    }else{
      res.status(400).end();
    }
  });
};
