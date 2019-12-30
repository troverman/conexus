//CRE8.TRANSACTION
const crypto = require('crypto');
const Q = require('q');

//reduce to data(apps) and events
function getAssociations(model){
	var deferred = Q.defer();
	Association.getDatastore().manager.collection('association')
	.find({$and : [{"associatedModels.id": {$in:[model.id]}}]})
	.limit(1000)
	.skip(0)
	.sort({'createdAt':-1})
	.toArray(function (err, associationModels) {
		console.log('transaction associationModels.length', associationModels.length)
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
				//DEFINED BY CONNECTION
				if (model.associationModels[x].context){
					for (y in Object.keys(model.associationModels[x].context)){
						var context = Object.keys(model.associationModels[x].context)[y].toString();
						if (!model.context){model.context = {}}
						if(!model.context[context.toString()]){model.context[context.toString()] = model.associationModels[x].context[context.toString()];}
						else{model.context[context.toString()] = model.context[context.toString()] + model.associationModels[x].context[context.toString()];}
					}
				}
			}
			Q.all(promises).then((populatedModels)=>{
				var index = -1;
				for (x in model.associationModels){
					for (y in associationModels[x].associatedModels){
						index++;model.associationModels[x].associatedModels[y].data = populatedModels[index];
					}
				}
				deferred.resolve(model);
			});
		}
		else{deferred.resolve(model);}
	});
	return deferred.promise;
};

