(function(){
  'use strict';

  angular.module('nflTweets')
  .controller('ResultCtrl', ['$routeParams', '$scope', '$interval', 'Player', 'List', function($routeParams, $scope, $interval, Player, List){
    $scope.title = 'RESULTS';
    $scope.listId = $routeParams.listId;
  }]);
})();

