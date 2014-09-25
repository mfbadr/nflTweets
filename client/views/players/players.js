(function(){
  'use strict';

  angular.module('nflTweets')
  .controller('PlayerCtrl', ['$scope', '$interval', 'Player', function($scope, $interval, Player){
    $scope.title = 'PLAYERS';
    $scope.somePlayers = [];
    $scope.customTwitter = '';
    $scope.results = {};
    $scope.udf = undefined;

    Player.getAll().then(function(response){
      $scope.players = response.data.players;
      //for(var i = 0; i < 10; i++){
        //$scope.somePlayers.push(response.data.players[i]);
        //$scope.getTwitter(response.data.players[i].displayName);
      //}
    });

    $scope.randomPlayer = function(){
      $scope.player = _.sample($scope.players);
      $scope.results = {};
    };

    $scope.getTwitter = function(name){
      Player.searchByName(name).then(function(response){
        $scope.results =  response.data[0];
      });
    };

    $scope.addTwitter = function(screen_name){
      Player.addTwitter($scope.player._id, screen_name).then(function(response){
        toastr.success('Twitter ' + screen_name + ' added to' + $scope.player.displayName);
        $scope.results = {};
        $scope.player = {};
        $scope.customTwitter = '';
      }, function(response){
        toastr.error('There was a problem adding this players twitter handle');
      });
    };

  }]);
})();

