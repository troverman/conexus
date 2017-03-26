angular.module( 'services.utils', ['lodash'])
.service('utils',['config', 'lodash', function(config, lodash) {
	return {
		prepareUrl: function(uriSegments) {
			if (lodash.isNull(config.apiUrl)) {apiUrl = 'https://api.test';}
			else {apiUrl = config.apiUrl;}
			return apiUrl + "/" + uriSegments;
		},
		showDatetime: function(string, format) {
			return moment(string).fromNow();
		}
	};
}]);