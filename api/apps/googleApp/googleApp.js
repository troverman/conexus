//CRE8.GOOGLE.ALPHA
var App = {

	//TODO::
	//PASSPORT
		//OAUTH
	//DATA
		//DEFINE GOOGLE DATA . . .
	//'CONNECTION+SELF+DATAMODEL ...
	//'CONNECTION+SELF+ATTRIBUTES'

	'CONNECTION+Q': require('Q'),
	'CONNECTION+GOOGLEMAPS': require('@google/maps'),

	//TODO: SECURITY 
	//MEMBER-APP CONNECTION .. :) 
	'ASSOCIATION+SECRET+KEY': 'AIzaSyDcTGxD4H3lnx84u8EPcbh7PodbsEyzbg4'

	'GET': function(req, res, params){},
	'CREATE': function(req, res, params){},
	'GEOCODE': function(model){
		var deferred = App['CONNECTION+Q'].defer();
		var googleMapsClient = App['CONNECTION+GOOGLEMAPS'].createClient({key: App['ASSOCIATION+SECRET+KEY']});
		googleMapsClient.geocode({address: model.location}, function(err, response) {
			location = null;
			if (!err) {
				location = {
					address:response.json.results[0].formatted_address,
					lat:parseFloat(response.json.results[0].geometry.location.lat),
					lng:parseFloat(response.json.results[0].geometry.location.lng),
					coordinates: [parseFloat(response.json.results[0].geometry.location.lng), parseFloat(response.json.results[0].geometry.location.lat)],
				};
				deferred.resolve(location);
			}
			else{deferred.resolve(location);}
		});
		return deferred.promise;
	},
	'NEARBY': function(model){}
};
module.exports = App;