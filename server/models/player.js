'use strict';

//var bcrypt = require('bcrypt'),
  var Mongo  = require('mongodb');

function Player(){
}

Object.defineProperty(Player, 'collection', {
  get: function(){return global.mongodb.collection('players');}
});

Player.all = function(cb){
  Player.collection.find().toArray(cb);
};

//var _id = Mongo.ObjectID(id);
Player.getTwitter = function(q, cb){
  console.log('player.getTwitter FIRED');
  var Twitter = require('mtwitter'),
      twitter = new Twitter({
        consumer_key: 'NTB1uJSI39pDl4sRMl9hjJmjt',
        consumer_secret: process.env.TWITTER_SECRET_NFL,
        access_token_key: '2228885144-4FcxKKgCInqfumIDO9bo0kT1VnJHKpUoDI6IUyR',
        access_token_secret: process.env.TWITTER_TOKEN_SECRET_NFL
      });

  twitter.get('/users/search', {q: q, count:1},
    function(error, data, response){
    //console.log('DATA', data)

    cb(error, data, response);
  });
};

Player.addTwitter = function(playerId, screen_name, cb){
  var _id = Mongo.ObjectID(playerId);
  if(!screen_name){
    console.log('undefined');
  }
  Player.collection.update({_id:_id},{$set: {screen_name:screen_name}}, cb);
};

module.exports = Player;

