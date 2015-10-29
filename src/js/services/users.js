angular.module('directings')
  .service('users', ['$http', function($http){
    var svc = this;
    svc.data = [];
    svc.get = function(callback){
      $http.get('http://jsonplaceholder.typicode.com/users')
        .then(function(response){
          svc.data = response.data;
          if(callback){
            callback();
          }
        });
    };


  }]);
