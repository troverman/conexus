//CRE8.TRANSACTION.ALPHA
var App = {
	attributes: {
        model: {type: 'string', defaultsTo: 'TRANSACTION'},
        amountSet: {type: 'json'},
        to: {type: 'string'},
        from: {type: 'string'},
        //[linked items], to, from, self, creator, [tokens]
        associatedModels: {type: 'json'},
        content: {type: 'string', allowNull: true},
        context: {type: 'string'},
        user: {model: 'user'},
        creator: {type: 'string'},
        data: {type: 'json'},
    },

	//TODO: APP-APP DESCRETE CONNECTIONS
	'CONNECTION+CRYPTO':require('crypto'),
	'CONNECTION+Q': require('q'),

	'DB': function(){return global['Transaction']},

	//FACTORME
	//TODO: DEPRECIATE -- to ; from
		//APPRECIATE
		//ASSOCIATION with to, from 
	getTo: function(model){
		var deferred = App['CONNECTION+Q'].defer();
		User.find({id:model.to}).then(function(userModels){
			if (userModels.length == 0){Project.find({id:model.to}).then(function(projectModels){deferred.resolve(projectModels[0])})}
			else{deferred.resolve(userModels[0])}
		})
		return deferred.promise;
	},
	getFrom:function(model){
		var deferred = App['CONNECTION+Q'].defer();
		User.find({id:model.from}).then(function(userModels){
			if (userModels.length == 0){Project.find({id:model.from}).then(function(projectModels){deferred.resolve(projectModels[0])})}
			else{deferred.resolve(userModels[0])}
		});
		return deferred.promise;
	},


	'GET': async function(req){
		var deferred = App['CONNECTION+Q'].defer();		
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		//SHOULD GO AHEAD AND DEDUPLICATE THE QUERY 
		//APPRECIATE QUERY LANGUAGE && REDUCE 
		if (req.query.query){
			var querySet = JSON.parse(req.query.query);
			var mongoQuery = mongoApp.parseQuery(querySet);
			App['DB']().native(function(err, transaction) {
				transaction.find(mongoQuery).limit(1000).skip(0).sort({'createdAt':-1}).toArray(function (err, models) {
					models = models.map(function(obj){obj.id = obj._id; return obj;});
				});
			});
		}
		//REDUCE BELOW
		else if(req.query.id){
			var id = req.query.id;
			var models = await App['DB']().find({id:id}).limit(limit).skip(skip).sort(sort)
			var promises = [];
			for (x in models){promises.push(App.getTo(models[x])); promises.push(App.getFrom(models[x]));}
			var populatedModels = await App['CONNECTION+Q'].all(promises);
			var sum = 0;
			for (x in models){models[x].to = populatedModels[sum];sum++; models[x].from = populatedModels[sum];sum++;}
			//TODO: REDO ALL
			App['DB']().subscribe(req, [model.id]);
			return associationApp['GET'](models[0]);				
		}
		//DEPRECIATE BELOW
		else if(req.query.project){
			var project = req.query.project;
			return App['DB']().find({project:project}).limit(limit).skip(skip).sort(sort)
		}
		else if(req.query.user && !req.query.amountSet){
			var user = req.query.user;
			var models = await App['DB']().find({user:user}).limit(limit).skip(skip).sort(sort)
			var promises = [];
			for (x in models){promises.push(App.getTo(models[x])); promises.push(App.getFrom(models[x]));}
			var populatedModels = await App['CONNECTION+Q'].all(promises);
			var sum = 0;
			for (x in models){models[x].to = populatedModels[sum];sum++; models[x].from = populatedModels[sum];sum++;}
			var promisesAssociations = [];
			for (x in models){promisesAssociations.push(associationApp['GET'](models[x]));}
			var populatedModels = await App['CONNECTION+Q'].all(promisesAssociations);
			for (x in models){models[x] = populatedModels[x];}
			deferred.resolve(models);
		}
		else if(req.query.to || req.query.from){
			if (req.query.from){query = {from:req.query.from}}
			if (req.query.to){query = {to:req.query.to}}
			var models = await App['DB']().find(query).limit(limit).skip(skip).sort(sort);
			var promises = [];
			for (x in models){promises.push(App.getTo(models[x])); promises.push(App.getFrom(models[x]));}
			var populatedModels = await App['CONNECTION+Q'].all(promises);
			var sum = 0;
			for (x in models){models[x].to = populatedModels[sum];sum++; models[x].from = populatedModels[sum];sum++;}
			var promisesAssociations = [];
			for (x in models){promisesAssociations.push(associationApp['GET'](models[x]));}
			var poulatedModels = await App['CONNECTION+Q'].all(promisesAssociations);
			for (x in models){models[x] = populatedModels[x];}
			deferred.resolve(models);
		}
		else{
			var models = await App['DB']().find({}).limit(limit).skip(skip).sort(sort);
			var promises = [];
			for (x in models){promises.push(App.getTo(models[x]));promises.push(App.getFrom(models[x]));}
			var populatedModels = await App['CONNECTION+Q'].all(promises);
			var sum = 0;
			for (x in models){models[x].to = populatedModels[sum];sum++;models[x].from = populatedModels[sum];sum++;}
			//TODO: REMOVE
			//TODO: QUALITY DATA ASSOCIATION TRAVERSALS FOR QUERIES
			//TODO: ASSOCIATION APP | GET
			var promisesAssociations = [];
			for (x in models){promisesAssociations.push(associationApp['GET'](models[x]));}
			var populatedAssociations = await App['CONNECTION+Q'].all(promisesAssociations);
			for (x in models){models[x] = populatedAssociations[x];}
			deferred.resolve(models);
		}
		return deferred.promise;
	},

	'CREATE': async function(req){
		var model = {
			model: 'TRANSACTION',
			amountSet: req.param('amountSet'),
			to: req.param('to'),
			from: req.param('from'),
			//HM -- ASSOCIATED?
			content: req.param('content'),
			//to,from,self,creator
			//NOT STORED IN MAIN MODEL... 
			//associatedModels: req.param('associatedModels'),
			context: req.param('context'),
			user: req.param('user'),
			creator: req.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var transactionModel = await App['DB']().create(model);
		
		//ITEM ACTIONS.. 			
		//IF GENERATOR
		//CONTENT OWNERSHIP? --> CONTENT AND ITEM 
		//.. ATTENTION(ASSET) TOKEN RIGHTS.. 
		for (x in Object.keys(transactionModel.amountSet)){
			var itemModels = await Item.find({id:Object.keys(transactionModel.amountSet)[x]});
			if (itemModels.length!=0){
				var updatedItem = await Item.update({id:itemModels[0].id}, {user:transactionModel.to, owner:transactionModel.to})
				console.log('UPDATED: ITEM OWNERSHIP TRANSFERRED', updatedItem);
			}
		}

		//HMM
		transactionModel.associatedModels = req.param('associatedModels');
		var promises = [App.getTo(transactionModel), App.getFrom(transactionModel)];
		var populatedModels = await App['CONNECTION+Q'].all(promises);
		var userModels = await User.find({id:model.user});
		transactionModel.user = userModels[0];
		transactionModel.to = populatedModels[0];
		transactionModel.from = populatedModels[1];
		App['DB']().publish([transactionModel.id], {verb: 'update', data: transactionModel});
		validationApp.createLegacy(transactionModel);
		App['TOKENS+GET'](transactionModel);
		eventApp.create(transactionModel);
		notificationApp.create.transaction(transactionModel);

		return App['DB']().find({hash:model.hash});

	},

	//OVERLOAD TOKEN.APP || MANI
	//UNIFY DATA.APPS AND MULTI=APPCONNECTIONS . . .
	'TOKENS+GET':function(model){
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

	'TOKENS+CREATE': async function(model){
		var transactionProtocolTokens = App['TOKENS+GET'](model);
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
		}
	}

};
module.exports = App;