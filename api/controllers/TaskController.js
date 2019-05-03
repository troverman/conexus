var Q = require('q');
module.exports = {

	getSome: function(req, res) {

		var limit = parseInt(req.query.limit);
		var skip = parseInt(req.query.skip);
		var sort = req.query.sort;
		var project = req.query.project;
		var search = req.query.search;
		var tag = req.query.tag;
		var id = req.query.id;
		var user = req.query.user;

		console.log('GET TASK', req.query);

		if(req.query.id){
			Task.find({id:id})
			.populate('project')
			.then(function(models) {
				res.json(models[0]);
			});
		}

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
				Task.subscribe(req, models);
				res.json(models);
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
				Task.subscribe(req, models);
				res.json(models);
			});
		}
	},

	//TODO
	create: function (req, res) {
		var model = {

			title: req.param('title'),
			content: req.param('content'),
			tags: req.param('tags'),
			location: req.param('location'),
			associatedModels: req.param('associatedModels'),
			validationModels: req.param('validationModels'),

			user: req.param('user'),

			//DEPRECIATE
			project: req.param('project'),

			//PATCH
			reactions: {plus:0,minus:0},

		};
		console.log('CREATE TASK', model);
		Task.create(model)
		.exec(function(err, task) {
			if (err) {return console.log(err);}
			else {

				User.find({id:model.user}).then(function(userModel){

					Task.publishCreate(task);
					res.json(task);

					//ALWAYS ASSOCIATED TO SELF 
					//for (x in model.validationModels){
						//model.validationModels[x].content = 'TASK '+ task.id + ' VALIDATION';
						//model.validationModels[x].reputation = {};
						//model.validationModels[x].associatedModels.push({type:'TASK', address:task.id});
						//model.validationModels[x].type = 'MULTIPLICATIVE';
						//model.validationModels[x].parameters = 'STANDARD';
						//model.validationModels[x].user = userModel[0].id;
						//model.validationModels[x].creator = userModel[0].id;
						//model.validationModels[x].reactions = {plus:0,minus:0};
						//for (y in Object.keys(model.validationModels[x].validation)){
							//var context = Object.keys(model.validationModels[x].validation)[y];
							//model.validationModels[x].reputation[context] = userModel[0].reputation[context] || 0;
						//}
						//Validation.create(model.validationModels[x]).then(function(validation){
						//	console.log('CREATED IMPLICIT VALIDATION', validation);
						//	var newAssociationModel = {};
						//});
					//}

					//console.log(model.validationModels);

					//REQUEST TO VALIDATE NOTIFICATION
					//for (x in task.associatedModels){
						//if (task.associatedModels[x].type == 'PROJECT'){
							//ProjectMember.find({project:time.associatedModels.address}).then(function(projectMembers){
								//for (x in projectMembers){
									//var notificationModel = {
									//	user: projectMembers[x],
									//	type: 'Request to Validate',
									//	content:'New Time, '+userModel.username +' is requesting validation for '+time,
									//};
									//Notification.create(notificationModel).then(function(notification){
									//	Notification.publishCreate(follower[0]);
									//});
								//}
							//});
						//}
					//}

				});

			}
		});
	},

	//TODO
	update:function (req, res) {},

};

