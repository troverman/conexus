//CRE8.CONTENT.ALPHA
const Q = require('q');
const crypto = require('crypto');
module.exports = {

	//IMPORT META MODEL
	//EACH FUNCTION MODEL... A PROTOCOL? 
			//IE MODEL IS MACHIENE ATTENTION ETC 

	attributes: {
        model: {type: 'string', defaultsTo: 'CONTENT'},
        title: {type: 'string', allowNull: true},
        content: {type: 'string'},
        associatedModels: {type: 'json'},
        context: {type: 'string'},
        type: {type: 'string', defaultsTo: 'POST'},
        location: {type: 'json'},

        //CREATOR
        //ITEM vs CONTENT
        user: {model: 'user', required: true},
        creator: {type: 'string'},
        owner: {model: 'user'},
        
        data: {type: 'json'},
    },

	
	get: async function(req, res) {

		var deferred = Q.defer();
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var id = req.query.id;

		console.log('GET CONTENT', req.query);

		if(req.query.id){
			var models = await Content.find({id:id}).limit(limit).skip(skip).sort(sort).populate('user')
    		//ATTENTION???
    		//PRIMITIVE MACHINE ATTENTION
    		//MACHINE REPPUTATION
    			//APP-PROTOCOL-CONNECTION LOGIC WRT MACHINE REP && RATE LIMITS ETC
    		//THIS IS MACHINENE ATTENTION VS 'ATTENTION TIMER' DUP
    		//THERE IS AN ARTECTICTURE DESIGN PATTERN THAT DOES THIS
    		//GET EVENT . . . 
			//eventApp.create(itemModel);
			//WOULD LIKE TO MOVE FORWARD WITH PACKET ROUTING MACHINE ATT &&
			Content.subscribe(req, [models[0].id]);
			return associationApp.get(models[0]);
		}
		else if (req.query.contentModel){
			var contentModel = req.query.contentModel;
			return Content.find({contentModel:contentModel}).limit(limit).skip(skip).sort(sort).populate('user');
			//Content.subscribe(req, models.map((obj)=>obj.id));
			//var promises = [];
			//for (x in models){promises.push(getAssociations(models[x]));}
			//Q.all(promises).then((populatedModels)=>{
			//	for (x in models){models[x] = populatedModels[x];}
			//s});
		}
		else if(req.query.project){
			var project = req.query.project;
			return Content.find({project:project}).limit(limit).skip(skip).sort(sort).populate('user');
		}
		else if (req.query.tag){
			var tag = req.query.tag;
			Content.find({tags:{contains: tag}}).limit(limit).skip(skip).sort(sort).populate('user');
			Content.subscribe(req, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp.get(models[x]));}
			var populatedModels = await Q.all(promises);
			for (x in models){models[x] = populatedModels[x];}
			deferred.resolve(models);
		}
		else if(req.query.user){
			var user = req.query.user;
			var models = await Content.find({user:user}).limit(limit).skip(skip).sort(sort).populate('user');
			Content.subscribe(req,  models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp.get(models[x]));}
			var populatedModels = await Q.all(promises);
			for (x in models){models[x] = populatedModels[x];}
			deferred.resolve(models);
		}
		else{
			var models = await Content.find({}).limit(limit).skip(skip).sort(sort).populate('user');
			var numRecords = Content.count();
			Content.subscribe(req, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp.get(models[x]));}
			var populatedModels = await Q.all(promises);
			for (x in models){models[x] = populatedModels[x];}
			var returnObj = {data:models, info:{count:numRecords}};
			deferred.resolve(returnObj)
		}
		return deferred.promise;
	},

	create: async function (req, res) {
		//TODO: REDUCE!
		async function createValidation(model){
			//validation set
			for (x in model.associatedModels){
				var newValidation = {
					content:model.id + ' VALIDATION',
					context: {},
					reputation: {},					
					//UNIFY AND ALLOW FOR PROJECT TO CREATE
					user: model.user.id,
					creator: model.user.id,
					data:{apps:{reactions: {plus:0,minus:0}, attention:{general:0}}}
				};
				//DEFAULT CONNECTION???? 
				//SCOPE VARIABLES
				//FOR COMMENTS (PARENT CHILD.. )
				//CONTENT-CONTENT COMMENT (1st in order is parent)
				//MODEL-CONTENT COMMENT
				//Connection.find({}).then(function(connectionModel){
				//newValidation.connection = connectionModel[0];
				newValidation.connection = {
					parameters:{
						context:{},
					},
				};
				var associatedModelObj = {};
				if (model.associatedModels[x].id.toLowerCase() == 'self'){associatedModelObj = {type:model.model, id:model.id}}
				else{associatedModelObj = {
					type:model.associatedModels[x].type,
					id:model.associatedModels[x].id};
				}
				newValidation.associatedModels = [
					{type:model.model, id:model.id},
					associatedModelObj
				];
				//LIST -> OBJ
				for (y in model.associatedModels[x].context){
					newValidation.context[model.associatedModels[x].context[y].text] = model.associatedModels[x].context[y].score;
				}
				newValidation.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newValidation)).digest('hex');
				Validation.create(newValidation).then(function(newValidationModel){
					console.log('CREATE VALIDATION', newValidationModel);
					eventApp.create(newValidationModel);
					associationApp.create(newValidationModel)
				});
			}
		};
	
		//language of connections to recurse to bits 
			//the highleve abstract to opcodes to binary seems a chore | gotta be better 

		//var Content = appApp.find(); . . . 
			//--> EventApp.find({type:'APP'}); 
					//--> appApp.find({type:'EVENT'})
						// --> ; -->; [];  
							//. . . 'STRING' 
								//CONJECTURE: A STRING IS THE MOST PRIMITIVE TYPE OF ___DATA___ || OR SERIES OF NUMBERS ( NUMBERS ARE A STRING ) ;
									//VIBRATION . . . STATE CHANGE - MOVEMENT IS (PATTERNS)
								//~~ (BINARY?) () WE REDUCE TO THE PHYSICAL COMPONENTS   
									//. . . BITS  COMPLETE THE CIRCLE 


		//THE BLOAT OF N ABSTRACTION LAYERS FEELS.. MESSY
			//THINK ABOUT YOUR AVERAGE NETWORKING PROTOCOL FLOW DIAGRAM 

		//i need to learn chinese  

		//var User = appApp.find(appApp.id); // something something 
		var userModels = await User.find({id:model.user});
		var model = {
			model: 'CONTENT',
			type: 'CONTENT', //appApp.id --> :)
			title: req.param('title'),
			type: req.param('type'),
			content: req.param('content'),
			user: userModels[0].id,
			creator: userModels[0],		
			data:{
				apps:{
					reactions:{plus:0, minus:0},
					attention:{general:0},
				}
			}
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		console.log('CREATE CONTENT', model);
		var newContent = await Content.create(model);
		newContent.associatedModels = req.param('associatedModels');
		Content.subscribe(req, [newContent.id]);
		Content.publish(model.id, {verb: 'create', data: model});
		eventApp.create(newContent);
		contentApp.token.create(newContent);
		createValidation(newContent);
		return Content.find({hash:model.hash});
	},

	tokens:{
		get:function(){

			//TODO: FACTOR			
			//for you to see the progress 
			//change model to app / type (APP = [  = protocol ] | think token and market ~ WHAT IS THE MOST PRIMITIVE TYPE A BIT BOI)
				//8 BYTE WORD
												//patterns of bools (0,1 ~~> QUANTUM GIVES SMOOTH) ?? OR OR third stat which is an and 
															//GRADIENT IS TRUTH
																	//2^3 , 0,1,0+1
												//SOOO. . . IT'S A STRING

			//[yes] --> NATURAL RECURSION 
			//off rails kinda
			//CAN CONNECTION BE MOST PRIMITIVE TYPE OR STRING --> CONVERT OR BONRAY (I MEAN WERE DEALING WITH LAYERS OF ABSTRACTION) 

			var protocolTokens = [
				'CRE8', 
				'CRE8+'+model.model, 
				'CRE8+'+model.model+'+'+model.id,
			];
			if (model.model == 'ACTION'){}
			if (model.model == 'APP'){}
			if (model.model == 'ASSOCIATION'){
				//TODO: TOKEN GRAMMER
				//TODO: LINK ASSOCIATIONS
				//TODO: ' , ' grammer
				var string ='CRE8+ASSOCIATION+'
				console.log(model);
				for (x in model.associatedModels){
					string = string + '+' + model.associatedModels[x].type + '+' + model.associatedModels[x].id;
					model.associatedModels[x].type
				}
			}		
			//TYPES OF STRING SERILIZATION
			//DATA MODEL OBJ TO STRING
			for (x in Object.keys(model)){
				var dataType = Object.keys(model)[x].toUpperCase();
				var data = model[Object.keys(model)[x]];
				var prefix = 'CRE8+'+model.model;
				var string = prefix+'+'+dataType+'+'+data;
				protocolTokens.push(string);
			};
			//SHA256 HASH DIGEST OF DATA SIGNED WITH CRE8
			for (x in Object.keys(model)){
				var data = model[Object.keys(model)[x]];
				var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(data)).digest('hex');
				var prefix = 'CRE8+'+model.model;
				var string = prefix+'+'+hash;
				protocolTokens.push(string);
			};
			//SHA256 HASH DIGEST OF AGGREGATE DATA SIGNED WITH CRE8
			var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
			var prefix = 'CRE8+'+model.model;
			var string = prefix+'+'+hash;
			protocolTokens.push(string);
			return protocolTokens;
		},
		create:function(model){
			var tokens = contentApp.tokens.get(model);
		},
	}
};