//CRE8.REACTION
const crypto = require('crypto');

module.exports = {

	create: async function (req, res) {

		//TODO: REFACTOR
		//TOOD: BALANCES AND TOKENS UNITY
		//FOR ALL APPS THAT IMPORT REACTIONS; inclue helpercode
		async function updateAssociatedModels(model){
			var tokens = reactionApp.tokens.get(model);
			for (x in model.associatedModels){
				if (model.associatedModels[x].type == 'APP'){
					var newModel = await App.find({id:model.associatedModels[x].id});
					if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
					if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
					newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
					if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
					for (y in tokens){
						if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
						newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
					}
					var newModel = await App.update({id:newModel[0].id},{data:newModel[0].data});
					App.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					console.log('UPDATE APP ASSOCIATED REACTION DATA');
				}
				if (model.associatedModels[x].type == 'ACTION'){
					var newModel = await Action.find({id:model.associatedModels[x].id});
					if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
					if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
					newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
					if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
					for (y in tokens){
						if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
						newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
					}
					var newModel = await Action.update({id:newModel[0].id},{data:newModel[0].data});
					Action.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					console.log('UPDATE ACTION ASSOCIATED REACTION DATA');
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
					notificationApp.create.reaction(notificationModel);
				}
				if (model.associatedModels[x].type == 'ASSOCIATION'){
					var newModel = await Association.find({id:model.associatedModels[x].id});

					if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
					if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
					newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
					if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
					for (y in tokens){
						if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
						newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
					}

					var newModel = await Association.update({id:newModel[0].id},{data:newModel[0].data});
					Association.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					console.log('UPDATE ASSOCIATION ASSOCIATED REACTION DATA');
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
					notificationApp.create.reaction(notificationModel);
				}
				if (model.associatedModels[x].type == 'CONNECTION'){
					var newModel = await Connection.find({id:model.associatedModels[x].id});
					if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
					if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
					newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
					if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
					for (y in tokens){
						if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
						newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
					}
					var newModel = await Connection.update({id:newModel[0].id},{data:newModel[0].data});
					Connection.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					console.log('UPDATE CONNECTION ASSOCIATED REACTION DATA');		
				}
				if (model.associatedModels[x].type == 'CONTENT'){
					var newModel = await Content.find({id:model.associatedModels[x].id});

					//REACTION
					if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
					if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
					newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);

					//TOKENS
					if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
					for (y in tokens){
						if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
						newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
					}

					var newModel = await Content.update({id:newModel[0].id}, {data:newModel[0].data});
					console.log('UPDATE CONTENT ASSOCIATED REACTION DATA');
					Content.publish([newModel[0].id], {verb:'update', data: newModel[0]});

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
					notificationApp.create.reaction(notificationModel);
				}
				if (model.associatedModels[x].type == 'ITEM'){
					var newModel = await Item.find({id:model.associatedModels[x].id});
					if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
					if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
					newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
					if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
					for (y in tokens){
						if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
						newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
					}
					var newModel = await Item.update({id:newModel[0].id},{data:newModel[0].data});
					Item.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					console.log('UPDATE ITEM ASSOCIATED REACTION DATA');
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
					notificationApp.create.reaction(notificationModel);
				}
				if (model.associatedModels[x].type == 'ORDER'){
					var newModel = await Order.find({id:model.associatedModels[x].id});
					if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
					if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
					newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
					if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
					for (y in tokens){
						if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
						newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
					}
					var newModel = await Order.update({id:newModel[0].id},{data:newModel[0].data});
					Order.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					console.log('UPDATE ORDER ASSOCIATED REACTION DATA');
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
					notificationApp.create.reaction(notificationModel);
				}
				if (model.associatedModels[x].type == 'REACTION'){
					var newModel = await Reaction.find({id:model.associatedModels[x].id});
					if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
					if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
					newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
					if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
					for (y in tokens){
						if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
						newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
					}
					var newModel = await Reaction.update({id:newModel[0].id},{data:newModel[0].data});
					Reaction.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					console.log('UPDATE REACTION ASSOCIATED REACTION DATA');
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
					notificationApp.create.reaction(notificationModel);
				}
				if (model.associatedModels[x].type == 'TASK'){
					var newModel = await Task.find({id:model.associatedModels[x].id});
					if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
					if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
					newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
					if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
					for (y in tokens){
						if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
						newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
					}
					var newModel = await Task.update({id:newModel[0].id},{data:newModel[0].data});
					Task.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					console.log('UPDATE TASK ASSOCIATED REACTION DATA');
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
					notificationApp.create.reaction(notificationModel);
				}
				if (model.associatedModels[x].type == 'TIME'){
					var newModel = await Time.find({id:model.associatedModels[x].id});
					if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
					if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
					newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
					if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
					for (y in tokens){
						if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
						newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
					}
					var newModel = await Time.update({id:newModel[0].id},{data:newModel[0].data});
					Time.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					console.log('UPDATE TIME ASSOCIATED REACTION DATA');
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
					notificationApp.create.reaction(notificationModel);
				}
				if (model.associatedModels[x].type == 'TRANSACTION'){
					var newModel = await Transaction.find({id:model.associatedModels[x].id});
					if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
					if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
					newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
					if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
					for (y in tokens){
						if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
						newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
					}
					var newModel = await Transaction.update({id:newModel[0].id},{data:newModel[0].data});
					Transaction.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					console.log('UPDATE TRANSACTION ASSOCIATED REACTION DATA');
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
					notificationApp.create.reaction(notificationModel);
				}
				if (model.associatedModels[x].type == 'VALIDATION'){
					var newModel = await Validation.find({id:model.associatedModels[x].id});
					if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
					if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
					newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
					if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
					for (y in tokens){
						if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
						newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
					}
					var newModel = await Validation.update({id:newModel[0].id},{data:newModel[0].data});
					Validation.publish([newModel[0].id], {verb:'update', data: newModel[0]});
					console.log('UPDATE VALIDATION ASSOCIATED REACTION DATA');
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
					notificationApp.create.reaction(notificationModel);
				}
			}
		};

		var model = {
			model: 'REACTION',
			amount: req.param('amount'),
			type: req.param('type'),
			user: req.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};

		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		var model = await Reaction.create(model);

		var userModel = await User.find({id:model.user});
			
		reaction.associatedModels = req.param('associatedModels');
		reaction.user = userModel[0];
		
		Reaction.publish([reaction.id], {verb:'create', data: reaction});

		reactionApp.tokens.create(reaction);

		updateAssociatedModels(reaction);

		console.log('CREATE REACTION', reaction);
		res.json(reaction);

	},
};

//CRE8.REACTION
//module.exports = {
//	get: async function(req, res) {
//		var model = await reactionApp.get(req); 
//		res.json(model);
//	},
//	update: async function (req, res) {
//		var newModel = await reactionApp.create(req);
//		res.json(newModel);
//	}
//};
