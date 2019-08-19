var Q = require('q');

module.exports = {

	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var project = req.query.project;
		var task = req.query.task;
		var user = req.query.user;
		var time = req.query.time;
		var id = req.query.id;

		console.log('GET VALIDATION', req.query)

		Validation.watch(req);

		//TODO: DEPRECIATE
		if (req.query.project){
			Validation.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});
		}

		//TODO: DEPRECIATE
		else if (req.query.task){

			//Association.find({"associatedModels.address":{$in :[task]}})

			//WORK HERE
			Validation.native(function(err, validation) {
				validation.find({"associatedModels.address":{$in :[task]}})
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					models = models.map(function(obj){
						obj.id = obj._id;
						return obj;
					});

					//JOIN TO USER
					var promises = [];
					for (x in models){

						promises.push(
							User.find({
								id:models[x].user.toString()
							}).then(function(userModels){return {user:userModels[0]}})
						);

						for (y in models[x].associatedModels){
							if (models[x].associatedModels[y].type == 'PROJECT'){
								promises.push(Project.find({id:models[x].associatedModels[y].address}).then(function(projectModels){return {project:projectModels[0]}}))
							}
							if (models[x].associatedModels[y].type == 'TASK'){
								promises.push(Task.find({id:models[x].associatedModels[y].address}).then(function(taskModels){return {task:taskModels[0]}}))
							}
							if (models[x].associatedModels[y].type == 'TIME'){
								promises.push(Time.find({id:models[x].associatedModels[y].address}).then(function(timeModels){return {time:timeModels[0]}}))
							}
						}

					}
					Q.all(promises).then((populatedModels)=>{
						var sum = 0;
						for (x in models){
							models[x].user = populatedModels[sum].user;
							sum++;
							for (y in models[x].associatedModels){
								if (models[x].associatedModels[y].type == 'PROJECT'){
									models[x].associatedModels[y].info = populatedModels[sum].project;
								}
								if (models[x].associatedModels[y].type == 'TASK'){
									models[x].associatedModels[y].info = populatedModels[sum].task;
								}
								if (models[x].associatedModels[y].type == 'TIME'){
									models[x].associatedModels[y].info = populatedModels[sum].time;
								}
								sum++;
							}

						}
						res.json(models);
					});

				});
			});

		}

		//TODO: DEPRECIATE
		else if(req.query.user){
			Validation.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.time){
			Validation.find({time:time})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.id){
			Validation.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {

				//POPULATE
				//TODO: FRESHEN
				var promises = [];
				for (x in models[0].associatedModels){
					if (models[0].associatedModels[x].type == 'PROJECT'){
						promises.push(Project.find({id:models[0].associatedModels[x].address}).then(function(projectModels){return {project:projectModels[0]}}))
					}
					if (models[0].associatedModels[x].type == 'TASK'){
						promises.push(Task.find({id:models[0].associatedModels[x].address}).then(function(taskModels){return {task:taskModels[0]}}))
					}
					if (models[0].associatedModels[x].type == 'TIME'){
						promises.push(Time.find({id:models[0].associatedModels[x].address}).then(function(taskModels){return {time:taskModels[0]}}))
					}
				}

				Q.all(promises).then((populatedModels)=>{

					console.log(populatedModels);

					for (x in models[0].associatedModels){
						if (models[0].associatedModels[x].type == 'PROJECT'){
							var project = populatedModels.filter(function(obj){return obj.project})
							models[0].associatedModels[x].info = project[0];
						}
						if (models[0].associatedModels[x].type == 'TASK'){
							var task = populatedModels.filter(function(obj){return obj.task});
							models[0].associatedModels[x].info = task[0];
						}
						if (models[0].associatedModels[x].type == 'TIME'){
							var time = populatedModels.filter(function(obj){return obj.time});
							models[0].associatedModels[x].info = time[0];
						}
					}

					Validation.subscribe(req, models);
					res.json(models);

				});
			});
		}

		else{

			Validation.find({})
			.limit(10)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				var promises = [];
				for (x in models){
					promises.push(User.find({id:models[x].user.toString()}).then(function(userModels){return {user:userModels[0]}}));
					for (y in models[x].associatedModels){
						if (models[x].associatedModels[y].type == 'PROJECT'){promises.push(Project.find({id:models[x].associatedModels[y].address}).then(function(projectModels){return {project:projectModels[0]}}))}
						if (models[x].associatedModels[y].type == 'TASK'){promises.push(Task.find({id:models[x].associatedModels[y].address}).then(function(taskModels){return {task:taskModels[0]}}))}
						if (models[x].associatedModels[y].type == 'TIME'){promises.push(Time.find({id:models[x].associatedModels[y].address}).then(function(timeModels){return {time:timeModels[0]}}))}
					}
				}
				Q.all(promises).then((populatedModels)=>{
					var sum = 0;
					for (x in models){
						models[x].user = populatedModels[sum].user;
						sum++;
						for (y in models[x].associatedModels){
							if (models[x].associatedModels[y].type == 'PROJECT'){models[x].associatedModels[y].info = populatedModels[sum].project;}
							if (models[x].associatedModels[y].type == 'TASK'){models[x].associatedModels[y].info = populatedModels[sum].task;}
							if (models[x].associatedModels[y].type == 'TIME'){models[x].associatedModels[y].info = populatedModels[sum].time;}
							sum++;
						}
					}
					res.json(models);
				});				
			});

		}

	},

	create: function (req, res) {

		function associationBuild(model){
			var deferred = Q.defer();
			Validation.find({
				associationModels:[
					model.associationModels[0],
					model.associationModels[1]
				]
			}).then(function(validationModels){
				var associationModel = {
					context: {},
					associationModels: validation.associationModels,
				};
				//TEMP SIMPLE SUM
				for (x in validationModels){
					for (y in Object.keys(validationModels[x].validation)){
						 var context = Object.keys(validationModels[x].validation)[y];
						 associationModel.context[context] += validationModels[x].validation[context];
					}
				}
				//TEMP. SIMPLE AVERAGE
				for (x in Object.keys(associationModel.context)){
					var context = Object.keys(associationModel.context)[x];
			 		associationModel.context[context] = associationModel.context[context] / Object.keys(associationModel).length;
			 	}
			 	deferred.resolve(associationModel)
			});
			return deferred.promise;
		};

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+VALIDATION'];
			return protocolTokens;
		};

		function createAssociation(model){

			var andQuery = { 
				$and: [
					{"associatedModels.id":{$in:[model.associatedModels[0].id]}},
					{"associatedModels.id":{$in:[model.associatedModels[1].id]}}
				]
			};

			Association.native(function(err, association) {			
				association.find(andQuery).limit(100000).skip(0).sort({'createdAt':-1})
				.toArray(function (err, associationModels) {
					if (associationModels.length != 0){
						associationModels = associationModels.map(function(obj){obj.id = obj._id; return obj;});
						//Association.update({id:associationModels[0].id}, updatedModel).then((newAssociationModel)=>{
						//	Association.publishUpdate(newAssociationModel);
						//	console.log('UPDATE ASSOCIATION', newAssociationModel)
						//});
					}
					else{
						Association.create(model).then((newAssociationModel)=>{
							console.log('CREATE ASSOCIATION', newAssociationModel)
						});
					}
				});
			});
		};

		function createNotification(model){
			//SEND NOTIFICATION, BASED ON RULES ASSOCIATED MODELS .. AND NOTIFICATION SETTINGS 
			//TODO: VALIDATION NOTIFICATION
			//var notificationModel = {
			//	user: userModels[0].user,
			//	type: 'VALIDATION',
			//	title: 'New Validation',
			//	content:'New Validation for associatedModels',
			//	info:{user: userModels[0], associationModels:[]},
			//	priority:75,
			//};
			//console.log('CREATE NOTIFICATION', notificationModel)
			//Notification.create(notificationModel).then(function(notification){
			//	Notification.publishCreate(follower[0]);
			//});
		};

		//SECURITY AND PARSE REQUEST 
		var model = {
			//BY CHARTER.. ? 
			type: req.param('type'),
			content: req.param('content'),
			reputation: req.param('reputation'),
			user: req.param('user'),
			context: req.param('validation'),
			associatedModels: req.param('associatedModels'),

			reactions: {plus:0,minus:0},
			attention: {general:0},

		};

		User.find({id:model.user}).then(function(userModels){

			var reputation = {};
			model.reputation = reputation;
			console.log('CREATE VALIDATION', model);

			Validation.create(model)
			.exec(function(err, validation) {
				if (err) {return console.log(err);}
				else {

					Validation.publishCreate(validation);
					createAssociation(validation);
					createNotification(validation);
					mintTokens(validation);

					res.json(validation);

				}
			});

		});

	},

};