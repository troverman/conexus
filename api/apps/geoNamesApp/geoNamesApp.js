//CRE8.GEONAMES.ALPHA
var App = {
	import:{
		request: require('request'),
		rp: require('request-promise')
		async: require('async')
	},
	//TODO: GEONAMES APP 
	getGeoNamesByParent: function(geoNameParentId, parentId, username, nestLevel){
		//voetr1, voetr2, voetr3, voetr4, voetr5, troverman
		if (!nestLevel){var nestLevel=0}
		nestLevel++;
		var model = {url:'http://api.geonames.org/childrenJSON?geonameId='+geoNameParentId+'&username='+username+'&maxRows=1000000', json: true};
		App.import.request(model, function (error, response, body) {
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
	
	//TODO: GEONAMES APP 
	getNamesWorld: function(){
		var model = {url: 'http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&username=troverman', json: true};
		App.import.request(model, async function (error, response, body) {
			var countryData = body.geonames;
			async.eachSeries(countryData, async function (projectData, nextProject){
				var title = projectData.countryName;
				var urlTitle = title.replace(/ /g,"-").toLowerCase();
				var projectModel = await Project.find({urlTitle:urlTitle});
				if (projectModel.length === 0){utilService.getGeoNamesByParent(projectData.geonameId, projectModel[0].id, 'voetr5', 0);}
				else{utilService.getGeoNamesByParent(projectData.geonameId, '', 'troverman', 0)}
				process.nextTick(nextProject);
			});
		});
	},

	//POPULATION ++ CRYSTAL IS ++ 
	//DO MULTI VALIDATION
	//TODO: GEONAMES APP 
	getGeoNames: function(model){
		var requestModel = {json: true};
		//ByLatLng, feature code.. PRK
		if (model.type == 'latlng'){requestModel.url='http://api.geonames.org/findNearbyJSON?ormatted=true&lat='+model.lat+'&lng='+model.lng+'&featureCode='+model.featureCode+'&radius='+model.radius+'&maxRows=10000&username=troverman'}
		//BY PARTENT
		if (model.type == 'parent'){requestModel.url='http://api.geonames.org/childrenJSON?geonameId='+model.parentId+'&username='+model.username+'&maxRows=1000000'}
		
		return App.import.request(requestModel, function (error, response, body) {
			var dataSeries = body.geonames
			return dataSeries;
		});
	
	}
};
module.exports = App;