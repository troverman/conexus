//CRE8.VALIDATION
const crypto = require('crypto');
const Q = require('q');

module.exports = {

	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var task = req.query.task;
		var user = req.query.user;
		var time = req.query.time;
		var id = req.query.id;

		console.log('GET VALIDATION', req.query)

		if(req.query.id){

			Validation.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {

				var promises = [];
				for (x in models[0].associatedModels){
					if (models[0].associatedModels[x].type == 'ACTION'){promises.push(Action.find({id:models[0].associatedModels[x].id}).then(function(actionModels){return {action:actionModels[0]}}))}
					if (models[0].associatedModels[x].type.includes("APP")){promises.push(App.find({id:models[0].associatedModels[x].id}).then(function(appModels){return {app:appModels[0]}}))}
					if (models[0].associatedModels[x].type == 'CONNTECTION'){promises.push(Content.find({id:models[0].associatedModels[x].id}).then(function(connectionModels){return {connection:connectionModels[0]}}))}
					if (models[0].associatedModels[x].type == 'CONTENT'){promises.push(Content.find({id:models[0].associatedModels[x].id}).then(function(contentModels){return {content:contentModels[0]}}))}
					if (models[0].associatedModels[x].type == 'ITEM'){promises.push(Item.find({id:models[0].associatedModels[x].id}).then(function(itemModels){return {item:itemModels[0]}}))}
					if (models[0].associatedModels[x].type == 'MEMBER'){promises.push(User.find({id:models[0].associatedModels[x].id}).then(function(memberModels){return {member:memberModels[0]}}))}
					if (models[0].associatedModels[x].type == 'PROJECT'){promises.push(Project.find({id:models[0].associatedModels[x].id}).then(function(projectModels){return {project:projectModels[0]}}))}
					if (models[0].associatedModels[x].type == 'TASK'){promises.push(Task.find({id:models[0].associatedModels[x].id}).then(function(taskModels){return {task:taskModels[0]}}))}
					if (models[0].associatedModels[x].type == 'TIME'){promises.push(Time.find({id:models[0].associatedModels[x].id}).then(function(taskModels){return {time:timeModels[0]}}))}
					if (models[0].associatedModels[x].type == 'TRANSACTION'){promises.push(Transaction.find({id:models[0].associatedModels[x].id}).then(function(transactionModels){return {transaction:transactionModels[0]}}))}
					if (models[0].associatedModels[x].type == 'VALIDATION'){promises.push(Validation.find({id:models[0].associatedModels[x].id}).then(function(validationModels){return {validation:validationModels[0]}}))}
				}

				Q.all(promises).then((populatedModels)=>{

					for (x in models[0].associatedModels){

						if (models[0].associatedModels[x].type.includes("APP")){
							var app = populatedModels.filter(function(obj){return obj.app})
							models[0].associatedModels[x].info = app[0];
						}
						if (models[0].associatedModels[x].type == 'CONNTECTION'){
							var connection = populatedModels.filter(function(obj){return obj.content})
							models[0].associatedModels[x].info = connection[0];
						}
						if (models[0].associatedModels[x].type == 'CONTENT'){
							var content = populatedModels.filter(function(obj){return obj.content})
							models[0].associatedModels[x].info = content[0];
						}
						if (models[0].associatedModels[x].type == 'ITEM'){
							var item = populatedModels.filter(function(obj){return obj.item})
							models[0].associatedModels[x].info = item[0];
						}
						if (models[0].associatedModels[x].type == 'MEMBER'){
							var member = populatedModels.filter(function(obj){return obj.member})
							models[0].associatedModels[x].info = member[0];
						}
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

					Validation.subscribe(req, [models[0].id]);
					res.json(models);

				});
			});
		}

		else if (req.query.association){
			var association = req.query.association;
			Validation.getDatastore().manager.collection('validation')
			.find({
				$or:[
					{
						$and:[
							{"associatedModels.id": {$in :[association[0]]}},
							{"associatedModels.id": {$in :[association[1]]}},
						]
					},
					{
						$and:[
							{"associatedModels.id": {$in :[association[1]]}},
							{"associatedModels.id": {$in :[association[0]]}},
						]
					}
				]
			})
			.limit(1000)
			.skip(0)
			.sort({'createdAt':-1})
			.toArray(function (err, validationModels) {
				console.log(validationModels);
				validationModels = validationModels.map(function(obj){obj.id = obj._id.toString(); return obj;});
				console.log(validationModels.map(function(obj){return obj.id;}))
				Validation.subscribe(req, validationModels.map(function(obj){return obj.id;}));
				res.json(validationModels);
			});
		}

		else if(req.query.user){
			Validation.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Validation.subscribe(req, models.map((obj)=>obj.id));
				res.json(models);
			});
		}

		else{

			Validation.find({})
			.limit(10)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				var promises = [];
				for (x in models){
					promises.push(User.find({id:models[x].user.toString()}).then(function(userModels){return {user:userModels[0]}}));
					for (y in models[x].associatedModels){
						if (models[x].associatedModels[y].type == 'PROJECT'){promises.push(Project.find({id:models[x].associatedModels[y].address}).then(function(projectModels){return {project:projectModels[0]}}))}
						if (models[x].associatedModels[y].type == 'TASK'){promises.push(Task.find({id:models[x].associatedModels[y].address}).then(function(taskModels){return {task:taskModels[0]}}))}
						if (models[x].associatedModels[y].type == 'TIME'){promises.push(Time.find({id:models[x].associatedModels[y].address}).then(function(timeModels){return {time:timeModels[0]}}))}
					}
				}
				Q.all(promises).then((populatedModels)=>{
					var sum = 0;
					for (x in models){
						models[x].user = populatedModels[sum].user;
						sum++;
						for (y in models[x].associatedModels){
							if (models[x].associatedModels[y].type == 'PROJECT'){models[x].associatedModels[y].info = populatedModels[sum].project;}
							if (models[x].associatedModels[y].type == 'TASK'){models[x].associatedModels[y].info = populatedModels[sum].task;}
							if (models[x].associatedModels[y].type == 'TIME'){models[x].associatedModels[y].info = populatedModels[sum].time;}
							sum++;
						}
					}
					res.json(models);
				});				
			});
		}

	},

	create: function (req, res) {

		function associationBuild(model){
			var deferred = Q.defer();
			deferred.resolve([]);
			return deferred.promise;
		};

		function mintTokens(model){
			var transactionProtocolTokens = getProtocolTokens(model);
			for (x in transactionProtocolTokens){
				var tokenString = transactionProtocolTokens[x]; 
				(function(tokenString) {
					Token.find({string:tokenString}).then(function(tokenModels){
						if (tokenModels.length == 0){
							var newTokenModel = {
								string:tokenString,
								protocols:['CRE8','TRANSACTION'], 
								information:{inCirculation:model.amount, markets:0},
								logic:{transferrable:true, mint:'CREATE TIME'}
							};
							Token.create(newTokenModel).then(function(model){console.log('TOKEN CREATED', model.string);});
							model.user.balance[tokenString] = parseFloat(model.amount);
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){});
						}
						else{
							tokenModels[0].information.inCirculation = parseInt(tokenModels[0].information.inCirculation) + parseFloat(model.amount); 
							Token.update({id:tokenModels[0].id}, {information:tokenModels[0].information}).then(function(model){console.log('TOKEN UPDATED', model)});
							if (model.user.balance[tokenString]){model.user.balance[tokenString] = parseInt(model.user.balance[tokenString]) + parseFloat(model.amount);}
							else{model.user.balance[tokenString] = parseFloat(model.amount);}
							User.update({id:model.user.id}, {balance:model.user.balance}).then(function(user){});
						}
					});
				})(tokenString);
			}
		};


		//CONNECTION..
		//DISCRETE TOKEN DATA
		//-->HASH, FLATTEN (ALL, AND)
		//2ND ORDER SELF CONNECTION ATTRIBUTES = APP DEFINED CUSTOM DATA MODEL
		//CONNETION TOKEN PARAMS...........!
		//FUNCTIONAL
		function getProtocolTokens(model){
			var protocolTokens = [
				'CRE8', 
				'CRE8+VALIDATION', 
				'CRE8+VALIDATION+'+model.id, 
			];

			//DATA TO STRING INTREPRETER
			for (x in Object.keys(model)){
				var dataType = Object.keys(model)[x].toUpperCase();
				//[Object object].. recursive. and large.. ie hashem
				var data = model[Object.keys(model)[x]];
				var prefix = 'CRE8+VALIDATION';
				var string = prefix+'+'+dataType+'+'+data;
				protocolTokens.push(string);
			};

			//HASH :P
			//store real data in token model? 
			for (x in Object.keys(model)){
				var data = model[Object.keys(model)[x]];
				var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(data)).digest('hex');
				var prefix = 'CRE8+VALIDATION';
				var string = prefix+'+'+hash;
				protocolTokens.push(string);
			};

			return protocolTokens;
		};

		function createAssociation(newValidationModel){
			var newAssociationModel = {};
			Validation.getDatastore().manager.collection('validation')
			.find({
				$and : [
					{"associatedModels.id": {$in :[newValidationModel.associatedModels[0].id]}}, 
					{"associatedModels.id": {$in :[newValidationModel.associatedModels[1].id]}},
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
						newAssociationModel.model = 'ASSOCIATION';
						newAssociationModel.user = newValidationModel.user.id;
						Association.create(newAssociationModel).then(function(association){
							console.log('CREATED ASSOCIATION', association);
							Association.publish([association.id], {verb: 'update', data: association});
						});
					}
					else{
						console.log('ASSOCIATION EXISTS -- COMPUTE');
						//lookup connection here..
					}
					//UPDATE LINKED MODELS & COUNTS?
				});
			});
		};

		function createEvent(model){
			var eventModel = {
				verb:'create',
				model:{id:model.id, type:'VALIDATION'}
			};
			Event.create(eventModel);
		};

		function createNotification(user, model){
			//NOTIFICATIONS APP-MEMBER ASSOCIATION
				//FIND PRIORITY MAPPINGS
					//TYPE IS IN MODEL 
						//GLOBAL FX
			//USER.FIND --> IF USER NOTIFICATION PERMISSION
			var notificationModel = {
				user: user,
				type: 'VALIDATION',
				title: 'Request to Join',
				content:'New Member, '+model.user.username +' is requesting membership validation for '+model.project.title,
				priority: 100,
				isRead: false,
				data:{
					apps:{
						member:model.user.id, 
						project:model.project.id
					},
				}
			};
			//Notification.create(notificationModel).then(function(notification){
			//	console.log('CREATE NOTIFICATION', notification);
			//	Notification.publish([notification[0].id], {verb: 'create', data: associationModels[0].id});
			//});
		};

		var model = {
			model: 'VALIDATION',
			connection: req.param('connection'),

			parameters: req.param('parameters'),

			content: req.param('content'),

			//DEPRECIATE--APPRECIATE ASSOCIATION
			user: req.param('user'),
			creator: req.param('creator'),

			context: req.param('context'),
			parameters: req.param('parameters'),

			associatedModels: req.param('associatedModels'),

			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};

		//if(!model.connection){

			//FIND DEFAULT & DYNAMIC CONNECTIONS
			//var connectionQuery = {};
			//Connection.find({}).then(function(){});
			
			model.connection = {
				id:1,
				title:'DEFAULT '+ model.associatedModels.map(function(obj){return obj.type}).join(' '),
				parameters:{
					mapping:[
						'context',
						'reputation',
						'computed'
					],
					logic:'context[%context]*reputation[%context]'
				},
			};
			//CONNECTION DEFINED MAPPINGS
			for (y in model.connection.parameters.mapping){
				if(!model[model.connection.parameters.mapping[y]]){
					model[model.connection.parameters.mapping[y]] = {};
				}
			}

		//}

		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		User.find({id:model.user}).then(function(userModels){

			console.log('CREATE VALIDATION', model);

			Validation.create(model)
			.exec(function(err, validation) {
				if (err) {return console.log(err);}
				else {

					validation.user = userModels[0];
					Validation.subscribe(req, [validation.id]);
					Validation.publish([validation.id], {verb: 'create', data: validation.id});

					createAssociation(validation);
					//createNotification(validation);
					createEvent(validation);
					mintTokens(validation);
					res.json(validation);

					//UPDATE COUNTS..
					//STORED IN APPS?
					//data:{
						//apps:{
						//	associations:{
						//		tasks:0
						//	}
						//}
					//}
					//STORED IN APPS? Defined by connection?
					//data:{
						//apps:{
						//	friends:1,
						//	followers:100,
						//}
					//}


				}
			});

		});

	},

};