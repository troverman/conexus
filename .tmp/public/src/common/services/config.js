//TODO: DEPRECIATE
angular.module( 'services.config', [])
.service('config',[function(lodash) {
	return {apiUrl: '/api'};
}]);