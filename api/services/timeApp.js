//CRE8.TIME.ALPHA
module.exports = {

	import:{
		Q: require('q'),
		crypto: require('crypto')
	},

	connections:[],
	//type CRE8_TIME
	dataModel:[],
	language: 'Javascript',
	compiler:'V8',

	get: async function(req) {
		
		//TODO: UPDATE SOON
		function getAssociations(model){
			var deferred = Q.defer();
			Association.getDatastore().manager.collection('association')
			.find({$and : [{"associatedModels.id": {$in:[model.id]}}]})
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, associationModels) {
				console.log(associationModels)
				if (associationModels.length > 0){
					associationModels.map(function(obj){obj.id=obj._id; return obj});
					model.associationModels = associationModels;
					model.context = {};
					var promises = [];
					for (x in model.associationModels){
						for (y in associationModels[x].associatedModels){
							if (associationModels[x].associatedModels[y].type=='ACTION'){promises.push(Action.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='APP'){promises.push(App.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='ATTENTION'){promises.push(Attention.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='CONTENT'){promises.push(Content.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='ITEM'){promises.push(Item.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='MEMBER'){promises.push(User.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='PROJECT'){promises.push(Project.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TASK'){promises.push(Task.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TIME'){promises.push(Time.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TRANSACTION'){promises.push(Transaction.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='VALIDATION'){promises.push(Validation.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						}
						//DEFINED BY CONNECTION
						for (y in Object.keys(model.associationModels[x].context)){
							var context = Object.keys(model.associationModels[x].context)[y].toString();
							if(!model.context[context.toString()]){model.context[context.toString()] = model.associationModels[x].context[context.toString()];}
							else{model.context[context.toString()] = model.context[context.toString()] + model.associationModels[x].context[context.toString()];}
						}
					}
					Q.all(promises).then((populatedModels)=>{
						var index = -1;
						for (x in model.associationModels){
							for (y in associationModels[x].associatedModels){
								index++;model.associationModels[x].associatedModels[y].data = populatedModels[index];
							}
						}
						deferred.resolve(model);
					});
				}
				else{deferred.resolve(model);}
			});
			return deferred.promise;
		};

		var deferred = timeApp.import.Q.defer();

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var task = req.query.task;
		var user = req.query.user;
		var id = req.query.id;

		console.log('GET TIME', req.query)

		if (req.query.id){
			var models = await Time.find({id:id}).limit(limit).skip(skip).sort(sort).populate('user');
			Time.subscribe(req, [models[0].id]);
			getAssociations(models[0]).then(function(models){res.json(models);});
		}

		else if(req.query.user){
			var models = await Time.find({user:user}).limit(limit).skip(skip).sort(sort).populate('user');
			deferred.resolve(models);
		}

		else{
			var models = await Time.find({}).limit(limit).skip(skip).sort(sort).populate('user');
			deferred.resolve(models);
		}
	},

	create: async function(req){

		var deferred = timeApp.import.Q.defer();

		var model = {
			model: 'TIME',
			amount: req.param('amount'),
			content: req.param('content'),
			stream: req.param('stream'),
			source: req.param('source'), 
			startTime: req.param('startTime'),
			context: req.param('context'),
			//UNIFY
			user: req.param('user'),
			creator: req.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		console.log('CREATE TIME', model);

		//TODO: SECURITY - PERMISSIONS - AUTH
		var userModels = await User.find({id:model.user});
		var time = await Time.create(model);
		time.associatedModels = req.param('associatedModels');
		time.user = userModels[0];
		Time.publish([time.id], {verb: 'create', data: time});

		eventApp.create(time);
		timeApp.tokens.create(time);
		for (x in time.associatedModels){validationApp.create(time.associatedModels[x])}

		deferred.resolve(models);
		return deferred.promise;

	},

	tokens:{

		//TODO
		get: function(model){

			var tokens = [{
				string:'CRE8',
				associatedModels:[{type:'MEMBER', id:model.user.id}],
				amount:model.amount
			},{
				string:'CRE8+TIME',
				associatedModels:[{type:'MEMBER', id:model.user.id}],
				amount:model.amount
			},{
				string:'CRE8+TIME+'+model.id,
				associatedModels:[{type:'MEMBER', id:model.user.id}],
				amount:model.amount
			}];
			return tokens;

		},

		create: async function (model){
			var tokens = getTokens(model);
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
			model.user.totalWork = parseInt(model.user.totalWork) + parseInt(model.amount);
			var updatedUser = await User.update({id:model.user.id}, {totalWork:model.user.totalWork});

		},

	},

	views:{

	},
	
};