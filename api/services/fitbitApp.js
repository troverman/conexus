//FITBIT APP

//require core
//require ...
//require time
	//create time (AND) (PLURALISM) fitbit_sleep

const request = require('request');

module.exports = {

	//TODO: TOKENIZE LOCATION | EXERCISE
	//TODO: MODULATE TO APP INPUT .. IE INTERVAL CONTRACT.. ON LOGIN OPERAND -- ... 
	//'''ORACLE''' to APIS -- > CONTINUOUS WEBSOCKET INPUT TO TOKEN LAYER
	//APP FOR TIME IN CARDIO..

	//TODO: PASSPORTS AS AN APP / PROTOCOL

	//import: { request: require('request') },

	connections:[],
	dataModel:[],

	getData: function(req){

		//console.log(fitbitApp.import.request)

		//APP SPECIFIC MANIS
		//TODO: STRUCTURE TOKEN MINTING
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

			var protocolTokens = [{
				tokenString:'CRE8+FITBIT',
				associatedModels:[
					{type:'MEMBER', id:model.id},
				],
				amount:model.amount
			}];

		};

		function mintTokens(model){};


		//IS THIS NEEDED?
		//JUST BC YOU CAN REDUCE DOESNT MEAN YOU HAVE TOO, PLURALISM IS THE PARADOX
		function getSteps(model){
			var url = 'https://api.fitbit.com/1.2/user/' + model.userId + '/activities/steps/date/today/' + peroid + '.json';

		};
		function createSteps(model){};

		function getHeartRate(model){};
		function createHeartRate(model){};
		//function createTime(model){};

		function getFloors(model){};
		function createFloor(model){};

		function getElevation(model){};
		function createElevation(model){};

		function getDistance(model){};
		function createDistance(model){};

		function getSleep(model){};
		function createSleep(model){};
		//function createTime(model){};

		function getCalories(model){};
		function createCalories(model){};

		//fitbit time vs time
		//function minutesSedentary(){} --> time

		console.log(req.id);
		//TODO: DEPRECIATE POPULATE
		//TODO: LOAD USER APPS

		User.find({id:req.id})
		.populate('passports')
		.then(function(model) {

			var fitbitPassport = model[0].passports.filter(function(obj){return obj.provider=='fitbit'});

			if (fitbitPassport){
				var userId = fitbitPassport[0].identifier;
				
				var activity = 'distance'; //heart, floors, distance, steps
				var peroid = '1m'; //1d, 7d, 30d, 1w, 1m
				var url = 'https://api.fitbit.com/1.2/user/' + userId + '/activities/' + activity + '/date/today/' + peroid + '.json';
				
				//SLEEP
				//var today = new Date().toISOString().slice(0,10);
				//var url = 'https://api.fitbit.com/1.2/user/' + userId + '/sleep/date/' + today + '.json';

				//MEH
				//HEART RATE REALTIME
				//var url = 'https://api.fitbit.com/1.2/user/' + userId + '/activities/heart/date/2016-10-31/1d/1sec/time/00:00/00:01.json'
				
				//TODO: ENCRYPT ACCESS TOKEN STORAGE -- STORE KEYS IN LOCAL PEER
				var model= {
					url: url,
					json: true,
					headers: {'Authorization': ' Bearer ' + fitbitPassport[0].tokens.accessToken}
				};

				request(model, function (error, response, body) {
					console.log('TEST HELLO!!', error)
					//console.log(body['activities-heart'])
					console.dir(body, { depth: null });

					var activity = body['activities-steps'];
					var tokens = [];
					for (x in activity){
						tokens.push({tokenSting:'FITBIT+STEPS', amount: parseFloat(activity[x].value)});
						tokens.push({tokenSting:'FITBIT+STEPS+'+activity[x].dateTime, amount: parseFloat(activity[x].value)});
					}

					//if date token already exists dont add? 
					//only get tokay and interval?
					//look at data model actually
					//console.log(tokens);

					var activity = body['activities-heart'];
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


					var activity = body['activities-floors'];
					var tokens = [];
					for (x in activity){
						tokens.push({tokenSting:'FITBIT+FLOORS', amount: activity[x].value});
						tokens.push({tokenSting:'FITBIT+FLOORS+'+activity[x].dateTime, amount: parseFloat(activity[x].value)});
					}
					console.log(tokens);

					var activity = body['activities-distance'];
					for (x in activity){
						tokens.push({tokenSting:'FITBIT+DISTANCE', amount: activity[x].value});
						tokens.push({tokenSting:'FITBIT+DISTANCE+'+activity[x].dateTime, amount: parseFloat(activity[x].value)});
					}
					console.log(tokens);


				});

			}

		});

	},


	tokens: function(req){

		//SLEEP
		//STEPS
		//HEARTRATE

	},

	//DEFINE PASSPORT
	//FITBIT PASSPORT APP (PROTOCOL)
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