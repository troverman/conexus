//FITBIT APP
const async = require('async');
const Q = require('q');
const request = require('request');

module.exports = {


	//TODO: TOKENIZE LOCATION | EXERCISE
	//TODO: MODULATE TO APP INPUT .. IE INTERVAL CONTRACT.. ON LOGIN OPERAND -- ... 
	//'''ORACLE''' to APIS -- > CONTINUOUS WEBSOCKET INPUT TO TOKEN LAYER
	//APP FOR TIME IN CARDIO..

	//TODO: PASSPORTS AS AN APP / PROTOCOL

	getData: function(req){
		console.log(req.id)
		User.find({id:req.id})
		.populate('passports')
		.then(function(model) {
			console.log(model[0])
			var fitbitPassport = model[0].passports.filter(function(obj){return obj.provider=='fitbit'});
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
				console.log(body['activities-heart'])
				console.log(body)
			});

		});

	},

	createPassport:function(){

	},

};