var app = angular.module('directings', []);

app.controller('ListController', ['posts', function(posts){
  var lc = this;
  lc.posts = posts;
  posts.get();

}]);

app.service('posts', ['$http', 'users', function($http, users){
  var svc = this;
  svc.data = [];
  svc.get = function(callback){
    $http.get('http://jsonplaceholder.typicode.com/posts/')
      .then(function(response){
        if(Array.isArray(response.data)){
          svc.data = response.data;
          svc.mapUsers();
        }
        if(callback){
          callback();
        }
      });
  };

  svc.mapUsers = function() {
    users.get(function() {
      users.data.forEach(function(user) {
        svc.data.forEach(function(post) {
          if(user.id === post.userId) {
            post.username = user.username;
          }
        });
      });
    });
  };
}]);

app.service('users', ['$http', function($http) {
  var svc = this;
  svc.data = [];
  svc.get = function(callback){
    $http.get('http://jsonplaceholder.typicode.com/users/')
      .then(function(response){
        if(Array.isArray(response.data)){
          svc.data = response.data;
        }
        if(callback){
          callback();
        }
      });
  };
}]);
