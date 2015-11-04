describe('blink directive', function(){
  var directiveEl, compile, scope;
  var $httpBackend;
  beforeEach(function(){
    module('templates', 'directings');
    inject(function($compile, $rootScope){
      compile = $compile;
      scope = $rootScope.$new();
    });

    var element = angular.element('<blink>Some text</blink>');
    directiveEl = compile(element)(scope);
    scope.$digest();

  });

  it("should have put the title in bold", function(){
  });
});
