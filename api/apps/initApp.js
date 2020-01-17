
//THE META-CIRCULAR CONNECTOR 
const self = {
	//connections:{
		connections:{
			connection:{
				params:{},
			}
		}
	//},
};


module.exports = {


	//SETS OF MAPPINGS AS OBJECTS
	//THIS IS WHERE IT ALL STARTS
	init: async function(){

		//GLOBALS!!

		//PEER COMPILE . . . 
		await dataApp.init();

		//UHM
		passportApp.loadStrategies();

		//START INTERVALS
		intervalServiceApp.init();

		//THIS IS DYNAMIC LIST
		//for (x in functionSet){}
		//populationApp.populateCombinatorialMarkets();

	},
};