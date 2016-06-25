;(function(ng) {
  'use strict';

  ng.module('ComicsDates')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
