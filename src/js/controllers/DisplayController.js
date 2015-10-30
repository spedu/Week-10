angular.module('directings').controller('DisplayController', ['posts', function(posts){
  var dc = this;
  dc.posts = posts;

}]);
