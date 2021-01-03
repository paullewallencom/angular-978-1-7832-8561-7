'use strict';

/**
 * @ngdoc function
 * @name yohoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yohoApp
 */
angular.module('yohoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
