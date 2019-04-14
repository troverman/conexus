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
			var data = body.geonames
			for (x in data){
				//console.log(data[x]);
				var projectModel = {
					title:data[x].name,
					//urlTitle:data[x].name.replace(),
					tags:'parks',
					description:data[x].toponymName,
					creator:'CRE8',
					location:{address:'',lat:data[x].lat, lng:data[x].lng}
				};
				console.log(projectModel)

			}
		});

	}

};