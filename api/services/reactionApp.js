//CRE8.REACTION.ALPHA
const crypto = require('crypto');

module.exports = {

	connections:[],
	//type CRE8_REACTION
	dataModel:[],
	language: 'Javascript',
	compiler:'V8',

	attributes: {
		//DEPRECIATE
        model: {type: 'string', defaultsTo: 'REACTION'},

        amount: {type: 'string'},
        type: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        data: {type: 'json'},  
    },



	create: async function (req) {

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

		//ASSOCIATED APP DATA.. COUNTS 
		//TODO:: AS ASSOCIATIONS . .
		updateAssociatedModels(reaction);

		console.log('CREATE REACTION', reaction);
		
		//TODO: PROMISIFY
		return reaction

	},





	tokens:{

		get: function(model){

			//json struct for token distribution
			//ASSOCIATIONS ARE KEY

			//TEMP
			//OKAY SO YIKES DEPRECIATE MODEL TYPE OR WE GET THE NASTY DESIGN PATTERN
			//for (x in model.associatedModels){
			//	model.associatedModels[x]
			//}

			//CREATOR, MODEL, MODEL OWNER.. 
			//MODEL
			//TODO: LOOP -- FORMALIZE
			//UNITY WITH tokens --ON MODEL and balances -- factor code
			//TODO: DEFRECIATE TYPE?
			//OWNER OF MODEL -- an association of type owner -- what about connection token logic -- ie we load this guy in -- opiniated 

			//TODO: CREATOR AND RECIEVER AND TYPE
			//TODO: VERBS? VIA AGENTS

			//tokens.push('CRE8+REACTION+CREATE+'+Object.keys(model.amountSet)[x]);
			//tokens.push('CRE8+REACTION+SEND+'+Object.keys(model.amountSet)[x]+'+TO+'+model.to.id);
			
			var tokens = [
				{
					tokenString:'CRE8',
					associatedModels:[
						{type:'MEMBER', id:model.user.id},
						{type:model.associatedModels[0].type, id:model.associatedModels[0].id},
						//{type:model.associatedModels[0].type, id:model.associatedModels[0].id},
					],
					amount:model.amount
				},
				{
					tokenString:'CRE8+REACTION',
					associatedModels:[{type:'MEMBER', id:model.user.id}],
					amount:model.amount
				},
				{
					tokenString:'CRE8+REACTION',
					associatedModels:[{type:'MEMBER', id:model.user.id}],
					amount:model.amount
				},
				{
					tokenString:'CRE8+REACTION+'+model.id, 
					associatedModels:[{type:'MEMBER', id:model.user.id}],
					amount:model.amount
				},
				{
					tokenString:'CRE8+REACTION+'+model.type.toUpperCase(),
					associatedModels:[{type:'MEMBER', id:model.user.id}],
					amount:model.amount

				},
				{
					tokenString:'CRE8+REACTION+'+model.user.username.toUpperCase(),
					associatedModels:[{type:'MEMBER', id:model.user.id}],
					amount:model.amount

				},
				{
					tokenString:'CRE8+REACTION+'+model.user.username.toUpperCase()+'+'+model.type.toUpperCase(),
					associatedModels:[{type:'MEMBER', id:model.user.id}],
					amount:model.amount
				},
			];

			//HASH
			var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
			var prefix = 'CRE8+REACTION';
			var hashString = prefix+'+'+hash;
			tokens.push({
				tokenString:hashString,
				associatedModels:[{type:'MEMBER', id:model.user.id}],
				amount:model.amount
			});

			//PLURALISM HASH
			//GOOP
			for (x in Object.keys(model)){
				var data = model[Object.keys(model)[x]];
				var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(data)).digest('hex');
				var prefix = 'CRE8+REACTION';
				var flatObjString = prefix+'+'+hash;
				tokens.push({
					tokenString:flatObjString,
					associatedModels:[{type:'MEMBER', id:model.user.id}],
					amount:model.amount
				});
			};

			return tokens;
		},

		create: async function(model){
			var tokens = getTokens(model);
			for (x in tokens){
				var tokenModels = await Token.find({string:tokens[x].tokenString});
				if (tokenModels.length == 0){
					var newTokenModel = {
						string:tokens[x].tokenString,
						protocols:[
							'CRE8',
							'REACTION'
						], 
						information:{
							inCirculation:tokens[x].amount, 
							markets:0
						},
						logic:{
							transferrable:true, 
							mint:'CREATE REACTION'
						}
					};
					var newToken = await Token.create(newTokenModel);
					console.log(newToken);
				}
				else{
					tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(tokens[x].amount); 
					var updatedToken = await Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information});
					console.log(updatedToken);
				}
				//TODO: UPDATE BASED ON AGENT
			}

			//TODO: REFACTOR
			//TODO: DEPRECIATE '.USER'
			//TODO: APPRECIATE 'CREATOR / MEMBMER' ASSOCIATION (CONNECTIONS DEFINED IN APP TOO AKA HERE!)
			//UPDATE MULTIPLE AGENTS
			for (x in tokens){
				if (!model.user.balance[tokens[x].tokenString]){model.user.balance[tokens[x].tokenString] = 0}
				model.user.balance[tokens[x].tokenString] = parseInt(model.user.balance[tokens[x].tokenString]) + parseFloat(model.amount);
			}
			User.update({id:model.user.id}, {balance:model.user.balance}).then(function(userModel){});
			updateAssociatedModels(model, tokens);
		}

	}


	
};