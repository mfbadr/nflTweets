(function(){
  'use strict';

  angular.module('nflTweets')
  .controller('ListCtrl', ['$scope', '$interval', 'Player', 'List', function($scope, $interval, Player, List){
    $scope.title = 'LISTS';
    $scope.list = {players:[]};
    $scope.playerNames = [];
    $scope.listPlayers = [];

    Player.getAll().then(function(response){
      $scope.players = response.data.players;
    });

    List.findByUser().then(function(response){
      $scope.lists = response.data;
      //debugger;
    });


    $scope.addPlayer = function(){
      $scope.list.players.push($scope.player.originalObject._id);
      $scope.listPlayers.push($scope.player.originalObject);
      $scope.player = {};
      $('#playerSelect').val('');
    };

    $scope.saveList = function(){
      List.saveList($scope.list).then(function(response){
        toastr.success('List ' + $scope.list.name + 'saved');
        $scope.lists.push($scope.list);
        $scope.list = null;
      }, function(response){
        toastr.error('There was problem saving your list. If these problem persists let us know.');
      });
    };

  }]);
})();

