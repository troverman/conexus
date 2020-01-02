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

		function getAssociations(model){
			var deferred = Q.defer();
			Association.getDatastore().manager.collection('association')
			.find({$and : [{"associatedModels.id": {$in:[model.id]}}]})
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, associationModels) {
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
						var index = -1 
						for (x in model.associationModels){
							for (y in associationModels[x].associatedModels){
								index++;
								model.associationModels[x].associatedModels[y].data = populatedModels[index];
							}
						}
						deferred.resolve(model);
					});
				}
				else{deferred.resolve(model);}
			});
			return deferred.promise;
		};

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
			return getAssociations(models[0]);
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
					//TODO: RETURN PROMISE
					return models;
				});
			});
		}

 		//STUDY THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
			Association.getDatastore().manager.collection('association')
			.find(andQuery).limit(limit).skip(skip).sort({'createdAt':-1})
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
					res.json(populatedModels);
				});
			});
		}

		else{
			var models = await Task.find({}).limit(limit).skip(skip).sort(sort).populate('user')
			var numRecords = await Task.count()
			Task.subscribe(req, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(getAssociations(models[x]));}
			var populatedModels = await Q.all(promises)
			for (x in models){models[x] = populatedModels[x];}
			var returnObj = {data:models, info:{count:numRecords}};
			//TODO: RETURN PROMISE
			return returnObj;
		}
	},

	create:async function(req){

		function createValidation(model){
		
			for (x in model.associatedModels){
				var newValidation = {
					model:'VALIDATION',
					content:model.id + ' VALIDATION',
					user: model.user.id,
					creator: model.user.id,
					data:{apps:{reactions: {plus:0,minus:0},attention:{general:0}}}
				};
				newValidation.connection = {
					id:1,
					type:'HUMAN',
					title:'STANDARD MULTI, AGNOSTIC MODELS',
					parameters:{
						mapping:['context','reputation','computed'],
						attributes:{
							context:'string->int',//{string:int} //lang lang interpol
							reputation:'string->int',
							computed:'string:->int'
						},
						logic:'computed[%context] = context[%context]*reputation[%context]'
					},
				};
        		newValidation.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newValidation)).digest('hex');
				//CONNECTION DEFINED MAPPINGS
				for (y in newValidation.connection.parameters.mapping){
					newValidation[newValidation.connection.parameters.mapping[y]] = {};
				}
				var associatedModelObj = {};
				if (model.associatedModels[x].id.toLowerCase() == 'self'){associatedModelObj = {type:model.model, id:model.id}}
				else{associatedModelObj = {type:model.associatedModels[x].type, id:model.associatedModels[x].id};}
				newValidation.associatedModels = [
					{type:model.model, id:model.id},
					associatedModelObj
				];
				for (y in model.associatedModels[x].context){newValidation.context[model.associatedModels[x].context[y].text] = model.associatedModels[x].context[y].score;}
				Validation.create(newValidation).then(function(newValidationModel){
					console.log('CREATE VALIDATION', newValidationModel);
					eventApp.create(newValidationModel);
					newValidationModel.model = 'ASSOCIATION';
					createAssociation(newValidationModel);
				});
			}
		};

		function createAssociation(newValidationModel){
			var newAssociationModel = {};
			Validation.getDatastore().manager.collection('validation')
			.find({
				$and : [
					{"associatedModels.id": {$in :[newValidationModel.associatedModels[0].id]}}, 
					{"associatedModels.id": {$in :[newValidationModel.associatedModels[1].id]}},
				]
			})
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, validationModels) {
				Association.getDatastore().manager.collection('association')
				.find({
					$and : [
						{"associatedModels.id": {$in :[validationModels[0].associatedModels[0].id]}},
						{"associatedModels.id": {$in :[validationModels[0].associatedModels[1].id]}},
					]
				})
				.limit(1000)
				.skip(0)
				.sort({'createdAt':-1})
				.toArray(function (err, associationModels) {
					if (associationModels.length == 0){
						var newAssociationModel = newValidationModel;
						Association.create(newAssociationModel).then(function(association){
							console.log('CREATED ASSOCIATION', association);
							Association.publish([association.id], {verb: 'create', data: association});
						});
					}
					else{
						console.log('ASSOCIATION EXISTS -- COMPUTE')
					}
				});
			});
		};

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

		//for x in
		createValidation(task);

		//TODO: RETURN PROMISE
		return task
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