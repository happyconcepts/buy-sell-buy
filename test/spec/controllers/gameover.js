'use strict';

describe('Controller: GameoverCtrl', function() {
  // load the controller's module
  beforeEach(module('bsb'));

  var GameoverCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    GameoverCtrl = $controller('GameoverCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
