'use strict';

/**
 * @ngdoc function
 * @name yohoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yohoApp
 */
angular.module('yohoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'E2E',
      'Protractor'
    ];
  });
