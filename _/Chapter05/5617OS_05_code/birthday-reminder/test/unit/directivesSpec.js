'use strict';
/* jasmine specs for directives go here */
describe('directives', function() {
var $compile, $rootScope;
beforeEach(function() {
module('myApp.directives');
})

beforeEach(inject(function(_$compile_, _$rootScope_,$templateCache) {
$compile = _$compile_;
$rootScope = _$rootScope_;

$templateCache.put('partials/greeting.html', '<span class="pull-right"><span id="welcome" ng-if="logged">Welcome {{username}} | <a href="#" onclick="FB.logout()">Logout</a></span><span ng-if="!logged"><button class="btn btn-primary" ng-click="myLogin()">Login</button></span></span>')

}));

it('should check if directive is loaded', function() {
var element = $compile("<div my-facebook permission='friends_birthday'> </div>")($rootScope);
$rootScope.$digest();
expect(element.text()).toContain("Login");
})
})