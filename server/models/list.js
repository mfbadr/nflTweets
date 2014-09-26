'use strict';

//var bcrypt = require('bcrypt'),
var Mongo  = require('mongodb');

function List(){
}

Object.defineProperty(List, 'collection', {
  get: function(){return global.mongodb.collection('lists');}
});

List.all = function(cb){
  List.collection.find().toArray(cb);
};

List.add = function(list, user, cb){
  list.userId = Mongo.ObjectID(user._id);
  list.players = list.players.map(function(playerId){
    playerId = Mongo.ObjectID(playerId);
    return playerId;
  });
  List.collection.save(list, cb);
};

List.findByUser = function(id, cb){
  var _id = Mongo.ObjectID(id);
  List.collection.find({userId:_id}).toArray(cb);
};

//var _id = Mongo.ObjectID(id);
//Player.getTwitter = function(q, cb){
  //console.log('player.getTwitter FIRED');
  //var Twitter = require('mtwitter'),
      //twitter = new Twitter({
        //consumer_key: 'NTB1uJSI39pDl4sRMl9hjJmjt',
        //consumer_secret: process.env.TWITTER_SECRET_NFL,
        //access_token_key: '2228885144-4FcxKKgCInqfumIDO9bo0kT1VnJHKpUoDI6IUyR',
        //access_token_secret: process.env.TWITTER_TOKEN_SECRET_NFL
      //});

  //twitter.get('/users/search', {q: q, count:2},
    //function(error, data, response){
    ////console.log('DATA', data)

    //cb(error, data, response);
  //});
//};


module.exports = List;

