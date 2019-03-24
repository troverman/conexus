/**
 * ReactionController
 */

module.exports = {

	getOne: function(req, res) {
		Reaction.findOne(req.param('id'))
		.then(function(model) {
			Reaction.subscribe(req, model);
			res.json(model);
		});
	},

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		console.log(req.query);

		Reaction.watch(req);

		//TODO
		if(req.query.contentModel){
			var contentModel = req.query.contentModel;
			Reaction.find({contentModel:contentModel})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Reaction.subscribe(req, models);
				res.json(models);
			});
		}

		//TODO 
		if(req.query.associatedModels){
			//&& type
			//MEH!
			Reaction.find({associatedModels: {contains: req.query.associatedModels}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Reaction.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Reaction.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Reaction.subscribe(req, models);
				res.json(models);
			});
		}

	},

	create: function (req, res) {

		var model = {
			associatedModels: req.param('associatedModels'),
			amount: req.param('amount'),
			type: req.param('type'),
			user: req.param('user'),

			//PATCH
			reactions: {plus:0,minus:0},
		};

		//console.log(model)
		//association perm check? 
		
		Reaction.create(model)
		.exec(function(err, reaction) {
			if (err) {return console.log(err);}
			else {

				console.log(model);
				
				Reaction.publishCreate(reaction);

				//REACT TO ACTIVITY.. IE FOLLOW AND PROJECTMEMBER :P

				//ASSOCIATION.. AND COUNTS; reaction mappings.. id / address
				for (x in model.associatedModels){
					if (model.associatedModels[x].type == 'CONTENT'){
						Content.find({id:model.associatedModels[x].id}).then(function(contentModel){
							if (!contentModel[0].reactions){contentModel[0].reactions = {};}
							if (!contentModel[0].reactions[model.type]){contentModel[0].reactions[model.type] = model.amount;}
							else if (contentModel[0].reactions[model.type]){contentModel[0].reactions[model.type] = contentModel[0].reactions[model.type] + model.amount;}
							console.log(contentModel[0]);
							Content.update({id:contentModel[0].id},{reactions:contentModel[0].reactions}).then(function(contentModel){
								console.log('UPDATE');
								res.json(reaction);
							});

							//DO USER BY ASSOCIATION? || UPDATE OTHER MODELS.. 
							User.find({id:model.user}).then(function(userModel){
								userModel[0].balance = {};
								userModel[0].reputation = {};
								var notificationModel = {
									user: contentModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Content '+contentModel[0].id,
									info:{user: userModel[0], content:contentModel[0], type:model.type},
									priority:50,
								};
								//console.log(notificationModel)
								Notification.create(notificationModel).then(function(notificationModel){
									console.log('created');
									Notification.publishCreate(notificationModel);
								});
							});

						});

					}
					if (model.associatedModels[x].type == 'ITEM'){
						Item.find({id:model.associatedModels[x].id}).then(function(itemModel){
							if (!itemModel[0].reactions){itemModel[0].reactions = {};}
							if (!itemModel[0].reactions[model.type]){itemModel[0].reactions[model.type] = model.amount;}
							else if (itemModel[0].reactions[model.type]){itemModel[0].reactions[model.type] = itemModel[0].reactions[model.type] + model.amount;}
							console.log(itemModel[0]);
							Item.update({id:itemModel[0].id},{reactions:itemModel[0].reactions}).then(function(itemModel){
								console.log('UPDATE');
								res.json(reaction);
							});
						});
					}
					if (model.associatedModels[x].type == 'ORDER'){
						Order.find({id:model.associatedModels[x].id}).then(function(orderModel){
							if (!orderModel[0].reactions){orderModel[0].reactions = {};}
							if (!orderModel[0].reactions[model.type]){orderModel[0].reactions[model.type] = model.amount;}
							else if (orderModel[0].reactions[model.type]){orderModel[0].reactions[model.type] = orderModel[0].reactions[model.type] + model.amount;}
							console.log(orderModel[0]);
							Order.update({id:orderModel[0].id},{reactions:orderModel[0].reactions}).then(function(orderModel){
								console.log('UPDATE');
								res.json(reaction);
							});
						});
					}
					if (model.associatedModels[x].type == 'REACTION'){
						Reaction.find({id:model.associatedModels[x].id}).then(function(reactionModel){
							if (!reactionModel[0].reactions){reactionModel[0].reactions = {};}
							if (!reactionModel[0].reactions[model.type]){reactionModel[0].reactions[model.type] = model.amount;}
							else if (reactionModel[0].reactions[model.type]){reactionModel[0].reactions[model.type] = reactionModel[0].reactions[model.type] + model.amount;}
							console.log(reactionModel[0]);
							Reaction.update({id:reactionModel[0].id},{reactions:reactionModel[0].reactions}).then(function(reactionModel){
								console.log('UPDATE');
								res.json(reaction);
							});
						});
					}
					if (model.associatedModels[x].type == 'TASK'){
						Task.find({id:model.associatedModels[x].id}).then(function(taskModel){
							if (!taskModel[0].reactions){taskModel[0].reactions = {};}
							if (!taskModel[0].reactions[model.type]){taskModel[0].reactions[model.type] = model.amount;}
							else if (taskModel[0].reactions[model.type]){taskModel[0].reactions[model.type] = taskModel[0].reactions[model.type] + model.amount;}
							console.log(taskModel[0]);
							Task.update({id:taskModel[0].id},{reactions:taskModel[0].reactions}).then(function(taskModel){
								console.log('UPDATE');
								res.json(reaction);
							});
						});
					}
					if (model.associatedModels[x].type == 'TIME'){
						Time.find({id:model.associatedModels[x].id}).then(function(timeModel){
							if (!timeModel[0].reactions){timeModel[0].reactions = {};}
							if (!timeModel[0].reactions[model.type]){timeModel[0].reactions[model.type] = model.amount;}
							else if (timeModel[0].reactions[model.type]){timeModel[0].reactions[model.type] = timeModel[0].reactions[model.type] + model.amount;}
							console.log(timeModel[0]);
							Time.update({id:timeModel[0].id},{reactions:timeModel[0].reactions}).then(function(timeModel){
								console.log('UPDATE');
								res.json(reaction);
							});
						});
					}
					if (model.associatedModels[x].type == 'TRANSACTION'){
						Transaction.find({id:model.associatedModels[x].id}).then(function(transactionModel){
							if (!transactionModel[0].reactions){transactionModel[0].reactions = {};}
							if (!transactionModel[0].reactions[model.type]){transactionModel[0].reactions[model.type] = model.amount;}
							else if (transactionModel[0].reactions[model.type]){transactionModel[0].reactions[model.type] = transactionModel[0].reactions[model.type] + model.amount;}
							console.log(transactionModel[0]);
							Transaction.update({id:transactionModel[0].id},{reactions:transactionModel[0].reactions}).then(function(transactionModel){
								console.log('UPDATE');
								res.json(reaction);
							});
						});
					}
					if (model.associatedModels[x].type == 'VALIDATION'){
						Validation.find({id:model.associatedModels[x].id}).then(function(validationModel){
							if (!validationModel[0].reactions){validationModel[0].reactions = {};}
							if (!validationModel[0].reactions[model.type]){validationModel[0].reactions[model.type] = model.amount;}
							else if (validationModel[0].reactions[model.type]){validationModel[0].reactions[model.type] = validationModel[0].reactions[model.type] + model.amount;}
							console.log(validationModel[0]);
							Validation.update({id:validationModel[0].id},{reactions:validationModel[0].reactions}).then(function(validationModel){
								console.log('UPDATE');
								res.json(reaction);
							});
						});
					}
				}
			}
		});

	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		Reaction.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Reaction.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Reaction.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

