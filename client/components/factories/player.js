(function(){
  'use strict';

  angular.module('nflTweets')
  .factory('Player', ['$http', function($http){

    function getAll(){
      return $http.get('/players');
    }

    return {getAll:getAll};
  }]);
})();

