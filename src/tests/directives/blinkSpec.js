describe('blink directive', function(){
  var directiveEl, compile, scope;
  beforeEach(function(){
    module('directings');
    inject(function($compile, $rootScope, $timeout){
      compile = $compile;
      scope = $rootScope.$new();
    });

    var element = angular.element('<blink>Some text</blink>');
    directiveEl = compile(element)(scope);
    scope.$digest();

  });

});
