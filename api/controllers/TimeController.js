/**
 * TimeController | TIME PROTOCOL
 */
var Q = require('q');

module.exports = {

	//STANDARDIZE GET
	get: function(req, res) {

		//TODO: COMPLEX QUERIES..
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var task = req.query.task;
		var user = req.query.user;
		var id = req.query.id;

		Time.watch(req);

		console.log('GET TIME', req.query)

		if (req.query.id){
			Time.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				//POPULATE ASSOCIATED MODELS 
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

		//OKAY.. CREATOR? 
		else if(req.query.user){
			Time.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
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
			.then(function(models) {
				res.json(models);
			});
		}
	},

	create: function (req, res) {


		//TIME CENTRIC
		//TODO: REDUCE TO ONE OBJ PARAM
		function createValidation(model, validationModel){

			//TODO: CHARTER / CONNETION
			//UNIFY STRUCT
			//IS THIS HYPERGRAPH (NO)
			//(TIME <--> TASK) <~~> PROJ . . .association chains

			var newValidation = {
				content:'TIME '+ model.id + ' VALIDATION',
				reputation: {},
				associatedModels: [
					{type:'TIME', id:model.id},
					validationModel.associatedModels[0]
				],

				type:'HUMAN',
				parameters:{charter:'STANDARD MULTIPLICATIVE'},

				//UNIFT CONTEXT AND VALIDATION
				context:{},
				validation:{},

				//UNIFY AND ALLOW FOR PROJECT TO CREATE
				user: model.user.id,
				creator: model.user.id,

				//APPS - DATA
				reactions: {plus:0,minus:0},
				attention:{general:0}

			};

			//UNIFY .validation and .context
			for (y in Object.keys(validationModel.validation)){
				var context = Object.keys(model.validationModel.validation)[y];
				model.validationModel.reputation[context] = model.user.reputation[context] || 0;
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


		//REMOVE 'STRING' APPARENTlY ie what is saved is 
		//'CRE8+TIME+GOOD' vs CRE8+TIME+GOOD
		function mintTokens(model){

			//GET PROTOCOL????????
			//STATIC CODE

			var timeProtocolTokens = getProtocolTokens(model);


			//ASYNC SCOPING IS THE FIX IT SEEMS
			for (x in timeProtocolTokens){

				var tokenString = timeProtocolTokens[x];
				console.log(tokenString);

				(function(tokenString) {

					Token.find({string:tokenString}).then(function(tokenModels){

						if (tokenModels.length == 0){

							var newTokenModel = {
								string:tokenString,
								protocols:['CRE8','TIME'], 
								information:{inCirculation:model.amount, markets:0},
								//ENCODE?
								logic:{transferrable:true, mint:'CREATE TIME'}
							};

							Token.create(newTokenModel).then(function(model){console.log('TOKEN CREATED', model.string);});


							model.user.balance[tokenString] = parseFloat(model.amount);
							//PERHAPS NEW MODEL
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){
								console.log('USER BALANCE UPDATED', user);
							});

						}

						else{

							tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 

							Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(model){console.log('TOKEN UPDATED', model)});

							if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
							else{model.user.balance[tokenString] = parseFloat(model.amount);}

							//DEPRECIATE REPUTATION
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){
								console.log('USER BALANCE UPDATED', user);
							});

						}

					});

				})(tokenString);

			}

			//UPDATE BALANCE AND REP ETC
			//UPDATE TOTAL WORK
			//ALWAYS UPDATE BALANCE MAPPING
			model.user.totalWork = parseInt(model.user.totalWork) + parseInt(model.amount);
			User.update({id:model.user.id}, {totalWork:model.user.totalWork}).then(function(user){});

		};

		//HMM
		//TODO: SUPERSET REP

		//FACTOR TO RETURN TOKEN MODEL 

		function getProtocolTokens(model){


			//TODO VALIDATION..
			//TODO: (LONG FORM) ASSOCIATION

			//CHECK CONNECTION .. IE PROJECT TOKS

			//DEPRECIATE TAGS
			//SHOULD BE DB.. AAND OR LOGIC.. AND OR CODE
			//ENCODE MODEL
			var timeProtocolTokens = ['CRE8', 'CRE8+TIME', 'CRE8+TIME+'+model.id];

			if (model.tags){
				for (x in model.tags.split(',')){

					timeProtocolTokens.push(model.tags.split(',')[x].toUpperCase());
					timeProtocolTokens.push('CRE8+TIME+'+model.tags.split(',')[x].toUpperCase());
					
				}
			}

			return timeProtocolTokens;

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
			creator: req.param('user'),
			
			//DEPRECIATE - IS COMPUTED 
			tags: req.param('tags'),
			model: 'TIME',

			//TODO: APP - DATA
			reactions: {plus:0,minus:0},
			attention:{general:0}
			
		};

		//TODO: BETTER SOON - && SECURITY
		User.find({id:model.user}).then(function(userModel){

			console.log('CREATE TIME', model)

			Time.create(model)
			.exec(function(err, time) {
				if (err) {return console.log(err);}
				else {

					time.user = userModel[0];
	
					//JSON.PARSE?
					var validationModels = req.param('associatedValidations');

					//CREATE VALIDATIONS
					for (x in validationModels){createValidation(time, validationModels[x]);}

					//CREATE NOTIFICATIONS
					for (x in time.associatedModels){
						if (time.associatedModels[x].type == 'PROJECT'){createNotification(time)}
					}


					Time.publishCreate(time);

					//MINT TOKENS
					mintTokens(time);

					res.json(time);

				}

			});

		});

	}

};

