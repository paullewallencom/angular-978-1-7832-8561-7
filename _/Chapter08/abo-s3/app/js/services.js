'use strict';
angular.module('myApp.services', []).
value('version', '0.1')
.constant('API_KEY','v3n9fsvt79rfhkzbav9mhegn')
.factory('rtmFactory', ['$http', 'API_KEY',function($http,API_KEY) {
var countries = [
{name: 'USA',code: 'us'},
{name: 'UK',code: 'uk'},
{name: 'France',code: 'fr'}
];
return {
getCountries: function() {
return countries;
},

getMovies:function(countryCode){
var key='';
return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=10&country='+countryCode+'&callback=JSON_CALLBACK&apikey='+API_KEY);
}
}
}])