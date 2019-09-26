//CRE8.REACTION
const crypto = require('crypto');

module.exports = {

	get: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		console.log('GET REACTION', req.query);

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
				Notification.publish([model.id], {verb: 'create', data: model});
			});
		};

		//ASYNC
		function mintTokens(model){

			var protocolTokens = getProtocolTokens(model);

			for (x in protocolTokens){

				var tokenString = protocolTokens[x];

				//CREATE AND UPDATE TOKEN STRUCT
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
						}
						else{
							tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
							Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(model){console.log('TOKEN UPDATED', model[0].string)});
						}
					});
				})(tokenString);

				//UPDATE CREATOR (USER) BALANCE MAPPING.
				//TODO: A SET
				if (!model.user.balance[tokenString]){model.user.balance[tokenString] = 0}
				model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);
	
			}

			User.update({id:model.user.id}, {balance:model.user.balance}).then(function(userModel){});

			updateAssociatedModels(model, protocolTokens);

		};

		//FACTOR TO RETURN ENTIER TOKEN MODEL
		//CONDIFY AMOUNT
		function getProtocolTokens(model){

			//WHO ARE THE AGENTS GETTING TOKENS?
			//CREATOR
				//ALL DATA MODELS GET THE HISTORY ON THE APP DATA

				//CREATOR
					//MODEL CREATOR (RECIEVOR)
						//MODEL

			//TODO: CREATOR AND RECIEVER AND TYPE
			var protocolTokens = [
				'CRE8', 
				'CRE8+REACTION', 
				'CRE8+REACTION+'+model.id, 
				'CRE8+REACTION+'+model.type.toUpperCase(),
				'CRE8+REACTION+'+model.user.username.toUpperCase(),
				'CRE8+REACTION+'+model.user.username.toUpperCase()+'+'+model.type.toUpperCase(),
			];

			//protocolTokens.push('CRE8+REACTION+CREATE+'+Object.keys(model.amountSet)[x]);
			//protocolTokens.push('CRE8+REACTION+SEND+'+Object.keys(model.amountSet)[x]+'+TO+'+model.to.id);

			return protocolTokens;

		};

		//REMIX
		function updateAssociatedModels(model, protocolTokens){
			for (x in model.associatedModels){
				if (model.associatedModels[x].type == 'APP'){
					App.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						App.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
							App.publish([newModel[0].id], {verb:'update', data: newModel[0]});
							console.log('UPDATE APP ASSOCIATED REACTION DATA');
						});
					});
				}
				if (model.associatedModels[x].type == 'ACTION'){
					Action.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						Action.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
							Action.publish([newModel[0].id], {verb:'update', data: newModel[0]});
							console.log('UPDATE ACTION ASSOCIATED REACTION DATA');
						});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for action '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									action:newModel[0], 
									reaction:{id:model.id, type:model.type},
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'ASSOCIATION'){
					Association.find({id:model.associatedModels[x].id}).then(function(newModel){

						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}

						Association.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
							Association.publish([newModel[0].id], {verb:'update', data: newModel[0]});
							console.log('UPDATE ASSOCIATION ASSOCIATED REACTION DATA');
						});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for association '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									association:newModel[0], 
									reaction:{id:model.id, type:model.type},
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'CONNECTION'){
					Connection.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						Connection.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
							Connection.publish([newModel[0].id], {verb:'update', data: newModel[0]});
							console.log('UPDATE CONNECTION ASSOCIATED REACTION DATA');
						});
					});
				}
				if (model.associatedModels[x].type == 'CONTENT'){
					Content.find({id:model.associatedModels[x].id}).then(function(newModel){

						//REACTION
						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);

						//TOKENS
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}

						Content.update({id:newModel[0].id}, {data:newModel[0].data}).then(function(newModel){
							console.log('UPDATE CONTENT ASSOCIATED REACTION DATA');
							Content.publish([newModel[0].id], {verb:'update', data: newModel[0]});
						});

						//NOTIFICATION.. ASSOCIATED MODEL
						//AUDIT NOTIFICATION MODEL STRUCT
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for content '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									content:newModel[0], 
									reaction:{id:model.id, type:model.type},
								}
							},
							priority:50,
						};
						createNotification(notificationModel);

					});
				}
				if (model.associatedModels[x].type == 'ITEM'){
					Item.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						Item.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
							Item.publish([newModel[0].id], {verb:'update', data: newModel[0]});
							console.log('UPDATE ITEM ASSOCIATED REACTION DATA');
						});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for item '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									item:newModel[0], 
									reaction:{id:model.id, type:model.type},
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'ORDER'){
					Order.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						Order.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
							Order.publish([newModel[0].id], {verb:'update', data: newModel[0]});
							console.log('UPDATE ORDER ASSOCIATED REACTION DATA');
						});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for order '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									order:newModel[0], 
									reaction:{id:model.id, type:model.type},
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'REACTION'){
					Reaction.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						Reaction.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
							Reaction.publish([newModel[0].id], {verb:'update', data: newModel[0]});
							console.log('UPDATE REACTION ASSOCIATED REACTION DATA');
						});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for reaction '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									reaction:newModel[0], 
									reaction:{id:model.id, type:model.type},
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'TASK'){
					Task.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						Task.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
							Task.publish([newModel[0].id], {verb:'update', data: newModel[0]});
							console.log('UPDATE TASK ASSOCIATED REACTION DATA');
						});

						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for task '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									task:newModel[0], 
									reaction:{id:model.id, type:model.type},
								}
							},
							priority:50,
						};
						createNotification(notificationModel);

					});
				}
				if (model.associatedModels[x].type == 'TIME'){
					Time.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						Time.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
							Time.publish([newModel[0].id], {verb:'update', data: newModel[0]});
							console.log('UPDATE TIME ASSOCIATED REACTION DATA');
						});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for time '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									time:newModel[0], 
									reaction:{id:model.id, type:model.type},
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'TRANSACTION'){
					Transaction.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						Transaction.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
							Transaction.publish([newModel[0].id], {verb:'update', data: newModel[0]});
							console.log('UPDATE TRANSACTION ASSOCIATED REACTION DATA');
						});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for transaction '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									transaction:newModel[0], 
									reaction:{id:model.id, type:model.type},
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
				if (model.associatedModels[x].type == 'VALIDATION'){
					Validation.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
						}
						Validation.update({id:newModel[0].id},{data:newModel[0].data}).then(function(){
							Validation.publish([newModel[0].id], {verb:'update', data: newModel[0]});
							console.log('UPDATE VALIDATION ASSOCIATED REACTION DATA');
						});
						var notificationModel = {
							user: newModel[0].user,
							type: 'REACTION',
							title: 'New '+model.type,
							content:model.user.username+' created a '+model.type+' reaction for validation '+newModel[0].id,
							data:{
								apps:{
									user:model.user, 
									validation:newModel[0], 
									reaction:{id:model.id, type:model.type},
								}
							},
							priority:50,
						};
						createNotification(notificationModel);
					});
				}
			}
		};

		var model = {
			model: 'REACTION',
			//associatedModels: req.param('associatedModels'),
			amount: req.param('amount'),
			type: req.param('type'),
			user: req.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		//TODO UPDATE COUNT IN DATA.APPS.REACTION

		Reaction.create(model)
		.exec(function(err, reaction) {
			if (err) {return console.log(err);}
			else {

				console.log('CREATE REACTION', reaction);

				User.find({id:model.user}).then(function(userModel){
					
					reaction.associatedModels = req.param('associatedModels'),
					reaction.user = userModel[0];
					
					Reaction.publish([reaction.id], {verb:'create', data: reaction});
					
					mintTokens(reaction);

					//TODO: CREATE VALIDATIONS / ASSOCIATIONS
					//TODO: REFACTOR BASED ON AFTER CREATEASSOCIATION..
						//DATA BASED ON CONNECTION. 
					//createValidation(itemModel);
					//createNotification(itemModel);

					mintTokens(reaction);
					res.json(reaction);

				});
			}
		});

	},

};

