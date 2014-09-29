'use strict';

// mikeybadr/ff-trusted-tweeters
// id: 171657820

//var bcrypt = require('bcrypt'),
//var Mongo  = require('mongodb'),
var List   = require('./list'),
    async  = require('async'),
    Player = require('./player');

function Result(){
}

Result.getPlayers = function(listId, cb){
  List.findById(listId, function(err, list){
    async.map(list.players, iterator, function(err, playerList){
      list.players = playerList;
      cb(err, list);
    });
  });
};

module.exports = Result;

function iterator(id, cb){
  Player.findById(id, cb);
}
