//CRE8.TASK.ALPHA
module.exports = {
	tokens:{
		get: function(model){
			var protocolTokens = [
				'CRE8', 
				'CRE8+TASK', 
				'CRE8+TASK+'+model.id
				//context
			];
			return protocolTokens;
		},
		create:async function(model){
			var tokens = validationApp.tokens.get(model);
			for (x in tokens){
				var tokenString = tokens[x]; 
				var tokenModels = await Token.find({string:tokenString});
				if (tokenModels.length == 0){
					var newTokenModel = {
						string:tokenString,
						protocols:['CRE8','TRANSACTION'], 
						information:{
							inCirculation:model.amount, 
							markets:0
						},
						logic:{
							transferrable:true, 
							mint:'CREATE TIME'
						}
					};
					var newToken = await Token.create(newTokenModel);
					console.log('TOKEN CREATED', newToken.string);

					model.user.balance[tokenString] = parseFloat(model.amount);
					var updatedUser = await User.update({id:model.user.id}, {balance:model.user.balance});
					console.log('UPDATED USER', updatedUser);
				}
				else{

					tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
					var updatedToken = await Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information});
					console.log('TOKEN UPDATED', updatedToken);

					if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
					else{model.user.balance[tokenString] = parseFloat(model.amount);}

					var updatedUser = await User.update({id:model.user.id}, {balance:model.user.balance});
					console.log('UPDATED USER', updatedUser);

				}
			}

		}
	}
};