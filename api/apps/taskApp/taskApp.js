//CRE8.TASK.ALPHA
var App = {
	'CONNECTION+CRYPTO': require('crypto'),
	'CONNECTION+Q': require('q'),
	'CONNECTION+SELF+ATTRIBUTES': {
        model: {type: 'string', defaultsTo: 'TASK'},
        title: {type: 'string'},
        content: {type: 'string', allowNull: true},
        associatedModels: {type: 'json'},
        context: {type: 'string'},
        location: {type: 'json'},
        user: {model: 'user'},
        creator: {type: 'string'},
        information: {type: 'json'},
        data: {type: 'json'},
    },
    //MULTIKEYS..MULTIDBS AND TYPE COLLECTIONS .. 
	'DB': function(){return global['Task']},
	'GET': async function(input) {
		var deferred = App['CONNECTION+Q'].defer();
		var limit = parseInt(input.query.limit) || 1;
		var skip = parseInt(input.query.skip) || 0 ;
		var sort = input.query.sort || 'createdAt DESC';
		var project = input.query.project;
		var search = input.query.search;
		var tag = input.query.tag;
		var id = input.query.id;
		var user = input.query.user;
		if(input.query.id){
			var models = await App['DB']().find({id:id});
			App['DB']().subscribe(input, [models[0].id]);
			return associationApp['GET'](models[0]);
		}
		//TODO: UPDATE CODE STYLE 
		//TODO: REDUCE
		else if (input.query.project){
			App['DB']().getDatastore().manager.collection('task').find({"associatedModels.address":{$in :[project]}}).limit(limit).skip(skip).sort({'createdAt':-1})
			.toArray(async function (err, models) {
				models = models.map(function(obj){ obj.id = obj._id; return obj;});
				var promises = [];
				for (x in models){promises.push(User.find({id:models[x].user.toString()}).then(function(userModels){return {user:userModels[0]}}));}
				var populatedModels = await App['CONNECTION+Q'].all(promises);
				for (x in models){models[x].user = populatedModels[x].user;}
				deferred.resolve(models);
			});
		}
 		//STUDY THIS!!!
 		//QUERY FOR MEMBER-MEMBER
 		//QUERY FOR CONNECTION DESCRIPTION
		else if (input.query.user){
			var member = input.query.user;
			var andQuery = { 
				$and: [
					{"associatedModels.id":{$in :[member]}},
					{"associatedModels.type":{$in :['MEMBER']}},
					{"associatedModels.type":{$in :['TASK']}}
				]
			};
			var promises = [];

			//THINK ABOUT THIS ASSOCIATED DATA ::::!!!!!! :) :8 :* :o
			//CONNECTION IMPORT ..
			//App['CONNECTION+ASSOCIATION']['DB']
			//App['DB']()

			Association.getDatastore().manager.collection('association').find(andQuery).limit(limit).skip(skip).sort({'createdAt':-1})
			.toArray(async function (err, associationModels) {
				associationModels = associationModels.map(function(obj){obj.id = obj._id;return obj;});
				for(x in associationModels){
					for (y in associationModels[x].associatedModels){
						if (associationModels[x].associatedModels[y].type == 'TASK'){
							promises.push(App['DB']().find({id:associationModels[x].associatedModels[y].id}).then(function(task){return task[0]}));
						}
					}
				}
				var populatedModels = await App['CONNECTION+Q'].all(promises);
				deferred.resolve(populatedModels)
			});
		}
		else{
			var models = await App['DB']().find({}).limit(limit).skip(skip).sort(sort).populate('user')
			var numRecords = await App['DB']().count()
			App['DB']().subscribe(input, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp['GET'](models[x]));}
			var populatedModels = await App['CONNECTION+Q'].all(promises)
			for (x in models){models[x] = populatedModels[x];}
			var returnObj = {data:models, info:{count:numRecords}};
			deferred.resolve(returnObj)
		}
		return deferred.promise;
	},
	'CREATE':async function(input){
		var model = {
			model: 'TASK',
			title: input.param('title'),
			content: input.param('content'),
			location: input.param('location'),
			//associatedModels: input.param('associatedModels'),
			//context: input.param('context'),
			user: input.param('user'),
			creator: input.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}

		};
		model.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var newTask = await App['DB']().create(model);
		
		//TODO: BETTER SETUP
		//TODO: BETTER 'EXTERNAL' UTILITY
		var userModels = await User.find({id:newTask.user});
		newTask.associatedModels = input.param('associatedModels');
		model.user = userModels[0];
		var location = await googleApp.geoCode(newTask);
		newTask.location = location;
		var taskModel = await App['DB']().update({id:newTask.id}, {location:location});
		
		App['DB']().subscribe(input, [newTask.id]);
		App['DB']().publish([newTask.id], {verb: 'create', data: taskModel});
		eventApp.create(newTask);
		App['TOKENS+CREATE'](newTask);
		
		//for( x in []){}
		validationApp.createLegacy(newTask);
		return App['DB']().find({hash:model.hash});
	},
	'TOKENS+GET': function(model){
		var protocolTokens = ['CRE8', 'CRE8+TASK', 'CRE8+TASK+'+model.id];
		return protocolTokens;
	},
	'TOKENS+CREATE':async function(model){
		var tokens = App['TOKENS+GET'](model);
		for (x in tokens){
			var tokenString = tokens[x]; 
			var tokenModels = await Token.find({string:tokenString});
			if (tokenModels.length == 0){
				var newTokenModel = {
					string:tokenString,
					protocols:['CRE8','TRANSACTION'], 
					information:{inCirculation:model.amount, markets:0},
					logic:{transferrable:true, mint:'CREATE TIME'}
				};
				var newToken = await Token.create(newTokenModel);
				console.log('taskApp.tokens.create', 'CALL:', utilityServiceApp.guid(), newToken.string);

				model.user.balance[tokenString] = parseFloat(model.amount);
				var updatedUser = await User.update({id:model.user.id}, {balance:model.user.balance});
				console.log('taskApp.tokens.create', 'UPDATE USER:', utilityServiceApp.guid());
			}
			else{
				tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
				var updatedToken = await Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information});
				console.log('taskApp.tokens.create', 'CALL:', utilityServiceApp.guid(), updatedToken);

				if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
				else{model.user.balance[tokenString] = parseFloat(model.amount);}

				var updatedUser = await User.update({id:model.user.id}, {balance:model.user.balance});
				console.log('taskApp.tokens.create', 'UPDATE USER:', utilityServiceApp.guid());
			}
		}
	}
};
module.exports = App;