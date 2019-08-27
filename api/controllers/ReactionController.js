/**
 * ReactionController
 */

module.exports = {

	get: function(req, res) {

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
		else if(req.query.associatedModels){
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

		function createNotification(model, notificationModel){
			//DO USER BY ASSOCIATION? || UPDATE OTHER MODELS.. 
			User.find({id:model.user}).then(function(userModel){
				userModel[0].balance = {};
				userModel[0].reputation = {};
				//console.log(notificationModel)
				Notification.create(notificationModel).then(function(notificationModel){
					console.log('created');
					Notification.publishCreate(notificationModel);
				});
			});
		};

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
			for (x in protocolTokens){
				var tokenString = protocolTokens[x];
				(function(tokenString) {
					Token.find({string:tokenString}).then(function(tokenModels){
						if (tokenModels.length == 0){
							var newTokenModel = {
								string:tokenString,
								protocols:['CRE8','REACTION'], 
								information:{inCirculation:model.amount, markets:0},
								logic:{transferrable:true, mint:'CREATE REACTION'}
							};
							Token.create(newTokenModel).then(function(model){console.log('TOKEN CREATED', model.string);});
							model.user.balance[tokenString] = parseFloat(model.amount);
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){});
						}
						else{
							tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
							Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(model){console.log('TOKEN UPDATED', model)});
							if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
							else{model.user.balance[tokenString] = parseFloat(model.amount);}
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){});
						}
					});
				})(tokenString);
			}
		};

		//FACTOR TO RETURN ENTIER TOKEN MODEL
		function getProtocolTokens(model){
			console.log(model)
			//TODO: CREATOR AND RECIEVER AND TYPE
			//associated models.. ie  react to content, time, etc
			var protocolTokens = ['CRE8', 'CRE8+REACTION', 'CRE8+REACTION+'+model.id, 'CRE8+REACTION+'+model.type.toUpperCase()];
			return protocolTokens;
		};

		var model = {
			model: 'REACTION',
			associatedModels: req.param('associatedModels'),
			amount: req.param('amount'),
			type: req.param('type'),
			user: req.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};

		//TODO UPDATE COUNT IN DATA.APPS.REACTION

		Reaction.create(model)
		.exec(function(err, reaction) {
			if (err) {return console.log(err);}
			else {

				console.log('CREATE REACTION', reaction);

				User.find({id:model.user}).then(function(userModel){

					reaction.user = userModel[0];
					mintTokens(reaction);
					Reaction.publishCreate(reaction);

					//TODO: REFACTOR AND CONDENSE
					//INTERMUX THE MODELS
					for (x in model.associatedModels){


						//TODO: REDUCE CODE
						//TODO: NAV REACTION
						//TODO: REDUCE NOTIFICATION MODEL
						if (model.associatedModels[x].type == 'CONTENT'){
							Content.find({id:model.associatedModels[x].id}).then(function(newModel){

								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
								console.log(newModel[0].data)
								Content.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
									console.log('UPDATE');
									res.json(reaction);
								});

								//AUDIT NOTIFICATION MODEL STRUCT
								var notificationModel = {
									user: newModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Content '+newModel[0].id,
									info:{
										user: userModel[0], 
										content:newModel[0], 
										type:model.type
									},
									priority:50,
								};

								createNotification(model, notificationModel);

							});

						}


						//TODO.....
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

								var notificationModel = {
									user: itemModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Content '+itemModel[0].id,
									info:{user: userModel[0], item:itemModel[0], type:model.type},
									priority:50,
								};

								createNotification(model, notificationModel);

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

								var notificationModel = {
									user: orderModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Content '+orderModel[0].id,
									info:{user: userModel[0], order:orderModel[0], type:model.type},
									priority:50,
								};

								createNotification(model, notificationModel);

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
								var notificationModel = {
									user: reactionModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Content '+reactionModel[0].id,
									info:{user: userModel[0], order:reactionModel[0], type:model.type},
									priority:50,
								};
								createNotification(model, notificationModel);
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

								var notificationModel = {
									user: taskModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Content '+taskModel[0].id,
									info:{user: userModel[0], task:taskModel[0], type:model.type},
									priority:50,
								};

								createNotification(model, notificationModel);
								
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

								var notificationModel = {
									user: timeModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Content '+timeModel[0].id,
									info:{user: userModel[0], time:timeModel[0], type:model.type},
									priority:50,
								};

								createNotification(model, notificationModel);

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

								var notificationModel = {
									user: transactionModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Content '+transactionModel[0].id,
									info:{user: userModel[0], transaction:transactionModel[0], type:model.type},
									priority:50,
								};

								createNotification(model, notificationModel);

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
								var validationModel = {
									user: validationModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Content '+validationModel[0].id,
									info:{user: userModel[0], validation:validationModel[0], type:model.type},
									priority:50,
								};
								createNotification(model, notificationModel);
							});
						}
					}

				});

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

