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

	create: async function (req, res) {


		//CONNETION -- ASSOCIATION -- VALIDATION 


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

				createAssociation(newValidationModel);

			}
		};

		//NO
		//MESSY MESSY
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
		res.json(newConnection);
		
	},

};