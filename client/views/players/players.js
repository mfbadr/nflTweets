(function(){
  'use strict';

  angular.module('nflTweets')
  .controller('PlayerCtrl', ['$scope', '$interval', 'Player', function($scope, $interval, Player){
    $scope.title = 'PLAYERS';

    Player.getAll().then(function(response){
      $scope.players = response.data.players;
    });


  }]);
})();

