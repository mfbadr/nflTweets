(function(){
  'use strict';
  //var twitterSecret = process.env.TWITTER_SECRET_NFL;

  angular.module('nflTweets')
  .factory('List', ['$http', function($http){

    //function addTwitter(playerId, screen_name){
      //return $http.post('/addplayertwitter', {playerId:playerId, screen_name:screen_name});
    //}

    function saveList(list){
      return $http.post('/addlist', {list:list});
    }

    return {saveList:saveList};
  }]);
})();

