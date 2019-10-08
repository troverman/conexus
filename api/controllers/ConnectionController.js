//CRE8.CONNECTION
const crypto = require('crypto');
const Q = require('q');

module.exports = {
	
	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 100;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET CONNECTION', req.query);

		if(req.query.id){
			Connection.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models) {
				Connection.subscribe(req, [models[0].id]);
				res.json(models[0]);
			});
		}

		else if(req.query.creator){
			Connection.find({creator:creator})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models) {
				Content.subscribe(req, [models[0].id]);
				res.json(models[0]);
			});
		}

		else{
			Connection.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Connection.subscribe(req, models.map(function(obj){return obj.id}));
				res.json(models);
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

		function createNotification(model){};

		//TODO: CONNECTION!
		function createValidation(model){
			//validation set
			for (x in model.associatedModels){
				var newValidation = {
					content:model.id + ' VALIDATION',
					context: {},
					reputation: {},					
					user: model.user.id,
					creator: model.user.id,
					data:{apps:{reactions: {plus:0,minus:0}, attention:{general:0}}}
				};
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
					createEvent(newValidationModel, 'create');
					createAssociation(newValidationModel);
				});
				//});
			}
		};

		function createAssociation(newValidationModel){
			var newAssociationModel = {}; 
			Validation.getDatastore().manager.collection('validation')
			.find({$and : [{"associatedModels.id": {$in :[newValidationModel.associatedModels[0].id]}}, {"associatedModels.id": {$in :[newValidationModel.associatedModels[1].id]}},]})
			.limit(1000).skip(0).sort({'createdAt':-1})
			.toArray(function (err, validationModels) {
				Association.getDatastore().manager.collection('association')
				.find({$and : [{"associatedModels.id": {$in :[validationModels[0].associatedModels[0].id]}},{"associatedModels.id": {$in :[validationModels[0].associatedModels[1].id]}},]})
				.limit(1000).skip(0).sort({'createdAt':-1})
				.toArray(function (err, associationModels) {
					if (associationModels.length == 0){
						var newAssociationModel = newValidationModel;
						Association.create(newAssociationModel).then(function(association){
							console.log('CREATED ASSOCIATION', association);
							Association.publish(association.id, {verb: 'create', data: association});
							createEvent(association, 'create');
						});
					}
					else{createEvent(association, 'update');}
				});
			});
		};

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+CONNECTION'];
			return protocolTokens;
		};

		var model = {
			model: 'CONNECTION',
			creator: req.param('creator'),

			title:req.param('title'),
			description:req.param('description'),
			information: req.param('information'), //parameters?
			associatedModels: req.param('associatedModels'),//id, type..
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}

		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		console.log('CREATE CONNECTION', model);
		
		Connection.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				Connection.publish([model.id], {verb: 'create', data: model});
				createEvent(model, 'create');
				createNotification(model);
				createValidation(model);
				mintTokens(model);
				res.json(model);
			}
		});
		
	},

};