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
  //console.log('function init');
  var Twitter = require('mtwitter'),
      twitter = new Twitter({
        consumer_key: 'NTB1uJSI39pDl4sRMl9hjJmjt',
        consumer_secret: process.env.TWITTER_SECRET_NFL,
        access_token_key: '2228885144-4FcxKKgCInqfumIDO9bo0kT1VnJHKpUoDI6IUyR',
        access_token_secret: process.env.TWITTER_TOKEN_SECRET_NFL
      }),
    //p = 1,
    rawTweets = [];

  /*
  // asynchrnous for loop is tricky, maybe later refactor this
  // async.whilst ??
  twitterCallback = function(err, data, response){
    rawTweets = rawTweets.concat(data);
    console.log('DATA LENGTH', data.length);
  };

  while(rawTweets.length < 1000){
    console.log('p', p);
    //twitter.get('/lists/statuses', {list_id:171657820, count:200, page:1},
    twitter.get('/lists/statuses', {list_id:171657820, count:200, page:p}, twitterCallback);
    console.log('rawTWEETS', rawTweets);
    p++;
  }
  cb(rawTweets);
  */

  // for now let us descend into callback hell...
  twitter.get('/lists/statuses', {list_id:171657820, count:200, page:1},
    function(error, data, response){
    rawTweets = rawTweets.concat(data);
    twitter.get('/lists/statuses', {list_id:171657820, count:200, page:2},
      function(error, data, response){
      rawTweets = rawTweets.concat(data);
      twitter.get('/lists/statuses', {list_id:171657820, count:200, page:3},
        function(error, data, response){
        rawTweets = rawTweets.concat(data);
        twitter.get('/lists/statuses', {list_id:171657820, count:200, page:4},
          function(error, data, response){
          rawTweets = rawTweets.concat(data);
          twitter.get('/lists/statuses', {list_id:171657820, count:200, page:5},
            function(error, data, response){
            rawTweets = rawTweets.concat(data);
            cb(rawTweets);
          });
        });
      });
    });
  });
};

module.exports = Result;

function iterator(id, cb){
  Player.findById(id, cb);
}
