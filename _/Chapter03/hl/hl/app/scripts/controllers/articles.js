'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('ArticlesCtrl', function ($scope) {

$scope.posts = [
{
title:"Almonds are good for Health",
content:"Almonds contain high amounts of HDL which helps reduce chalostrol.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue."
},
{
title:"Sugar is bad for health",
content:"Sugar besides being bad for diabeties, it also causes overweight and obesity problems.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in. "
},
{
title:"Cut down your carbs!!!",
content:"Sugar besides being bad for diabeties, it also causes overweight and obesity problems.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue. "
      }

       ];



  });
