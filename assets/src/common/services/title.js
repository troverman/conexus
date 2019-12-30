angular.module('services.title', [])
.factory('titleService',['$document', function($document) {
    return {
        setTitle: function(t) {
            return $document.prop('title', t);
        }
    };
}]);