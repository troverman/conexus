module.exports = {

	get: function(req, res) {

		//parse Query
		var query = {};
		Location.find({}).then(function(locationModels){
			res.json(locationModels);
		});

	},

	create: function (req, res) {

		const crypto = require('crypto');

		//NEED LISTENERS
		function mintTokens(model){

			var protocolTokens = getProtocolTokens(model);

			for (x in protocolTokens){
				var tokenString = timeProtocolTokens[x];
				(function(tokenString) {
					Token.find({string:tokenString}).then(function(tokenModels){
						if (tokenModels.length == 0){
							var newTokenModel = {
								string:tokenString,

								protocols:['CRE8','LOCATION'], 
								information:{inCirculation:model.amount, markets:0},
								logic:{transferrable:true, mint:'CREATE LOCATION'},

								data:[],
								hash:''
							};
							Token.create(newTokenModel).then(function(model){console.log('TOKEN CREATED', model);});
							model.user.balance[tokenString] = parseFloat(model.amount);
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){
								console.log('USER BALANCE UPDATED', user);
							});
						}
						else{
							tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
							Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(model){console.log('TOKEN UPDATED', model)});
							if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
							else{model.user.balance[tokenString] = parseFloat(model.amount);}
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){
								console.log('USER BALANCE UPDATED', user);
							});
						}
					});
				})(tokenString);
			}

		};

		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+LOCATION'];

			//DATA TO STRING INTREPRETER
			for (x in Object.keys(model)){
				var dataType = Object.keys(model)[x].toUpperCase();
				var data = model[Object.keys(model)[x]];
				var prefix = 'CRE8+LOCATION';
				var string = prefix+'+'+dataType+'+'+data;
				protocolTokens.push(string);
			}

			//var protocolTokenModels = [];
			//for (x in protocolTokens){
			//	var tokenModel = {
			//		string:protocolTokens[x],
			//	};
			//	protocolTokenModels.push()
			//}

			return protocolTokens;
		};

		var model = {
			lat: req.param('lat'),
			lng: req.param('lng'),
			creator: req.param('creator'),
			data: req.param('data'),
		};

		model.data.apps = {
			reactions: {plus:0,minus:0},
			attention: {general:0}
		};

		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		console.log('CREATE LOCATION', model);

		Location.create(model)
		.exec(function(err, location) {
			if (err) {return console.log(err);}
			else {
				Location.publishCreate(location);

				mintTokens(location);

				res.json(location);
			}
		});

	},
	
};