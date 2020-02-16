//CRE8.APPMANGER.ALPHA
//DECENTRALIZED NPM / CRATE.IO / ETC --> SUBMODULE OF APPAPP
//https://github.com/entropic-dev/entropic
//dependency graph
var App = {

	connections:{
		apps:{
			//Data: appManagerApp.get('CRE8.INIT.DATA')
		}
	},
	//IE get.REQUIRENPM
	get:function(model){return require(model);},

	//TODO: SWAP WITH GET SOON
	getByHash:async function(self, model){
		//get dynamicJSON data from from registry && peers 

		//MULTINET GRAPH HASH FOR TRUTH 

		//RETURN JSON CODE  
		var data = await Data.find({hash:model.hash});
		
		//self is PEER + VM APP ETC : DYANMIC OBJ
		//initalize, process --> ACTIVITY PROCESSOR 
		//--> LOAD INTO ENGINE : 'V8': <LOAD V8 FROM HASH DYNMAICLY>
			//PYTHON : : C 
				//THESE 'IN A SENSE ARE EMULATED VIA BASE LOADER' :: > 

		//processor vm

		//SOON TO B: EX [STATIC FXN]: 
		//const self = require('vm');

		//bootstrap this --> TODO:

		self.initalize(data);

		//self.process(data);

		//INSTANTALIZE BY VM INSTANCE  

	},

	//create: function(){},

	//WRITE DYNMAIC CODE PROCESSOR / INTERPRETOR  

	//APP REGITRY
	//Apps.find
	//IMPORT FILTERS 
	//POPULATE NPM APP  . . . .THEN ''DYNAMIC'' IMPORT BY NPM ID -- FIND BY TITLE + HASH ETC
	//NPM APP.. POPULATE ALL TIMES 
	//LISTENERS --- 	
};
module.exports = App;
 