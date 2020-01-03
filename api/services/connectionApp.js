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

		//NO
		async function createValidation(model){

			//validation set
			for (x in model.associatedModels){
				var newValidationModel = {
					content:model.id + ' VALIDATION',
					context: {},
					reputation: {},					
					user: model.user.id,
					creator: model.user.id,
					data:{apps:{reactions: {plus:0,minus:0}, attention:{general:0}}}
				};

				//Connection.find({}).then(function(connectionModel){
				//newValidation.connection = connectionModel[0];
				newValidationModel.connection = {
					parameters:{
						context:{},
					},
				};
				var associatedModelObj = {};

				//REDUCE --> SELF ID ?? MM 
				if (model.associatedModels[x].id.toLowerCase() == 'self'){associatedModelObj = {type:model.model, id:model.id}}
				else{associatedModelObj = {type:model.associatedModels[x].type, id:model.associatedModels[x].id};}

				newValidationModel.associatedModels = [
					{type:model.model, id:model.id},
					associatedModelObj
				];

				//LIST -> OBJ
				for (y in model.associatedModels[x].context){
					newValidationModel.context[model.associatedModels[x].context[y].text] = model.associatedModels[x].context[y].score;
				}
				newValidationModel.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newValidationModel)).digest('hex');
				
				var newValidation = await Validation.create(newValidation)
				console.log('CREATE VALIDATION', newValidationModel);
				eventApp.create(newValidation);

				//MAY BE DYNAMICALLY DEFINED IE CONNECTION CUSTOM VALIDATION TYPE . . 
				associationApp.create(newValidationModel);

			}
		};

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
		createValidation(newConnection);

		return Connection.find({hash:model.hash});

	},

	get: async function(req){

		var limit = parseInt(req.query.limit) || 100;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET CONNECTION', req.query);

		if(req.query.id){
			return Connection.find({id:id}).limit(limit).skip(skip).sort(sort);
		}

		else if(req.query.creator){
			return Connection.find({creator:creator}).limit(limit).skip(skip).sort(sort);
		}

		else{
			return Connection.find({}).limit(limit).skip(skip).sort(sort);
		}

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