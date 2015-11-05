describe('posts service', function(){
  var $httpBackend;
  var posts;

  var usersMock = [{id: 1, username:"one"}, {id: 2, username:"two"}];

  beforeEach(function(){
    module('directings');

    module(function($provide) {
      $provide.service('users', function() {
        var svc = this;
        this.data = [];
        this.get = fuction(callback) {
          svc.data = usersMock;
          if(callback){
            callback();
          }
        };
      });
    });

    inject(function($injector) {
      posts = $injector.get('posts');
    });
  });

  describe('get', function(){
    xit("should get some posts", function(){

    });
    xit("should call users.get", function(){

    });
    xit("should call posts.mapUsers", function(){

    });
  });

  describe("mapUsers", function(){
    xit("should add a userName to the posts", function(){

    });

  });



});
