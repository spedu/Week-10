describe('post directive', function() {
  var compile, scope;

  var compiledDirective;

  beforeEach(function() {
    module('templates', 'directings');

    inject(function($compile, $rootScope) {
      compile = $compile;
      scope = $rootScope.$new();
    });

    scope.post = {
      title: 'Test this out',
      username: 'Some User'
    };

    var element = angular.element('<post-display post="post"></post-display>');
    compiledDirective = compile(element)(scope);
    scope.$digest();
  });
  it("should have put the title in bold", function(){
    var strong = compiledDirective.find('strong');
    expect(strong.text()).toBe(scope.post.title);
  });
  it("should have prefixed the username with a 'by '", function(){
    var tt = compiledDirective.find('tt');
    expect(tt.text()).toBe('by ' + scope.post.username);
  });
});
