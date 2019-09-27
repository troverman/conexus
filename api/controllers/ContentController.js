//CRE8.CONTENT
const Q = require('q');
const crypto = require('crypto');

module.exports = {
	
	get: function(req, res) {

		function getAssociations(model){
			console.log(model.id)
			var deferred = Q.defer();
			Association.getDatastore().manager.collection('association')
			.find({$and : [{"associatedModels.id": {$in:[model.id]}}]})
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, associationModels) {
				if (associationModels.length > 0){
					associationModels.map(function(obj){obj.id=obj._id; return obj});
					model.associationModels = associationModels;

					//LOL!
					var promises = [];
					for (x in model.associationModels){
						for (y in associationModels[x].associatedModels){
							if (associationModels[x].associatedModels[y].type=='ACTION'){promises.push(Action.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='APP'){promises.push(App.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='ATTENTION'){promises.push(Attention.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='CONTENT'){promises.push(Content.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='ITEM'){promises.push(Item.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='MEMBER'){promises.push(User.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='PROJECT'){promises.push(Project.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TASK'){promises.push(Task.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TIME'){promises.push(Time.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TRANSACTION'){promises.push(Transaction.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='VALIDATION'){promises.push(Validation.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						}
					}

					Q.all(promises).then((populatedModels)=>{
						//console.log(populatedModels)
						for (x in model.associationModels){
							for (y in associationModels[x].associatedModels){
								var index = parseInt(x+y);
								model.associationModels[x].associatedModels[y].data = populatedModels[index];
								//console.log(populatedModels[index])
							}
						}
						deferred.resolve(model);
					});

					//CONTEXT IS AVG 
					model.context = {};
					for (x in model.associationModels){
						//model.context[]
					}

				}
				else{deferred.resolve(model);}
			});
			return deferred.promise;
		};

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var id = req.query.id;

		console.log('GET CONTENT', req.query);

		if(req.query.id){
			Content.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
        	.then(function(models){
				Content.subscribe(req, [models[0].id]);
				getAssociations(models[0]).then(function(models){res.json(models);});
			});
		}

		else if (req.query.contentModel){
			var contentModel = req.query.contentModel;
			Content.find({contentModel:contentModel})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models.map((obj)=>obj.id));
				//var promises = [];
				//for (x in models){promises.push(getAssociations(models[x]));}
				//Q.all(promises).then((populatedModels)=>{
				//	for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				//s});
			});
		}

		else if(req.query.project){
			var project = req.query.project;
			Content.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models.map(function(obj){return obj.id}));
				res.json(models);
			});
		}

		else if (req.query.tag){
			var tag = req.query.tag;
			Content.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models.map(function(obj){return obj.id}));
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				});
			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Content.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req,  models.map(function(obj){return obj.id}));
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				});
			});
		}

		else{
			Content.find({})
			.limit(20)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.count().then(function(numRecords){
					Content.subscribe(req, models.map(function(obj){return obj.id}));
					var returnObj = {data:models, info:{count:numRecords}};
					res.json(returnObj);
				});
			});
		}
	},

	create: function (req, res) {

		//APP - DATA () --> EVENT --> 
		function createEvent(model){
			var eventModel = {
				verb:'create',
				model:{id:model.id,type:'CONTENT'}
			};
			Event.create(eventModel);
		};

		function createNotification(model){
			//<-- ASSOCIATIONS -->
			//SEND NOTIFICATIONS TO FOLLOWERS
			//SEND NOTIFICATIONS TO PROJECT MEMBERS
			//SEND NOTIFICATION TO MEMBER
		};

		//TODO: CONNECTION!
		function createValidation(model){

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

					newValidation.connection = {
						type:'HUMAN',
						parameters:{charter:'STANDARD MULTIPLICATIVE'},
					};

					//newValidation.connection = connectionModel[0];

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
						createAssociation(newValidationModel)
					});

				//});

			}

		};

		//TODO: CONNECTION && ++
		function createAssociation(newValidationModel){
			//COMPUTE ASSOCIATION HERE
			var newAssociationModel = {}; 
			//FIND ALL VALIDATIONS FOR SPECIFIC ASSOCIATED MODELS
			Validation.getDatastore().manager.collection('validation')
			.find({$and : [{"associatedModels.id": {$in :[newValidationModel.associatedModels[0].id]}}, {"associatedModels.id": {$in :[newValidationModel.associatedModels[1].id]}},]})
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, validationModels) {
				Association.getDatastore().manager.collection('association')
				.find({
					$and : [
						{"associatedModels.id": {$in :[validationModels[0].associatedModels[0].id]}},
						{"associatedModels.id": {$in :[validationModels[0].associatedModels[1].id]}},
					]
				})
				.limit(1000)
				.skip(0)
				.sort({'createdAt':-1})
				.toArray(function (err, associationModels) {
					if (associationModels.length == 0){
						var newAssociationModel = newValidationModel;
						Association.create(newAssociationModel).then(function(association){
							console.log('CREATED ASSOCIATION', association);
							Association.publish(association.id, {verb: 'create', data: association});
						});
					}
					else{
						console.log('ASSOCIATION EXISTS -- COMPUTE')
					}
				});
			});
		};

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+CONTENT', model.id, 'CRE8+CONTENT+'+model.id ];
			return protocolTokens;
		};

		var model = {
			model: 'CONTENT',

			title: req.param('title'),
			type: req.param('type'),
			content: req.param('content'),

			user: req.param('user'),
			creator: req.param('user'),			
			data:{apps:{reactions:{plus:0, minus:0},attention:{general:0}}}

		};

		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		console.log('CREATE CONTENT', model);

		Content.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {

				//TODO: POPULATE USER
				User.find({id:model.user}).then(function(userModels){

					model.user = userModels[0];
					model.associatedModels = req.param('associatedModels');

					Content.subscribe(req, [model.id]);
					Content.publish(model.id, {verb: 'create', data: model});
					
					createEvent(model);
					createNotification(model);
					createValidation(model);
					mintTokens(model);
					res.json(model);

				});
			}
		});
	},

	//IT'S A NEW 'CREATE' THAT OVERLAPS. 
	update: function(req, res){
		//UPDATE HISTORY IN MODEL
	}

};