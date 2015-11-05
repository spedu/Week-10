angular.module('directings')
.directive('post', function() {
  return {
    scope: {
      title: '=title',
      username: '=' // shorthand for =username (when the key and is the same as the attribute)
    },
    templateUrl: 'templates/post.html'
  };
});