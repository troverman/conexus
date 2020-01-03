//CRE8.PRIVACYTOKEN.ALPHA

module.exports = {

	
	interval: async function(){

		async function getTimeAmount(model){

			//GET TIME CREATED SINCE LAST EPOCH IE DAY
			model.epoch = 86400;
			//var time = new Date('2018-08-24T14:56:21.774Z').getTime() - 86400;
			var time = new Date();
			time.setDate(date.getDate() - 1);
			var query = {
				user:model.user,
				createdAt: {'<=': time}
	        };
			var timeModels = await Time.find(query);
			var sumOfTime = timeModels.reduce(function(a, b){return a + b[amount]}, 0);
			return sumOfTime;

		};

		//GET PRIVACY TOKEN ASSOCIATED MEMBERS
		var tokenSum = 0;
		//USERS WHO ARE ASSOCIATED WITH APP IN PEER BUILD
			//EVERY APP HAS THE RECURSIVE DEPENDENCIES IE CONSENSUS . . . FLL STACK / SCALE
		var userModels = await User.find();

		for (x in userModels){
			if(!userModels[x].balance){userModels[x].balance = {}}
			if(!userModels[x].balance['PRIVACY']){userModels[x].balance['PRIVACY'] = 0}
	
			var time = getTimeAmount(userModels[x]);

			//not done
			userModels[x].balance['PRIVACY'] = userModels[x].balance['PRIVACY'] + (86400 - getTimeAmount(model));
			tokenSum+=userModels[x].balance['PRIVACY'];
			var userModel = await User.update({id:userModels[x].id}, {balance: userModels[x].balance});
			console.log('UPDATED', userModel[0].username, userModel[0].balance['PRIVACY']);

		}
		var tokenModels = await Token.find({string:'PRIVACY'});
		if (!tokenModels[0].information.inCirculation){tokenModels[0].information.inCirculation = 0;}
		tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseInt(tokenSum);
		var tokenModel = await Token.update({id:tokenModels[0].id}, tokenModels[0]);
		console.log('UPDATED', tokenModel);	

	},

	
};