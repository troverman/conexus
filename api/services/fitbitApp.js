//FITBIT APP

//require core
//require ...
//require time

//require oauth
//require passport ...

const request = require('request');
const Q = require('q');

module.exports = {

	import: { request: require('request') },

	//TODO:
	connections:[
		//MEMBER-APP --> DATA
	],

	//TODO
	dataModel:[
		//type fitbit_step
		//type fitbit_sleep
		//type fitbit_heart
		//type fitbit_floor
		//type fitbit_distance
	],

	//TEST
	language: 'Javascript',
	compiler:'V8',

	//callback or promise?
	//TODO: CALL BACK / QUERY INTREPRETATION, req, res paramaterization
	//TODO: ERR HANDLING
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
	get: {
		//steps:{
		//	data:function(model){},
		//	tokens:function(model){},
		//},
		steps: function(model){	
			var deferred = Q.defer();		
			var requestModel = {
				url: 'https://api.fitbit.com/1.2/user/' + model.userId + '/activities/steps/date/today/'+model.timeQuery+'.json',
				json: true,
				headers: {'Authorization': ' Bearer ' + model.accessToken}
			};
			request(requestModel, function (error, response, body) {deferred.resolve(body['activities-steps']);});
			return deferred.promise;
		},
		heart: function(model){
			var deferred = Q.defer();		
			var requestModel= {
				json: true,
				url: 'https://api.fitbit.com/1.2/user/' + model.userId + '/activities/heart/date/today/'+model.timeQuery+'.json',
				headers: {'Authorization': ' Bearer ' + model.accessToken}
			};
			request(requestModel, function (error, response, body) {deferred.resolve(body['activities-heart']);});
			return deferred.promise;
		},
		floors: function(model){
			var deferred = Q.defer();		
			var requestModel= {
				json: true,
				url: 'https://api.fitbit.com/1.2/user/' + model.userId + '/activities/floors/date/today/'+model.timeQuery+'.json',
				headers: {'Authorization': ' Bearer ' + model.accessToken}
			};
			request(requestModel, function (error, response, body) {deferred.resolve(body['activities-floors']);});
			return deferred.promise;
		},
		elevation: function(model){},
		distance: function(model){
			var deferred = Q.defer();		
			var requestModel= {
				json: true,
				url: 'https://api.fitbit.com/1.2/user/' + model.userId + '/activities/distance/date/today/'+model.timeQuery+'.json',
				headers: {'Authorization': ' Bearer ' + model.accessToken}
			};
			request(requestModel, function (error, response, body) {deferred.resolve(body['activities-floors']);});
			return deferred.promise;
		},
		//TODO: UNIFY DISTANCE PARAM W DIFF ENDPOINT SPECS
		sleep: function(model){
			var deferred = Q.defer();		
			var today = new Date().toISOString().slice(0,10);
			var requestModel= {
				json: true,
				url: 'https://api.fitbit.com/1.2/user/' + model.userId + '/sleep/date/' + today + '.json',
				headers: {'Authorization': ' Bearer ' + model.accessToken}
			};
			request(requestModel, function (error, response, body) {deferred.resolve(body['sleep']);});
			return deferred.promise;
		},
		calories: function(model){},
	},

	//TODO: CUSTOM DATA MODELS VIA APPLICATIONS
	//TODO: fitbit time vs time
	//TODO: EVENT
	create: {
		//steps:{
		//	data:function(model){},
		//	tokens:function(model){},
		//},
		steps:function(req, res){},
		heart:function(req, res){},
		floors:function(req, res){},
		elevation:function(req, res){},
		distance:function(req, res){},
		sleep:function(req, res){},
		calories:function(req, res){},
		//time:function(req, res){}, 
		//function minutesSedentary(){} --> time
	},

	//TODO: UPDATE
	getData: function(req){

		console.log('FITBIT APP!')

		//TODO: DEPRECIATE.. 
		//TODO: PASS USER OBJ THRU FXNs
		const userIdTemp = req.id;

		//TODO: LOAD USER APPS
		User.find({id:req.id})
		//TODO: DEPRECIATE POPULATE
		.populate('passports')
		.then(function(model) {

			//TODO
			//refreshAuthTokens.then() ...

			//TODO: DEPRECIATE PASSPORT, APPRECIATE APP-MEMBER CONNECTION
			//TODO: ENCRYPT ACCESS TOKEN STORAGE -- STORE KEYS IN LOCAL PEER
			var fitbitPassport = model[0].passports.filter(function(obj){return obj.provider=='fitbit'});

			if (fitbitPassport){

				model.userId = fitbitPassport[0].identifier;
				model.accessToken = fitbitPassport[0].tokens.accessToken;
				model.timeQuery = '1d';//'1y'; //1m
			
				//TODO: MOVE FROM STATIC CODE TO STRUCT TOKEN GETTER
				//TODO: CREATE TOKENS
				//TODO: CREATE DATA MODEL
				//TODO: RACE CONDITION.. 
				
				fitbitApp.get.steps(model).then(function(activity) {
					var tokens = fitbitApp.tokens.getProtocolTokens({type:'fitbit_step', data:activity})
					//TODO: STRUCUTRE BETTER
					for (x in tokens){
						tokens[x].protocols = ['FITBIT','FITBIT-STEPS'];
						tokens[x].logic = {transferrable:true, mint:'FITBIT STEPS'};
						tokens[x].information = {inCirculation:0, market:0};
						tokens[x].associatedModels = [{type:'MEMBER', id:userIdTemp}];
					}
					fitbitApp.tokens.tempTokenMintProofOfConcept(tokens);
				});

				//TODO: FIX
				fitbitApp.get.distance(model).then(function(activity) {	
					var tokens = fitbitApp.tokens.getProtocolTokens({type:'fitbit_distance', data:activity})
					//TODO: STRUCUTRE BETTER
					for (x in tokens){
						tokens[x].protocols = ['FITBIT','FITBIT-DISTANCE'];
						tokens[x].logic = {transferrable:true, mint:'FITBIT DISTANCE'};
						tokens[x].associatedModels = [{type:'MEMBER', id:userIdTemp}];
						tokens[x].information = {inCirculation:0, market:0};
					}
					//TODO: UPDATE
					//fitbitApp.tokens.tempTokenMintProofOfConcept(tokens);
				});

				fitbitApp.get.floors(model).then(function(activity) {
					var tokens = fitbitApp.tokens.getProtocolTokens({type:'fitbit_floor', data:activity})
					//TODO: STRUCUTRE BETTER
					for (x in tokens){
						tokens[x].protocols = ['FITBIT','FITBIT-FLOORS'];
						tokens[x].logic = {transferrable:true, mint:'FITBIT FLOORS'};
						tokens[x].associatedModels = [{type:'MEMBER', id:userIdTemp}];
						tokens[x].information = {inCirculation:0, market:0};
					}
					//TODO: UPDATE
					//fitbitApp.tokens.tempTokenMintProofOfConcept(tokens);
				});	
				

				//SCALING ON HEARTRATE
				/*
				fitbitApp.get.heart(model).then(function(activity) {

					//TODO: MOVE TO TOKEN FXN
					var tokens = [];
					for (x in activity){

						tokens.push({
							tokenString:'FITBIT+HEART+REST+'+activity[x].value.restingHeartRate, 
							amount: parseFloat(1)
						});
						tokens.push({
							tokenString:'FITBIT+HEART+DATE+'+activity[x].dateTime+'+RESTING_HEART_RATE+'+activity[x].value.restingHeartRate, 
							amount: parseFloat(1)
						});

						for (y in activity[x].value.heartRateZones){

							//activity[x].value.heartRateZones[y].max,
							//activity[x].value.heartRateZones[y].min,

							if (activity[x].value.heartRateZones[y].minutes == null){activity[x].value.heartRateZones[y].minutes=0}
							if (activity[x].value.heartRateZones[y].caloriesOut == null){activity[x].value.heartRateZones[y].caloriesOut=0}

							tokens.push({
								tokenString:'FITBIT+HEART+'+activity[x].value.heartRateZones[y].name.toUpperCase().replace(/ /g, '_'),
								amount: parseFloat(activity[x].value.heartRateZones[y].minutes*60)
							});
							tokens.push({
								tokenString:'FITBIT+HEART+DATE+'+activity[x].dateTime+'+'+activity[x].value.heartRateZones[y].name.toUpperCase().replace(/ /g, '_'),
								amount: parseFloat(activity[x].value.heartRateZones[y].minutes*60)
							});

							tokens.push({
								tokenString:'FITBIT+CALORIES+BURN+'+activity[x].value.heartRateZones[y].name.toUpperCase().replace(/ /g, '_'),
								amount: parseFloat(activity[x].value.heartRateZones[y].caloriesOut)
							});

							tokens.push({
								tokenString:'FITBIT+CALORIES+BURN',
								amount: parseFloat(activity[x].value.heartRateZones[y].caloriesOut)
							});

						}
					}

					//TODO: STRUCUTRE BETTER
					for (x in tokens){
						tokens[x].protocols = ['FITBIT','FITBIT-HEART'];
						tokens[x].logic = {transferrable:true, mint:'FITBIT HEART'};
						tokens[x].associatedModels = [{type:'MEMBER', id:userIdTemp}];
						tokens[x].information = {inCirculation:0, market:0};
					}
					
					//TODO: UPDATE
					fitbitApp.tokens.tempTokenMintProofOfConcept(tokens);
				});
				*/

				//TODD: BETTER WITH TOKEN MAXIMALIZATION.
				//TODO: DATA HASH, DATA OBJ FLATTEN
				//TODO: NOMALIZE DATE
				/*
				fitbitApp.get.sleep(model).then(function(activity) {

					//TODO: MOVE TO TOKEN FXN
					var tokens = [];
					for (x in activity){
			
						//TODO: PLURALISM CRE8 TIME IMPORT
						//activity[x].duration,
						//activity[x].startTime,
						//activity[x].endTime,
						//tokens.push({
						//	tokenString:'CRE8+TIME+FITBIT+SLEEP', 
						//	amount: activity[x].duration
						//});
						//tokens.push({
						//	tokenString:'CRE8+TIME+FITBIT+SLEEP+'+activity[x].dateOfSleep, 
						//	amount: activity[x].duration
						//});

						tokens.push({
							tokenString:'FITBIT+SLEEP', 
							amount: parseFloat(activity[x].duration/1000)
						});
						tokens.push({
							tokenString:'FITBIT+SLEEP+'+activity[x].dateOfSleep, 
							amount: parseFloat(activity[x].duration/1000)
						});

						tokens.push({
							tokenString:'FITBIT+SLEEP+EFFICIENCY', 
							amount: parseFloat(activity[x].efficiency)
						});
						tokens.push({
							tokenString:'FITBIT+SLEEP+EFFICIENCY+DATE+'+activity[x].dateOfSleep, 
							amount: parseFloat(activity[x].efficiency)
						});

						tokens.push({
							tokenString:'FITBIT+SLEEP+TIME_IN_BED', 
							amount: parseFloat(activity[x].timeInBed*60)
						});
						tokens.push({
							tokenString:'FITBIT+SLEEP+TIME_IN_BED+DATE+'+activity[x].dateOfSleep, 
							amount: parseFloat(activity[x].timeInBed*60)
						});

						tokens.push({
							tokenString:'FITBIT+SLEEP+ASLEEP', 
							amount: parseFloat(activity[x].minutesAsleep*60)
						});
						tokens.push({
							tokenString:'FITBIT+SLEEP+ASLEEP+DATE+'+activity[x].dateOfSleep, 
							amount: parseFloat(activity[x].minutesAsleep*60)
						});

						tokens.push({
							tokenString:'FITBIT+SLEEP+AWAKE', 
							amount: parseFloat(activity[x].minutesAwake*60)
						});
						tokens.push({
							tokenString:'FITBIT+SLEEP+AWAKE+DATE+'+activity[x].dateOfSleep, 
							amount: parseFloat(activity[x].minutesAwake*60)
						});

						//GRANULAR
						for (y in activity[x].levels.data){
								
							//activity[x].levels.data[y].dateTime;

							tokens.push({
								tokenString:'FITBIT+SLEEP+LEVEL+'+activity[x].levels.data[y].level.toUpperCase(), 
								amount: parseFloat(activity[x].levels.data[y].seconds)
							});

							tokens.push({
								tokenString:'FITBIT+SLEEP+LEVEL+'+activity[x].levels.data[y].level.toUpperCase()+'+DATE+'+activity[x].dateOfSleep,//+activity[x].levels.data[y].dateTime, 
								amount: parseFloat(activity[x].levels.data[y].seconds)
							});

						}
					}

					//TODO: STRUCUTRE BETTER
					for (x in tokens){
						tokens[x].protocols = ['FITBIT','FITBIT-SLEEP'];
						tokens[x].logic = {transferrable:true, mint:'FITBIT SLEEP'};
						tokens[x].associatedModels = [{type:'MEMBER', id:userIdTemp}];
						tokens[x].information = {inCirculation:0, market:0};
					}

					//TODO: UPDATE
					fitbitApp.tokens.tempTokenMintProofOfConcept(tokens);
				});
				*/

			}
		});
	},

	interval: async function(){
		var userModels = await User.find().populate('passports')
		for (x in userModels){
			var fitbitPassport = userModels[x].passports.filter(function(obj){return obj.provider=='fitbit'});
			if (fitbitPassport){
				var provider = 'fitbit';
                var options = {scope:['activity','heartrate','location','profile', 'sleep']};
                var auth = await passport.authenticate(provider, options)({},{});
                fitbitApp.getData(userModels[x]);
			}
		}
	},

	//TODO: APP SPECIFIC MANIS
	//TODO: STRUCTURE TOKEN MINTING
	//TODO:FORMALIZE A TOKEN PROTOCOL
	//TODO: GRAMMER
	//TODO: DISCRETE VS MODEL
	//TODO: DATA MODEL ...
	tokens:{

		model:{
			//const tokenModel = {
			//	fitbit:{
			//		steps:{},
			//	}
			//}
		},

		mintTokens:function(model){},

		getProtocolTokens:function(model){

			//TODO: TOKEN JSON STRUCT
			var tokens = [];

			if (model.type == 'fitbit_step'){
				for (x in model.data){
					tokens.push({
						tokenString:'FITBIT+STEPS', 
						amount: parseFloat(model.data[x].value)
					});
					tokens.push({
						tokenString:'FITBIT+STEPS+DATE+'+model.data[x].dateTime, 
						amount: parseFloat(model.data[x].value)
					});
				}
			}
			if (model.type == 'fitbit_distance'){
				for (x in model.data){
					tokens.push({
						tokenString:'FITBIT+DISTANCE', 
						amount: model.data[x].value
					});
					tokens.push({
						tokenString:'FITBIT+DISTANCE+DATE+'+model.data[x].dateTime, 
						amount: parseFloat(model.data[x].value)
					});
				}
			}
			if (model.type == 'fitbit_floor'){
				for (x in model.data){
					tokens.push({
						tokenString:'FITBIT+FLOORS', 
						amount: parseFloat(model.data[x].value)
					});
					tokens.push({
						tokenString:'FITBIT+FLOORS+DATE+'+model.data[x].dateTime, 
						amount: parseFloat(model.data[x].value)
					});
				}
			}

			if (model.type == 'fitbit_elevation'){}
			if (model.type == 'fitbit_heart'){}
			if (model.type == 'fitbit_sleep'){}

			return tokens;

		},

		//TODO...
		//GOOP!
		//THERE IS A RACE CONDITION FOR SEPERATE FXNS 
		// >:| ...
		//lol okat we done for now.
		tempTokenMintProofOfConcept: function(models){

			//TEMP!!!
			User.find({id:models[0].associatedModels[0].id}).then(function(userModel){
				var protocolTokens = models;
				var user = userModel[0];
				for (x in protocolTokens){
					(function(protocolTokens, x) {
						delete protocolTokens[x].associatedModels;
						//console.log(protocolTokens[x]);
						Token.find({string:protocolTokens[x].tokenString}).then(function(tokenModels){
							if (tokenModels.length == 0){
								Token.create(protocolTokens[x]).then(function(model){console.log('TOKEN CREATED', model);});
							}
							else{
								//IF USER HAS TOKENS DONT ADD.. (IE INTERVAL ALEADY CALLED)
								if (!user.balance[models[x].tokenString]){
									tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(protocolTokens[x].amount); 
									Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(model){
										console.log('TOKENS IN CIRCULATION UPDATED:', model[0].string)
									});
								}
							}
						});
						
					})(protocolTokens, x);
				}

				//TODO: UPDATE
				for (x in models){
					if (!user.balance[models[x].tokenString]){user.balance[models[x].tokenString] = 0}
					user.balance[models[x].tokenString] = parseInt(user.balance[models[x].tokenString]) + parseFloat(models[x].amount);
				}

				User.update({id:user.id}, {balance:user.balance}).then(function(userModel){
					console.log('UPDATED TOKEN BALANCE', userModel)
				});

			});

		}

	},

	//TODO: DEFINE PASSPORT
	//TODO: FITBIT PASSPORT APP (PROTOCOL)
	//TODO: APP-MEMBER CONNECTION .. 
	passport: function(req){
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

	//TODO: REFRESH TOKENS; IMPORT OAUTH2
	//TODO: ON CREATE CONNECTION.. 
	//TODO: FUNCTION TO CONNECT FITBIT -- GIVE LIFE TIME TOKENS
	//INITIAL CONNECT
	connect: function(req){
		//INTI WITH 1 yr
	},

	//TODO: OAUTH2
	//DOFOR EVERY CALL.. 
	refreshAuthTokens: function(req){

		//TODO: WITHOUT PASSPORT.. ? 
		//console.log(provider, options);
    	//this.authenticate(provider, options)(req, res, req.next);

	},

};