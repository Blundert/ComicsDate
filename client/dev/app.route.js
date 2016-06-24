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
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
