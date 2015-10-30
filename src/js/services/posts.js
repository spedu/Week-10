angular.module('directings')
  .service('posts', ['$http', 'users', function($http, users){
    var svc = this;
    svc.data = [];
    //svc.current;
    svc.get = function(index, callback){
      index = index === undefined ? '' : index;
      if(typeof index == 'Function'){
        callback = index;
        index = '';
      }
      $http.get('http://jsonplaceholder.typicode.com/posts/' + index)
        .then(function(response){
          if(Array.isArray(response.data)){
            svc.data = response.data;
            svc.mapUsers();
          } else {
            svc.current = response.data;
          }
          if(callback){
            callback();
          }
        });
    };

    svc.setCurrent = function(id){
      svc.data.forEach(function(post){
        if(post.id == id){
          svc.current = post;
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
