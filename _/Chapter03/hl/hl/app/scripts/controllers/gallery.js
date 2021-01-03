'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('GalleryCtrl', function ($scope) {

$scope.pictures=[];
    
var baseURL="http://lorempixel.com/300/180/";

var titles=["Healthy Food","Healthy @ Work","City Life ","Staying Fit","Looking Good","Nightlife !!"] ;
  
var keywords=["food", "business","city","sports","fashion", "nightlife"];

var dummyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed erat turpis. Integer eget consectetur quam. Sed at quam ut dolor varius condimentum et sit amet odio. ";


$scope.addPics=function(i){
	$scope.pictures.push({
    	url:baseURL+keywords[i],
    	title:titles[i],
    	summary:dummyText
    })
}

for (var i=0;i<5;i++){
    $scope.addPics(i);
}  

$scope.rate = 0;
$scope.max = 10;
$scope.isReadonly = false;



  });
