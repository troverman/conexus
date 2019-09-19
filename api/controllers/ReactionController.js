//CRE8.REACTION

module.exports = {

	get: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		console.log('GET REACTION', req.query);

		Reaction.watch(req);

		if(req.query.id){
			var id = req.query.id;
			Reaction.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Reaction.subscribe(req, models);
				res.json(models[0]);
			});
		}

		if(req.query.user){
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

		else{res.json([]);}

	},

	create: function (req, res) {

		function createNotification(notificationModel){
			Notification.create(notificationModel).then(function(model){
				console.log('CREATE NOTIFICATION', model);
				Notification.publishCreate(model);
			});
		};

		function mintTokens(model){
			console.log('USER BALANCE!!', model.user.balance)
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
							
							console.log('balance!',model.user.balance)

							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){});
						}
						else{
							
							tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
							Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(model){console.log('TOKEN UPDATED', model)});
							
							if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
							else{model.user.balance[tokenString] = parseFloat(model.amount);}
							
							console.log('balance',model.user.balance)
							
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){});
						}
					});
				})(tokenString);
			}
		};

		//FACTOR TO RETURN ENTIER TOKEN MODEL
		function getProtocolTokens(model){
			//TODO: CREATOR AND RECIEVER AND TYPE
			//associated models.. ie  react to content, time, etc
			var protocolTokens = ['CRE8', 'CRE8+REACTION', 'CRE8+REACTION+'+model.id, 'CRE8+REACTION+'+model.type.toUpperCase()];
			return protocolTokens;
		};

		//TODO: REFACTOR AND CONDENSE
		//INTERMUX THE MODELS
		function updateAssociatedModelsData(model){
			for (x in model.associatedModels){
				model.user.balance = {};
				model.user.reputation = {};
				if (model.associatedModels[x].type == 'APP'){
					App.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
						else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
						App.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){console.log('UPDATE APP ASSOCIATED REACTION DATA');});
					});
				}
				if (model.associatedModels[x].type == 'ACTION'){
					Action.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
						else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
						Action.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){console.log('UPDATE ACTION ASSOCIATED REACTION DATA');});
					});
				}
				if (model.associatedModels[x].type == 'ASSOCIATION'){
					Association.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
						else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
						Association.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){console.log('UPDATE ASSOCIATION ASSOCIATED REACTION DATA');});
					});
				}
				if (model.associatedModels[x].type == 'CONNECTION'){
					Connection.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
						else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
						Connection.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){console.log('UPDATE CONNECTION ASSOCIATED REACTION DATA');});
					});
				}
				//LOOK
				if (model.associatedModels[x].type == 'CONTENT'){
					Content.find({id:model.associatedModels[x].id}).then(function(newModel){

						if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
						else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
						Content.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){console.log('UPDATE CONTENT ASSOCIATED REACTION DATA');});å
						//NOTIFICATION.. ASSOCIATED MODEL
						//AUDIT NOTIFICATION MODEL STRUCT
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for content '+newModel[0].id,
							data:{
								apps:{
									reacton:reaction,
									user:model.user, 
									content:newModel[0], 
									type:model.type
								}
							},
							priority:50,
						};
						createNotification(notificationModel);

					});
				}
				if (model.associatedModels[x].type == 'ITEM'){
					Item.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
						else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
						Item.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){console.log('UPDATE ITEM ASSOCIATED REACTION DATA');});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for item '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									item:newModel[0], 
									type:model.type
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'ORDER'){
					Order.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
						else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
						Order.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){console.log('UPDATE ORDER ASSOCIATED REACTION DATA');});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for order '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									order:newModel[0], 
									type:model.type
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'REACTION'){
					Reaction.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
						else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
						Reaction.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){console.log('UPDATE REACTION ASSOCIATED REACTION DATA');});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for reaction '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									reaction:newModel[0], 
									type:model.type
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'TASK'){
					Task.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
						else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
						Task.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){console.log('UPDATE TASK ASSOCIATED REACTION DATA');});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for task '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									task:newModel[0], 
									type:model.type
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'TIME'){
					Time.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
						else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
						Time.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){console.log('UPDATE TIME ASSOCIATED REACTION DATA');});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for time '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									time:newModel[0], 
									type:model.type
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'TRANSACTION'){
					Transaction.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
						else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
						Transaction.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){console.log('UPDATE TRANSACTION ASSOCIATED REACTION DATA');});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for transaction '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									transaction:newModel[0], 
									type:model.type
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'VALIDATION'){
					Validation.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
						else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
						Validation.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){console.log('UPDATE VALIDATION ASSOCIATED REACTION DATA');});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for validation '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									validation:newModel[0], 
									type:model.type
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
			}
		}

		var model = {
			model: 'REACTION',
			//associatedModels: req.param('associatedModels'),
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
					
					reaction.associatedModels = req.param('associatedModels'),
					reaction.user = userModel[0];

					Reaction.publishCreate(reaction);
					mintTokens(reaction);

					//TODO: CREATE VALIDATIONS / ASSOCIATIONS
					//TODO: REFACTOR BASED ON AFTER CREATEASSOCIATION..
						//DATA BASED ON CONNECTION. 
					//createValidation(itemModel);

					updateAssociatedModelsData(reaction);
					//createNotification(itemModel);

					mintTokens(reaction);
					res.json(reaction);

				});
			}
		});

	},

};

