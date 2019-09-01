var Q = require('q');
module.exports = {

	get: function(req, res) {

		var limit = parseInt(req.query.limit);
		var skip = parseInt(req.query.skip);
		var sort = req.query.sort;
		var project = req.query.project;
		var search = req.query.search;
		var tag = req.query.tag;
		var id = req.query.id;
		var user = req.query.user;

		Task.watch(req);

		console.log('GET TASK', req.query);

		if(req.query.id){
			Task.find({id:id})
			.populate('project')
			.then(function(models) {
				res.json(models[0]);
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
			.populate('project')
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
			.populate('project')
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
						console.log(populatedModels)
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
			.populate('project')
			.then(function(models) {

				Task.count().then(function(numRecords){
					Task.subscribe(req, models);
					var returnObj = {data:models, info:{count:numRecords}};
					//console.log(returnObj)
					res.json(returnObj);
				});

			});
		}
	},

	//TODO
	create: function (req, res) {

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

		function createNotification(model){

		};

		function createValidation(model){

		};

		function createAssociation(newValidationModel){

		};

		function mintTokens(model){
			var taskProtocolTokens = getProtocolTokens(model);
			for (x in timeProtocolTokens){
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

		var model = {
			
			model: 'TASK',
			title: req.param('title'),
			content: req.param('content'),
			tags: req.param('tags'),
			location: req.param('location'),
			associatedModels: req.param('associatedModels'),
			validationModels: req.param('validationModels'),

			user: req.param('user'),

			//DEPRECIATE
			project: req.param('project'),

			//APP DATA
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}

		};
		console.log('CREATE TASK', model);
		Task.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {

				User.find({id:model.user}).then(function(userModel){

					model.user = userModels[0];
					Task.publishCreate(model);
					createNotification(model);
					createValidation(model);
					mintTokens(model);
					res.json(model);

				});

			}
		});
	},

	//TODO
	update:function (req, res) {},

};

