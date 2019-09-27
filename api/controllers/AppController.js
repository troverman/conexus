//CRE8.APP
const crypto = require('crypto');
const Q = require('q');

module.exports = {
	
	get: function(req, res) {

		function getAssociations(model){
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
						for (x in model.associationModels){
							for (y in associationModels[x].associatedModels){
								var index = parseInt(x+y);
								model.associationModels[x].associatedModels[y].data = populatedModels[index];
							}
						}
						deferred.resolve(model);
					});
					model.context = {};
					for (x in model.associationModels){}
				}
				else{deferred.resolve(model);}
			});
			return deferred.promise;
		};

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET APP', req.query);

		if(req.query.id){
			App.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models) {
				App.subscribe(req, [models[0].id]);
				getAssociations(models[0]).then(function(models){res.json(models);});
			});
		}

		else{
			App.find({})
			.limit(100)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				App.subscribe(req, models.map(function(obj){return obj.id}));
				res.json(models);
			});
		}
		
	},

	create: function (req, res) {

		function createEvent(model){
			var eventModel = {
				type:'create',
				model:{id:model.id,type:model.model},
				data:{},
			};
			Event.create(eventModel);
		};

		function createNotification(model){};

		function createValidation(model){
			for (x in model.associatedModels){
				var newValidation = {
					content:model.id + ' VALIDATION',
					user: model.user.id,
					creator: model.user.id,
					data:{apps:{reactions: {plus:0,minus:0}, attention:{general:0}}}

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
			Validation.getDatastore().manager.collection('validation')
			.find({
				$and : [
					{"associatedModels.id": {$in :[newValidationModel.associatedModels[0].id]}}, 
					{"associatedModels.id": {$in :[newValidationModel.associatedModels[1].id]}},
				]
			})
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
							Association.publishCreate(association);
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
			var protocolTokens = ['APP', 'CRE8+APP', 'CRE8+APP+'+model.title.toUpperCase()];
			return protocolTokens;
		};

		var model = {
			model: 'APP',
			title: req.param('title'),
			description: req.param('description'),
			information: req.param('information'),
			data: req.param('data'),
			protocols: req.param('protocols'),
			context: req.param('context'),
			creator: req.param('creator'),
			data:{apps:{reactions: {plus:0,minus:0}, attention:{general:0}}}
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		console.log('CREATE APP', model);
		
		App.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {

				App.publish([model.id], {verb: 'create', data: model});
				createEvent(model);
				
				createNotification(model);	
				createValidation(model);
				res.json(model);

			}
		});
	},

};