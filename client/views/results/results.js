(function(){
  'use strict';

  angular.module('nflTweets')
  .controller('ResultCtrl', ['$routeParams', '$scope', '$interval', 'Player', 'List','Result', function($routeParams, $scope, $interval, Player, List, Result){
    $scope.title = 'RESULTS';
    $scope.listId = $routeParams.listId;

    Result.getPlayersById($scope.listId).then(function(results){
      debugger;
    });

  }]);
})();

