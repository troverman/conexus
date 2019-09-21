//CRE8.TIME
const Q = require('q');

module.exports = {

	//STANDARDIZE GET
	get: function(req, res) {

		function getAssociations(model){
			var deferred = Q.defer();
			Association.native(function(err, association) {
				association.find({$and : [{"associatedModels.id": {$in:[model.id]}}]})
				.limit(1000)
				.skip(0)
				.sort({'createdAt':-1})
				.toArray(function (err, associationModels) {
					if (associationModels.length > 0){
						associationModels.map(function(obj){obj.id=obj._id; return obj});
						model.associationModels = associationModels;
						console.log(model)
						deferred.resolve(model);
					}
					else{deferred.resolve(model);}
				});
			});
			return deferred.promise;
		};

		//TODO: COMPLEX QUERIES..
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var task = req.query.task;
		var user = req.query.user;
		var id = req.query.id;

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
				//getAssociations(models[0]).then(function(models){res.json(models);});
			});
		}

		//DEPRECIATE TO ASSOCIATED MODELS
		else if (req.query.task){
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
					var promises = [];
					for (x in models){
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

		else if(req.query.project){res.json([]);}

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

		function createEvent(model){
			var eventModel = {
				type:'create',
				model:{
					id:model.id,
					type:model.model
				},
				data:{},
			};
			Event.create(eventModel);
		};

		//TIME CENTRIC
		//TODO: REDUCE TO ONE OBJ PARAM
		function createValidation(model){

			//TODO: CHARTER / CONNETION
			//UNIFY STRUCT
			//IS THIS HYPERGRAPH (NO)
			//(TIME <--> TASK) <~~> PROJ . . .association chains
			for (x in model.associatedModels){

				var newValidation = {
					content:'TIME '+ model.id + ' VALIDATION',
					context:{},
					reputation: {},
					user: model.user.id,
					creator: model.user.id,
					data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
				};

				//GET CONNECTION
				newValidation.connection = {
					type:'HUMAN',
					parameters:{charter:'STANDARD MULTIPLICATIVE'},
				};

				var associatedModelObj = {};
				if (model.associatedModels[x].id.toLowerCase() == 'self'){associatedModelObj = {type:model.model, id:model.id}}
				else{associatedModelObj = {
					type:model.associatedModels[x].type,
					id:model.associatedModels[x].id};
				}
				newValidation.associatedModels = [
					{type:model.model, id:model.id},
					associatedModelObj
				];

				//LIST -> OBJ
				for (y in model.associatedModels[x].context){
					newValidation.context[model.associatedModels[x].context[y].text] = model.associatedModels[x].context[y].score;
				}

				Validation.create(newValidation).then(function(newValidationModel){
					console.log('CREATE VALIDATION', newValidationModel);
					createAssociation(newValidationModel);			
				});

			}

		};

		function createAssociation(newValidationModel){
			var newAssociationModel = {}; 
			Validation.native(function(err, validation) {
				validation.find({
					$and : [
						{"associatedModels.id": {$in :[newValidationModel.associatedModels[0].id]}}, 
						{"associatedModels.id": {$in :[newValidationModel.associatedModels[1].id]}}
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
								Association.create(newAssociationModel).then(function(association){
									console.log('CREATED ASSOCIATION', association);
									Association.publish([association.id], {verb: 'create', data: association});
								});
							}
							else{
								console.log('ASSOCIATION EXISTS -- COMPUTE');
							}
						});
					});
				});
			});
		};

		function createNotification(model){
			//REQUEST TO VALIDATE (ASSOCITION TRAVERSE)
			//TO MEMBERS OF PROJECT
			//TO FOLLOWERS OF MEMBER..
			//TO NOTIFICATION PERMS
		};

		function mintTokens(model){

			var timeProtocolTokens = getProtocolTokens(model);

			//ASYNC SCOPING IS THE FIX IT SEEMS
			for (x in timeProtocolTokens){

				var tokenString = timeProtocolTokens[x];

				(function(tokenString) {

					Token.find({string:tokenString}).then(function(tokenModels){

						if (tokenModels.length == 0){

							var newTokenModel = {
								string:tokenString,
								protocols:['CRE8','TIME'], 
								information:{inCirculation:model.amount, markets:0},
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

		//FACTOR TO RETURN TOKEN MODEL 
		function getProtocolTokens(model){
			//TODO VALIDATION..
			//TODO: (LONG FORM) ASSOCIATION
			var timeProtocolTokens = ['CRE8', 'CRE8+TIME', 'CRE8+TIME+'+model.id];
			return timeProtocolTokens;

		};

		//TODO: SECURITY - PERMISSIONS.. AUTH
		var model = {
			model: 'TIME',

			amount: req.param('amount'),

			content: req.param('content'),

			stream: req.param('stream'),
			source: req.param('source'), 
			startTime: req.param('startTime'),

			//associatedModels: req.param('associatedModels'),
			context: req.param('context'),

			//UNIFY
			user: req.param('user'),
			creator: req.param('user'),
		
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}

		};

		//TODO: BETTER SOON - && SECURITY
		User.find({id:model.user}).then(function(userModels){

			console.log('CREATE TIME', model)

			Time.create(model)
			.exec(function(err, time) {
				if (err) {return console.log(err);}
				else {

					time.associatedModels = req.param('associatedModels');
					time.user = userModels[0];

					Time.publish([time.id], {verb: 'create', data: time});
					createEvent(time);
					createNotification(time);
					createValidation(time);
					mintTokens(time);
					res.json(time);

				}

			});
		});
	}

};

