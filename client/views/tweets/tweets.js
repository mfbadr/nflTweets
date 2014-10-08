(function(){
  'use strict';

  angular.module('nflTweets')
  .controller('TweetsCtrl', ['$routeParams', '$scope', '$interval', 'Player', 'List','Result', function($routeParams, $scope, $interval, Player, List, Result){
    $scope.title = 'TWEETS';
    $scope.filteredTweets = [];

    $scope.getTweets = function(){
      Result.getTweets().then(function(results){
        debugger;
        $scope.rawTweets = results.data;
      });
    };
    $scope.getTweets();
    Player.getAll().then(function(response){
      $scope.players = response.data.players;
    });

    //get all the current users lists
    List.findByUser().then(function(response){
      $scope.lists = response.data;
      //debugger;
    });

    //when a list is clicked
    $scope.setList = function(list){
      //clear tweets
      $scope.filteredTweets = [];
      Result.getPlayersById(list._id).then(function(results){
        $scope.list = results.data;
        $scope.filterTweets();
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

    $scope.setPlayer = function(){
      $scope.player = $scope.player.originalObject || $scope.player;
      $scope.list = {name:$scope.player.displayName, players:[$scope.player]};
      $scope.filterTweets();
    };
    // add function to do a targeted query for individual players
  }]);
})();

