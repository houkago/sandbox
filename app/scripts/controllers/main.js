'use strict';

/**
 * @ngdoc function
 * @name sandboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sandboxApp
 */
angular.module('sandboxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
