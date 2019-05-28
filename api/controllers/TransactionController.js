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

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		console.log('GET TRANSACTION',req.query)
		
		Transaction.watch(req);

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

		else if(req.query.user){
			var user = req.query.user;
			Transaction.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
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

		//TO, FROM AS ASSOCIATED MODELS.. ? 
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
		var model = {
			amountSet: req.param('amountSet'),
			to: req.param('to'),
			from: req.param('from'),
			tags: req.param('tags'),
			content: req.param('content'),
			user: req.param('user'),
			associatedModels: req.param('associatedModels'),
			//PATCH
			reactions:{plus:0,minus:0},
		};
		console.log('CREATE TRANSACTION', model)
		Transaction.create(model)
		.exec(function(err, transaction) {
			if (err) {return console.log(err);}
			else {

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

