/**
 * TimeController
 */

module.exports = {

	getOne: function(req, res) {
		Time.findOne(req.param('id'))
        .populate('user')
        .populate('project')
        .populate('task')
        .populate('stream')
        .then(function (model) {
			res.json(model);
        });
	},

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		if (req.query.task){
			var task = req.query.task;
			Time.find({task:task})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}

		else if(req.query.project){
			var project = req.query.project;
			Time.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Time.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}

		else{
			Time.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}

	},

	create: function (req, res) {

		//GET SESSION --> RN FRONTEND BAD SECURITY LEL
		//MASSIVE AUDIT NEEDED 

		var model = {
			amount: req.param('amount'),
			content: req.param('content'),
			tags: req.param('tags'),
			user: req.param('user'),

			stream: req.param('stream'),
			verificationScore: req.param('verificationScore'),

			//RETROACTIVE | VS CREATED AT
			startTime: req.param('startTime'),
			//source: req.param('source'), //TIME TRACK | STREAM + TIME TRACK | RETORACTIVE | API
			//HOOK IN APIS --> FITBIT FOR REST | YOUTUBE FOR STREAM? | ETC --> NEED TO IMPORT YOUTUBE STREAM CONTENT

			//TODO
			associatedModels: req.param('associatedModels'),

			//PATCH
			reactions: {plus:0,minus:0},
			
			//DEPRECIATE
			project: req.param('project'),
			task: req.param('task'),

		};

		Time.create(model)
		.exec(function(err, time) {
			if (err) {return console.log(err);}
			else {
				User.find({id:model.user}).then(function(userModel){
					userModel[0].totalWork = parseInt(userModel[0].totalWork) + parseInt(model.amount);
					User.update({id:model.user}, {totalWork:userModel[0].totalWork}).then(function(user){});

					//TODO: IMPLICIT VALIDATION ! --> TO TASK  (FOR ALL TASK DIMENSIONS && SELF DEF)

					//TODO: REQUEST TO VALIDATE NOTIFICATION
					//for (x in time.associatedModels){
					//	if (time.associatedModels[x].type == 'PROJECT'){
					//		ProjectMember.find({project:time.associatedModels.address}).then(function(projectMembers){
					//			for (x in projectMembers){
									//var notificationModel = {
									//	user: projectMembers[x],
									//	type: 'Request to Validate',
									//	content:'New Time, '+userModel.username +' is requesting validation for '+time,
									//};
									//Notification.create(notificationModel).then(function(notification){
									//	Notification.publishCreate(follower[0]);
									//});
					//			}
					//		});
					//	}
					//}

				});

				/*
				User.find().then(function(userModel){
					for (x in userModel){
						Time.find({user:userModel[x].id})
						.then(function(models) {
							if (models.length > 0){
								var sum = 0;
								for (y in models){sum += parseInt(models[y].amount)}
								User.update({id:models[0].user}, {totalWork:sum}).then(function(user){});
								console.log(sum);
							}
						});
					}
				});
				*/

				Time.publishCreate(time);
				res.json(time);
			}
		});
	},

	update: function(req, res) {
		var id = req.param('id');
		//AND CREATE VERIFICATION..
		var model = {verificationScore: 100};
		Time.update({id: id}, model).exec(function afterwards(err, updated){
		  if (err) {return;}
		});
	},
	
};

