var Q = require('q');

module.exports = {

	getSome: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var project = req.query.project;
		var task = req.query.task;
		var user = req.query.user;
		var time = req.query.time;
		var id = req.query.id;

		Validation.watch(req);

		//DEPRECIATE?
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

		//DEPRECIATE?
		else if (req.query.task){

			//Association.find({"associatedModels.address":{$in :[task]}})

			//WORK HERE
			//THIS IS DEPRECIATED
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

		//DEPRECIATE?
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
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});

		}

	},

	//TODO | SECURITY
	//KINF OF A MESS
	create: function (req, res) {
		var model = {
			
			content: req.param('content'),
			reputation: req.param('reputation'), //SAVED USER REP
			user: req.param('user'),

			validation: req.param('validation'), //ACTUAL 'VOTE'

			//ASSOICATED MODEL {BINARY -- }
			associatedModels: req.param('associatedModels'),
			
			//PATCH
			reactions: {plus:0,minus:0},

		};

		//SHOULD DO ANOTHER FIND.. NON RELIENT ON FRONTEND DATA
		User.find({id:model.user}).then(function(userModel){
			var reputation = {};

			//TIME.FIND//  --> PREVENTS IRREVELATNT VALIDATION DIMENSIONS | TASK
			//FIND DIMENSIONS .. MATCH WITH FRONTEND INPUT
			for (x in Object.keys(model.validation)){

				//TODO | BETTER..
				if (userModel[0].reputation[Object.keys(model.validation)[x]]){

					//GENERAL SHOULD BE IN THE MAPPING --> DEPECRIETE THIS / FORMALIZE THE GENERAL REP DIMENSION & OTHER MAPPIN | WIP
					if (Object.keys(model.validation)[x] == 'general'){reputation[Object.keys(model.validation)[x]] = userModel[0].totalWork;}
					else{reputation[Object.keys(model.validation)[x]] = userModel[0].reputation[Object.keys(model.validation)[x]]}

				}

				else{reputation[Object.keys(model.validation)[x]] = 0;}

			}

			model.reputation = reputation;

			Validation.create(model)
			.exec(function(err, validation) {
				if (err) {return console.log(err);}
				else {
					console.log(validation);
					Validation.publishCreate(validation);
					res.json(validation);

					
				
					//TODO: VALIDATION NOTIFICATION
					var notificationModel = {
						user: userModel[0].user,
						type: 'VALIDATION',
						title: 'New Validation',
						content:'New Validation for associatedModels',
						info:{user: userModel[0], associationModels:[]},
						priority:75,
					};
					//Notification.create(notificationModel).then(function(notification){
					//	Notification.publishCreate(follower[0]);
					//});




					//THEN CREATE OR UPDATE ASSOCIATION
					//COULD JUST STORE IN MODEL..? ?

					//ASSOCIATION IS AVERAGE WEIGHTED VALIDATION
					//TODO: FIND
					Association.find().then((associationModels)=>{
						if (associationModels.length == 0){
							Association.create().then((associationModel)=>{
								Association.publishCreate(associationModel);
								console.log('CREATE ASSOCIATION', associationModel)
							});
						}
						else{
							//ASSOCIATION IS AVERAGE WEIGHTED VALIDATION
							var updatedModel = associationModels[0];//{}; //AVERAGE OF VALIDATIONS
							Association.update({id:associationModels[0].id}, updatedModel).then((associationModel)=>{
								Association.publishUpdate(associationModel);
								console.log('UPDATE ASSOCIATION', associationModel)
							});
						}
					});
				}
			});
		});
	},

};