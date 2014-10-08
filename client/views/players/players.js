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
    });

    $scope.setPlayer = function(){
      $scope.player = $scope.player.originalObject || $scope.player;
      Player.searchByName($scope.player.displayName).then(function(response){
        $scope.results =  response.data[0];
      });
    };

    $scope.randomPlayer = function(){
      $scope.player = _.sample($scope.players);
      Player.searchByName($scope.player.displayName).then(function(response){
        $scope.results =  response.data[0];
      });
    };

    //$scope.getTwitter = function(name){
      //Player.searchByName(name).then(function(response){
        //$scope.results =  response.data[0];
      //});
    //};

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

