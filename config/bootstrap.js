
module.exports.bootstrap = function(cb) {

	sails.services.passport.loadStrategies();
	//intervalService.getData();
	//dataService.getData();
	dataService.traverse();
	
	dataService.tensorBuild();

	//DEF PRE ALPHA. 
	setInterval(intervalService.universalTokenProtocolPreAlpha, 8640000);
	//intervalService.universalTokenProtocolPreAlpha();
	setInterval(intervalService.reputationBuild, 8640000);
	//intervalService.reputationBuild();

	cb();
  
};
