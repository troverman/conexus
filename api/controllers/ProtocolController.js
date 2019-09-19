//CRE8.PROTOCOL

//IMMUTABLE JSON
//NAKED MODEL DEFINE.. .create, get / find
//BACKEND
module.exports = {

	//DEFINE DATA MODEL(S)
	attributes: [
		{
			title: 'Protocol',
			dataModel:{
				title: {type: 'string'},
				permissions:{type:'json'},
				logic:{type:'json'},
		    }
		}
    ],

   
	//DEFINE ASSOCIATIONS / IMPORTS
	associations:[
	//node_modules..
    //imports..
		//import queryLanguage 
			//and queryParse
	],

	//CUSTOM FUNCTIONS
	get: function(req, res) {
		//queryLanguage.queryParse();
	},

	create: function (req, res) {

		var newProtocol = req.body;
		if(true){
			Protocol.create(newProtocol).then((newProtocol)=>{

			});
		}

	},

	//FRONTEND; JSX; TO BUILD THE ENGINE.. 
		//APP DEFINED ROUTES. ETC
			//COMPILES TO APP IN BROWER , NATIVLY
		//CORE CONTAINS THE BUILDER
	templates:{

	}

};

