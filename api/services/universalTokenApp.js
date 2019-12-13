//CRE8.UNIVERSALTOKEN.ALPHA

module.exports = {


	//DAILY RUN
	//DOCUMENT NICELY.
	//MAKE APP LIKE
	interval: async function(){
		var userModels = await User.find();
		for (x in userModels){
			if(!userModels[x].balance){userModels[x].balance = {}}
			if(!userModels[x].balance['UNIVERSAL']){userModels[x].balance['UNIVERSAL'] = 0}
			userModels[x].balance['UNIVERSAL'] = userModels[x].balance['UNIVERSAL'] + 1;
			var updatedUser = await User.update({id:userModels[x].id}, {balance: userModels[x].balance});
		}
		var tokenModels = await Token.find({string:'UNIVERSAL'});
		if (!tokenModels[0].information.inCirculation){tokenModels[0].information.inCirculation = 0;}
		tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseInt(userModels.length);
		var updatedToken = await Token.update({id:tokenModels[0].id}, tokenModels[0]);
	},

	
};