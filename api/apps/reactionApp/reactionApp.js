//CRE8.REACTION.ALPHA
var App = {
	'CONNECTION+CRYPTO':  require('crypto'),
	'CONNECTION+SELF+ATTRIBUTES': {
        model: {type: 'string', defaultsTo: 'REACTION'},
        amount: {type: 'string'},
        type: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        data: {type: 'json'},  
    },
	'ASSOCIATION+SELF+LANGUAGE': 'Javascript',
	'ASSOCIATION+SELF+RUNTIME':'NODE::V8',
	'DB': function(){return global['Reaction']},
	'CREATE': async function (input) {
		var model = {
			model: 'REACTION',
			amount: input.param('amount'),
			type: input.param('type'),
			user: input.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var newReaction = await Reaction.create(model);
		var userModel = await User.find({id:model.user});
		newReaction.associatedModels = input.param('associatedModels');
		newReaction.user = userModel[0];
		Reaction.publish([newReaction.id], {verb:'create', data: newReaction});
		App['TOKENS+CREATE'](newReaction);
		//TODO:: AS ASSOCIATIONS . . THINK ABOUT COMMPOUNT NOTIFICATION ASSOC :)
		App['UPDATE+ASSOCIATEDMODELS'](newReaction);
		return Reaction.find({hash:model.hash});

	},
	'UPDATE+ASSOCIATEDMODELS': async function(model){
		for (x in model.associatedModels){

			//FOR REDUCTION :: DEPRECIATE TO APP .. AND DYNAMIC APP CONNECTION.. WRITE CONNECTION+REACTION + CREATE FXN
			//var gobalString = model.associatedModels[x].type.toLowerCase();
			//var globalModel = global[gobalString]
			//THINK: ASSOCIATION NBD .. 
			var globalAppId = model.associatedModels[x].type.toLowerCase() +'App';
			var abstractDataModel = global[globalAppId]['DB']();
			var newModel = await abstractDataModel.find({id:model.associatedModels[x].id});
			//REACTION
			if (!newModel[0].data.apps.reactions){newModel[0].data.apps.reactions = {};}
			if (!newModel[0].data.apps.reactions[model.type]){newModel[0].data.apps.reactions[model.type] = 0;}
			newModel[0].data.apps.reactions[model.type] = parseInt(newModel[0].data.apps.reactions[model.type]) + parseInt(model.amount);

			//TOKENS
			var tokens = App['TOKENS+GET'](model);
			if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
			for (y in tokens){
				if (!newModel[0].data.apps.tokens[tokens[y].tokenString]){newModel[0].data.apps.tokens[tokens[y].tokenString] = 0;}
				newModel[0].data.apps.tokens[tokens[y].tokenString] = parseInt(newModel[0].data.apps.tokens[tokens[y].tokenString]) + parseInt(model.amount);
			}
			var newModel = await abstractDataModel.update({id:newModel[0].id}, {data:newModel[0].data});
			
			await abstractDataModel.publish([newModel[0].id], {verb:'update', data: newModel[0]});

			//NOTIFICATION.. ASSOCIATED MODEL
			//AUDIT NOTIFICATION MODEL STRUCT
			var notificationModel = {
				user: newModel[0].user,
				type: 'REACTION',
				title: 'New '+model.type,
				content:model.user.username+' created a '+model.type+' reaction for '+ model.associatedModels[x].type.toLowerCase() + ' ' + newModel[0].id,
				priority:50,
				data: {apps:{user:model.user, reaction:{id:model.id, type:model.type}}},
			};
			notificationModel.data.apps[model.associatedModels[x].type.toLowerCase()] = newModel[0]
			await notificationApp['CREATE+REACTION'](notificationModel);

		}
	},
	'TOKENS+GET':function(model){
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
			{tokenString:'CRE8', associatedModels:[{type:'MEMBER', id:model.user.id}, {type:model.associatedModels[0].type, id:model.associatedModels[0].id}], amount:model.amount},
			{tokenString:'CRE8+REACTION', associatedModels:[{type:'MEMBER', id:model.user.id}], amount:model.amount},
			{tokenString:'CRE8+REACTION', associatedModels:[{type:'MEMBER', id:model.user.id}], amount:model.amount},
			{tokenString:'CRE8+REACTION+'+model.id, associatedModels:[{type:'MEMBER', id:model.user.id}], amount:model.amount},
			{tokenString:'CRE8+REACTION+'+model.type.toUpperCase(), associatedModels:[{type:'MEMBER', id:model.user.id}], amount:model.amount},
			{tokenString:'CRE8+REACTION+'+model.user.username.toUpperCase(), associatedModels:[{type:'MEMBER', id:model.user.id}], amount:model.amount},
			{tokenString:'CRE8+REACTION+'+model.user.username.toUpperCase()+'+'+model.type.toUpperCase(), associatedModels:[{type:'MEMBER', id:model.user.id}], amount:model.amount},
		];

		//HASH
		var hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var prefix = 'CRE8+REACTION';
		var hashString = prefix+'+'+hash;
		tokens.push({tokenString:hashString, associatedModels:[{type:'MEMBER', id:model.user.id}], amount:model.amount});

		//PLURALISM HASH
		//GOOP
		for (x in Object.keys(model)){
			var data = model[Object.keys(model)[x]];
			var hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(data)).digest('hex');
			var prefix = 'CRE8+REACTION';
			var flatObjString = prefix+'+'+hash;
			tokens.push({tokenString:flatObjString, associatedModels:[{type:'MEMBER', id:model.user.id}], amount:model.amount});
		};

		return tokens;
	},
	'TOKENS+CREATE': async function(model){
		var tokens = App['TOKENS+GET'](model);
		for (x in tokens){
			var tokenModels = await Token.find({string:tokens[x].tokenString});
			if (tokenModels.length == 0){
				var newTokenModel = {
					string:tokens[x].tokenString,
					protocols:['CRE8', 'REACTION'], 
					information:{inCirculation:tokens[x].amount, markets:0},
					logic:{transferrable:true, mint:'CREATE REACTION'}
				};
				var newToken = await Token.create(newTokenModel);
			}
			else{
				tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(tokens[x].amount); 
				var updatedToken = await Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information});
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
		await User.update({id:model.user.id}, {balance:model.user.balance});
		
		//HMMMMM
		App['UPDATE+ASSOCIATEDMODELS'](model, tokens);
	},
};
module.exports = App;