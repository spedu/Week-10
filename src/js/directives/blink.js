angular.module('directings').directive('blink', ['$timeout', function($timeout){
  var promise;
  var blinking = true;
  var speed = 500;

  var showElement = function(element){
    element.css("visibility", "visible");
    promise = $timeout(function(){
      hideElement(element);
    }, speed);
  };

  var hideElement = function(element){
    element.css("visibility", "hidden");
    promise = $timeout(function(){
      showElement(element);
    }, speed);
  };

  return {
    link: function(scope, element, attrs){
      showElement(element);
    }
  };
}]);
