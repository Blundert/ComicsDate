;(function(ng) {
  'use strict';

  ng.module('ComicsDates')
    .config([
      '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'todo/templates/todo.html',
            controller: 'TodoController',
            controllerAs: 'todoCtrl'
          })
          .when('/login', {
            templateUrl: 'login/templates/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
