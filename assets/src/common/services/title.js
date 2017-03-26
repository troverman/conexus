angular.module('services.title', [])
.factory('titleService',['$document', function($document) {
  var title;
  return {
    setTitle: function(t) {
      title = t;
      return $document.prop('title', title);
    },
    getTitle: function() {
      return $document.prop('title');
    }
  };
}]);