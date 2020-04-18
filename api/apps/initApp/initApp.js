var App = {
	//INIT APP WIL EXPOSE APPS RENDERED AND RUN THE INIT FUNCTIONS TO SPIN UP LISTENERS AND WEBSOCKETS ETC
	//THE BOOT PROCESS 
	//SHARING THE ENTIRE PEER AS BLOB 
	//TODO: THINK ABOUT CONENSUS 
	'CONNECTION+CRYPTO': function(){return global['appApp']['GET+REQUIRE']('crypto')},

	'INIT': async function(){
		
		//machieneAttention.init();

		//typically maximal personal self truths are attained
		//a gradiation on machiene attention --> the self-machiene has log events down to ms-timescales --> what is shared in based on configuration as well as cryptoeconomically as multidimensional token equilvance.
		//generally functions will elecit a meta-parameter such as a context to broadcast -> with events of peers who recieve the packets
		//--> which allows for the personal truth path and the shared truth, each respective of one anothers truth :: truthForest
		//----> agreed upon superstructure ;; locking in shared discrete truth :: truthRecursionParameters 

		//--//--//
		//choice of acceptance of personal truth forst comes though partial acceptace of peer network truth paths to then share with self -> other 

		//complexity hello
		//varience
		//agreeing on super structures reduce varience
			//construction: allowing for all truths creates and infinte dimensional data space
			//: data is data : when relavant data-and-the-recursive-lookup is perceived it will be in conflict
			//configuration : {
			//}

		//, and may be requested  by peers in a network

		//GLOBALS!!
		//PEER COMPILE . . . 
		//MODULE LOADER HERE .. 
		await dataApp['INIT']();

		//UHM
		passportApp.loadStrategies();

		//START INTERVALS
		intervalServiceApp['INIT']();
		//THIS IS DYNAMIC LIST
		//for (x in functionSet){}
		//populationApp.populateCombinatorialMarkets();

		async function initDynamic(app, protocol){
			var objectWrap = {};
			var string = app+'+'+protocol;
			var anApp = global[app]; 
			var aProtocol = anApp[protocol];
			objectWrap[string] = aProtocol;
			console.log(anApp, aProtocol)
			var serilizedString = JSON.stringify(aProtocol, function(key, val) {
				if (val && typeof val === 'function' || val.constructor === RegExp) {return String(val)}
				return val
			}, 2);
			var protocolModel = {
				string:app+'+'+protocol,
				description:'sample',
				parameters:{},
				data: serilizedString,
			};
			protocolModel.hash = App['CONNECTION+CRYPTO']().createHmac('sha256', 'CRE8').update(JSON.stringify(protocolModel)).digest('hex');
			var newProtocol = await protocolApp['CREATE'](protocolModel);
			console.log(newProtocol);
		}
		//initDynamic('dataApp', 'INIT');

	}
};
module.exports = App;