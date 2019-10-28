//CRE8.TIME
const crypto = require('crypto');
const Q = require('q');

module.exports = {

	//import: { request: require('request') },
	connections:[],
	//type CRE8_TIME
	dataModel:[],
	language: 'Javascript',
	compiler:'V8',
	tokens:{},

	get: function(req, res) {

		function getAssociations(model){
			var deferred = Q.defer();
			Association.getDatastore().manager.collection('association')
			.find({$and : [{"associatedModels.id": {$in:[model.id]}}]})
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, associationModels) {
				console.log(associationModels)
				if (associationModels.length > 0){
					associationModels.map(function(obj){obj.id=obj._id; return obj});
					model.associationModels = associationModels;
					model.context = {};
					var promises = [];
					for (x in model.associationModels){
						for (y in associationModels[x].associatedModels){
							if (associationModels[x].associatedModels[y].type=='ACTION'){promises.push(Action.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='APP'){promises.push(App.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='ATTENTION'){promises.push(Attention.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='CONTENT'){promises.push(Content.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='ITEM'){promises.push(Item.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='MEMBER'){promises.push(User.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='PROJECT'){promises.push(Project.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TASK'){promises.push(Task.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TIME'){promises.push(Time.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TRANSACTION'){promises.push(Transaction.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='VALIDATION'){promises.push(Validation.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						}
						//DEFINED BY CONNECTION
						for (y in Object.keys(model.associationModels[x].context)){
							var context = Object.keys(model.associationModels[x].context)[y].toString();
							if(!model.context[context.toString()]){model.context[context.toString()] = model.associationModels[x].context[context.toString()];}
							else{model.context[context.toString()] = model.context[context.toString()] + model.associationModels[x].context[context.toString()];}
						}
					}
					Q.all(promises).then((populatedModels)=>{
						var index = -1;
						for (x in model.associationModels){
							for (y in associationModels[x].associatedModels){
								index++;model.associationModels[x].associatedModels[y].data = populatedModels[index];
							}
						}
						deferred.resolve(model);
					});
				}
				else{deferred.resolve(model);}
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
				Time.subscribe(req, [models[0].id]);
				getAssociations(models[0]).then(function(models){res.json(models);});
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
				verb:'create',
				model:model,
				//hash:{model:id},
				//{
					///id:model.id,
					//type:model.model
				//},
				creator:model.user,
				data:{
					attention:{},
					reactions:{},
					validation:{},//hmm validation vs attention from pow view
					model:model
				},
			};
			Event.create(eventModel);
		};

		//TODO: UPDATE && REWRITE
		function createValidation(model){
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
        		newValidation.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newValidation)).digest('hex');

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
			Validation.getDatastore().manager.collection('validation')
			.find({
				$and : [
					{"associatedModels.id": {$in :[newValidationModel.associatedModels[0].id]}}, 
					{"associatedModels.id": {$in :[newValidationModel.associatedModels[1].id]}}
				]
			})
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, validationModels) {
				Association.getDatastore().manager.collection('association')
				.find({
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
		};

		function createNotification(model){
			//REQUEST TO VALIDATE (ASSOCITION TRAVERSE)
			//TO MEMBERS OF PROJECT
			//TO FOLLOWERS OF MEMBER..
			//TO NOTIFICATION PERMS
		};

		function createTokens(model){
			var tokens = getTokens(model);
			for (x in tokens){
				(function(tokens, x) {
					Token.find({string:tokens[x].string}).then(function(tokenModels){
						if (tokenModels.length == 0){
							var newTokenModel = {
								string:tokens[x].string,
								protocols:['CRE8','TIME'], 
								information:{inCirculation:model.amount, markets:0},
								logic:{transferrable:true, mint:'CREATE TIME'}
							};
							Token.create(newTokenModel).then(function(model){console.log('TOKEN CREATED', model.string);});
							model.user.balance[tokens[x].string] = parseFloat(model.amount);
							//TODO: PERHAPS NEW MODEL
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){console.log('USER BALANCE UPDATED', tokens[x].string);});
						}
						else{
							tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
							Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(model){console.log('TOKEN UPDATED', model)});
							if (model.user.balance[tokens[x].string]){model.user.balance[tokens[x].string] = parseInt(model.user.balance[tokens[x].string]) + parseFloat(model.amount);}
							else{model.user.balance[tokens[x].string] = parseFloat(model.amount);}
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){console.log('USER BALANCE UPDATED', tokens[x].string);});
						}
					});
				})(tokens, x);
			}
			//UPDATE BALANCE AND REP ETC
			//UPDATE TOTAL WORK
			//ALWAYS UPDATE BALANCE MAPPING
			model.user.totalWork = parseInt(model.user.totalWork) + parseInt(model.amount);
			User.update({id:model.user.id}, {totalWork:model.user.totalWork}).then(function(user){});
		};

		function getTokens(model){
			var tokens = [{
				string:'CRE8',
				associatedModels:[{type:'MEMBER', id:model.user.id}],
				amount:model.amount
			},{
				string:'CRE8+TIME',
				associatedModels:[{type:'MEMBER', id:model.user.id}],
				amount:model.amount
			},{
				string:'CRE8+TIME+'+model.id,
				associatedModels:[{type:'MEMBER', id:model.user.id}],
				amount:model.amount
			}];
			return tokens;
		};

		var model = {
			model: 'TIME',
			amount: req.param('amount'),
			content: req.param('content'),
			stream: req.param('stream'),
			source: req.param('source'), 
			startTime: req.param('startTime'),
			context: req.param('context'),
			//UNIFY
			user: req.param('user'),
			creator: req.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};

		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		//TODO: BETTER SOON - && SECURITY
		//TODO: SECURITY - PERMISSIONS.. AUTH
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
					createTokens(time);

					res.json(time);

				}
			});
		});
	}
};