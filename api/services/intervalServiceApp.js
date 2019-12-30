//CRE8.INTERVAL

module.exports = {

	interval: function(callback, delay) {
	    var self = this;
	    var counter = 0;
	    var start = new Date().getTime();
	    function delayed(){
	        callback(delay);
	        counter ++;
	        var diff = (new Date().getTime() - start) - counter * delay;
	        setTimeout(delayed, delay - diff);
	    }
	    delayed();
	    setTimeout(delayed, delay);
	},

	init: function(){

		//CORE IMPORTS ... () BASED ON BUILD
		//TODO: APP SPECIFIC 'DAEMON'
		//TODO: PEER BUILD
		//TODO: APP-APP CONNECTION

		//intervalServiceApp.interval(universalTokenApp.interval, 8640000);
		//intervalServiceApp.interval(privacyTokenApp.interval, 8640000);
		//intervalServiceApp.interval(fitbitApp.interval, 8640000);

		//LEGACY IN AN INTERVAL.. BUILD EVERY EVENT . . 
		//intervalServiceApp.interval(reputationApp.build, 8640000);
		
		//LEGACY IN AN INTERVAL.. BUILD EVERY EVENT . . 
		//intervalServiceApp.interval(populationApp.tokenStringSpace, 8640000);

		//DATA SERVICE
		//dataServiceApp.getData();
		//dataServiceApp.traverse();
		//dataServiceApp.tensorBuild();

		//DATA MODIFICATION UTILS
		//utilityServiceApp.tagsToAssociation('PROJECT', 2);
		//utilityServiceApp.tagsToAssociation('TRANSACTION', 2);
		//utilityServiceApp.followersToAssociation();
		//utilityServiceApp.updateTransactionContext();
		//utilityServiceApp.purge('(historical)');

	},
	
};