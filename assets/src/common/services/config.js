angular.module( 'services.config', ['lodash'])
.service('config',['lodash', function(lodash) {
	return {
		siteName: 'conexus',
		siteUrl: '/',
		apiUrl: '/api',
		currentUser: false
	};
}]);