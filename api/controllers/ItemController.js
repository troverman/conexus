//CRE8.ITEM
const crypto = require('crypto');
const mongodb = require('mongodb');
const Q = require('q');

//DEPRECIATE MODEL AND TYPE 
//APPREACIATE APP ID //APPRECIATE SELF CONNECTION ATTRIBUTES :o
	//DEPRECIATE 'CLASSIC' MONGO
		//REDUCE

module.exports = {

	get: function(req, res) {

		function getAssociations(model){
			var deferred = Q.defer();
			Association.getDatastore().manager.collection('association').find({
				$and : [
					{"associatedModels.id": {
						$in:[model.id]}
					}
				]
			})
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, associationModels) {
				if (associationModels.length > 0){
					associationModels.map(function(obj){obj.id=obj._id; return obj});
					model.associationModels = associationModels;
					var promises = [];
					model.context = {};
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
					//DEFINED BY CONNECTION
					for (y in Object.keys(model.associationModels[x].context)){
						var context = Object.keys(model.associationModels[x].context)[y].toString();
						if(!model.context[context.toString()]){model.context[context.toString()] = model.associationModels[x].context[context.toString()];}
						else{model.context[context.toString()] = model.context[context.toString()] + model.associationModels[x].context[context.toString()];}
					}
					Q.all(promises).then((populatedModels)=>{
						var index = -1 
						for (x in model.associationModels){
							for (y in associationModels[x].associatedModels){
								index++;
								model.associationModels[x].associatedModels[y].data = populatedModels[index];
							}
						}
						deferred.resolve(model);
					});
				}
				else{deferred.resolve(model);}
			});
			return deferred.promise;
		};

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		
		console.log('GET ITEM', req.query);

		if(req.query.id){

			//LOL WOW
			var id = req.query.id;
			var query = {};
			if (mongodb.ObjectID.isValid(id)){query = { "_id": { $eq: mongodb.ObjectID(id) } }}
			else{query = { dataHash: id}}

			Item.getDatastore().manager.collection('item').find(query).limit(limit).skip(skip).sort({'createdAt':-1}).toArray(function (err, models) {
				console.log('leal');
				if (models.length > 0){
					var itemModel = models[0];
					itemModel.id = itemModel._id.toString();
					User.find({id:itemModel.user.toString()}).then(function(userModel){
						itemModel.user = userModel[0];
						Item.subscribe(req, [itemModel.id]);
						getAssociations(itemModel).then(function(models){res.json(models);});
					});
				}
				else{res.json([]);}
			});
		}

		else if (req.query.tag){
			var tag = req.query.tag;
			Item.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {

				Item.count({tags:{contains: tag}}).then(function(numRecords){
					Item.subscribe(req, models);
					var returnObj = {data:models, info:{count:numRecords}};
					res.json(returnObj);
				});

			});
		}

		else if (req.query.user){
			var user = req.query.user;
			Item.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user') 
			.then(function(models) {
				Item.subscribe(req, models.map(function(obj){return obj.id}));
				res.json(models);
			});
		}

		else{
			Item.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Item.count().then(function(numRecords){
					Item.subscribe(req, models.map(function(obj){return obj.id}));
					var promises = [];
					for (x in models){promises.push(getAssociations(models[x]));}
					Q.all(promises).then((populatedModels)=>{
						for (x in models){models[x] = populatedModels[x];}
						var returnObj = {data:models, info:{count:numRecords}};
						res.json(returnObj);
					});
				});
			});
		}
		
	},

	create: function (req, res) {

		function createEvent(model, verb){
			var eventModel = {
				model:{id:model.id,type:model.model},
				verb: verb,
			};
			Event.create(eventModel).then(function(model){
				console.log('CREATE EVENT', model);
				Event.publish([model.id], {verb: 'create', data: model});
			});
		};

		function createValidation(model){
			for (x in model.associatedModels){
				var newValidation = {
					model:'VALIDATION',
					content:model.id + ' VALIDATION',
					user: model.user.id,
					creator: model.user.id,
					data:{apps:{reactions: {plus:0,minus:0},attention:{general:0}}}
				};
				newValidation.connection = {
					id:1,
					type:'HUMAN',
					title:'STANDARD MULTI, AGNOSTIC MODELS',
					parameters:{
						mapping:['context','reputation','computed'],
						logic:'context[%context]*reputation[%context]'
					},
				};
				//CONNECTION DEFINED MAPPINGS
				for (y in newValidation.connection.parameters.mapping){
					newValidation[newValidation.connection.parameters.mapping[y]] = {};
				}
				var associatedModelObj = {};
				if (model.associatedModels[x].id.toLowerCase() == 'self'){associatedModelObj = {type:model.model, id:model.id}}
				else{associatedModelObj = {type:model.associatedModels[x].type, id:model.associatedModels[x].id};}
				newValidation.associatedModels = [
					{type:model.model, id:model.id},
					associatedModelObj
				];
				for (y in model.associatedModels[x].context){newValidation.context[model.associatedModels[x].context[y].text] = model.associatedModels[x].context[y].score;}				
				newValidation.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newValidation)).digest('hex');
				Validation.create(newValidation).then(function(newValidationModel){
					console.log('CREATE VALIDATION', newValidationModel);
					createEvent(newValidationModel, 'create');
					newValidationModel.model = 'ASSOCIATION';
					createAssociation(newValidationModel);
				});
			}
		};

		function createAssociation(newValidationModel){
			var newAssociationModel = {};
			Validation.getDatastore().manager.collection('validation').find({
				$and : [
					{"associatedModels.id": {$in :[newValidationModel.associatedModels[0].id]}}, 
					{"associatedModels.id": {$in :[newValidationModel.associatedModels[1].id]}},
				]
			})
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, validationModels) {
				Association.getDatastore().manager.collection('association').find({
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
							console.log('CREATE ASSOCIATION', association);
							Association.publish([association.id], {verb: 'create', data: association});
							createEvent(association, 'create');
						});
					}
					else{createEvent(association, 'update');}
				});
			});
		};

		function createNotification(model){
		};

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		//CHANGE TO VERBS?
		//GET FROM CONNECTION? --> IT"S IN DATA MODEL
		function getProtocolTokens(model){
			var protocolTokens = [
				'CRE8', 
				'CRE8+ITEM',
				'CRE8+ITEM+'+model.id,
			];
			
			//FOR X IN 
			var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
			var prefix = 'CRE8+ITEM';
			var string = prefix+'+'+hash;
			protocolTokens.push(string);
			return protocolTokens;
		};

		var model = {
			model: 'ITEM',

			title: req.param('title'),
			content: req.param('content'),
			location: req.param('location'),

			//associatedModels: req.param('associatedModels'),
			context: req.param('context'),

			info: req.param('info'),
			information: req.param('info'),

			user: req.param('user'),
			creator: req.param('user'),
			owner: req.param('owner'),

			data: req.param('data'),

		};

		if (!model.data){model.data = {};}
		model.data.apps = {
			actions:[],
			reactions:{plus:0,minus:0},
			attention:{general:0},
			json:{},
		};

		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		console.log('CREATE ITEM', model);

		Item.create(model)
		.exec(function(err, itemModel) {
			if (err) {return console.log(err);}
			else {
				User.find({id:model.user}).then(function(userModels){
					itemModel.associatedModels = req.param('associatedModels') || [];
					itemModel.user = userModels[0];
					Item.subscribe(req, [itemModel]);
					Item.publish([itemModel.id], {verb: 'create', data: itemModel});
					createEvent(itemModel, 'create');
					createNotification(itemModel);
					createValidation(itemModel);
					mintTokens(itemModel);
					res.json(itemModel);
				});
			}
		});

	},

	update: function (req, res) {},
	
};