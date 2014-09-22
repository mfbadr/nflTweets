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

