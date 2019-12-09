//CRE8.LOCATION.ALPHA

module.exports = {

	//IMPORT GOOGLE APP! ( AND OTHER PROVIDERS (FOR HISTORICAL) -- ALLOW PERMISSIONS FOR LOCATION VIA NATIVE CALLS)
		//BUILD IN CONTINGENCY CHECKS AS PLUGIN 
			//PREVENT SPOOFING

	import: { 
		request: require('request'),
		Q: require('q'),
	},

	//DATA MODELS ARE CONNECTIONS

	//TEST
	//REDUCE INTO SELF CONECTION W CONTEXT --> INTERNAL FUNCTION MAPPING 
	language: 'Javascript',
	compiler:'V8',

	connections:[
		{
			type:'connection', 
			id:'self', 
			params:{
				//DATA MODEL.
			}	
		}
	],

	get: function(req, res, params){

	},

	create: function(req, res, params){

		var locationModel = {
		
		};
		//JUST SOME DATA.. STRUCTURE IT IN A WAY THE APPS ARE LOOKING FOR.. IE AS A DATA MODEL . . . .
		//EVENT IS AN ALIAS FOR ALL CREATES . . .
		Event.create(eventModel).then(function(model){
			console.log('CREATE EVENT', model);
			Event.publish([model.id], {verb: 'create', data: model});
		});

	},


};