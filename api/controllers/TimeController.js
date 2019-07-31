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
						//PATCH
						if (!models[x].user){models[x].user ='57ab77fa804f7c11002a78db'}
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
				//var promises = [];
				//for (x in models){
				//	Association.native(function(err, association) {
				//		association.find({"associatedModels.address":{$in :[models[x].id]}})
				//		.limit(1000)
				//		.skip(0)
				//		.sort({'createdAt':-1})
				//		.toArray(function (err, associationModels) {
				//			return associatedModels
				//			console.log(associationModels);
				//		});
				//	});
				//}
				res.json(models);
			});
		}
	},

	create: function (req, res) {


		//TIME CENTRIC
		function createValidation(validationModel, userModel){

			//TODO: CHARTER / CONNETION
			//UNIFY STRUCT
			//IS THIS HYPERGRAPH (NO)
			//(TIME <--> TASK) <~~> PROJ . . .association chains

			var newValidation = {
				content:'TIME '+ time.id + ' VALIDATION',
				reputation: {},
				associatedModels: [
					{type:'TIME', id:time.id},
					validationModel.associatedModels[0]
				],

				type:'HUMAN',
				parameters:{charter:'STANDARD MULTIPLICATIVE'},

				//UNIFT CONTEXT AND VALIDATION
				context:{},
				validation:{},

				//UNIFY AND ALLOW FOR PROJECT TO CREATE
				user: userModel[0].id,
				creator: userModel[0].id,

				//APPS - DATA
				reactions: {plus:0,minus:0},
				attention:{general:0}

			};

			//UNIFY .validation and .context
			for (y in Object.keys(validationModel.validation)){
				var context = Object.keys(model.validationModel.validation)[y];
				model.validationModel.reputation[context] = userModel[0].reputation[context] || 0;
			}

			Validation.create(newValidation).then(function(newValidationModel){
				
				console.log('CREATE VALIDATION', newValidationModel);

				//COMPUTE ASSOCIATION HERE
				var newAssociationModel = {}; 

				//FIND ALL VALIDATIONS FOR SPECIFIC ASSOCIATED MODELS
				Validation.native(function(err, validation) {

					console.log(validationModel);

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

									var newAssociationModel = {

										associatedModels: validationModels[0].associatedModels,
										type: validationModels[0].type,
										charterParams: validationModels[0].charterParams,

										creator: validationModels[0].creator,
										user: validationModels[0].user,

										reactions: validationModels[0].reactions,

									};

									//CHARTER - CONNECTION HERE
									for (x in validationModels){newAssociationModel.context = validationModels[x].validation;}

									Association.create(newAssociationModel).then(function(association){
										console.log('CREATED ASSOCIATION', association);
										Association.publishCreate(association);
									});

								}

								else{

									var newAssociationModel = {

										associatedModels: validationModels[0].associatedModels,
										type: validationModels[0].type,
										charterParams: validationModels[0].charterParams,

										creator: validationModels[0].creator,
										user: validationModels[0].user,

										reactions: validationModels[0].reactions,
									};

									//CHARTER - CONNECTION HERE
									for (x in validationModels){newAssociationModel.context = validationModels[x].validation;}

									Association.update({id:associationModels[0]._id, newAssociationModel}).then(function(association){
										console.log('UPDATED ASSOCIATION', association);
										Association.publishCreate(association);
									});

								}

							});

						});
						
					});

				});
				
			});

		};


		//PROJECTMEMBER TO PROJECT-MEMBER
		//REQUEST TO VALIDATE NOTIFICATION
		//CREATE NOTIFICATION
		function createNotification(model){
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
		};


		//TODO: SECURITY - PERMISSIONS.. AUTH
		var model = {

			amount: req.param('amount'),

			content: req.param('content'),

			stream: req.param('stream'),
			source: req.param('source'), 
			startTime: req.param('startTime'),

			associatedModels: req.param('associatedModels'),

			//UNIFY
			user: req.param('user'),
			creator: req.param('creator'),
			
			//DEPRECIATE - IS COMPUTED 
			tags: req.param('tags'),

			//TODO: APP - DATA
			reactions: {plus:0,minus:0},
			attention:{general:0}
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
					//ALWAYS UPDATE BALANCE MAPPING
					userModel[0].totalWork = parseInt(userModel[0].totalWork) + parseInt(model.amount);
					User.update({id:model.user}, {totalWork:userModel[0].totalWork}).then(function(user){});

					//HMM
					//JSON.PARSE?
					var validationModels = req.param('associatedModels');

					for (x in validationModels){
						createValidation(validationModels[x], userModel);
					}

					console.log(model.validationModels);

					for (x in time.associatedModels){
						if (time.associatedModels[x].type == 'PROJECT'){createNotification(timeModel, userModel)}
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

