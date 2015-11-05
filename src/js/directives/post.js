angular.module('directings')
.directive('postDisplay', function() {
  return {
    scope: {
      post: '='
    },  
    templateUrl: 'templates/post.html'
  };
});