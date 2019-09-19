//CRE8.ITEM

module.exports = {

	get: function(req, res) {

		var mongodb = require('mongodb');

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';

		Item.watch(req);
		
		console.log('GET ITEM', req.query);

		if(req.query.id){

			//LOL WOW
			var id = req.query.id;
			var query = {};
			if (mongodb.ObjectID.isValid(id)){query = { "_id": { $eq: mongodb.ObjectID(id) } }}
			else{query = { dataHash: id}}

			Item.native(function(err, item) {
				item.find(query).limit(limit).skip(skip).sort({'createdAt':-1})
				.toArray(function (err, models) {
					if (models.length > 0){
						var itemModel = models[0];
						itemModel.id = itemModel._id;
						User.find({id:itemModel.user.toString()}).then(function(userModel){
							itemModel.user = userModel[0];
							res.json(itemModel);
						});
					}
					else{res.json([]);}
				});
			});

		}

		else if (req.query.tag){
			var tag = req.query.tag;
			Item.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user') //TODO: OWNER
			.then(function(models) {

				Item.count({tags:{contains: tag}}).then(function(numRecords){
					Item.subscribe(req, models);
					var returnObj = {data:models, info:{count:numRecords}};
					res.json(returnObj);
				});

			});
		}

		//TODO: OWNER
		else if (req.query.user){
			var user = req.query.user;
			console.log(req.query)
			Item.find({user:user}) //TODO: OWNER
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')  //TODO: OWNER
			.then(function(models) {
				Item.subscribe(req, models);
				res.json(models);
			});
		}

		else{
			Item.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')  //TODO: OWNER
			.then(function(models){

				Item.count().then(function(numRecords){
					Item.subscribe(req, models);
					var returnObj = {data:models, info:{count:numRecords}};
					res.json(returnObj);
				});

			});
		}
		
	},

	create: function (req, res) {

		const crypto = require('crypto');

		function createEvent(model){
			var eventModel = {
				type:'create',
				model:{
					id:model.id, //hash
					type:model.model //app
				},
				data:{},
			};
			Event.create(eventModel);
		};

		function createValidation(model){
			for (x in model.associatedModels){
				var newValidation = {
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
				Validation.create(validationModel).then(function(newValidationModel){
					console.log('CREATE VALIDATION', newValidationModel);
					createAssociation(newValidationModel);
				});
			}
		};

		function createAssociation(newValidationModel){
			var newAssociationModel = {};
			Validation.native(function(err, validation) {
				validation.find({
					$and : [
						{"associatedModels.id": {$in :[newValidationModel.associatedModels[0].id]}}, 
						{"associatedModels.id": {$in :[newValidationModel.associatedModels[1].id]}},
					]
				})
				.limit(1000)
				.skip(0)
				.sort({'createdAt':-1})
				.toArray(function (err, validationModels) {
					Association.native(function(err, association) {
						association.find({
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
									Association.publishCreate(association);
								});
							}
							else{
								console.log('ASSOCIATION EXISTS -- COMPUTE')
							}
						});
					});
				});
			});
		};

		function createNotification(model){
		};

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+ITEM'];
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
					itemModel.associatedModels = req.param('associatedModels');
					itemModel.user = userModels[0];
					Item.publishCreate(itemModel);
					createEvent(itemModel);
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

