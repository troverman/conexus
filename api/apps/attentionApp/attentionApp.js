//CRE8.ATTENTION.ALPHA
var App = {
	//hash, truth, coordinates:, title:, description:, connections ~, machieneAttention . . . 
	//infunction descripe as self.title = ///
		//self.attention = {type, context}
	'CONNECTION+SELF+ATTRIBUTES': {
    	//DEPRECIATE
        model: {type: 'string', defaultsTo: 'ATTENTION'},
		//associated App.. PEER MINING APP INPUT.. 
		app: {type: 'string'}, //HUMAN, MACHIENE, type: {type: 'string'},
		string: {type: 'string'},
        data: {type: 'json'},
        associatedModels: {type: 'json'},
        creator: {model: 'user'},
    },
	'CONNECTION+CRYPTO': global['appApp']['GET']({type:'require', string:'crypto'}),
	'DB+MONGO': function(){return global['Attention']},
	'GET': async function(req) {
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;
		if(req.query.id){
			App['DB+MONGO']().subscribe(req, [models[0].id]);
			return App['DB+MONGO']().find({id:id}).limit(limit).skip(skip).sort(sort);
		}
		else if(req.query.creator && req.query.app){
			App['DB+MONGO']().subscribe(req, models.map(function(obj){return obj.id}));
			return App['DB+MONGO']().find({app:req.query.app,creator:req.query.creator}).limit(limit).skip(skip).sort(sort);
		}
		else{
			App['DB+MONGO']().subscribe(req, models);
			return App['DB+MONGO']().find({}).limit(100).skip(skip).sort(sort);
		}
	},
	//MACHINE ATTENTION BY VALIDATION OF SPECIFIC DATA.. 
	//REVIEW THE DATA IN THE BLOCK ...
	//GIVES IT MACHENE ATTENTION.. IE THE MERKLE PROOF (POW)
	'CREATE': async function (req) {

		var model = {
			model: 'ATTENTION',
			app: req.param('app'),
			type: req.param('type'),
			string: req.param('string'),
			amount: req.param('amount'),
			associatedModels: req.param('associatedModels'),
			creator: req.param('creator'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var newAttention = await App['DB+MONGO']().create(model);

		var userModel = await User.find({id:newAttention.creator})
		model.creator = userModel[0];

		App['DB+MONGO']().publish([newAttention.id], {verb:'create', data: newAttention});
		//TODO: eventApp['CREATE'](newAttention);
		App['TOKENS+CREATE'](newAttention);

		App['UPDATE+ASSOCIATEDMODELS'](newAttention);
		//TODO: STANDARDIZE USER STATE

		var updatedUser = await User.update({id:userModel[0].id}, {status:newAttention.string});

		return App['DB+MONGO']().find({hash:model.hash});		
	},
	//MORE WORK SOON :)
	'UPDATE+ASSOCIATEDMODELS' : async function(model){
		for (x in model.associatedModels){	

			//...	
			if (model.app == 'HUMAN'){
				//TODO: THINK SPECIAL TYPES OF MAPPINGS ... IE 'MEMBER' :: 'PROJECT' :: BALANCES 
				//ATTENTION - CONTENT CONNECTIONS (WRITE DYNAMIC IN CONTENT APP ? : MANY TO MANY APP INTEROP)
				//THINK: ASSOCIATION NBD .. 
				var globalAppId = model.associatedModels[x].type.toLowerCase() +'App';
				var abstractDataModel = global[globalAppId]['DB']();
				var newModel = await abstractDataModel.find({id:model.associatedModels[x].id});
				//INIT MODEL..
				if (!newModel[0].data){newModel[0].data = {apps:{}}}
				if (!newModel[0].data.apps){newModel[0].data.apps = {}}
				//TODO:: UNIFY ATTENTION MAPPING WITH TOKENS
				//TODO:: STUDY 
				if (!newModel[0].data.apps.tokens){newModel[0].data.apps.tokens = {};}
				//GENERAL.. STUDY
				if (!newModel[0].data.apps.attention){newModel[0].data.apps.attention = {general:0}}
				newModel[0].data.apps.attention.general = parseInt( newModel[0].data.apps.attention.general) + model.amount;
				//USERNAME
				if (!newModel[0].data.apps.attention[model.creator.username.toUpperCase()]){newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = 0}
				newModel[0].data.apps.attention[model.creator.username.toUpperCase()] = newModel[0].data.apps.attention[model.creator.username.toUpperCase()] + model.amount;
				//FOR EACH ATTENTION PROTOCOL TOKEN.. CONTEXT .. ::: THIS IS THE MAPPING . .
					//MANIFOLD APPS :)
				var protocolTokens = App['TOKENS+GET'](model);
				for (y in protocolTokens){
					if (!newModel[0].data.apps.tokens[protocolTokens[y]]){newModel[0].data.apps.tokens[protocolTokens[y]] = 0}
					newModel[0].data.apps.tokens[protocolTokens[y]] = parseInt(newModel[0].data.apps.tokens[protocolTokens[y]]) + parseInt(model.amount);
					if (!newModel[0].data.apps.attention[protocolTokens[y]]){newModel[0].data.apps.attention[protocolTokens[y]] = 0}
					newModel[0].data.apps.attention[protocolTokens[y]] = parseInt(newModel[0].data.apps.attention[protocolTokens[y]]) + parseInt(model.amount);
				}
				var newModel = await abstractDataModel.update({id:newModel[0].id}, {data:newModel[0].data});
				abstractDataModel.publish([newModel[0].id], {verb:'update', data: newModel[0]});
			}

		}
	},
	'TOKENS+CREATE':function(model){
		var tokens = App['TOKENS+GET'](model);
		//updateAssociatedModels(model, protocolTokens);
	},
	'TOKENS+GET': function(model){
		var protocolTokens = ['CRE8', 'CRE8+ATTENTION', 'CRE8+ATTENTION+'+model.id, 'CRE8+ATTENTION+'+model.creator.username.toUpperCase(), 'CRE8+ATTENTION+'+model.app];
		var hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var prefix = 'CRE8+ATTENTION';
		var string = prefix+'+'+hash;
		protocolTokens.push(string);
		//ADD TO MEMBER TOKENS AND DATA MODEL TOKENS :: TRACKED THOUGH STRING EVENTS
		return protocolTokens;
	}
};
module.exports = App;