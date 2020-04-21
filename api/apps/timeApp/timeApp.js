//CRE8.TIME.ALPHA
var App = {

	'CONNECTION+Q':require('q'),
	'CONNECTION+CRYPTO':require('crypto'),
	'CONNECTION+IPFS':require('ipfs'),
	'CONNECTION+ORBIT-DB':require('orbit-db'),

	'CONNECTION+SELF+ATTRIBUTES': {
        //DEPRECIATE
        model: {type: 'string', defaultsTo: 'TIME'},
        amount: {type: 'string'},
        content: {type: 'string', allowNull:true},
        context: {type: 'string'},
        associatedModels: {type: 'json'},
        location: {type: 'json'},
        startTime: {type: 'string', allowNull:true},
        //RETROACTIVE | TRACKED | STREAM | APP
        type: {type: 'string'},
        creator: {type: 'string'},
        user: {model: 'user'},
        data: {type: 'json'},
    },

	'ASSOCIATION+SELF+LANGUAGE': 'Javascript',
	'ASSOCIATION+SELF+RUNTIME':'NODE::V8',

	'DB': function(){return global['Time']},

	//TEST
	'INIT': async function(input){

		//HIGHER ORDER INIT FUNCTIONS --> IE EXPOSED GLOBALS 
		//IE DEFINE Time . . . 
		//TODO: WEBSOCKET LISTENERS

		//GLOBAL NAMESPACE DEFINITIONS :O

		const ipfsOptions = {EXPERIMENTAL: {pubsub: true}};
		const ipfs = new orbitdbApp.import.ipfs(ipfsOptions);
		ipfs.on('error', (e) => console.error(e))
		ipfs.on('ready', async () => {
			const orbitdb = await orbitdbApp.import.orbitdb.createInstance(ipfs);
			const CRE8_TIME = await orbitdb.docs('CRE8.TIME');
			//sails.db.CRE8_TIME = CRE8_TIME;
		});
		//GET DATABASE..
		//MODE TO DYNAMIC RENDERING OF CODE FROM DATABASE / /
		//IE APPS 	
		//REIMAGINE VALUEMAP APP 
	},

	'GET': async function(input) {
		var deferred = App['CONNECTION+Q'].defer();
		var limit = parseInt(input.query.limit) || 1;
		var skip = parseInt(input.query.skip) || 0;
		var sort = input.query.sort || 'createdAt DESC';
		var task = input.query.task;
		var user = input.query.user;
		var id = input.query.id;
		console.log('timeApp.get', 'CALL:', utilityServiceApp.guid(), input.query);
		if (input.query.id){
			var models = await App['DB']().find({id:id}).limit(limit).skip(skip).sort(sort).populate('user');
			App['DB']().subscribe(input, [models[0].id]);
			return associationApp['GET'](models[0]);
		}
		else if(input.query.user){return App['DB']().find({user:user}).limit(limit).skip(skip).sort(sort).populate('user');}
		else{return App['DB']().find({}).limit(limit).skip(skip).sort(sort).populate('user');}
	},

	//TODO:
	'CREATE': async function(input){
		var deferred = App['CONNECTION+Q'].defer();
		var model = {
			model: 'TIME',
			amount: input.param('amount'),
			content: input.param('content'),
			stream: input.param('stream'),
			source: input.param('source'), 
			startTime: input.param('startTime'),
			context: input.param('context'),
			//UNIFY
			user: input.param('user'),
			creator: input.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		//TODO: SECURITY - PERMISSIONS - AUTH

		var userModels = await User.find({id:model.user});

		var newTime = await App['DB']().create(model);
		newTime.associatedModels = input.param('associatedModels');
		newTime.user = userModels[0];
		App['DB']().publish([newTime.id], {verb: 'create', data: time});
		
		//...think about it
		//await eventApp['CREATE'](time);
		await App['TOKENS+CREATE'](newTime);

		//HM..
		for (x in newTime.associatedModels){await validationApp['CREATE+LEGACY'](newTime.associatedModels[x])}
		return newTime;

	},

	//TODO
	'TOKENS+GET': function(model){
		var tokens = [
			{string:'CRE8', associatedModels:[{type:'MEMBER', id:model.user.id}], amount:model.amount},
			{string:'CRE8+TIME', associatedModels:[{type:'MEMBER', id:model.user.id}], amount:model.amount},
			{string:'CRE8+TIME+'+model.id,associatedModels:[{type:'MEMBER', id:model.user.id}],amount:model.amount}
		];
		return tokens;
	},
	'TOKENS+CREATE': async function (model){
		var tokens = App['TOKENS+GET'](model);
		for (x in tokens){
			var tokenModels = await Token.find({string:tokens[x].string});
			if (tokenModels.length == 0){
				var newTokenModel = {
					string:tokens[x].string,
					protocols:['CRE8','TIME'], 
					information:{inCirculation:model.amount, markets:0},
					logic:{transferrable:true, mint:'CREATE TIME'}
				};
				var newToken = await Token.create(newTokenModel);
				console.log('TOKEN CREATED', newToken.string)
				model.user.balance[tokens[x].string] = parseFloat(model.amount);
				//TODO: BALANCE APP
				//TODO: REPUTATION APP
				var updatedUser = await User.update({id:model.user.id}, {balance:model.user.balance});
			}
			else{

				tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
				var updatedToken = await Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information});
				console.log('TOKEN UPDATED', updatedToken);

				if (model.user.balance[tokens[x].string]){model.user.balance[tokens[x].string] = parseInt(model.user.balance[tokens[x].string]) + parseFloat(model.amount);}
				else{model.user.balance[tokens[x].string] = parseFloat(model.amount);}

				//TODO: BALANCE APP
				//TODO: REPUTATION APP
				var updatedUser = await User.update({id:model.user.id}, {balance:model.user.balance});
				console.log('UPDATED USER', updatedUser);

			}
		}
		//UPDATE BALANCE AND REP ETC
		//UPDATE TOTAL WORK
		//ALWAYS UPDATE BALANCE MAPPING
		//LOL TOTAL WORK
		model.user.totalWork = parseInt(model.user.totalWork) + parseInt(model.amount);
		var updatedUser = await User.update({id:model.user.id}, {totalWork:model.user.totalWork});
	},

	'VIEWS':{},	

};
module.exports = App;