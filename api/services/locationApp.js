//CRE8.LOCATION.ALPHA

module.exports = {

	//IMPORT GOOGLE APP! ( AND OTHER PROVIDERS (FOR HISTORICAL) -- ALLOW PERMISSIONS FOR LOCATION VIA NATIVE CALLS)
		//BUILD IN CONTINGENCY CHECKS AS PLUGIN 
			//PREVENT SPOOFING

	import: { 
		request: require('request'),
		Q: require('q'),
	},

	attributes: {
        
    	//DEPRECIATE
        model: {type: 'string', defaultsTo: 'LOCATION'},
        
        lat:{type: 'string'},
        lng:{type: 'string'},
        creator:{type: 'string'},
        
        data:{type: 'json'},
        dataHash:{type: 'string'},
        hash:{type: 'string'}

    },

	//DATA MODELS ARE CONNECTIONS

	//TEST
	//REDUCE INTO SELF CONECTION W CONTEXT --> INTERNAL FUNCTION MAPPING 
	language: 'Javascript',
	compiler:'V8',

	connections:[
		{
			type:'connection', 
			id:'self', 
			params:{
				//DATA MODEL.
			}	
		}
	],

	get: function(req, res, params){

	},

	create: function(req, res, params){

		var locationModel = {
		
		};
		//JUST SOME DATA.. STRUCTURE IT IN A WAY THE APPS ARE LOOKING FOR.. IE AS A DATA MODEL . . . .
		//EVENT IS AN ALIAS FOR ALL CREATES . . .
		Event.create(eventModel).then(function(model){
			console.log('CREATE EVENT', model);
			Event.publish([model.id], {verb: 'create', data: model});
		});

	},

	get: async function(req) {},

	create: async function (req) {
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
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var model = await Location.create(model);
		Location.publish([location.id], {verb: 'create', data: location});
		//TODO: DIAGRAM MINT FLOW
		locationApp.tokens.create(location);
		return Location.find({hash:model.hash});
	},

	tokens:{
		get:function(model){
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
		create:async function(model){
			var tokens = locationApp.tokens.get(model);
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
		},
	}


};