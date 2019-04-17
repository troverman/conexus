var async = require('async');
var request = require('request');

module.exports = {

	getData: function(req){

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

	getGeoNamesByParent: function(geoNameParentId, parentId, username, nestLevel){
		//voetr1, voetr2, voetr3, voetr4, voetr5, troverman
		if (!nestLevel){var nestLevel=0}
		nestLevel++;
		var model = {
			url:'http://api.geonames.org/childrenJSON?geonameId='+geoNameParentId+'&username='+username+'&maxRows=1000000',
			json: true,
		};
		request(model, function (error, response, body) {
			if (body && body.geonames && body.geonames.length > 0){
				var nameData = body.geonames;
				async.eachSeries(nameData, function (projectData, nextProject){
					if (projectData.fcl=='A' || projectData.fcode=='PPLA' || projectData.fcode=='PPLA2' || projectData.fcode=='PPLA3'){
						
						var countryName = projectData.countryName;
						var fcl = projectData.fcl;
						var fcode =  projectData.fcode;
						var geonameId = projectData.geonameId;
						var lat = projectData.lat;
						var lng = projectData.lng;
						var title = projectData.name;
						var urlTitle = title.replace(/ /g,"-").replace(/\./g,'').replace(/[()]/g, '').toLowerCase();
						var model = {
							isOfficial: true,
							geonameId: geonameId,
							location:{lat: lat,lng:lng, address:projectData.name},
							lng: lng,
							parent: parentId,
							title: title,
							urlTitle: urlTitle
						};
						console.log(model.title)
						//Project.find({lat:lat, lng:lng, geonameId: geonameId}).then(function(projectModel){
							//if (projectModel.length === 0){
								//Project.create(model)then(function(projectModel) {
									//if (nestLevel < 2){utilService.getGeoNamesByParent(projectData.geonameId, projectModel.id, username, nestLevel);}
								//});
								//process.nextTick(nextProject);
							//}
							//else{
								if (nestLevel < 2){utilService.getGeoNamesByParent(projectData.geonameId, 'projectModel[0].id', username, nestLevel);}
								process.nextTick(nextProject);
							//}
						//});
					}
					else{process.nextTick(nextProject);}
				});
			}
		});
	},

	getNamesWorld: function(){
		var model = {
			url: 'http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&username=troverman',
			json: true,
		};
		request(model, function (error, response, body) {
			var countryData = body.geonames;
			async.eachSeries(countryData, function (projectData, nextProject){
				var title = projectData.countryName;
				var urlTitle = title.replace(/ /g,"-").toLowerCase();
				Project.find({urlTitle:urlTitle}).then(function(projectModel){
					if (projectModel.length === 0){utilService.getGeoNamesByParent(projectData.geonameId, projectModel[0].id, 'voetr5', 0);}
					else{utilService.getGeoNamesByParent(projectData.geonameId, '', 'troverman', 0)}
					process.nextTick(nextProject);
				});
			});
		});
	},

	//POPULATION ++ CRYSTAL IS ++ 
	//DO MULTI VALIDATION
	getGeoNames: function(model){

		var requestModel = {json: true};

		//ByLatLng, feature code.. PRK
		if (model.type == 'latlng'){
			requestModel.url='http://api.geonames.org/findNearbyJSON?ormatted=true&lat='+model.lat+'&lng='+model.lng+'&featureCode='+model.featureCode+'&radius='+model.radius+'&maxRows=10000&username=troverman'
		}

		//BY PARTENT
		if (model.type == 'parent'){
			requestModel.url='http://api.geonames.org/childrenJSON?geonameId='+model.parentId+'&username='+model.username+'&maxRows=1000000'
		}

		request(requestModel, function (error, response, body) {
			var dataSeries = body.geonames
			console.log(dataSeries.length)
			async.eachSeries(dataSeries, function (data, next){
				var projectModel = {
					title:data.name,
					urlTitle:data.name.replace(/\s/g, '-').toLowerCase().replace('#','').replace('/',''),
					//A COMPUTED VALUE.. .. IMPLICIT MOTION TO .. ? META VALIDATION PROJ_a - PROJ_a
					tags:'park,community,tennessee,tn,recreation,parksandrec',
					description:data.toponymName,
					location:{address:'', lat:parseFloat(data.lat), lng:parseFloat(data.lng), coordinates:[parseFloat(data.lng), parseFloat(data.lat)]},
					creator:'CRE8',
					//DEPRECIATE
					user:'57ab77fa804f7c11002a78db',
					parent:'5cb6387e2da4371500e46bf2'
				};
				Project.find({urlTitle:projectModel.urlTitle}).then(function(selectedProjectModel){
					if (selectedProjectModel.length == 0){
						//Project.create(projectModel).then(function(){
						//	console.log('PARK CREATED!')
						//});
						process.nextTick(next);
					}
					else{
						//MULTIASSOCIATION TEST
						Task.find({id:'5cb7751fb965794d37dbaf2f'}).then(function(taskModel){
							if (taskModel[0].associatedModels.map(function(obj){return obj.address}).indexOf(taskModel[0].id) == -1){
								taskModel[0].associatedModels.push({type:'PROJECT', address:selectedProjectModel[0].id});
							}
							console.log(taskModel[0].associatedModels);
							Task.update({id:'5cb7751fb965794d37dbaf2f'},{associatedModels:taskModel[0].associatedModels}).then(function(){
								process.nextTick(next);
							});
						});

					}
				});

				//TASK FIND
					//IMPLICIT VALIDATION
					//MULTIASSOCIATION
				//TASK CREATE
					//CHILL AT X PARK
					//CLEAN UP X PARK
					//IMPLICIT VALIDATION
					//MULTIASSOCIATION

				//console.log(projectModel);

			});
		});

	}

};