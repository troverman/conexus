//CRE8.LOCATION.ALPHA
var App = {

	//IMPORT GOOGLE APP! ( AND OTHER PROVIDERS (FOR HISTORICAL) -- ALLOW PERMISSIONS FOR LOCATION VIA NATIVE CALLS)
		//BUILD IN CONTINGENCY CHECKS AS PLUGIN 
			//PREVENT SPOOFING

	//DATA MODELS ARE CONNECTIONS
	//TEST
	//REDUCE INTO SELF CONECTION W CONTEXT --> INTERNAL FUNCTION MAPPING 
	'CONNECTION+CRYPTO': require('crypto'),
	'CONNECTION+SELF+ATTRIBUTES': {
    	//DEPRECIATE
        model: {type: 'string', defaultsTo: 'LOCATION'},
        lat:{type: 'string'},
        lng:{type: 'string'},
        creator:{type: 'string'},
        data:{type: 'json'},
        dataHash:{type: 'string'},
        hash:{type: 'string'}
    },
	'ASSOCIATION+SELF+LANGUAGE': 'Javascript',
	'ASSOCIATION+SELF+RUNTIME':'V8',
	
	'DB': function(){return global['Location']},
	'GET': async function(req) {},
	'CREATE': async function (req) {
		var model = {
			lat: req.param('lat'),
			lng: req.param('lng'),
			creator: req.param('creator'),
			data: req.param('data'),
		};
		model.data.apps = {
			reactions:{plus:0,minus:0},
			attention:{general:0}
		};
		model.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var model = await  App['DB']().create(model);
		 App['DB']().publish([location.id], {verb: 'create', data: location});
		//TODO: DIAGRAM MINT FLOW
		App['TOKENS+CREATE'](location);
		return App['DB']().find({hash:model.hash});
	},
	'TOKENS+GET': function(model){
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
	},
	'TOKENS+CREATE': async function(model){
		var tokens = App.tokens.get(model);
		for (x in tokens){
			var tokenString = tokens[x];
			var tokenModels = await Token.find({string:tokenString});
			if (tokenModels.length == 0){
				var newTokenModel = {
					string:tokenString,
					protocols:['CRE8','LOCATION'], 
					information:{inCirculation:model.amount, markets:0},
					logic:{transferrable:true, mint:'CREATE LOCATION'},
					data:[],
					hash:''
				};
				await Token.create(newTokenModel);
				model.user.balance[tokenString] = parseFloat(model.amount);
				await User.update({id:model.user.id}, {balance:model.user.balance});
			}
			else{
				tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
				await Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information});
				if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
				else{model.user.balance[tokenString] = parseFloat(model.amount);}
				await User.update({id:model.user.id}, {balance:model.user.balance});
			}
		}
	}
};
module.exports = App;