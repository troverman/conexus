var request = require('request');

module.exports = {

	//TODO: MOVE OUT OF INTERVAL
	//TODO: TOKENIZE LOCATION | EXERCISE
	//TODO: MODULATE TO APP INPUT .. IE INTERVAL CONTRACT.. ON LOGIN OPERAND -- ... 
	//'''ORACLE''' to APIS -- > CONTINUOUS WEBSOCKET INPUT TO TOKEN LAYER
	//APP FOR TIME IN CARDIO..
	getFitbitData: function(req){

		User.findOne(req.id)
		.then(function(model) {

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
		
	
	},

	//TODO: RESHAPE | BUILD
	//FOR THIS TO SCALE WE NEED A DATA MODEL 
	reputationBuild:function(){
		User.find().then(function(userModels){
			for (x in userModels){
				(function(userModels, x){
					Time.find({user:userModels[x].id}).populate('task').then(function(workModels){

						var workSum = {};
						//TOKENS ARE .. 

						for (y in workModels){
							if (!workSum[workModels[y].id]){workSum[workModels[y].id] = parseFloat(workModels[y].amount)}
							workSum[workModels[y].id] += parseFloat(workModels[y].amount);
							if (workModels[y].task && workModels[y].task.tags){
								for (z in workModels[y].task.tags.split(',')){
									//if (!workSum[workModels[y].task.tags.split(',')[z]+'+'+workModels[y].id]){workSum[workModels[y].task.tags.split(',')[z]+'+'+workModels[y].id] = parseFloat(workModels[y].amount)}
									//workSum[workModels[y].task.tags.split(',')[z]+'+'+workModels[y].id] += parseFloat(workModels[y].amount);
									if (!workSum[workModels[y].task.tags.split(',')[z].replace(/\s/g, '').toLowerCase()]){workSum[workModels[y].task.tags.split(',')[z].replace(/\s/g, '').toLowerCase()] = parseFloat(workModels[y].amount)}
									workSum[workModels[y].task.tags.split(',')[z].replace(/\s/g, '').toLowerCase()] += parseFloat(workModels[y].amount);
								}
							}
						}

						var balance = Object.assign(workSum, userModels[x].balance);
						if (balance['cre8']!=0){balance['cre8'] = 8};

						//console.log(workSum);
						//console.log(userModels[x].id);
						
						User.update({id:userModels[x].id}, {reputation:workSum, balance:balance}).then(function(userModels){console.log('UPDATE')})


					});
				})(userModels, x);
			}
		});
	},

	//DAILY RUN
	universalTokenProtocolPreAlpha:function(){
		User.find().then(function(userModels){
			for (x in userModels){
				if(!userModels[x].balance){userModels[x].balance = {}}
				if(!userModels[x].balance['UNIVERSALTOKEN']){userModels[x].balance['UNIVERSALTOKEN'] = 0}
				userModels[x].balance['UNIVERSALTOKEN'] = userModels[x].balance['UNIVERSALTOKEN'] + 1;
				User.update({id:userModels[x].id}, {balance: userModels[x].balance}).then(function(userModel){
					console.log('updated', userModel[0].username, userModel[0].balance['UNIVERSALTOKEN'])
				});	
			}
			Token.find({string:'UNIVERSALTOKEN'}).then(function(tokenModels){
				if (!tokenModels[0].information.inCirculation){tokenModels[0].information.inCirculation = 0;}
				tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseInt(userModels.length);
				Token.update({id:tokenModels[0].id}, tokenModels[0]).then(function(tokenModel){
					console.log('updated', tokenModel)
				});
			});
		});
	},

};

module.exports.intervalService = function(){

	//PRE-ALPHA. 
	setInterval(intervalService.universalTokenProtocolPreAlpha, 8640000);
	setInterval(intervalService.reputationBuild, 8640000);
	//intervalService.reputationBuild();

	//POPULATE TOKEN -- ALPHA.. 
	//COALESE CONGRUENT DATA MAPPINGS.. 
	//TOKEN IS A MAPPING FROM STRING TO PROTOCOLS (WHICH ARE LOGIC MAPS)
	setInterval(dataService.buildStringSpace, 8640000);

	dataService.buildStringSpace();


	//TODO: UPCONVERT FXN LOL NOOO


	//Task.find().then(function(taskModels){
	//	for x in taskModels){
	//		dataService.buildAssociationFromValidation(taskModels[x]);
	//	}
	//});


	//DATA SERVICE
	//dataService.getData();
	//dataService.traverse();
	//dataService.tensorBuild();

	//DATA POPULATION

	//COFFEE DB
	//VENUE DB
	//CHURCH DB
	//LIBRARY DB
	//COWORK DB
	//THRIFTSHOP DB
	//FOODBANK DB

	//TOWN / COUNTY
	//PARK DB
		//CLEAN PARK TASK
		//COMMUNITY EVENT
			//MOVIE NIGHT
				//I AM THE CM THE MAYOR THE X THE Y THE Z 

	//BREAK OUT THE TASKS INTO CONTENT FOR THE CREATES

	//utilService.getNamesWorld();

	//US - utilService.getGeoNamesByParent(6252001, '', 'voetr5', 1);
	//NC - utilService.getGeoNamesByParent(4482348, '', 'voetr3', -2);
	//TN - utilService.getGeoNamesByParent(4662168, '', 'voetr1', -100);
	//INDIA - utilService.getGeoNamesByParent(1269750, '', 'voetr3', -1);
	//CHINA - utilService.getGeoNamesByParent(1814991, '', 'voetr4', -1);
	//UK - utilService.getGeoNamesByParent(2635167, '', 'voetr5', -1);

	//35.9606, -83.9207 // knox
	//35.996948, -78.899017 // durham
	//40.730610, -73.935242 // nyc; bushwick
	//37.773972, -122.431297 // BAY AREA
	//37.5483, -121.9886 //FREEMONT
	//35.7578° N, 81.8888° //LAKE JAMES STATE PARK

	var geoModel = {
		username:'troverman',
		lat:'35.7578',
		lng:'-81.8888',
		featureCode:'PRK', //PRK, CH, CTRCM, CMN, S.CAFE, S.SCH, LIBR
		type:'latlng', //parent, latlng
		radius:'35',
		parentId:'4482348'
	};
	//utilService.getGeoNames(geoModel);

	//TODO: GOOGLE MAPS & PLACES DB
	//utilService.googleMaps(model)

	//PURGE FXN
	//utilService.purge('(historical)');

	
};