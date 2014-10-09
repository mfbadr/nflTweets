(function(){
  'use strict';

  angular.module('nflTweets')
  .controller('EditCtrl', ['$routeParams', '$scope', '$interval', 'Player', 'List','Result', function($routeParams, $scope, $interval, Player, List, Result){
    $scope.title = 'EDIT';
    $scope.listId = $routeParams.listId;
    $scope.filteredTweets = [];

    Result.getPlayersById($scope.listId).then(function(results){
      $scope.list = results.data;
    });

    Player.getAll().then(function(response){
      $scope.players = response.data.players;
    });

    $scope.removePlayer = function(p){
      $scope.list.players = _.without($scope.list.players, p);
    };

    $scope.addPlayer = function(){
      $scope.list.players.push($scope.player.originalObject);
      $scope.player = {};
    };

    $scope.saveList = function(){
      List.update($scope.list).then(function(results){
        toastr.success($scope.list.name + ' has been updated');
      });
    };
  }]);
})();

