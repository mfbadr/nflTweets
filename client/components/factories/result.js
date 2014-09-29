(function(){
  'use strict';
  //var twitterSecret = process.env.TWITTER_SECRET_NFL;

  angular.module('nflTweets')
  .factory('Result', ['$http', function($http){

    //function addTwitter(playerId, screen_name){
      //return $http.post('/addplayertwitter', {playerId:playerId, screen_name:screen_name});
    //}

    function getPlayersById(listId){
      return $http.post('/getplayers', {listId:listId});
    }

    function getTweets(){
      return $http.get('/tweets');
    }

    return {getPlayersById:getPlayersById, getTweets:getTweets};

  }]);
})();

