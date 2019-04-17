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

		if (req.query.id){
			Time.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.then(function(models) {
				console.log(models[0])
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

	//IM GOING TO TAKE A BREAK AND COME BACK TO THE IMPLICT VALIDATION
	create: function (req, res) {

		//TODO: SECURITY
		var model = {
			amount: req.param('amount'),
			//creator
			user: req.param('user'),
			type: req.param('type'), //RETROACTIVE | VS CREATED AT
			startTime: req.param('startTime'),

			source: req.param('source'), //TIME TRACK | STREAM + TIME TRACK | RETORACTIVE | API

			//FITBIT FOR REST | YOUTUBE FOR STREAM? | ETC --> NEED TO IMPORT YOUTUBE STREAM CONTENT
			content: req.param('content'),

			tags: req.param('tags'), // computed validations
			associatedModels: req.param('associatedModels'),
			reactions: {plus:0,minus:0},

			//DEPRECIATE
			project: req.param('project'),
			task: req.param('task'),
			stream: req.param('stream'),
		};

		Time.create(model)
		.exec(function(err, time) {
			if (err) {return console.log(err);}
			else {
				User.find({id:model.user}).then(function(userModel){
					
					userModel[0].totalWork = parseInt(userModel[0].totalWork) + parseInt(model.amount);
					User.update({id:model.user}, {totalWork:userModel[0].totalWork}).then(function(user){});

					//TODO:IMPLICIT VALIDATION

					//TIME.FIND//  --> PREVENTS IRREVELATNT VALIDATION DIMENSIONS | TASK
					//for (x in Object.keys(model.validation)){
						//TODO | BETTER..
					//	if (userModel[0].reputation[Object.keys(model.validation)[x]]){
							//GENERAL SHOULD BE IN THE MAPPING --> DEPECRIETE THIS / FORMALIZE THE GENERAL REP DIMENSION & OTHER MAPPIN | WIP
					//		if (Object.keys(model.validation)[x] == 'general'){reputation[Object.keys(model.validation)[x]] = userModel[0].totalWork;}
					//		else{reputation[Object.keys(model.validation)[x]] = userModel[0].reputation[Object.keys(model.validation)[x]]}
					//	}
					//	else{reputation[Object.keys(model.validation)[x]] = 0;}
					//}
					model.reputation = reputation;

					var validationModel = {
						conntent:'IMPLICIT VALIDATION ON TIME CREATE' + time.id,
						validation:{}, //model.tags + tags of task ? 
						reputation:{

						}, //user.rep based on ^
						associatedModels: [
							//WHAT TASK.. WHAT CONTEXT?? ALL ? THAT'S A SET OF VALIDATIONS.. --> EMBED THIS IN UI
							//{type:'TASK',address:model.id},
							//FRONTEND INPUT .. SELECT TASK.. AND CONTEXT.. MULTIPLE IF YA WANT!
							{type:'TIME',address:time.id}
						],
						reactions: {plus:0,minus:0},
						user: req.param('user'),
					};
				
					//Validate.create(validationModel).then(function(validation){
					//	console.log('CREATED IMPLICIT VALIDATION', validation);
					//});

					//TODO: REQUEST TO VALIDATE NOTIFICATION

					for (x in time.associatedModels){
						if (time.associatedModels[x].type == 'PROJECT'){

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

						}
					}

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
		var model = {};
		Time.update({id: id}, model).exec(function afterwards(err, updated){
		  if (err) {return;}
		});
	},
	
};

