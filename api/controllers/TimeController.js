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
		//PERMISSIONS.. AUTH

		var model = {

			amount: req.param('amount'),

			user: req.param('user'),
			creator: req.param('creator'),

			content: req.param('content'),

			type: req.param('type'),
			source: req.param('source'), 
			startTime: req.param('startTime'),

			associatedModels: req.param('associatedModels'),

			validationModels: req.param('validationModels'),
			tags: req.param('tags'),

			//TODO: BETTER
			reactions: {plus:0,minus:0},

			//DEPRECIATE
			//project: req.param('project'),
			//task: req.param('task'),
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
					
					for (x in model.validationModels){

						model.validationModels[x].content = 'TIME '+ time.id + ' VALIDATION';

						//BASED ON PROJECT.. LOOK UP CHARTER.. AND TYPE OF REP CONTEXT INTERACTION
						//LOOK UP FOR TOKEN STRINGS.. LONG FORM
						//BINARY MODELS VS ASSOCIATED MODELS? --> META VALIDATION MODE
						//ASSOCIATION BETWEEEN ASSOCIATION AND MODEL
						//(TIME <--> TASK) <~~> PROJ . . .association chains

						//SELF VALIDATION (TIME <--> TIME)
						//for (x in time.tags.split(',')){
						//	console.log('self dimension', time.tags.split(',')[x]);
						//}

						model.validationModels[x].reputation = {};
						//console.log(model.validationModels[x])
						//console.log(model.validationModels[x].associatedModels)

						model.validationModels[x].associatedModels.push({type:'TIME', address:time.id});

						// = [
						//	{type:'TIME', address:time.id},
							//{type:'TASK', address:time.id},
							//{type:'PROJECT', address:time.id},
						//];

						model.validationModels[x].type = 'MULTIPLICATIVE';
						model.validationModels[x].parameters = 'STANDARD';

						model.validationModels[x].user = userModel[0].id;
						model.validationModels[x].creator = userModel[0].id;
						model.validationModels[x].reactions = {plus:0,minus:0};

						for (y in Object.keys(model.validationModels[x].validation)){
							var context = Object.keys(model.validationModels[x].validation)[y];
							model.validationModels[x].reputation[context] = userModel[0].reputation[context] || 0;
						}

						Validation.create(model.validationModels[x]).then(function(validation){
							
							console.log('CREATED IMPLICIT VALIDATION', validation);
							//COMPUTE ASSOCIATION HERE
							var newAssociationModel = {};

							//Validation.find({associationModels:{}).then(function(){
							//});

							//Association.find().then(function(associationModels){

								//if (associationModels.length == 0){
									//Association.create(newAssociationModel).then(function(association){
										//Association.publishCreate(association);
									//});
								//}

								//else{
									//Association.update({id:associationModels[0].id, newAssociationModel}).then(function(association){
										//Association.publishCreate(association);
									//});
								//}

							//});

						});

					}

					console.log(model.validationModels);

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

