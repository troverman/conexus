//CRE8.CONNECTION.ALPHA
//EXERCISE: WRITE IN CONNECTION RECURSIVE JSON
const crypto = require('crypto');
const Q = require('q');

module.exports = {

	//AGAIN TYPE COMPOSITION IS A ROMANTIC FORMALISM WRT LANG GRAMMER 
	//CONNECTION STRUCUTRES ARE ELUSIVE
	types:[
		{
			type:'CONNECTION', 
			attributes:{

		        //2nd order parameters
				//title: {type: 'string'},
				//description: {type: 'string'},

		        context: {type: 'json'},
		        attributes: {type: 'json'},
			    context: {type: 'json'},
			    mapping: {type: 'json'},   
			    logic: {type:'json'}  

		    }
		}
	],

	 attributes: {

        //DEPRECIATE
        model: {type: 'string', defaultsTo: 'CONNECTION'},



        //THERE IS NOT FRICTION BETWEEN DISCRETE AND ABSTRACT STRUCUTRES
        type: {type: 'string', defaultsTo: 'CONNECTION'},
        //ID --> HASH

        //2nd order parameters
		title: {type: 'string'},
		description: {type: 'string'},
        context:{type: 'string'},
        creator:{type: 'string'},
    	type:{type: 'string'},
        associatedModels:{type: 'json'},

        data: {type: 'json'},

        //TODO: DEFINE
        //CUSOM CONNECTION DATA MODEL..
        attributes:{type:'json'},
        parameters:{type:'json'}

    },

	create:async function(req){

		var model = {
			model: 'CONNECTION',
			type: 'CONNECTION', //DUPLICATE TO REDUCE ~
			creator: req.param('creator'),
			title:req.param('title'),
			description:req.param('description'),
			information: req.param('information'), //parameters?
			associatedModels: req.param('associatedModels'),//id, type..
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		//SKINNY CONTROLLERS --> TO REDUCE 
		//var newConnection = await connectionApp.create(model);
		//console.log('CREATE CONNECTION', newConnection, model);
		//res.json(newConection);
		
		var newConnection = await Connection.create(model);
		Connection.publish([newConnection.id], {verb: 'create', data: newConnection});
		
		//(NOW MOMENT COMMENT - REDUCE DATA MODELS TO APPS) 
		eventApp.create(newConnection);
		validationApp.create(newConnection);

		return Connection.find({hash:model.hash});

	},

	get: async function(req){
		var limit = parseInt(req.query.limit) || 100;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;
		console.log('GET CONNECTION', req.query);
		var response = {};
		if(req.query.id){response = Connection.find({id:id}).limit(limit).skip(skip).sort(sort);}
		else if(req.query.creator){response = Connection.find({creator:creator}).limit(limit).skip(skip).sort(sort);}
		else{response = Connection.find({}).limit(limit).skip(skip).sort(sort);}
		return response;
	},

	//OKAY DATA-TOKEN CONNECTION . . .
	//STATIC SELF CONNECTION CONSTRUCTOR --> THIS IS SUPER IN COMPOSITION 
	tokens:{

		model:{
			create:[
				{name:'CRE8+CREATE+CONNECTION'}, 
				{name:'CRE8+CREATE+CONNECTION+{id}'},

				//COMBINATORIAL
				//REDUCE / BE INTENTIONAL AS IT IS LARGE .. LARGER THE BETTER ; 

				//IMPROVEMENT PROPOSAL: ALLOWN N SIZE COMBINAORIAL TOKENIZATION OF DATA ATTRIBUTES :: POWERSET ATTRIBUTES
				//{name:'CRE8+CONNECTION+{context}'},

			],
			get:[
				{name:'CRE8+GET+CONNECTION'},
				{name:'CRE8+GET+CONNECTION+{id}'}
			],
		},

		create:function(model){


		},
		
	},
   
};