//FITBIT APP

//require core
//require ...
//require time
	//create time (AND) (PLURALISM) fitbit_sleep

const request = require('request');
const Q = require('q');

module.exports = {

	//TODO: TOKENIZE LOCATION | EXERCISE
	//TODO: MODULATE TO APP INPUT .. IE INTERVAL CONTRACT.. ON LOGIN OPERAND -- ... 
	//'''ORACLE''' to APIS -- > CONTINUOUS WEBSOCKET INPUT TO TOKEN LAYER
	//APP FOR TIME IN CARDIO..

	//TODO: PASSPORTS AS AN APP / PROTOCOL

	//import: { request: require('request') },

	connections:[],
	dataModel:[],

	//TEST
	language: 'Javascript',
	compiler:'V8',

	//I BROKE IT 
	//okay gotta go! resume in 2 hrs see ya!
	getData: function(req){

		//console.log(fitbitApp.import.request)

		//APP SPECIFIC MANIS
		//TODO: STRUCTURE TOKEN MINTING
		//IS THIS NEEDED?
		//JUST BC YOU CAN REDUCE DOESNT MEAN YOU HAVE TOO, PLURALISM IS THE PARADOX

		//TODO: ERR HANDLING
		function getSteps(model){
			var deferred = Q.defer();		
			var requestModel= {
				url: 'https://api.fitbit.com/1.2/user/' + model.userId + '/activities/steps/date/today/'+model.timeQuery+'.json',
				json: true,
				headers: {'Authorization': ' Bearer ' + model.accessToken}
			};
			console.log(requestModel)
			request(model, function (error, response, body) {
				console.log(error, response, body)
				deferred.resolve(body['activities-steps']);
			});
			return deferred.promise;
		};
		//function createSteps(model){};

		function getHeartRate(model){
			var deferred = Q.defer();		
			var requestModel= {
				json: true,
				url: 'https://api.fitbit.com/1.2/user/' + model.userId + '/activities/heart/date/today/'+model.timeQuery+'.json',
				headers: {'Authorization': ' Bearer ' + model.accessToken}
			};
			request(model, function (error, response, body) {deferred.resolve(body['activities-heart']);});
			return deferred.promise;
		};
		//function createHeartRate(model){};
		//function createTime(model){};

		function getFloors(model){
			var deferred = Q.defer();		
			var requestModel= {
				json: true,
				url: 'https://api.fitbit.com/1.2/user/' + model.userId + '/activities/floors/date/today/'+model.timeQuery+'.json',
				headers: {'Authorization': ' Bearer ' + model.accessToken}
			};
			request(model, function (error, response, body) {deferred.resolve(body['activities-floors']);});
			return deferred.promise;
		};
		//function createFloor(model){};

		//function getElevation(model){};
		//function createElevation(model){};

		function getDistance(model){
			var deferred = Q.defer();		
			var requestModel= {
				json: true,
				url: 'https://api.fitbit.com/1.2/user/' + model.userId + '/activities/distance/date/today/'+model.timeQuery+'.json',
				headers: {'Authorization': ' Bearer ' + model.accessToken}
			};
			request(model, function (error, response, body) {deferred.resolve(body['activities-floors']);});
			return deferred.promise;
		};
		//function createDistance(model){};

		//TODO: UNIFY DISTANCE PARAM W DIFF ENDPOINT SPECS
		function getSleep(model){
			var today = new Date().toISOString().slice(0,10);
			var requestModel= {
				json: true,
				url: 'https://api.fitbit.com/1.2/user/' + model.userId + '/sleep/date/' + today + '.json',
				headers: {'Authorization': ' Bearer ' + model.accessToken}
			};
			request(model, function (error, response, body) {
				deferred.resolve(body);
			});
			return deferred.promise;
		};
		//function createSleep(model){};
		//function createTime(model){};

		//function getCalories(model){};
		//function createCalories(model){};

		//TODO: CUSTOM DATA MODELS VIA APPLICATIONS
		//fitbit time vs time
		//function minutesSedentary(){} --> time

		console.log(req.id);
		//TODO: LOAD USER APPS
		User.find({id:req.id})
		//TODO: DEPRECIATE POPULATE
		.populate('passports')
		.then(function(model) {

			//TODO: DEPRECIATE PASSPORT, APPRECIATE APP-MEMBER CONNECTION
			var fitbitPassport = model[0].passports.filter(function(obj){return obj.provider=='fitbit'});

			if (fitbitPassport){

				//TODO: ENCRYPT ACCESS TOKEN STORAGE -- STORE KEYS IN LOCAL PEER
				model.userId = fitbitPassport[0].identifier;
				model.accessToken = fitbitPassport[0].tokens.accessToken;
				model.timeQuery = '1d';

				//if date token already exists dont add? 
				//only get tokay and interval?
				//look at data model actually

				//fitbitApp.get.steps
				getSteps(model).then(function(activity) {

					//use token grammer..
					//token model vs discrete 
					//var grammer = fitbitApp.tokens({type:'steps' data:activity});
					//hmm
					var tokens = [];
					for (x in activity){
						tokens.push({tokenSting:'FITBIT+STEPS', amount: parseFloat(activity[x].value)});
						tokens.push({tokenSting:'FITBIT+STEPS+DATE'+activity[x].dateTime, amount: parseFloat(activity[x].value)});
					}

				});

				//fitbitApp.get.distance
				getDistance(model).then(function(activity) {

					var activity = body['activities-distance'];
					for (x in activity){
						tokens.push({tokenSting:'FITBIT+DISTANCE', amount: activity[x].value});
						tokens.push({tokenSting:'FITBIT+DISTANCE+'+activity[x].dateTime, amount: parseFloat(activity[x].value)});
					}
					console.log(tokens);

				});

				getHeartRate(model).then(function(activity) {

					var tokens = [];
					for (x in activity){

						activity.value.restingHeartRate;
						activity.dateTime;

						for (y in activity.value.heartRateZones){
							activity.value.heartRateZones[y].max;
							activity.value.heartRateZones[y].min;
							activity.value.heartRateZones[y].minutes;
							activity.value.heartRateZones[y].name;
							activity.value.heartRateZones[y].caloriesOut;
						}
					}

				});

				getFloors(model).then(function(activity) {

					var tokens = [];
					for (x in activity){
						tokens.push({tokenSting:'FITBIT+FLOORS', amount: activity[x].value});
						tokens.push({tokenSting:'FITBIT+FLOORS+'+activity[x].dateTime, amount: parseFloat(activity[x].value)});
					}
					console.log(tokens);


				});

				getSleep(model).then(function(activity) {

					console.log(activity)

				});

			}

		});

	},


	//STATIC CODE -- FORMALIZE A TOKEN PROTOCOL
	tokens: function(model){

		//soon
		//strucutre is worth it -- ~~!
		//const tokenModel = {
			//fitbit:{
				//steps:{
					//date, self
				//},
			//}
		//}

		//var protocolTokens = [];
		//freestyle
		if (model.type == 'steps'){
			for (x in model.data){

			}
			return {

			}
		}

		function mintTokens(model){
			var timeProtocolTokens = getProtocolTokens(model);
		};

		function getProtocolTokens(model){

			//activities/calories
			//activities/steps
			//activities/distance
			//activities/floors
			//activities/elevation
			//activities/minutesSedentary
			//activities/minutesLightlyActive
			//activities/minutesFairlyActive
			//activities/minutesVeryActive
			//activities/activityCalories

			//TOKENS FOR STEPS
			//TOKENS FOR HEARTRATE
			//STORE AS DATA MODEL!

			//IE FOR VALIDATION
				//EVENT..
				//type fitbit_step
				//type fitbit_sleep
				//type fitbit_heart
				//type fitbit_floors
				//type fitbit_distance

			//STEPS
				//FITBIT+STEPS
				//FITBIT+DATE+STEPS
						//what date format
			//DISTANCE
				//FITBIT+DISTANCE

			//FLOORS
				//FITBIT+FLOORS

			//ELEVATION
				//FITBIT+ELEVATION

			//SLEEP
				//FITBIT+SLEEP
				//FIT

			//HEART
				//FITBIT+HEART
					//ZONE

			//SLEEP
			//STEPS
			//HEARTRATE

			//return protocolTokens;

		};

	},

	//DEFINE PASSPORT
	//FITBIT PASSPORT APP (PROTOCOL)
	//THIS 'COULD BE' A PASSPORT, AKA LOGIN WITH FITBIT
	//THIS ALSO COULD BE THE APP-MEMBER ASSOCIATION .. 
		//GET DATA; WITHOUT AUTH FOR ACCOUNT
			//SMARTER

	passport: function(req){

		//TODO
		var passportConfig = {
			name: 'Fitbit',
			protocol: 'oauth2',
			strategy: require('passport-fitbit-oauth2').FitbitOAuth2Strategy,
			options: {
				clientID: '229VSS',
				clientSecret: 'ad0ea5803c56be0754e186b356abc90b',
				callbackURL: 'https://www.cre8.xyz/auth/fitbit/callback',
				scope: ['activity','heartrate','location','profile', 'sleep']
			}
		};

	},

	connect: function(req){
		//FUNCTION TO CONNECT FITBIT -- GIVE LIFE TIME TOKENS
	},


};