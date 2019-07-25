/**
 * TransactionController
 */
var Q = require('q');

module.exports = {

	getSome: function(req, res) {

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
		function createValidation(model){
			//Validation.create({id:model.to}).then(function(validationModels){
				
			//});
		};

		//TODO: GLOBAL
		function createNotification(model){

		};

		var model = {
			amountSet: req.param('amountSet'),
			to: req.param('to'),
			from: req.param('from'),
			content: req.param('content'),
			user: req.param('user'),
			associatedModels: req.param('associatedModels'),
			validationModels: req.param('validationModels'),

			//DEPRECIATE
			tags: req.param('tags'),

			//PATCH.. BETTER MAPPINGS.. DATA MODEL.. 
			reactions:{plus:0,minus:0},
			attention:{general:0},

		};
		console.log('CREATE TRANSACTION', model);

		Transaction.create(model)
		.exec(function(err, transaction) {
			if (err) {return console.log(err);}
			else {

				console.log(transaction);

				//CREATE VALIDATION (IE SELF VALIDATION .. CONTEXT OF TRANSACTION)
				//SOME CHARTER WHERE THE CREATOR IS WEIGHTED
				//SOME CHARTER WHERE THE FROM AND TO IS WEIGHTED
				//IE BUY AN ITEM.. CONTEXTUALIZED VALIDATION
				//for (x in model.validationModels){createVaidation(model.validationModels[x]);}


				//WIP
				//TODO: OWNER
				//IF ITEM MODEL...... FRONTENT SHOULD HANDLE THIS? ... HM 
				//ALSO ASSOCIATEDMODELS

				//TODO: GENERATOR --> IE POS MENU ITEMS

				for (x in Object.keys(transaction.amountSet)){
					console.log( Object.keys(transaction.amountSet)[x])
					Item.find({id:Object.keys(transaction.amountSet)[x]}).then(function(itemModels){
						if (itemModels.length!=0){
							//REMOVE USER
							Item.update({id:itemModels[0].id}, {user:transaction.to, owner:transaction.to}).then(function(updatedItemModel){
								//GENERATOR ON TRANSACTION :^)
								console.log('UPDATED: ITEM OWNERSHIP TRANSFERRED', updatedItemModel);
							});
						}
					});

					//CONTENT OWNERSHIP? --> CONTENT AND ITEM .. VIEWTOKEN RIGHTS.. 
						//CONTENT AS ITEM.. ADD VIEWOWNER? .. mm
						//Content.find()
				}
				

				//for (x in Object.keys(amountSet)){

				//}

				//for (x in associatedModels){
				//	if (associatedModels[x].type == 'ITEM'){
						//ASSOCIATED AND SEND
						//FIND OWNER IS SENDER // owner: transaction.from
				//		Item.find({id:associatedModels[x].address}).then(function(itemModels){
							//if > 0
				//			itemModels[0].owner = transaction.to;
				//			Item.update({id:itemModels[0].id},{owner:itemModels[0].owner}).then(function(itemModel){
				//				console.log('ITEM OWNER UPDATED');
				//				Item.publishUpdate(itemModel);
				//			});
				//		});
				//	}	
				//}

				Transaction.publishCreate(transaction);
				res.json(transaction);

				//COULD BE LISTENER..? MM . . NOTIFICATION SERVICE
				var notificationModel = {
					user: model.to,
					type: 'TRANSACTION',
					title: 'New Transaction',
					content:model.from+' sent you '+model.amountSet,
					info:{transaction:transaction},
					priority:77,
				};

				Notification.create(notificationModel).then(function(notification){
					Notification.publishCreate(notification);
				});

			}
		});
	},

	update: function (req, res) {},
	
};

