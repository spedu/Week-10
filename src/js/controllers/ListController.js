angular.module('directings')
  .controller('ListController', ['posts', function(posts){
    var lc = this;
    lc.posts = posts;
    posts.get();

    this.display = function(post) {
      posts.current = post;
    };
  }]);