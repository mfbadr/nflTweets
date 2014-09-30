(function(){
  'use strict';

  angular.module('nflTweets')
  .controller('HomeCtrl', ['$scope', '$location', 'Home', 'User', function($scope, $location, Home, User){

    $scope.getUser = function(){
      User.user().then(function(response){
        $scope.client = response.data;
        debugger;
      }, function(response){
        $scope.clinet = null;
        debugger;
      });
    };

    $scope.getUser();
//*************LOG IN ****************//
    function loginSuccess(response){
      toastr.success('Successful login.');
      $scope.regUser = null;
      $scope.getUser();
      //$location.path('/');
    }

    function loginFailure(response){
      toastr.error('Error during login, try again.');
      $scope.user = {};
    }

    $scope.login = function(){
      User.login($scope.user).then(loginSuccess, loginFailure);
    };

//*************REGISTER ****************//

    function registerFailure(response){
      toastr.error('Error during user registration, try again.');
      $scope.regUser = {};
    }
    function registerSuccess(response){
      toastr.success('User successfully registered.');
      $location.path('/');
      User.login($scope.regUser).then(loginSuccess, loginFailure);
    }
    $scope.register = function(){
      User.register($scope.regUser).then(registerSuccess, registerFailure);
    };

  }]);
})();

