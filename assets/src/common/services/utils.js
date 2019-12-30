angular.module( 'services.utils', [])
.service('utils',['config', function(config) {
	return {
		prepareUrl: function(uriSegments) {
			apiUrl = config.apiUrl;
			return apiUrl + "/" + uriSegments;
		},
		showDateTime: function(string, format) {
			return moment(string).fromNow();
		}
	};
}]);