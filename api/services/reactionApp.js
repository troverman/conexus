//CRE8.REACTION.ALPHA
module.exports = {

	connections:[],
	//type CRE8_REACTION
	dataModel:[],
	language: 'Javascript',
	compiler:'V8',
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