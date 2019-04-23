
module.exports.bootstrap = function(cb) {

	sails.services.passport.loadStrategies();
	//intervalService.getData();
	//dataService.getData();

	dataService.traverse();
	
	//PROJECT POPULATION
	//WORLD
	//utilService.getNamesWorld();

	//US
	//utilService.getGeoNamesByParent(6252001, '', 'voetr5', 1);
	//NC
	//utilService.getGeoNamesByParent(4482348, '', 'voetr3', -2);
	//TN
	//utilService.getGeoNamesByParent(4662168, '', 'voetr1', -100);
	//INDIA
	//utilService.getGeoNamesByParent(1269750, '', 'voetr3', -1);
	//CHINA
	//utilService.getGeoNamesByParent(1814991, '', 'voetr4', -1);
	//UK
	//utilService.getGeoNamesByParent(2635167, '', 'voetr5', -1);


	//35.9606, -83.9207 // knox
	//35.996948, -78.899017 // durham
	//40.730610, -73.935242 // nyc; bushwick
	//37.773972, -122.431297 // BAY AREA
	//37.5483, -121.9886 //FREEMONT
	var geoModel = {
		username:'troverman',
		lat:'35.9606',
		lng:'-83.9207',
		//PRK, CH, CTRCM, CMN, S.CAFE, S.SCH, LIBR
		featureCode:'LIBR',
		//parent, latlng
		type:'latlng',
		radius:'30',
		parentId:'4482348'
	};
	//utilService.getGeoNames(geoModel);
	//PURGE HISTORICAL
	//utilService.purge('(historical)');

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

	//BREAK OUT THE TASKS ETC INTO CONTENT FOR THE CREATES

	//POPULATE TOKENZ
	setInterval(dataService.traverse, 8640000);

	//dataService.tensorBuild();

	//DEF PRE ALPHA. 
	setInterval(intervalService.universalTokenProtocolPreAlpha, 8640000);
	//intervalService.universalTokenProtocolPreAlpha();
	setInterval(intervalService.reputationBuild, 8640000);
	
	//intervalService.reputationBuild();

	cb();
  
};
