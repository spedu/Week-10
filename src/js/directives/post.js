angular.module('directings').directive('postDisplay', function(){
  return {
    scope: {
      post: '=',
      body: '='
    },
    transclude: true,
    templateUrl: '/templates/post.html'

  };
});
