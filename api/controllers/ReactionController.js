//CRE8.REACTION
const crypto = require('crypto');

module.exports = {

	//HYBRID UPGRADE
	//DATA MODEL HERE
	dataModels: [
        {
            title: 'Reaction',
            attributes: {
		        model: {type: 'string', defaultsTo: 'REACTION'},
		        amount: {type: 'string'},
		        type: {type: 'string'},
		        user: {model: 'user'},
		        associatedModels: {type: 'json'},
		        data: {type: 'json'},  
		    },
        }
    ],

    //DEFINE PERMISSIONS (AND (2nd order-self connection) MODEL)
    //DEFAULT CONNECTIONS HERE/ INIT
    connections:[
        {id:1, title:'APP META CONNECTION', type:'CONNECTION'},
        {id:2, title:'APP SELF CONNECTION', type:'SELF'},
        {id:3, title:'APP APP CONNECTION', type:'APP'},
        {id:4, title:'APP MEMBER', type:'MEMBER'},
    ],

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

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
			for (x in protocolTokens){
				//CREATE AND UPDATE TOKEN STRUCT
				(function(protocolTokens, x) {
					Token.find({string:tokenString[x].tokenString}).then(function(tokenModels){
						if (tokenModels.length == 0){
							var newTokenModel = {
								string:protocolTokens[x].tokenString,
								protocols:[
									'CRE8',
									'REACTION'
								], 
								information:{
									inCirculation:protocolTokens[x].amount, 
									markets:0
								},
								logic:{
									transferrable:true, 
									mint:'CREATE REACTION'
								}
							};
							Token.create(newTokenModel).then(function(model){
								console.log('TOKEN CREATED', model.string);
							});
						}
						else{
							tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(protocolTokens[x].amount); 
							Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(model){
								console.log('TOKENS IN CIRCULATION UPDATED:', model[0].string)
							});
						}
					});
				})(protocolTokens, x);

				//TODO: UPDATE BASED ON AGENT

			}

			//TODO: REFACTOR
			//TODO: DEPRECIATE '.USER'
			//TODO: APPRECIATE 'CREATOR / MEMBMER' ASSOCIATION (CONNECTIONS DEFINED IN APP TOO AKA HERE!)
			//UPDATE MULTIPLE AGENTS
			for (x in protocolTokens){
				if (!model.user.balance[protocolTokens[x].tokenString]){model.user.balance[protocolTokens[x].tokenString] = 0}
				model.user.balance[protocolTokens[x].tokenString] = parseInt(model.user.balance[protocolTokens[x].tokenString]) + parseFloat(model.amount);
			}
			User.update({id:model.user.id}, {balance:model.user.balance}).then(function(userModel){});
			updateAssociatedModels(model, protocolTokens);

		};

		function getProtocolTokens(model){

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

			//protocolTokens.push('CRE8+REACTION+CREATE+'+Object.keys(model.amountSet)[x]);
			//protocolTokens.push('CRE8+REACTION+SEND+'+Object.keys(model.amountSet)[x]+'+TO+'+model.to.id);
			
			var protocolTokens = [
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
			protocolTokens.push({
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
				protocolTokens.push({
					tokenString:flatObjString,
					associatedModels:[{type:'MEMBER', id:model.user.id}],
					amount:model.amount
				});
			};

			return protocolTokens;
		};

		//TODO: REFACTOR
		//TOOD: BALANCES AND TOKENS UNITY
		//FOR ALL APPS THAT IMPORT REACTIONS; inclue helpercode
		function updateAssociatedModels(model, protocolTokens){
			for (x in model.associatedModels){
				if (model.associatedModels[x].type == 'APP'){
					App.find({id:model.associatedModels[x].id}).then(function(newModel){
						if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
						if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
						newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);
						if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
						for (y in protocolTokens){
							if (!newModel[0].data.apps.tokens[protocolTokens[y].tokenString]){newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y].tokenString]) + parseInt(model.amount);
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
							if (!newModel[0].data.apps.tokens[protocolTokens[y].tokenString]){newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y].tokenString]) + parseInt(model.amount);
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
							if (!newModel[0].data.apps.tokens[protocolTokens[y].tokenString]){newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y].tokenString]) + parseInt(model.amount);
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
							if (!newModel[0].data.apps.tokens[protocolTokens[y].tokenString]){newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y].tokenString]) + parseInt(model.amount);
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
							if (!newModel[0].data.apps.tokens[protocolTokens[y].tokenString]){newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y].tokenString]) + parseInt(model.amount);
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
							if (!newModel[0].data.apps.tokens[protocolTokens[y].tokenString]){newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y].tokenString]) + parseInt(model.amount);
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
							if (!newModel[0].data.apps.tokens[protocolTokens[y].tokenString]){newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y].tokenString]) + parseInt(model.amount);
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
							if (!newModel[0].data.apps.tokens[protocolTokens[y].tokenString]){newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y].tokenString]) + parseInt(model.amount);
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
							if (!newModel[0].data.apps.tokens[protocolTokens[y].tokenString]){newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y].tokenString]) + parseInt(model.amount);
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
							if (!newModel[0].data.apps.tokens[protocolTokens[y].tokenString]){newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y].tokenString]) + parseInt(model.amount);
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
							if (!newModel[0].data.apps.tokens[protocolTokens[y].tokenString]){newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y].tokenString]) + parseInt(model.amount);
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
							if (!newModel[0].data.apps.tokens[protocolTokens[y].tokenString]){newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = 0;}
							newModel[0].data.apps.tokens[protocolTokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y].tokenString]) + parseInt(model.amount);
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
			amount: req.param('amount'),
			type: req.param('type'),
			user: req.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		Reaction.create(model)
		.exec(function(err, reaction) {
			if (err) {return console.log(err);}
			else {


				//TODO: AGNOSTIC DATA / APP
				User.find({id:model.user}).then(function(userModel){
					
					reaction.associatedModels = req.param('associatedModels'),
					reaction.user = userModel[0];
					Reaction.publish([reaction.id], {verb:'create', data: reaction});
					mintTokens(reaction);

					//TODO: CREATE VALIDATIONS / ASSOCIATIONS
					//TODO: REFACTOR BASED ON AFTER CREATEASSOCIATION..
						//DATA BASED ON CONNECTION. 

					//TOKEN PROTOCLS IN ASSOCIATION...
					//createValidation(itemModel);

					console.log('CREATE REACTION', reaction);
					res.json(reaction);

				});
			}
		});

	},

};

