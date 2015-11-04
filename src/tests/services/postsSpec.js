describe('posts service', function(){
  var users, posts, $httpBackend;
  var usersMock = [
    {id: 1, username: "one"},
    {id: 2, username: "two"},
    {id: 3, username: "three"}
  ];
  var postsMock = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
  ];
  beforeEach(function(){
    module('directings');
    module(function($provide){
      $provide.service('users', function(){
        var svc = this;
        svc.data = [];
        svc.get = function(callback){
          this.data = usersMock;
          if(callback){
            callback();
          }
        };
      });
    });
    inject(function($injector){
      $httpBackend = $injector.get('$httpBackend');
      posts = $injector.get('posts');
      users = $injector.get('users');
      $httpBackend
        .when('GET', 'http://jsonplaceholder.typicode.com/posts')
        .respond(200, postsMock);
    });
  });

  describe('get', function(){
    it("should get some posts", function(){
      expect(posts.data.length).toBe(0);
      posts.get(function(){
        expect(posts.data.length).toBe(postsMock.length);
      });
    });
    it("should call users.get", function(){
      spyOn(users, 'get');
      posts.get(function(){
        expect(users.get).toHaveBeenCalled();
      });
    });
    it("should call posts.mapUsers", function(){
      spyOn(posts, 'mapUsers');
      posts.get(function(){
        expect(posts.mapUsers).toHaveBeenCalled();
      });
    });
  });

  describe("mapUsers", function(){
    it("should add a userName to the posts", function(){
      // determine the mocked array doesn't have a userName
      expect(postsMock[0].userName).toBeUndefined();
      // determine the returned array does
      posts.get(function(){
        expect(postsMock[0].userName).toBeDefined();
      });
    });

  });



});
