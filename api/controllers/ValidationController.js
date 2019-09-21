//CRE8.VALIDATION
const Q = require('q');

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

					Validation.subscribe(req, [models[0].id]);
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
					console.log(validationModels);
					validationModels = validationModels.map(function(obj){obj.id = obj._id.toString(); return obj;});
					console.log(validationModels.map(function(obj){return obj.id;}))
					Validation.subscribe(req, validationModels.map(function(obj){return obj.id;}));
					res.json(validationModels);
				});
			});
		}

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

						promises.push(User.find({id:models[x].user.toString()}).then(function(userModels){return {user:userModels[0]}}));

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

		else if(req.query.user){
			Validation.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Validation.subscribe(req, models.map((obj)=>obj.id));
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
				Validation.subscribe(req, models.map((obj)=>obj.id));
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
			deferred.resolve([]);
			return deferred.promise;
		};

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+VALIDATION'];
			return protocolTokens;
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
								newAssociationModel.model = 'ASSOCIATION';
								newAssociationModel.user = newValidationModel.user.id;
								Association.create(newAssociationModel).then(function(association){
									console.log('CREATED ASSOCIATION', association);
									Association.publish([association.id], {verb: 'update', data: association});
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

		function createNotification(user, model){
			//NOTIFICATIONS APP-MEMBER ASSOCIATION
				//FIND PRIORITY MAPPINGS
					//TYPE IS IN MODEL 
						//GLOBAL FX
			//USER.FIND --> IF USER NOTIFICATION PERMISSION
			var notificationModel = {
				user: user,
				type: 'VALIDATION',
				title: 'Request to Join',
				content:'New Member, '+model.user.username +' is requesting membership validation for '+model.project.title,
				priority: 100,
				isRead: false,
				data:{
					apps:{
						member:model.user.id, 
						project:model.project.id
					},
				}
			};
			Notification.create(notificationModel).then(function(notification){
				console.log('CREATE NOTIFICATION', notification);
				Notification.publish([notification[0].id], {verb: 'create', data: associationModels[0].id});
			});
		};

		var model = {
			model: 'VALIDATION',

			connection: req.param('connection'),
			content: req.param('content'),

			user: req.param('user'),
			creator: req.param('creator'),

			context: req.param('context'),
			associatedModels: req.param('associatedModels'),

			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};

		if(!model.connection){
			model.connection = {
				id:1,
				type:'HUMAN',
				title:'STANDARD MULTI, AGNOSTIC MODELS',
				parameters:{
					mapping:['context','reputation','computed'],
					logic:'context[%context]*reputation[%context]'
				},
			};
			//CONNECTION DEFINED MAPPINGS
			for (y in model.connection.parameters.mapping){
				if(!model[model.connection.parameters.mapping[y]]){
					model[model.connection.parameters.mapping[y]] = {};
				}
			}
		}

		User.find({id:model.user}).then(function(userModels){

			console.log('CREATE VALIDATION', model);

			Validation.create(model)
			.exec(function(err, validation) {
				if (err) {return console.log(err);}
				else {

					validation.user = userModels[0];
					Validation.subscribe(req, [validation.id]);
					Validation.publish([validation.id], {verb: 'create', data: validation.id});

					createAssociation(validation);
					createNotification(validation);

					//NOTIFICATION TYPES --> IN CONNECTION FOR NON HARDCODE..
					//HARDCODE IS THIS
					//Association.find({}).then(function(associationModels){});
					//ProjectMember.find({project:model.project}).then(function(projectMembers){
					//	projectMember.user = userModels[0];
					//	projectMember.project = projectMembers[0];
					//	projectMembers = projectMembers.filter(function(obj){return obj.user !== userModels[0].id;});
					//	for (x in projectMembers){createNotification(projectMember, projectMembers[x]);}
					//});

					mintTokens(validation);
					res.json(validation);

					//UPDATE COUNTS..
					//STORED IN APPS?
					//data:{
						//apps:{
						//	associations:{
						//		tasks:0
						//	}
						//}
					//}

				}
			});

		});

	},

};