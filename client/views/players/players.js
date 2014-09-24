(function(){
  'use strict';

  angular.module('nflTweets')
  .controller('PlayerCtrl', ['$scope', '$interval', 'Player', function($scope, $interval, Player){
    $scope.title = 'PLAYERS';
    $scope.somePlayers = [];
    $scope.twitters = [];

    Player.getAll().then(function(response){
      //$scope.players = response.data.players;
      for(var i = 0; i < 10; i++){
        $scope.somePlayers.push(response.data.players[i]);
        $scope.getTwitter(response.data.players[i].displayName);
      }
    });

    $scope.getTwitter = function(name){
      Player.searchByName(name).then(function(response){
        debugger;
        $scope.twitters.push(response.data[0] || null);
      });
    };

  }]);
})();

