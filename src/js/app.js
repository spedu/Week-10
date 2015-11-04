var app = angular.module('directings', []);

app.controller('ListController', ['posts', function(posts){
  var lc = this;
  lc.posts = posts;
  posts.get();

}]);

app.service('posts', ['$http', function($http){
  var svc = this;
  svc.data = [];
  svc.get = function(callback){
    $http.get('http://jsonplaceholder.typicode.com/posts/')
      .then(function(response){
        if(Array.isArray(response.data)){
          svc.data = response.data;
          //svc.mapUsers();
        }
        if(callback){
          callback();
        }
      });
  };

}]);
