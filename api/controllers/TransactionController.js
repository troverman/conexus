/**
 * TransactionController
 */
var Q = require('q');

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
		
		Transaction.watch(req);

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

		//console.log('GET TRANSACTION',req.query)
		


		//DEPRECIATE BELOW
		if(req.query.project){
			var project = req.query.project;
			Transaction.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
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
			.populate('user')
			.then(function(models) {
				res.json(models);
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
					res.json(models);
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
						models[x].to = populatedModels[sum];
						sum++
						models[x].from = populatedModels[sum];
						sum++;
					}
					res.json(models);
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
						models[x].to = populatedModels[sum];
						sum++
						models[x].from = populatedModels[sum];
						sum++;
					}
					res.json(models);
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
						models[x].to = populatedModels[sum];
						sum++
						models[x].from = populatedModels[sum];
						sum++;
					}
					res.json(models);
				});
			});
		}
	},

	create: function (req, res) {

		//TODO: GLOBAL

		//IMPLICIT VALIDATIONS REPLACE 'user'? what about 'creator'
		//DEPRECAITE TO.. FROM????? --> VALIDATION / ASSOCIATION IS MAIN DATA MODEL ...
		//MEMBER->TRANSACTION
		//TRANSACTION->PROJECT
		//TRANSACTION<->TRANSACTION ?

		function createValidation(model){

			console.log(model);

			for (x in model.validationModels){
				model.validationModels[x].validation;
				var validationModel = {
					associatedModels:[
						{type:'TRANSACTION',id:model.id},
						{type:'TRANSACTION',id:model.id}
					],

					//TODO: UPDATE .validation to .context
					validation:model.validationModels[x].validation,
					context:model.validationModels[x].validation,

					user: model.user,
					creator:model.user,
					type:'HUMAN',
					parameters:{connctionType:'SELF'}
				};

				Validation.create(validationModel).then(function(newValidationModel){
					
					console.log('CREATE VALIDATION', newValidationModel)

					//ONLY FOR SELF VALIDATION
					//MACHINE VALIDATION SOON
					Association.create(validationModel).then((newAssociationModel)=>{
						console.log('CREATE ASSOCIATION', newAssociationModel)
					});

					//UPDATE TRANSACTION WITH COMPUTED CONTEXT??? OKAY :)

				});

			}

			//CREATE VALIDATION (IE SELF VALIDATION .. CONTEXT OF TRANSACTION)
			//SOME CHARTER WHERE THE CREATOR IS WEIGHTED
			//SOME CHARTER WHERE THE FROM AND TO IS WEIGHTED
			//IE BUY AN ITEM.. CONTEXTUALIZED VALIDATION

		};

		//TODO: GLOBAL
		//TODO: IMPROVE NOTIFICATION STORAGE
		function createNotification(model){
			var notificationModel = {
				user: model.to,
				type: 'TRANSACTION',
				title: 'New Transaction',
				content:model.from+' sent you '+model.amountSet,
				info:{transaction:model},
				priority:77,
			};
			Notification.create(notificationModel).then(function(notification){
				Notification.publishCreate(notification);
			});
		};

		function mintTokens(model){

			var transactionProtocolTokens = getProtocolTokens(model);
			for (x in transactionProtocolTokens){
				var tokenString = transactionProtocolTokens[x]; 
				console.log(tokenString);

				/*
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
				*/

			}
		};


		//WILL DOO SOON!!!
		//DO THIS SOON(ER THAN LATER)
		//CRE8 is not a 'verb' in the traditional context. is is ''''AN APP SPECIFIC'''' MANIFOLD
		//AUDIT IF TOO MANY OVERLAPPING NFTs .. think we good
		function getProtocolTokens(model){

			//TODO --> MULTI PARTIES GET TOKENS.. TO; FROM

			//THINK ABOUT THE VERBS IN 'TOKEN/ASSET' LANGUAGE 
			//CRE8manifold'contains recieve..ie 
				//CRE8+SEND
				//CRE8+RECIEVE.. YES
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

			}

			//DEPRECIATE TAGS

			//TODO:... CONTEXT
			//THINK ABOUT ASSOCIATION PROTOCLLS WRT SELF-ASSOCATION
			//LAYERING MAY B 2 MUCH DUP
			if (model.tags){
				for (x in model.tags.split(',')){
					//protocolTokens.push(model.tags.split(',')[x].toUpperCase());
					protocolTokens.push('CRE8+TRANSACTION+CONTEXT+'+model.tags.split(',')[x].toUpperCase());

					protocolTokens.push('CRE8+TRANSACTION+SEND+CONTEXT+'+model.tags.split(',')[x].toUpperCase());
					protocolTokens.push('CRE8+TRANSACTION+RECIEVE+CONTEXT+'+model.tags.split(',')[x].toUpperCase());

				}
			}

			//return based on who recieved the toks?
			//[id,tok]
			return protocolTokens;

		};


		var model = {

			amountSet: req.param('amountSet'),

			to: req.param('to'),
			from: req.param('from'),

			//HM -- ASSOCIATED?
			content: req.param('content'),

			//ITEMS OR?? HM --> COULD CODIFY FROM TO ETC IN 
			associatedModels: req.param('associatedModels'),

			//UNIFY
			user: req.param('user'),
			creator: req.param('user'),
			
			//DEPRECIATE
			tags: req.param('context'),

			//APPS - DATA
			//PATCH.. BETTER MAPPINGS
			reactions:{plus:0,minus:0},
			attention:{general:0},

		};

		console.log('CREATE TRANSACTION', model);

		Transaction.create(model)
		.exec(function(err, transactionModel) {
			if (err) {return console.log(err);}
			else {
	
				//TODO: ITEM INTERACTION
				//ITEM ACTIONS.. ATTENTION TOKEN RIGHTS | CONTENT AS ITEM.. ADD VIEWOWNER?
				//IF GENERATOR
				//CONTENT OWNERSHIP? --> CONTENT AND ITEM .. ATTENTION(ASSET) TOKEN RIGHTS.. 
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
				transactionModel.validationModels = req.param('validationModels');

				//MESSY CODE . LOL
				var promises = [];
				promises.push(getTo(transactionModel));
				promises.push(getFrom(transactionModel));

				Q.all(promises).then((populatedModels)=>{

					console.log(populatedModels.length, populatedModels)

					transactionModel.to = populatedModels[0];
					transactionModel.from = populatedModels[1];

					mintTokens(transactionModel);
					createNotification(transactionModel);
					Transaction.publishCreate(transactionModel);
					res.json(transactionModel);

				});


			}
		});
	},

	update: function (req, res) {},
	
};

