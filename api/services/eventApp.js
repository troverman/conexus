//CRE8.EVENT.ALPHA

//recursive..
//init(req, res, params);
//params are 

module.exports = {

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
			id:'self', 
			type:'connection', 	
			connections:[{
				id:'self',
				type:'event',
				params:{
					//DATA MODEL 
					// EVENT IS AN OBJECT WITH CONSENSUS INFO
					id:'', //HASH OF THE DATA OBJECT

					//COULD BE FOR PLUGIN CONSENSUS APP . . . 
					//THE RESPECTIVE FORSET HASHES
						//MULTI MERKEL ROOTS
						//VARIENT CONSENSUS

						//TODO: 
						//CONSENSUS MECHENISM IS WRITTEN IN CREATE
						//PARSE THE HASHES AND CONNECTION HASHES  . . .
							//RES{	
									//[]..score

							//}	

					//MULTIDIMESNIONAL CONSENSUS
					connectionHashes:[],

					//MAPPING OF ALL ATTENTION / VALIDATIONS & ACTIONS ON EVENT  . . . 
					tokens:[],

					//event data 
					data:[],

				},

			}],
		}
	],

	get: function(req, res, params){

	},

	create: function(req, res, params){

		var eventModel = {
			model:{
				//UNIFY
				id:model.id,
				type:model.model
			},
			verb: verb,
			data: model,
		};
		//JUST SOME DATA.. STRUCTURE IT IN A WAY THE APPS ARE LOOKING FOR.. IE AS A DATA MODEL . . . .
		//EVENT IS AN ALIAS FOR ALL CREATES . . .
		Event.create(eventModel).then(function(model){
			console.log('CREATE EVENT', model);
			Event.publish([model.id], {verb: 'create', data: model});
		});

	},


};