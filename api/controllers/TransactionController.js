//CRE8.TRANSACTION
const crypto = require('crypto');
const Q = require('q');

function getTo(model){
	var deferred = Q.defer();
	User.find({id:model.to}).then(function(userModels){
		if (userModels.length == 0){Project.find({id:model.to}).then(function(projectModels){deferred.resolve(projectModels[0])})}
		else{deferred.resolve(userModels[0])}
	})
	return deferred.promise;
};

function getFrom(model){
	var deferred = Q.defer();
	User.find({id:model.from}).then(function(userModels){
		if (userModels.length == 0){Project.find({id:model.from}).then(function(projectModels){deferred.resolve(projectModels[0])})}
		else{deferred.resolve(userModels[0])}
	});
	return deferred.promise;
};

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

	get: function(req, res) {

		//RATING: SILVER
		function parseQuery(queryModel){
			//THINK
			var mongoQuery = {
				filter:{
					$or:[],
					$and:[]
				},
				params:{
					limit:1,
					skip:0,
					sort:{'createdAt':-1}
				}
			};
			var mongoQuery = {
				$or:[],
				$and:[]
			};
			for (x in queryModel){
				if (queryModel[x].chain){
					var topBool = null;
					if (queryModel[x].chain == 'AND'){topBool = '$and';}
					if (queryModel[x].chain == 'OR'){topBool = '$or';}
				}
				if (queryModel[x].filter){
					for (y in queryModel[x].filter){
						var queryObj = {};
						queryObj[queryModel[x].filter[y].modelParam] = queryModel[x].filter[y].query;
						if (!queryModel[x].filter[y].chain){mongoQuery[topBool].push(queryObj);}
						if (queryModel[x].filter[y].chain){
							if (queryModel[x].filter[y].chain == 'AND'){
								if (topBool){
									var index = mongoQuery[topBool].map(function(obj){return Object.keys(obj)[0]}).indexOf('$and');
									if (index ==-1){mongoQuery[topBool].push({$and:[queryObj]});}
									else{mongoQuery[topBool][index]['$and'].push(queryObj);}
								}
							}
							if (queryModel[x].filter[y].chain == 'OR'){
								if (topBool){
									var index = mongoQuery[topBool].map(function(obj){return Object.keys(obj)[0]}).indexOf('$or');
									if (index ==-1){mongoQuery[topBool].push({$or:[queryObj]});}
									else{mongoQuery[topBool][index]['$or'].push(queryObj);}
								}
							}
						}
					}
				}
			}
			if (mongoQuery.$or.length == 0){ delete mongoQuery.$or}
			if (mongoQuery.$and.length == 0){ delete mongoQuery.$and}
			return mongoQuery
		};

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		
		if (req.query.query){
			var querySet = JSON.parse(req.query.query);
			var mongoQuery = parseQuery(querySet);
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
					//	promises.push(getTo(models[x]));
					//	promises.push(getFrom(models[x]));
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
					promises.push(getTo(models[x]));
					promises.push(getFrom(models[x]));
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
					promises.push(getTo(models[x]));
					promises.push(getFrom(models[x]));
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
					promises.push(getTo(models[x]));
					promises.push(getFrom(models[x]));
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
					promises.push(getTo(models[x]));
					promises.push(getFrom(models[x]));
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
						promises.push(getTo(models[x]));
						promises.push(getFrom(models[x]));
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
						promises.push(getTo(models[x]));
						promises.push(getFrom(models[x]));
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
			Transaction.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				var promises = [];
				for (x in models){
					promises.push(getTo(models[x]));
					promises.push(getFrom(models[x]));
				}
				Q.all(promises).then((populatedModels)=>{
					var sum = 0;
					for (x in models){
						models[x].to = populatedModels[sum];sum++;
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
	},

	create: function (req, res) {

		function createEvent(model){
			var eventModel = {
				verb:'create',
				model:{id:model.id,type:'CONTENT'}
			};
			Event.create(eventModel);
		};

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

		function createNotification(model){

			//IF MODEL.TO == PROJECT
				//SEND NOTIFICATIONS TO APPROPIATTE USER GROUP 
					//NOTIFICATION (APP) - PROJECT CONNECTION --> USER PERMS

			var notificationModel = {
				user: model.to,
				type: 'TRANSACTION',
				title: 'New Transaction',
				content:model.from+' sent you '+model.amountSet,
				data:{apps:{transaction: model}},
				priority:77,//defined by user
			};
			Notification.create(notificationModel).then(function(notification){
				Notification.publish([notification.id], {verb: 'update', data: notification});
			});

		};

		function mintTokens(model){
			var transactionProtocolTokens = getProtocolTokens(model);
			for (x in transactionProtocolTokens){
				var tokenString = transactionProtocolTokens[x]; 

				console.log(tokenString);

				(function(tokenString) {
					Token.find({string:tokenString}).then(function(tokenModels){
						if (tokenModels.length == 0){
							var newTokenModel = {
								string:tokenString,
								protocols:['CRE8','TRANSACTION'], 
								information:{inCirculation:model.amount, markets:0},
								logic:{transferrable:true, mint:'CREATE TIME'}
							};
							Token.create(newTokenModel).then(function(model){console.log('TOKEN CREATED', model.string);});
							//TO, FROM
							model.user.balance[tokenString] = parseFloat(model.amount);
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){});
						}
						else{
							tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
							Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(model){console.log('TOKEN UPDATED', model)});
							//TO, FROM
							if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
							else{model.user.balance[tokenString] = parseFloat(model.amount);}
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){});
						}
					});
				})(tokenString);

				//UPDATE TRANSACTION MODEL..
				//ATTENTION + REACTION + PROTOCOL + ASSOCIATION + ALL TOKENS IN CONTEXT

				//data.apps.tokens = {
				//}

			}
		};

		function getProtocolTokens(model){

			//TODO: STANDARDIZE VERBS
			//TODO: MULTI PARTIES GET TOKENS.. TO; FROM
			//CRE8+SEND
			//CRE8+RECIEVE

			var protocolTokens = [

				//goes to both?
				'CRE8', 
				'CRE8+TRANSACTION', 
				'CRE8+TRANSACTION+'+model.id, 

				//goes to 'from'
				'CRE8+TRANSACTION+SEND',
				'CRE8+TRANSACTION+SEND+'+model.id, 
				'CRE8+TRANSACTION+SEND+TO+'+model.to.id,

				//HM
				//goes to 'to'
				'CRE8+TRANSACTION+RECIEVE',
				'CRE8+TRANSACTION+RECIEVE+'+model.id, 
				'CRE8+TRANSACTION+RECIEVE+FROM+'+model.from.id, 

			];

			for (x in Object.keys(model.amountSet)){

				protocolTokens.push('CRE8+TRANSACTION+SEND+'+Object.keys(model.amountSet)[x]);
				protocolTokens.push('CRE8+TRANSACTION+SEND+'+Object.keys(model.amountSet)[x]+'+TO+'+model.to.id);

				protocolTokens.push('CRE8+TRANSACTION+RECIEVE+'+Object.keys(model.amountSet)[x]);
				protocolTokens.push('CRE8+TRANSACTION+RECIEVE+'+Object.keys(model.amountSet)[x]+'+FROM+'+model.to.id);

				if (model.context){
					for (y in model.context.split(',')){
						protocolTokens.push('CRE8+TRANSACTION+'+Object.keys(model.amountSet)[x]+'+'+model.context.split(',')[y].toUpperCase());
						protocolTokens.push('CRE8+TRANSACTION+SEND+'+Object.keys(model.amountSet)[x]+'+'+model.context.split(',')[y].toUpperCase());
						protocolTokens.push('CRE8+TRANSACTION+RECIEVE+'+Object.keys(model.amountSet)[x]+'+'+model.context.split(',')[y].toUpperCase());
					}
				}

			}

			//TODO:... CONTEXT
			//THINK ABOUT ASSOCIATION WRT SELF-ASSOCATION
			if (model.context){
				for (x in model.context.split(',')){
					protocolTokens.push('CRE8+TRANSACTION+'+model.context.split(',')[x].toUpperCase());
					protocolTokens.push('CRE8+TRANSACTION+SEND+'+model.context.split(',')[x].toUpperCase());
					protocolTokens.push('CRE8+TRANSACTION+RECIEVE+'+model.context.split(',')[x].toUpperCase());
				}
			}

			//return based on who recieved the toks?
			//[id,tok]

			return protocolTokens;
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

		Transaction.create(model)
		.exec(function(err, transactionModel) {
			if (err) {return console.log(err);}
			else {
	
				//ITEM ACTIONS.. 			
				//IF GENERATOR
				//CONTENT OWNERSHIP? --> CONTENT AND ITEM 
				//.. ATTENTION(ASSET) TOKEN RIGHTS.. 
				for (x in Object.keys(transactionModel.amountSet)){
					Item.find({id:Object.keys(transactionModel.amountSet)[x]}).then(function(itemModels){
						if (itemModels.length!=0){
							Item.update({id:itemModels[0].id}, {user:transactionModel.to, owner:transactionModel.to}).then(function(updatedItemModel){
								console.log('UPDATED: ITEM OWNERSHIP TRANSFERRED', updatedItemModel);
							});
						}
					});
				}

				//HMM
				transactionModel.associatedModels = req.param('associatedModels');

				//MESSY CODE
				// .. POPULATE ASSOCIATIONS
				var promises = [];
				promises.push(getTo(transactionModel));
				promises.push(getFrom(transactionModel));

				Q.all(promises).then((populatedModels)=>{
					User.find({id:model.user}).then(function(userModels){

						transactionModel.user = userModels[0];
						transactionModel.to = populatedModels[0];
						transactionModel.from = populatedModels[1];
						Transaction.publish([transactionModel.id], {verb: 'update', data: transactionModel});
						createEvent(transactionModel);
						createNotification(transactionModel);
						createValidation(transactionModel);
						mintTokens(transactionModel);
						res.json(transactionModel);

					});
				});
			}
		});
	},
	
};

