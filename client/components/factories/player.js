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

    return {getAll:getAll, searchByName:searchByName};
  }]);
})();

