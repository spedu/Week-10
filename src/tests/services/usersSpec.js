describe('users service', function() {
  var $httpBackend;
  var users;

  var usersMock = [{id: 1, username:"one"}, {id: 2, username:"two"}];

  beforeEach(function(){
    module('directings');

    inject(function($injector) {
      users = $injector.get('users');
      $httpBackend = $injector.get('$httpBackend');
    });

    $httpBackend
      .when('GET', 'http://jsonplaceholder.typicode.com/users/')
      .respond(200, usersMock);
  });

  describe('get', function(){
    it("should get some users", function(){
      users.get(function() {
        expect(users.data.length).toBeGreaterThan(0);
      });
    });
  });
});
