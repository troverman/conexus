const async = require('async');
const Q = require('q');
const request = require('request');

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

				if (data.name.includes('historical')){process.nextTick(next);}
				else{

					var projectModel = {

						title:data.name,
						urlTitle:data.name.replace(/\s/g, '-').toLowerCase().replace('#','').replace('/',''),

						//A COMPUTED VALUE.. .. IMPLICIT MOTION TO .. ? META VALIDATION PROJ_a - PROJ_a
						tags:'park,community,nc,northcarolina,outdoor,fun,'+data.name,

						description:data.toponymName,
						location:{address:'', lat:parseFloat(data.lat), lng:parseFloat(data.lng), coordinates:[parseFloat(data.lng), parseFloat(data.lat)]},
						creator:'CRE8',

						//DEPRECIATE
						user:'57ab77fa804f7c11002a78db',
						parent:'5cb6387e2da4371500e46bf2'

					};

					//console.log(projectModel)

					//CHRUCH 5cbcd778b8a6cb15001da060
					//PARKS 5cb6387e2da4371500e46bf2
					//SCHOOL 5cbcdb00b8a6cb15001da063
					//LIBRARY 5cc353cf5b2c881500738616

					Project.find({urlTitle:projectModel.urlTitle}).then(function(selectedProjectModel){
						if (selectedProjectModel.length == 0){
							Project.create(projectModel).then(function(newProjectModel){
								console.log('PROJECT CREATED!');
								Task.find({id:'5cc359b75b2c881500738619'}).then(function(taskModel){
									if (taskModel[0].associatedModels.map(function(obj){return obj.address}).indexOf(newProjectModel.id) == -1){
										taskModel[0].associatedModels.push({type:'PROJECT', address:newProjectModel.id});
										console.log(taskModel[0].associatedModels);
										Task.update({id:'5cc359b75b2c881500738619'},{associatedModels:taskModel[0].associatedModels}).then(function(){
											process.nextTick(next);
										});
									}
									else{process.nextTick(next);}
								});
							});
						}

						else{

							//MULTIASSOCIATION TEST

							//CHURCH 5cbcd809b8a6cb15001da062

							//PARK 5cb7751fb965794d37dbaf2f, 5cc359b75b2c881500738619 
								// HANGOUT MAY BE DEPRECIATED FOR LOCATION TOKENIZATION 
									//--> SMART VALIDATION

							//SCHOOL 5cbcdb5db8a6cb15001da065
							//LIBRARY 5cc354565b2c881500738618

							//Project.update({id:selectedProjectModel[0].id},{tags:'newyork,church,community,nyc,community,worship,faith'}).then(function(){
							//	console.log('updated project');
							//	process.nextTick(next);
							//});

							Task.find({id:'5cc359b75b2c881500738619'}).then(function(taskModel){
								if (taskModel[0].associatedModels.map(function(obj){return obj.address}).indexOf(selectedProjectModel[0].id) == -1){
									taskModel[0].associatedModels.push({type:'PROJECT', address:selectedProjectModel[0].id});
									console.log(taskModel[0].associatedModels);
									Task.update({id:'5cc359b75b2c881500738619'},{associatedModels:taskModel[0].associatedModels}).then(function(){
										process.nextTick(next);
									});
								}
								else{process.nextTick(next);}
							});


							//TASK FIND
								//IMPLICIT VALIDATION
								//MULTIASSOCIATION

							//TASK CREATE
								//CHILL AT X PARK
								//CLEAN UP X PARK
								//IMPLICIT VALIDATION
								//MULTIASSOCIATION

						}

					});
				}
			});
		});
	},

	googleGeoCodeService: function(model){
		var deferred = Q.defer();
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

	//GMAP RESEARCH.. COFFEE ETC
	//googleMapService: function(model){
		//var request = {
		//	location: center,
		//	radius: 8047,
		//	types: ['cafe']
		//};
		//var service = new google.maps.places.PlacesService(map);
		//service.nearbySearch(request, callback);
		//function createMarker(place) {
			//var placeLoc = place.geometry.location;
			//var marker = new google.maps.Marker({map: map,position: place.geometry.location});
		//}
	//},

	//emailService:function(){},

	//HELPER LEGACY DATA CONVERT

	//layer this later into getsome complex query tag - context pop
	//self charters.. ie task nxt
	tagsToAssociation: function(dataModel, limit){

		var promise = ''

		if (dataModel = 'CONTENT'){promise = Content.find({}).limit(limit).skip(0).sort('createdAt DESC')}
		if (dataModel = 'ITEM'){promise = Item.find({}).limit(limit).skip(0).sort('createdAt DESC')}
		if (dataModel = 'PROJECT'){promise = Project.find({}).limit(limit).skip(0).sort('createdAt DESC')}
		if (dataModel = 'TASK'){promise = Task.find({}).limit(limit).skip(0).sort('createdAt DESC')}
		if (dataModel = 'TIME'){promise = Task.find({}).limit(limit).skip(0).sort('createdAt DESC')}
		if (dataModel = 'TRANSACTION'){promise = Transaction.find({}).limit(limit).skip(0).sort('createdAt DESC')}

		promise.then(function(models){

			for (x in models){

				var validationModel = {

					//dont need to double store this for self.. 
					associatedModels:[
						{type:dataModel, id:models[x].id},
						{type:dataModel, id:models[x].id},
					],

					context:{general:100},
					validation:{general:100},

					parameters:{type:'SELF', connection:'CRE8COREPROJECTSELF'},
					type:'HUMAN',

					creator:models[x].user,
					user:models[x].user,

					content:'SELF IMPLICIT ASSOCIATION',

					//APP DATA..
					reactions: {plus:0,minus:0},
					attention:{general:0}
				};

				if (models[x].tags){
					var context = models[x].tags.split(',');

					//TODO.. UNIFY DATA STRUCT.. LOL - IT OK
					for (y in context){
						//should be 0 - 1 
						validationModel.context[context[y]] = 100
						validationModel.validation[context[y]] = 100 
					}

				}

				console.log(validationModel)

				//Validation.create(validationModel).then(function(newValidationModel){

					//STRUCUTRE BETTER> : )
					//STRUCT WITH CONNECTION : )
					//NO WORRIES : P

					//Association.create(newValidationModel);

				//});

			}

		});


	},


	purge: function(model){
		console.log(model)
		Project.find({title:{contains:model}}).then(function(models){
			console.log(models)
			if (models.length > 0){
				var idArray = models.map(function(obj){return obj.id});
				console.log(idArray)
				//Project.destroy(idArray, function(err, model) {
				//	console.log(model);
				//});
			}
		});
	}

};