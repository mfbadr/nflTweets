(function(){
  'use strict';

  angular.module('nflTweets', ['ngRoute', 'LocalForageModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login',    {templateUrl:'/views/login/login.html',       controller:'LoginCtrl'})
    .when('/logout',   {templateUrl:'/views/logout/logout.html',     controller:'LogoutCtrl'})
    .when('/players',  {templateUrl:'/views/players/players.html',     controller:'PlayerCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'mean-template', storeName:'cache', version:1.0});
  }]);
})();

