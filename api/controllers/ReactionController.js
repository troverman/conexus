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
						//RATING D
						if (model.associatedModels[x].type == 'APP'){
							App.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
								App.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
									console.log('UPDATE');
									res.json(reaction);
								});
							});
						}
						if (model.associatedModels[x].type == 'ACTION'){
							Action.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
								Action.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
									console.log('UPDATE');
									res.json(reaction);
								});
							});
						}
						if (model.associatedModels[x].type == 'ASSOCIATION'){
							Association.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
								Association.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
									console.log('UPDATE');
									res.json(reaction);
								});
							});
						}
						if (model.associatedModels[x].type == 'CONNECTION'){
							Connection.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
								Connection.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
									console.log('UPDATE');
									res.json(reaction);
								});
							});
						}
						if (model.associatedModels[x].type == 'CONTENT'){
							Content.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
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
						if (model.associatedModels[x].type == 'ITEM'){
							Item.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
								Item.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
									console.log('UPDATE');
									res.json(reaction);
								});
								var notificationModel = {
									user: newModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Item '+newModel[0].id,
									info:{user: userModel[0], item:newModel[0], type:model.type},
									priority:50,
								};
								createNotification(model, notificationModel);
							});
						}
						if (model.associatedModels[x].type == 'ORDER'){
							Order.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
								Order.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
									console.log('UPDATE');
									res.json(reaction);
								});
								var notificationModel = {
									user: newModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Order '+newModel[0].id,
									info:{user: userModel[0], order:newModel[0], type:model.type},
									priority:50,
								};
								createNotification(model, notificationModel);
							});
						}
						if (model.associatedModels[x].type == 'REACTION'){
							Reaction.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
								Reaction.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
									console.log('UPDATE');
									res.json(reaction);
								});
								var notificationModel = {
									user: newModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Reaction '+newModel[0].id,
									info:{user: userModel[0], reaction:newModel[0], type:model.type},
									priority:50,
								};
								createNotification(model, notificationModel);
							});
						}
						if (model.associatedModels[x].type == 'TASK'){
							Task.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
								Task.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
									console.log('UPDATE');
									res.json(reaction);
								});
								var notificationModel = {
									user: newModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Task '+newModel[0].id,
									info:{user: userModel[0], task:newModel[0], type:model.type},
									priority:50,
								};
								createNotification(model, notificationModel);
							});
						}
						if (model.associatedModels[x].type == 'TIME'){
							Time.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
								Time.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
									console.log('UPDATE');
									res.json(reaction);
								});
								var notificationModel = {
									user: newModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Task '+newModel[0].id,
									info:{user: userModel[0], time:newModel[0], type:model.type},
									priority:50,
								};
								createNotification(model, notificationModel);
							});
						}
						if (model.associatedModels[x].type == 'TRANSACTION'){
							Transaction.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
								Transaction.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
									console.log('UPDATE');
									res.json(reaction);
								});
								var notificationModel = {
									user: newModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Task '+newModel[0].id,
									info:{user: userModel[0], transaction:newModel[0], type:model.type},
									priority:50,
								};
								createNotification(model, notificationModel);
							});
						}
						if (model.associatedModels[x].type == 'VALIDATION'){
							Validation.find({id:model.associatedModels[x].id}).then(function(newModel){
								if (!newModel[0].data.apps.reactions){newModel[0].reactions = {};}
								if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = model.amount;}
								else if (newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = newModel[0].data.apps.reactions[model.type] + model.amount;}
								Validation.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
									console.log('UPDATE');
									res.json(reaction);
								});
								var notificationModel = {
									user: newModel[0].user,
									type: 'REACTION',
									title: 'New '+model.type,
									content:userModel[0].username+' '+model.type+' Task '+newModel[0].id,
									info:{user: userModel[0], validation:newModel[0], type:model.type},
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

