//CRE8.TASK
const Q = require('q');
const crypto = require('crypto');

module.exports = {

	get: function(req, res) {

		function getAssociations(model){
			var deferred = Q.defer();
			Association.native(function(err, association) {
				association.find({$and : [{"associatedModels.id": {$in:[model.id]}}]})
				.limit(1000)
				.skip(0)
				.sort({'createdAt':-1})
				.toArray(function (err, associationModels) {
					if (associationModels.length > 0){
						associationModels.map(function(obj){obj.id=obj._id; return obj});
						model.associationModels = associationModels;
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
						}
						Q.all(promises).then((populatedModels)=>{
							for (x in model.associationModels){
								for (y in associationModels[x].associatedModels){
									var index = parseInt(x+y);
									model.associationModels[x].associatedModels[y].data = populatedModels[index];
								}
							}
							deferred.resolve(model);
						});
						model.context = {};
						for (x in model.associationModels){}
					}
					else{deferred.resolve(model);}
				});
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
			Task.find({id:id}).then(function(models) {
				Task.subscribe(req, [models[0].id]);
				getAssociations(models[0]).then(function(models){res.json(models);});
			});
		}

		//lol
		else if (req.query.project){
			Task.native(function(err, task) {
				task.find({"associatedModels.address":{$in :[project]}})
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					models = models.map(function(obj){ obj.id = obj._id; return obj;});
					var promises = [];
					for (x in models){
						promises.push(User.find({id:models[x].user.toString()}).then(function(userModels){return {user:userModels[0]}}));
					}
					Q.all(promises).then((populatedModels)=>{
						for (x in models){models[x].user = populatedModels[x].user;}
						res.json(models);
					});
				});
			});
		}

		//TODO: DEPRECIATE
		else if(req.query.search){
			Task.find()
			.where({
				or: [
					{content: {contains: search}},
					{tags: {contains: search}},
					{title: {contains: search}},
					{user: {contains: search}}
				]
			})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Task.subscribe(req, models);
				res.json(models);
			});	
		}

		else if (req.query.tag){
			Task.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Task.count({tags:{contains: tag}}).then(function(numRecords){
					Task.subscribe(req, models);
					var returnObj = {data:models, info:{count:numRecords}};
					res.json(returnObj);
				});
			});
		}

		//WE ARE GETTING BY ASSOCIATION -- THIS IS THE MODEL
			//ASSOCIATED VS CREATOR.. 
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
			
			Association.native(function(err, association) {			
				association.find(andQuery).limit(limit).skip(skip).sort({'createdAt':-1})
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
						//console.log(populatedModels)
						res.json(populatedModels);
					});
				});
			});

		}

		else{
			Task.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models){
				//console.log(models)
				Task.count().then(function(numRecords){
					Task.subscribe(req, models.map(function(obj){return obj.id}));
					var returnObj = {data:models, info:{count:numRecords}};
					//console.log(returnObj)
					res.json(returnObj);
				});

			});
		}
	},

	//TODO
	create: function (req, res) {

		function createEvent(model){
			var eventModel = {
				type:'create',
				model:{
					id:model.id, //hash
					type:model.model //app
				},
				data:{},
			};
			Event.create(eventModel);
		};

		function createNotification(model){

		};

		function createValidation(model){
			for (x in model.associatedModels){
				var newValidation = {
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
							context:'string->int', //lang lang interpol
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
					createAssociation(newValidationModel);
				});
			}
		};

		function createAssociation(newValidationModel){
			var newAssociationModel = {};
			Validation.native(function(err, validation) {
				validation.find({
					$and : [
						{"associatedModels.id": {$in :[newValidationModel.associatedModels[0].id]}}, 
						{"associatedModels.id": {$in :[newValidationModel.associatedModels[1].id]}},
					]
				})
				.limit(1000)
				.skip(0)
				.sort({'createdAt':-1})
				.toArray(function (err, validationModels) {
					Association.native(function(err, association) {
						association.find({
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
				});
			});
		};

		function mintTokens(model){
			var taskProtocolTokens = getProtocolTokens(model);
			for (x in taskProtocolTokens){
				var tokenString = taskProtocolTokens[x];
				(function(tokenString) {
					Token.find({string:tokenString}).then(function(tokenModels){
						if (tokenModels.length == 0){
							var newTokenModel = {
								string:tokenString,
								protocols:['CRE8','TASK'], 
								information:{inCirculation:model.amount, markets:0},
								logic:{transferrable:true, mint:'CREATE TASK'}
							};
							Token.create(newTokenModel).then(function(model){console.log('TOKEN CREATED', model.string);});
							model.user.balance[tokenString] = parseFloat(model.amount);
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){});
						}
						else{
							tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
							Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(model){console.log('TOKEN UPDATED', model)});
							if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
							else{model.user.balance[tokenString] = parseFloat(model.amount);}
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){});
						}
					});

				})(tokenString);
			}
		};

		//TODO ASSOIATION..
		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+TASK', 'CRE8+TSK+'+model.id];
			if (model.tags){
				for (x in model.tags.split(',')){
					protocolTokens.push(model.tags.split(',')[x].toUpperCase());
					protocolTokens.push('CRE8+TASK+'+model.tags.split(',')[x].toUpperCase());
				}
			}
			return protocolTokens;
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
		Task.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {

				User.find({id:model.user}).then(function(userModels){
					//if (model.location){
					//	googleGeoCodeService(project).then(function(location){});
					//}
					model.associatedModels = req.param('associatedModels');
					model.user = userModels[0];
					
					Task.subscribe(req, [model.id]);
					Task.publish([model.id], {verb: 'create', data: model});

					createEvent(model);
					createNotification(model);
					createValidation(model);
					mintTokens(model);
					res.json(model);

				});

			}
		});
	},

	update:function (req, res) {},

};

