(function(){
  'use strict';

  angular.module('nflTweets', ['angucomplete', 'angular-loading-bar', 'ngRoute', 'LocalForageModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/logout',   {templateUrl:'/views/logout/logout.html',     controller:'LogoutCtrl'})
    .when('/players',  {templateUrl:'/views/players/players.html',   controller:'PlayerCtrl'})
    .when('/lists',  {templateUrl:'/views/lists/lists.html',   controller:'ListCtrl'})
    .when('/tweets',  {templateUrl:'/views/tweets/tweets.html',   controller:'TweetsCtrl'})
    .when('/results/:listId',  {templateUrl:'/views/results/results.html',   controller:'ResultCtrl'})
    .when('/edit/:listId',  {templateUrl:'/views/edit/edit.html',   controller:'EditCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'nflTweets', storeName:'cache', version:1.0});
  }]);
})();

