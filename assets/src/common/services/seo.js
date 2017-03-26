angular.module('services.seo', [])
.factory('seoService',['$window', function($window) {
  var description;
  var keywords;
  return {
    setDescription: function(description) {
      return $window.document.getElementsByName('description')[0].content = description;
    },
    setKeywords: function(keywords) {
      return $window.document.getElementsByName('keywords')[0].content = keywords;
    }
  };
}]);