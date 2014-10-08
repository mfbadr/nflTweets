(function(){
  'use strict';

  angular.module('nflTweets')
  .controller('ResultCtrl', ['$routeParams', '$scope', '$interval', 'Player', 'List','Result', function($routeParams, $scope, $interval, Player, List, Result){
    $scope.title = 'RESULTS';
    $scope.listId = $routeParams.listId;
    $scope.filteredTweets = [];


    Result.getPlayersById($scope.listId).then(function(results){
      $scope.list = results.data;
    });

    $scope.getTweets = function(){
      Result.getTweets().then(function(results){
        //debugger;
        $scope.rawTweets = results.data;
      });
    };

    $scope.filterTweets = function(){
      $scope.list.players.forEach(function(player){
        var tempTweets = _.filter($scope.rawTweets, function(t){
          return t.text.indexOf(player.lname) !== -1;
        });
        $scope.filteredTweets = $scope.filteredTweets.concat(tempTweets);
      });
    };

    $scope.getFilteredTweets = function(){
      Result.getTweets().then(function(results){
        //debugger;
        $scope.rawTweets = results.data;
        $scope.filterTweets();
      });
    };

    $scope.getFilteredTweets();


    // add function to do a targeted query for individual players
  }]);
})();

