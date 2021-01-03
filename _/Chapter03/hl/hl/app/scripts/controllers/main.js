'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('MainCtrl', function ($scope) {
   
var baseURL='http://lorempixel.com/960/450/';
$scope.setInterval=5000;
 
 $scope.slides = [
 {title:'7 ways to stay fit', image:baseURL+'sports/'},
 {title:'Healthy Food', image:baseURL+'food/'},
 {title:'Relaxing Holidays', image:baseURL+'nature/'}
 

 ];

 var baseURL="http://lorempixel.com/200/200/"
$scope.content=[
{
	img:baseURL+"people",
	title:"About Us",
	summary:"We are good, we are the best out there"
},
{
	img:baseURL+"business",
	title:"Our Services",
	summary:"We offer advice on staying Healthly, what to eat...  what are the best exercises for you etc."
},
{

	img:baseURL+"transport",
	title:"Contact Us",
	summary:"#111, Good Health Blvd, Happy Place, Antartica, Zip-432167"
}
]


  });
