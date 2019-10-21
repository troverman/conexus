//FITBIT APP

//require core
//require ...
const request = require('request');

module.exports = {


	//TODO: TOKENIZE LOCATION | EXERCISE
	//TODO: MODULATE TO APP INPUT .. IE INTERVAL CONTRACT.. ON LOGIN OPERAND -- ... 
	//'''ORACLE''' to APIS -- > CONTINUOUS WEBSOCKET INPUT TO TOKEN LAYER
	//APP FOR TIME IN CARDIO..

	//TODO: PASSPORTS AS AN APP / PROTOCOL

	dataModel:[],

	getData: function(req){


		//APP SPECIFIC MANIS
		//TODO: STRUCTURE TOKEN MINTING
		function getProtocolTokens(model){

			//TOKENS FOR STEPS
			//TOKENS FOR HEARTRATE
			//STORE AS DATA MODEL!
			//IE FOR VALIDATION
				//EVENT..
				//type fitbit_step
				//type fitbit_sleep
				//tpye fitbit_heart
				//tpye fitbit_floors
				//tpye fitbit_distance

			//STEPS
				//FITBIT+STEPS
				//FITBIT+DATE+STEPS
						//what date format

			//FLOORS
				//FITBIT+FLOORS

			//DISTANCE
				//FITBIT+DISTANCE

			//SLEEP
				//FITBIT+SLEEP
				//FIT

			//{ 'activities-steps':[ { dateTime: '2019-09-20', value: '2445' }}

			var protocolTokens = [{
				tokenString:'CRE8+FITBIT',
				associatedModels:[
					{type:'MEMBER', id:model.id},
				],
				amount:model.amount
			}];

		};

		function mintTokens(model){

		};

		console.log(req.id);
		//TODO: DEPRECIATE POPULATE
		//TODO: LOAD USER APPS

		User.find({id:req.id})
		.populate('passports')
		.then(function(model) {

			var fitbitPassport = model[0].passports.filter(function(obj){return obj.provider=='fitbit'});
			var userId = fitbitPassport[0].identifier;
			
			var activity = 'sleep'; //heart, floors, distance, steps
			var peroid = '1m'; //1d, 7d, 30d, 1w, 1m
			var url = 'https://api.fitbit.com/1.2/user/' + userId + '/activities/' + activity + '/date/today/' + peroid + '.json';
			
			//SLEEP
			var today = new Date().toISOString().slice(0,10);
			var url = 'https://api.fitbit.com/1.2/user/' + userId + '/sleep/date/' + today + '.json';

			//var url = 'https://api.fitbit.com/1.2/user/' + userId + '/activities/heart/date/2016-10-31/1d/1sec/time/00:00/00:01.json'
			var model= {
				url: url,
				json: true,
				headers: {'Authorization': ' Bearer ' + fitbitPassport[0].tokens.accessToken}
			};

			request(model, function (error, response, body) {
				//console.log(body['activities-heart'])
				console.dir(body, { depth: null })
			});


		});

	},


	tokens: function(req){

		//SLEEP
		//STEPS
		//HEARTRATE

	},

	//DEFINE PASSPORT
	passport: function(req){

		//FUNCTION TO CONNECT FITBIT -- GIVE LIFE TIME TOKENS

	},


	connect: function(req){

	},

};