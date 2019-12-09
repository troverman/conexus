
//CRE8.GOOGLE.ALPHA

module.exports = {

	//PASSPORT APP

	//DATA APP
		//DEFINE GOOGLE DATA . . .

	//OAUTH

	import: { 
		request: require('request'),
		Q: require('q'),
	},

	//DATA MODELS ARE CONNECTIONS

	//TEST
	//REDUCE INTO SELF CONECTION W CONTEXT --> INTERNAL FUNCTION MAPPING 
	language: 'Javascript',
	compiler:'V8',

	connections:[
		{
			type:'connection', 
			id:'self', 
			params:{
				//DATA MODEL.
			}	
		}
	],

	get: function(req, res, params){

	},

	create: function(req, res, params){	

	},

	geoCode: function(model){
		var deferred = Q.defer();
		//TODO: SECURITY 
		//MEMBER-APP CONNECTION
		var googleMapsClient = require('@google/maps').createClient({
			key: 'AIzaSyDcTGxD4H3lnx84u8EPcbh7PodbsEyzbg4'
		});
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


};