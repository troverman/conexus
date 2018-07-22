var request = require('request');

module.exports = {

	//TODO: MOVE OUT OF INTERVAL
	//TODO: TOKENIZE LOCATION | EXERCISE
	getData: function(req){

		User.getOne(req.id)
		.spread(function(model) {

			var fitbitPassport = model.passports.filter(function(obj){return obj.provider=='fitbit'});
			var userId = fitbitPassport[0].identifier;
			var activity = 'steps';
			var peroid = '1m'; //1d, 7d, 30d, 1w, 1m
			var url = 'https://api.fitbit.com/1/user/' + userId + '/activities/' + activity + '/date/today/' + peroid + '.json';

			//NEED API PERMISSIONS... >:|
			//var url = 'https://api.fitbit.com/1/user/' + userId + '/activities/heart/date/2016-10-31/1d/1sec/time/00:00/00:01.json'

			var model= {
				url: url,
				json: true,
				headers: {'Authorization': ' Bearer ' + fitbitPassport[0].tokens.accessToken}
			};

			request(model, function (error, response, body) {
				//console.log(body['activities-heart'])
				//console.log(body)
			});

		})
		.fail(function(err) {
			console.log(err);
		});
		
	}

};