module.exports = {

	get: async function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		
		if (req.query.query){
			var querySet = JSON.parse(req.query.query);
			var mongoQuery = mongoApp.parseQuery(querySet);
			console.log(JSON.stringify(mongoQuery, null, 4));
			Transaction.native(function(err, transaction) {
				transaction.find(mongoQuery)
				.limit(1000)
				.skip(0)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					models = models.map(function(obj){obj.id = obj._id; return obj;});

					//console.log(models)
					//var promises = [];
					//for (x in models){
					//	promises.push(transactionApp.getTo(models[x]));
					//	promises.push(transactionApp.getFrom(models[x]));
					//}
					//Q.all(promises).then((populatedModels)=>{
					//	var sum = 0;
					//	connsole.log(populatedModels)
					//	for (x in models){
					//		console.log(x)
					//		models[x].to = populatedModels[sum];sum++
					//		models[x].from = populatedModels[sum];sum++;
					//	}
					//	res.json(models);
					//});


				});
			});
		}
		
		else if(req.query.id){
			var id = req.query.id;
			Transaction.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				var promises = [];
				for (x in models){
					promises.push(transactionApp.getTo(models[x]));
					promises.push(transactionApp.getFrom(models[x]));
				}
				Q.all(promises).then((populatedModels)=>{
					var sum = 0;
					for (x in models){
						models[x].to = populatedModels[sum];
						sum++
						models[x].from = populatedModels[sum];
						sum++;
					}
					getAssociations(models[0]).then(function(model){
						console.log(models)
						Transaction.subscribe(req, [model.id]);
						res.json(model);
					});
				});
			});
		}

		//DEPRECIATE BELOW
		else if(req.query.project){
			var project = req.query.project;
			Transaction.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				res.json(models);
			});
		}

		else if(req.query.user && !req.query.amountSet){
			var user = req.query.user;
			Transaction.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				var promises = [];
				for (x in models){
					promises.push(transactionApp.getTo(models[x]));
					promises.push(transactionApp.getFrom(models[x]));
				}
				Q.all(promises).then((populatedModels)=>{
					var sum = 0;
					for (x in models){
						models[x].to = populatedModels[sum];sum++
						models[x].from = populatedModels[sum];sum++;
					}

					//LOL
					var promisesAssociations = [];
					for (x in models){promisesAssociations.push(getAssociations(models[x]));}
					Q.all(promisesAssociations).then((populatedModels)=>{
						for (x in models){models[x] = populatedModels[x];}
						res.json(models);
					});

				});
			});
		}

		else if(req.query.to){
			var to = req.query.to;
			Transaction.find({to:to})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				var promises = [];
				for (x in models){
					promises.push(transactionApp.getTo(models[x]));
					promises.push(transactionApp.getFrom(models[x]));
				}
				Q.all(promises).then((populatedModels)=>{
					var sum = 0;
					for (x in models){
						models[x].to = populatedModels[sum];sum++
						models[x].from = populatedModels[sum];sum++;
					}

					//LOL
					var promisesAssociations = [];
					for (x in models){promisesAssociations.push(getAssociations(models[x]));}
					Q.all(promisesAssociations).then((populatedModels)=>{
						for (x in models){models[x] = populatedModels[x];}
						res.json(models);
					});

				});
			});
		}

		else if(req.query.from){
			var from = req.query.from;
			Transaction.find({from:from})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				var promises = [];
				for (x in models){
					promises.push(transactionApp.getTo(models[x]));
					promises.push(transactionApp.getFrom(models[x]));
				}
				Q.all(promises).then((populatedModels)=>{
					var sum = 0;
					for (x in models){
						models[x].to = populatedModels[sum];sum++
						models[x].from = populatedModels[sum];sum++;
					}

					//LOL
					var promisesAssociations = [];
					for (x in models){promisesAssociations.push(getAssociations(models[x]));}
					Q.all(promisesAssociations).then((populatedModels)=>{
						for (x in models){models[x] = populatedModels[x];}
						res.json(models);
					});

				});
			});
		}

		//LOL
		//DEPRECIATE
		else if(req.query.amountSet && !req.query.user){
			var amountSet = req.query.amountSet;
			//TEMP | TODO COMPLEX
			var query = {};
			query[ "amountSet."+req.query.amountSet] = {$gt: 0};
			Transaction.native(function(err, transaction) {
				transaction.find(query)
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					models = models.map(function(obj){obj.id = obj._id;return obj;});
					var promises = [];
					for (x in models){
						promises.push(transactionApp.getTo(models[x]));
						promises.push(transactionApp.getFrom(models[x]));
					}
					Q.all(promises).then((populatedModels)=>{
						var sum = 0;
						for (x in models){
							models[x].to = populatedModels[sum];sum++
							models[x].from = populatedModels[sum];sum++;
						}
						res.json(models);
					});
				});
			});
		}

		//DEPRECIATE
		else if(req.query.amountSet && req.query.user){

			var amountSet = req.query.amountSet;
			var query = {};
			query[ "amountSet."+req.query.amountSet] = {$gt: 0};
			var andQuery = { $and: []};
			var orQuery = {$or:
				[
					{from:req.query.user},
					{to:req.query.user}
				]
			};
			andQuery.$and.push(query)
			andQuery.$and.push(orQuery)
			Transaction.native(function(err, transaction) {
				transaction.find(andQuery)
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					models = models.map(function(obj){obj.id = obj._id;return obj;});
					var promises = [];
					for (x in models){
						promises.push(transactionApp.getTo(models[x]));
						promises.push(transactionApp.getFrom(models[x]));
					}
					Q.all(promises).then((populatedModels)=>{
						var sum = 0;
						for (x in models){
							models[x].to = populatedModels[sum];sum++
							models[x].from = populatedModels[sum];sum++;
						}
						res.json(models);
					});
				});
			});
		}

		else{

			var models = await Transaction.find({}).limit(limit).skip(skip).sort(sort);

			var promises = [];
			for (x in models){promises.push(transactionApp.getTo(models[x]));promises.push(transactionApp.getFrom(models[x]));}
			var populatedModels = await Q.all(promises);
			var sum = 0;
			for (x in models){models[x].to = populatedModels[sum];sum++;models[x].from = populatedModels[sum];sum++;}

			//LOL
			var promisesAssociations = [];
			for (x in models){promisesAssociations.push(getAssociations(models[x]));}
			var populatedAssociations = await Q.all(promisesAssociations);
			for (x in models){models[x] = populatedAssociations[x];}

			res.json(models);
			
		}
		
	},

	create: async function (req, res) {

		//IMPLICIT VALIDATIONS REPLACE 'user'? what about 'creator'
		//DEPRECAITE TO.. FROM????? --> VALIDATION / ASSOCIATION IS MAIN DATA MODEL ...
		//MEMBER->TRANSACTION
		//TRANSACTION->PROJECT
		//TRANSACTION<->TRANSACTION ?

		function createValidation(model){

			console.log('ASSOCIATED MODELS');
			console.log(model.associatedModels);

			//CREATE VALIDATION (IE SELF VALIDATION .. CONTEXT OF TRANSACTION)
			//SOME CHARTER WHERE THE CREATOR IS WEIGHTED
			//SOME CHARTER WHERE THE FROM AND TO IS WEIGHTED
			//IE BUY AN ITEM.. CONTEXTUALIZED VALIDATION
			for (x in model.associatedModels){

				var newValidation = {
			
					content:model.id + ' VALIDATION',

					//THIS IS DEFINED BY CONNECTION!!!
					//ATTRIBUTES
					context: {},
					reputation: {},		

					//UNIFY
					user: model.user.id,
					creator: model.user.id,

					data:{apps:{reactions: {plus:0,minus:0}, attention:{general:0}}}

				};

				newValidation.connection = {
					id:1,
					type:'HUMAN',
					title:'STANDARD MULTI, AGNOSTIC MODELS',
					parameters:{
						mapping:['context','reputation'],
						logic:'context[%context]*reputation[%context]'
					},
				};

				var associatedModelObj = {};
				if (model.associatedModels[x].id.toLowerCase() == 'self'){associatedModelObj = {type:model.model, id:model.id}}
				else{
					associatedModelObj = {type:model.associatedModels[x].type, id:model.associatedModels[x].id};
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

					createAssociation(newValidationModel);

					//GENERALIZED ASSOCIATION
					//Transaction.update({id:model.id},{context:{}}).then((newTransactionModel)=>{
					//	console.log('UPDATE CONTEXT??', newTransactionModel)
					//});

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
							Association.publish([association.id], {verb: 'update', data: association});
						});
					}
					else{
						console.log('ASSOCIATION EXISTS -- COMPUTE')
					}
				});
			});
		};
	
		var model = {

			model: 'TRANSACTION',
			amountSet: req.param('amountSet'),

			to: req.param('to'),
			from: req.param('from'),

			//HM -- ASSOCIATED?
			content: req.param('content'),

			//to,from,self,creator
			//NOT STORED IN MAIN MODEL... 
			//associatedModels: req.param('associatedModels'),
			context: req.param('context'),

			user: req.param('user'),
			creator: req.param('user'),
			
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}

		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		console.log('CREATE TRANSACTION', model);

		var transactionModel = await Transaction.create(model);

		//ITEM ACTIONS.. 			
		//IF GENERATOR
		//CONTENT OWNERSHIP? --> CONTENT AND ITEM 
		//.. ATTENTION(ASSET) TOKEN RIGHTS.. 
		for (x in Object.keys(transactionModel.amountSet)){
			var itemModels = await Item.find({id:Object.keys(transactionModel.amountSet)[x]});
			if (itemModels.length!=0){
				var updatedItem = await Item.update({id:itemModels[0].id}, {user:transactionModel.to, owner:transactionModel.to})
				console.log('UPDATED: ITEM OWNERSHIP TRANSFERRED', updatedItem);
			}
		}

		//HMM
		transactionModel.associatedModels = req.param('associatedModels');

		var promises = [transactionApp.getTo(transactionModel), transactionApp.getFrom(transactionModel)];
		var populatedModels = await Q.all(promises);
		var userModels = await User.find({id:model.user});
		transactionModel.user = userModels[0];
		transactionModel.to = populatedModels[0];
		transactionModel.from = populatedModels[1];

		Transaction.publish([transactionModel.id], {verb: 'update', data: transactionModel});
		
		createValidation(transactionModel);

		transactionApp.tokens.create(transactionModel);
		eventApp.create(transactionModel);
		notificationApp.create.transaction(transactionModel);

		res.json(transactionModel);

	},
	
};

//CRE8.TRANSACTION
//module.exports = {
//	get: async function(req, res) {
//		var model = await actionApp.get(req); 
//		res.json(model);
//	},
//	update: async function (req, res) {
//		var newModel = await actionApp.create(req);
//		res.json(newModel);
//	}
//};
