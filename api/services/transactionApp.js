//CRE8.TRANSACTION.ALPHA
module.exports = {

	import:{
		Q: require('q'),
	},

	//FACTORME

	//TODO: DEPRECIATE -- to ; from
		//APPRECIATE
		//ASSOCIATION with to, from 

	getTo: function(model){
		var deferred = transactionApp.import.Q.defer();
		User.find({id:model.to}).then(function(userModels){
			if (userModels.length == 0){Project.find({id:model.to}).then(function(projectModels){deferred.resolve(projectModels[0])})}
			else{deferred.resolve(userModels[0])}
		})
		return deferred.promise;
	},

	getFrom:function(model){
		var deferred = transactionApp.import.Q.defer();
		User.find({id:model.from}).then(function(userModels){
			if (userModels.length == 0){Project.find({id:model.from}).then(function(projectModels){deferred.resolve(projectModels[0])})}
			else{deferred.resolve(userModels[0])}
		});
		return deferred.promise;
	},

	//OVERLOAD TOKEN.APP
	tokens:{

		get:function(model){

			//TODO: STANDARDIZE VERBS
			//TODO: MULTI PARTIES GET TOKENS.. TO; FROM
			//CRE8+SEND
			//CRE8+RECIEVE

			var protocolTokens = [

				//goes to both?
				'CRE8', 
				'CRE8+TRANSACTION', 
				'CRE8+TRANSACTION+'+model.id, 

				//goes to 'from'
				'CRE8+TRANSACTION+SEND',
				'CRE8+TRANSACTION+SEND+'+model.id, 
				'CRE8+TRANSACTION+SEND+TO+'+model.to.id,

				//HM
				//goes to 'to'
				'CRE8+TRANSACTION+RECIEVE',
				'CRE8+TRANSACTION+RECIEVE+'+model.id, 
				'CRE8+TRANSACTION+RECIEVE+FROM+'+model.from.id, 

			];

			for (x in Object.keys(model.amountSet)){

				protocolTokens.push('CRE8+TRANSACTION+SEND+'+Object.keys(model.amountSet)[x]);
				protocolTokens.push('CRE8+TRANSACTION+SEND+'+Object.keys(model.amountSet)[x]+'+TO+'+model.to.id);

				protocolTokens.push('CRE8+TRANSACTION+RECIEVE+'+Object.keys(model.amountSet)[x]);
				protocolTokens.push('CRE8+TRANSACTION+RECIEVE+'+Object.keys(model.amountSet)[x]+'+FROM+'+model.to.id);

				if (model.context){
					for (y in model.context.split(',')){
						protocolTokens.push('CRE8+TRANSACTION+'+Object.keys(model.amountSet)[x]+'+'+model.context.split(',')[y].toUpperCase());
						protocolTokens.push('CRE8+TRANSACTION+SEND+'+Object.keys(model.amountSet)[x]+'+'+model.context.split(',')[y].toUpperCase());
						protocolTokens.push('CRE8+TRANSACTION+RECIEVE+'+Object.keys(model.amountSet)[x]+'+'+model.context.split(',')[y].toUpperCase());
					}
				}

			}

			//TODO:... CONTEXT
			//THINK ABOUT ASSOCIATION WRT SELF-ASSOCATION
			if (model.context){
				for (x in model.context.split(',')){
					protocolTokens.push('CRE8+TRANSACTION+'+model.context.split(',')[x].toUpperCase());
					protocolTokens.push('CRE8+TRANSACTION+SEND+'+model.context.split(',')[x].toUpperCase());
					protocolTokens.push('CRE8+TRANSACTION+RECIEVE+'+model.context.split(',')[x].toUpperCase());
				}
			}

			//return based on who recieved the toks?
			//[id,tok]

			return protocolTokens;

		},
		
		create: async function(model){
			var transactionProtocolTokens = transactionApp.tokens.get(model);
			for (x in transactionProtocolTokens){
				var tokenString = transactionProtocolTokens[x]; 
				var tokenModels = await Token.find({string:tokenString});
				if (tokenModels.length == 0){
					var newTokenModel = {
						string:tokenString,
						protocols:['CRE8','TRANSACTION'], 
						information:{inCirculation:model.amount, markets:0},
						logic:{transferrable:true, mint:'CREATE TIME'}
					};
					var newToken = await Token.create(newTokenModel);
					eventApp.create(newToken);
					console.log('TOKEN CREATED', model.string);
					//TO, FROM
					model.user.balance[tokenString] = parseFloat(model.amount);
					var updatedUser = await User.update({id:model.user.id}, {balance:model.user.balance})
				}
				else{

					tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
					var updatedToken = await Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information});
					console.log('TOKEN UPDATED', updatedToken);

					//TO, FROM
					if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
					else{model.user.balance[tokenString] = parseFloat(model.amount);}
					var updatedUser = awaitUser.update({id:model.user.id}, {balance:model.user.balance});

				}

				//UPDATE TRANSACTION MODEL..
				//ATTENTION + REACTION + PROTOCOL + ASSOCIATION + ALL TOKENS IN CONTEXT

				//data.apps.tokens = {
				//}

			}


		},
	}

	
};

//be back soon