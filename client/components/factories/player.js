(function(){
  'use strict';
  //var twitterSecret = process.env.TWITTER_SECRET_NFL;

  angular.module('nflTweets')
  .factory('Player', ['$http', function($http){

    function getAll(){
      return $http.get('/players');
    }

    function searchByName(q){
      return $http.post('/getplayertwitter', {name:q});
    }

    function addTwitter(playerId, screen_name){
      return $http.post('/addplayertwitter', {playerId:playerId, screen_name:screen_name});
    }

    return {getAll:getAll, searchByName:searchByName, addTwitter:addTwitter};
  }]);
})();

