'use strict';

describe('Controller: SubscribersCtrl', function () {

  // load the controller's module
  beforeEach(module('hlApp'));

  var SubscribersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubscribersCtrl = $controller('SubscribersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
