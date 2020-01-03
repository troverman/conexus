//CRE8.TASK.ALPHA
const Q = require('q');
const crypto = require('crypto');

module.exports = {

	attributes: {
        //DEPRECIATE
        model: {type: 'string', defaultsTo: 'TASK'},
        title: {type: 'string'},
        content: {type: 'string', allowNull: true},
        associatedModels: {type: 'json'},
        context: {type: 'string'},
        location: {type: 'json'},
        user: {model: 'user'},
        creator: {type: 'string'},
        //COUNT.. DATA.. CONNECTED APPS..
        information: {type: 'json'},
        data: {type: 'json'},
    },

	get: async function(req) {
		var deferred = Q.defer();
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0 ;
		var sort = req.query.sort || 'createdAt DESC';
		var project = req.query.project;
		var search = req.query.search;
		var tag = req.query.tag;
		var id = req.query.id;
		var user = req.query.user;
		console.log('GET TASK', req.query);
		if(req.query.id){
			var models = await Task.find({id:id});
			Task.subscribe(req, [models[0].id]);
			return associationApp.get(models[0]);
		}
		//
		//TODO: UPDATE CODE STYLE 
		//TODO: REDUCE
		else if (req.query.project){
			Task.getDatastore().manager.collection('task').find({"associatedModels.address":{$in :[project]}}).limit(limit).skip(skip).sort({'createdAt':-1})
			.toArray(function (err, models) {
				models = models.map(function(obj){ obj.id = obj._id; return obj;});
				var promises = [];
				for (x in models){
					promises.push(User.find({id:models[x].user.toString()}).then(function(userModels){return {user:userModels[0]}}));
				}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x].user = populatedModels[x].user;}
					deferred.resolve(models);
				});
			});
		}

 		//STUDY THIS!!!
 		//QUERY FOR MEMBER-MEMBER
 		//QUERY FOR CONNECTION DESCRIPTION
		else if (req.query.user){
			var member = req.query.user;
			var andQuery = { 
				$and: [
					{"associatedModels.id":{$in :[member]}},
					{"associatedModels.type":{$in :['MEMBER']}},
					{"associatedModels.type":{$in :['TASK']}}
				]
			};
			var promises = [];
			Association.getDatastore().manager.collection('association').find(andQuery).limit(limit).skip(skip).sort({'createdAt':-1})
			.toArray(function (err, associationModels) {
				associationModels = associationModels.map(function(obj){obj.id = obj._id;return obj;});
				for(x in associationModels){
					for (y in associationModels[x].associatedModels){
						if (associationModels[x].associatedModels[y].type == 'TASK'){
							promises.push(Task.find({id:associationModels[x].associatedModels[y].id}).then(function(task){return task[0]}));
						}
					}
				}
				Q.all(promises).then((populatedModels)=>{
					deferred.resolve(populatedModels)
				});
			});
		}

		else{
			var models = await Task.find({}).limit(limit).skip(skip).sort(sort).populate('user')
			var numRecords = await Task.count()
			Task.subscribe(req, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp.get(models[x]));}
			var populatedModels = await Q.all(promises)
			for (x in models){models[x] = populatedModels[x];}
			var returnObj = {data:models, info:{count:numRecords}};
			//TODO: RETURN PROMISE
			deferred.resolve(returnObj)
		}
		return deferred.promise;
	},

	create:async function(req){
		var model = {
			model: 'TASK',
			title: req.param('title'),
			content: req.param('content'),
			location: req.param('location'),
			//associatedModels: req.param('associatedModels'),
			//context: req.param('context'),
			user: req.param('user'),
			creator: req.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}

		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		console.log('CREATE TASK', model);
		var model = await Task.create(model);
		//TODO: BETTER SETUP
		//TODO: BETTER 'EXTERNAL' UTILITY
		var userModels = await User.find({id:task.user});
		if(task._id){project.id = project._id.toString()}
		model.associatedModels = req.param('associatedModels');
		model.user = userModels[0];
		var location = await googleApp.geoCode(task);
		task.location = location;
		var taskModel = await Task.update({id:task.id}, {location:location});
		console.log('UPDATE PROJECT LOCATION -- GEO CODE');
		Task.subscribe(req, [task.id]);
		Task.publish([model.id], {verb: 'create', data: taskModel});
		eventApp.create(task);
		taskApp.tokens.create(task);
		//for( x in []){}
		validationApp.createLegacy(task);
		return Task.find({hash:model.hash});
	},

	tokens:{
		get: function(model){
			var protocolTokens = [
				'CRE8', 
				'CRE8+TASK', 
				'CRE8+TASK+'+model.id
				//context
			];
			return protocolTokens;
		},
		create:async function(model){
			var tokens = validationApp.tokens.get(model);
			for (x in tokens){
				var tokenString = tokens[x]; 
				var tokenModels = await Token.find({string:tokenString});
				if (tokenModels.length == 0){
					var newTokenModel = {
						string:tokenString,
						protocols:['CRE8','TRANSACTION'], 
						information:{
							inCirculation:model.amount, 
							markets:0
						},
						logic:{
							transferrable:true, 
							mint:'CREATE TIME'
						}
					};
					var newToken = await Token.create(newTokenModel);
					console.log('TOKEN CREATED', newToken.string);

					model.user.balance[tokenString] = parseFloat(model.amount);
					var updatedUser = await User.update({id:model.user.id}, {balance:model.user.balance});
					console.log('UPDATED USER', updatedUser);
				}
				else{

					tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
					var updatedToken = await Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information});
					console.log('TOKEN UPDATED', updatedToken);

					if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
					else{model.user.balance[tokenString] = parseFloat(model.amount);}

					var updatedUser = await User.update({id:model.user.id}, {balance:model.user.balance});
					console.log('UPDATED USER', updatedUser);

				}
			}

		}
	}
};