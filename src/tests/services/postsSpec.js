describe('posts service', function(){
  var $httpBackend;
  var posts, users;

  var postsMock = [{title: 'Test 1', userId: 1}, {title: 'Test 2', userId: 2}];
  var usersMock = [{id: 1, username:"one"}, {id: 2, username:"two"}];

  beforeEach(function(){
    module('directings');

    module(function($provide) {
      $provide.service('users', function() {
        var svc = this;
        svc.data = [];
        this.get = function(callback) {
          svc.data = usersMock;
          if(callback){
            callback();
          }
        };
      });
    });

    inject(function($injector) {
      posts = $injector.get('posts');
      users = $injector.get('users');
      $httpBackend = $injector.get('$httpBackend');
    });

    $httpBackend
      .when('GET', 'http://jsonplaceholder.typicode.com/posts/')
      .respond(200, postsMock);
  });

  describe('get', function(){
    it("should get some posts", function(){
      expect(posts.data.length).toBe(0);
      posts.get(function() {
        expect(posts.data.length).toBeGreaterThan(0);
        expect(posts.data.length).toBe(postsMock.length);
      });
    });
    it("should call users.get", function(){
      spyOn(users, 'get').and.callThrough();
      posts.get(function() {
        expect(users.get).toHaveBeenCalled();
      });
    });
    it("should call posts.mapUsers", function(){
      spyOn(posts, 'mapUsers').and.callThrough();
      posts.get(function() {
        expect(posts.mapUsers).toHaveBeenCalled();
      });
    });
  });

  describe("mapUsers", function(){
    it("should add a userName to the posts", function(){
      posts.get(function() {
        var post = posts.data[0];
        expect(post.username).toBeDefined();
        expect(post.username).toBe(usersMock[0].username);
      });
    });
  });
});