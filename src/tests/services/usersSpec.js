describe('users service', function(){
  var users, $httpBackend;
  var postsMock = [
    {title: "1", userName: "some1", body: "this is the body of 1"},
    {title: "2", userName: "some2", body: "this is the body of 2"},
    {title: "3", userName: "some2", body: "this is the body of 3"},
    {title: "4", userName: "some3", body: "this is the body of 4"},
    {title: "5", userName: "some3", body: "this is the body of 5"}
  ];
  beforeEach(function(){
    module('directings');
    inject(function($injector){
      $httpBackend = $injector.get('$httpBackend');
      users = $injector.get('users');
      $httpBackend
        .when('GET', 'http://jsonplaceholder.typicode.com/posts')
        .respond(200, postsMock);
    });
  });

  describe('get', function(){
    it("should get some posts", function(){
      expect(users.data.length).toBe(0);
      users.get(function(){
        expect(users.data.length).toBe(postsMock.length);
      });
    });
  });
});
