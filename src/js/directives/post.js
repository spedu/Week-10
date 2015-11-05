angular.module('directings')
.directive('postDisplay', function() {
  return {
    scope: {
      post: '=',
      body: '=body'
    },  
    templateUrl: 'templates/post.html'
  };
});