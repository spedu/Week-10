angular.module('directings')
  .service('posts', ['$http', 'users', function($http, users){
    var svc = this;
    svc.data = [];
    svc.get = function(callback){
      $http.get('http://jsonplaceholder.typicode.com/posts')
        .then(function(response){
          svc.data = response.data;
          svc.mapUsers();
          if(callback){
            callback();
          }
        });
    };

    // this will add a userName to the svc.data object
    svc.mapUsers = function(){
      users.get(function(){
        users.data.forEach(function(user){
          svc.data.forEach(function(post){
            if(post.userId == user.id){
              post.userName = user.name;
            }
          });
        });

      });
    };


  }]);
