var Q = require('q');

module.exports = {

	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var task = req.query.task;
		var user = req.query.user;
		var time = req.query.time;
		var id = req.query.id;

		console.log('GET VALIDATION', req.query)

		Validation.watch(req);

		if(req.query.id){

			Validation.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {

				var promises = [];
				for (x in models[0].associatedModels){
					if (models[0].associatedModels[x].type == 'ACTION'){promises.push(Action.find({id:models[0].associatedModels[x].id}).then(function(actionModels){return {action:actionModels[0]}}))}
					if (models[0].associatedModels[x].type.includes("APP")){promises.push(App.find({id:models[0].associatedModels[x].id}).then(function(appModels){return {app:appModels[0]}}))}
					if (models[0].associatedModels[x].type == 'CONTENT'){promises.push(Content.find({id:models[0].associatedModels[x].id}).then(function(contentModels){return {content:contentModels[0]}}))}
					if (models[0].associatedModels[x].type == 'ITEM'){promises.push(Item.find({id:models[0].associatedModels[x].id}).then(function(itemModels){return {item:itemModels[0]}}))}
					if (models[0].associatedModels[x].type == 'MEMBER'){promises.push(User.find({id:models[0].associatedModels[x].id}).then(function(memberModels){return {member:memberModels[0]}}))}
					if (models[0].associatedModels[x].type == 'PROJECT'){promises.push(Project.find({id:models[0].associatedModels[x].id}).then(function(projectModels){return {project:projectModels[0]}}))}
					if (models[0].associatedModels[x].type == 'TASK'){promises.push(Task.find({id:models[0].associatedModels[x].id}).then(function(taskModels){return {task:taskModels[0]}}))}
					if (models[0].associatedModels[x].type == 'TIME'){promises.push(Time.find({id:models[0].associatedModels[x].id}).then(function(taskModels){return {time:timeModels[0]}}))}
					if (models[0].associatedModels[x].type == 'TRANSACTION'){promises.push(Transaction.find({id:models[0].associatedModels[x].id}).then(function(transactionModels){return {transaction:transactionModels[0]}}))}
					if (models[0].associatedModels[x].type == 'VALIDATION'){promises.push(Validation.find({id:models[0].associatedModels[x].id}).then(function(validationModels){return {validation:validationModels[0]}}))}
				}

				Q.all(promises).then((populatedModels)=>{

					for (x in models[0].associatedModels){

						if (models[0].associatedModels[x].type.includes("APP")){
							var app = populatedModels.filter(function(obj){return obj.app})
							models[0].associatedModels[x].info = app[0];
						}
						if (models[0].associatedModels[x].type == 'CONTENT'){
							var content = populatedModels.filter(function(obj){return obj.content})
							models[0].associatedModels[x].info = content[0];
						}
						if (models[0].associatedModels[x].type == 'ITEM'){
							var item = populatedModels.filter(function(obj){return obj.item})
							models[0].associatedModels[x].info = item[0];
						}
						if (models[0].associatedModels[x].type == 'MEMBER'){
							var member = populatedModels.filter(function(obj){return obj.member})
							models[0].associatedModels[x].info = member[0];
						}
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

					//find association parent. . . .

					Validation.subscribe(req, models);
					res.json(models);

				});
			});

		}

		else if (req.query.association){
			var association = req.query.association;
			Validation.native(function(err, validation) {
				validation.find({
					$or:[
						{$and:[
							{"associatedModels.id": {$in :[association[0]]}},
							{"associatedModels.id": {$in :[association[1]]}},
						]},
						{$and:[
							{"associatedModels.id": {$in :[association[1]]}},
							{"associatedModels.id": {$in :[association[0]]}},
						]}
					]
				})
				.limit(1000)
				.skip(0)
				.sort({'createdAt':-1})
				.toArray(function (err, validationModels) {
					console.log(validationModels)
					validationModels = validationModels.map(function(obj){obj.id = obj._id; return obj;});
					res.json(validationModels);
				});
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
						console.log('HELLO');
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
			var notificationModel = {
				//user: userModels[0].user,
				type: 'VALIDATION',
				title: 'New Validation',
				content:'New Validation for associatedModels',
				//data:{apps:{user: userModels[0], associationModels:[]}},
				priority:75,
			};
			//console.log('CREATE NOTIFICATION', notificationModel)
			//Notification.create(notificationModel).then(function(notification){
			//	Notification.publishCreate(follower[0]);
			//});
		};

		var model = {
			model: 'VALIDATION',

			connection: req.param('connection'),
			type: req.param('type'),

			content: req.param('content'),

			user: req.param('user'),
			creator: req.param('creator'),

			context: req.param('validation'),
			reputation: req.param('reputation'),

			associatedModels: req.param('associatedModels'),

			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
			
		};

		User.find({id:model.user}).then(function(userModels){

			var reputation = {};
			//model.reputation = userModels[0].reputation;
			//getReputationFunction.. --> REP MANI IMPORT
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