angular.module('directings')
  .controller('ListController', ['posts', function(posts){
    var lc = this;
    lc.posts = posts;
    posts.get(function(){
      console.log(lc.posts)
    });

  }]);
