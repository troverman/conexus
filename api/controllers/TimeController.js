/**
 * TimeController
 */
var Q = require('q');

module.exports = {

	getSome: function(req, res) {

		//TODO: COMPLEX QUERIES..
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var task = req.query.task;
		var project = req.query.project;
		var user = req.query.user;
		var id = req.query.id;

		console.log('GET TIME', req.query)

		if (req.query.id){
			Time.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.then(function(models) {
				res.json(models[0]);
			});
		}

		else if (req.query.task){

			//ASSOCIATEDMODLES IS A COMPUTED VALUE VIA VAIDATION
			//BRIDGE THOUGH ASSOCIATES TO GET THIS '''CLEAN'''

			Time.native(function(err, time) {			
				time.find({"associatedModels.address":{$in :[task]}})
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
					}

					Q.all(promises).then((populatedModels)=>{
						for (x in models){models[x].user = populatedModels[x].user;}
						res.json(models);
					});

				});
			});

		}

		//OKAY --> HMM 
		else if(req.query.project){
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

		//OKAY.. CREATOR? 
		else if(req.query.user){
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

		//TODO: SECURITY
		var model = {

			amount: req.param('amount'),

			user: req.param('user'),
			creator: req.param('creator'),

			content: req.param('content'),

			type: req.param('type'),
			source: req.param('source'), 
			startTime: req.param('startTime'),

			associatedModels: req.param('associatedModels'),




			validationModel: req.param('validationModel'),
			tags: req.param('tags'),





			//TODO: BETTER
			reactions: {plus:0,minus:0},

			//DEPRECIATE
			project: req.param('project'),
			task: req.param('task'),
			stream: req.param('stream'),

		};

		console.log('CREATE TIME', model)

		Time.create(model)
		.exec(function(err, time) {
			if (err) {return console.log(err);}
			else {

				Time.publishCreate(time);
				res.json(time);

				User.find({id:model.user}).then(function(userModel){
					
					//UPDATE TOTAL WORK
					userModel[0].totalWork = parseInt(userModel[0].totalWork) + parseInt(model.amount);
					User.update({id:model.user}, {totalWork:userModel[0].totalWork}).then(function(user){});

					console.log('associatedModels', model.associatedModels);


					//BINARY RELATION BRUH
					//MB VALIDATIONMODELS

					//SELF TAGS IN TIME
					for (x in time.tags.split(',')){
						console.log('self dimension', time.tags.split(',')[x]);
					}

					//TAGS IN ASSOCIATED MODEL.. TASK . . . 
					for (x in time.associatedModels){
						console.log('association time', time.associatedModels[x]);
					}


				

					//WHAT ARE THE DIMENSIONS?
					//COMPUTE THIS FROM THE ASSOCIATION MODELS.. --> TIME <--> TASK <--> PROJECT

					var validationModel = {
						conntent:'TIME '+ time.id + ' VALIDATION',
						validation:{

						},
						reputation:{

						},
						associatedModels: [
							{type:'TIME', address:time.id},

						],
						reactions: {plus:0,minus:0},
						user: req.param('user'),
					};
				
					//Validate.create(validationModel).then(function(validation){
					//	console.log('CREATED IMPLICIT VALIDATION', validation);


						//COMPUTE ASSOCIATION HERE



					//});

					//REQUEST TO VALIDATE NOTIFICATION
					//CREATE NOTIFICATION
					//WHICH PROJECTS FOR MULTI ASSOCIATION
					for (x in time.associatedModels){
						if (time.associatedModels[x].type == 'PROJECT'){
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
						}
					}

				});

			}
		});
	},

	update: function(req, res) {
		var id = req.param('id');
		//var model = {};
		//Time.update({id: id}, model).exec(function afterwards(err, updated){
		//  if (err) {return;}
		//});
	},
	
};

