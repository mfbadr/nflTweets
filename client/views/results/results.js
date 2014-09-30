(function(){
  'use strict';

  angular.module('nflTweets')
  .controller('ResultCtrl', ['$routeParams', '$scope', '$interval', 'Player', 'List','Result', function($routeParams, $scope, $interval, Player, List, Result){
    $scope.title = 'RESULTS';
    $scope.listId = $routeParams.listId;

    Result.getPlayersById($scope.listId).then(function(results){
      //debugger;
      $scope.list = results.data;
    });

    $scope.getTweets = function(){
      Result.getTweets().then(function(results){
        debugger;
        //use _ to pluck tweets that dont mention players on list
      });
    };

    // add function to do a targeted query for individual players
  }]);
})();

