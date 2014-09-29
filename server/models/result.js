'use strict';

// mikeybadr/ff-trusted-tweeters
// id: 171657820
// https://api.twitter.com/1.1/lists/statuses.json?count=1000&include_rts=0&list_id=171657820

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

Result.getTweets = function(cb){
  console.log('function init');
  var Twitter = require('mtwitter'),
      twitter = new Twitter({
        consumer_key: 'NTB1uJSI39pDl4sRMl9hjJmjt',
        consumer_secret: process.env.TWITTER_SECRET_NFL,
        access_token_key: '2228885144-4FcxKKgCInqfumIDO9bo0kT1VnJHKpUoDI6IUyR',
        access_token_secret: process.env.TWITTER_TOKEN_SECRET_NFL
      });
  console.log('before get');
  twitter.get('/lists/statuses', {list_id:171657820, count:1000},
    function(error, data, response){
    console.log('during get');

    console.log('ERROR', error);
    console.log('DATA', data);

    cb(error, data, response);
  });
};

module.exports = Result;

function iterator(id, cb){
  Player.findById(id, cb);
}
