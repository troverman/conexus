
module.exports.bootstrap = function(cb) {

	sails.services.passport.loadStrategies();
	//intervalService.getData();
	//dataService.getData();
	
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
