var Q = require('q');

module.exports = {
	
	get: function(req, res) {

		function getAssociations(model){
			console.log(model.id)
			var deferred = Q.defer();
			Association.native(function(err, association) {
				association.find({$and : [{"associatedModels.id": {$in:[model.id]}}]})
				.limit(1000)
				.skip(0)
				.sort({'createdAt':-1})
				.toArray(function (err, associationModels) {
					console.log(associationModels)
					if (associationModels.length > 0){
						associationModels.map(function(obj){obj.id=obj._id; return obj});
						model.associationModels = associationModels;

						console.log(associationModels);

						//WANNA POPULATE TTHE ASSOCIATED MODELS

						//var promises = [];
						//for (x in associationModels){
						//	if (associationModels[x].type='CONTENT'){promises.push(Content.find({id:associationModels[x].id}))}
						//	if (associationModels[x].type='TIME'){promises.push(Time.find({id:associationModels[x].id}))}
						//	//..
						//}

						//Q.all(promises).then((populatedModels)=>{
						//	console.log('sup')
						//	for (x in model.associationModels){model.associationModels[x] = populatedModels[x][0];}
							deferred.resolve(model);
						//});


						//CONTEXT IS AVG 
						//model.context = {};
						//for (x in model.associationModels){
						//	model.associationModels[x].context;
						//}

					}
					else{deferred.resolve([]);}
				});
			});
			return deferred.promise;
		};

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET CONTENT', req.query);

		Content.watch(req);

		if(req.query.id){
			Content.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
        	.then(function(models){
				Content.subscribe(req, models);
				getAssociations(models[0]).then(function(models){res.json(models);});
			});
		}

		else if(req.query.item){
			var item = req.query.item;
			Content.find({item:item})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				});
			});
		}

		else if(req.query.market){
			var market = req.query.market;
			Content.find({market:market})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				});
			});
		}

		else if(req.query.order){
			var order = req.query.order;
			Content.find({order:order})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				});
			});
		}

		else if (req.query.contentModel){
			var contentModel = req.query.contentModel;
			Content.find({contentModel:contentModel})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				//var promises = [];
				//for (x in models){promises.push(getAssociations(models[x]));}
				//Q.all(promises).then((populatedModels)=>{
				//	for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				//s});
			});
		}

		else if(req.query.profile){
			var profile = req.query.profile;
			Content.find({profile:profile})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('profile')
			.then(function(models) {
				Content.subscribe(req, models);
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				});
			});
		}

		else if(req.query.project){
			var project = req.query.project;
			Content.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.search){
			var search = req.query.search;
			Content.find()
			.where({
				or: [
					{content: {contains: search}},
					{tags: {contains: search}},
					{title: {contains: search}},
					{user: {contains: search}}
				]
			})
			.limit(limit)
			.skip(limit)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				});
			});	
		}

		else if (req.query.tag){
			var tag = req.query.tag;
			Content.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				});
			});
		}

		else if (req.query.task){
			var task = req.query.task;
			Content.find({task:task})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				});
			});
		}

		else if (req.query.transaction){
			var transaction = req.query.transaction;
			Content.find({transaction:transaction})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				});
			});
		}

		else if(req.query.time){
			var time = req.query.time;
			Content.find({time:time})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				
				Content.subscribe(req, models);
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				});

			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Content.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {

				Content.subscribe(req, models);
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				Q.all(promises).then((populatedModels)=>{
					for (x in models){models[x] = populatedModels[x];}
					res.json(models);
				});
			
			});
		}

		else{
			Content.find({})
			.limit(20)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {

				Content.subscribe(req, models);
				var promises = [];
				for (x in models){promises.push(getAssociations(models[x]));}
				//Q.all(promises).then((populatedModels)=>{
				//	for (x in models){
				//		if(populatedModels[x]){models[x] = populatedModels[x];}
				//	}
				//});
				res.json(models);

			});
		}
	},

	create: function (req, res) {

		function createNotification(model){
			//<-- ASSOCIATIONS -->
			//SEND NOTIFICATIONS TO FOLLOWERS
			//SEND NOTIFICATIONS TO PROJECT MEMBERS
			//SEND NOTIFICATION TO MEMBER
		};

		//TODO: CONNECTION!
		function createValidation(model){

			console.log('ASSOCIATED MODELS');
			console.log(model.associatedModels);

			//validation set
			for (x in model.associatedModels){

				var newValidation = {
					content:model.id + ' VALIDATION',
					context: {},
					reputation: {},
					//TODO: CONNECTION!
					connection:{
						type:'HUMAN',
						parameters:{charter:'STANDARD MULTIPLICATIVE'},
					},

					//UNIFY AND ALLOW FOR PROJECT TO CREATE
					user: model.user.id,
					creator: model.user.id,

					//APPS - DATA
					data:{
						apps:{
							reactions: {plus:0,minus:0},
							attention:{general:0}
						}
					}
				};

				//TODO: FINDCONNECTION!

				var associatedModelObj = {};
				if (model.associatedModels[x].id.toLowerCase() == 'self'){associatedModelObj = {type:'CONTENT', id:model.id}}
				else{associatedModelObj = {type:model.associatedModels[x].type,id:model.associatedModels[x].type};}

				newValidation.associatedModels = [
					{type:'CONTENT',id:model.id},
					associatedModelObj
				];

				//LIST -> OBJ
				for (y in model.associatedModels[x].context){
					newValidation.context[model.associatedModels[x].context[y].text] = model.associatedModels[x].context[y].score;
				}

				console.log(newValidation)
				Validation.create(newValidation).then(function(newValidationModel){
					console.log(newValidationModel);
					createAssociation(newValidationModel)
					//buildAssociation(newValidationModel)
					//craeteAssociation
				});

			}



		};

		//TODO: CONNECTION && ++
		function createAssociation(newValidationModel){

			//COMPUTE ASSOCIATION HERE
			var newAssociationModel = {}; 

			//FIND ALL VALIDATIONS FOR SPECIFIC ASSOCIATED MODELS
			Validation.native(function(err, validation) {
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
									connection:{},
									creator: validationModels[0].creator,
									user: validationModels[0].user,
									reactions: validationModels[0].reactions,
									context:validationModels[0].context
								};
								Association.create(newAssociationModel).then(function(association){
									console.log('CREATED ASSOCIATION', association);
									Association.publishCreate(association);
								});
							}
							else{
								//ASSOCIATION BUILD!
								var newAssociationModel = {
									associatedModels: validationModels[0].associatedModels,
									type: validationModels[0].type,
									charterParams: validationModels[0].charterParams,
									creator: validationModels[0].creator,
									user: validationModels[0].user,
									reactions: validationModels[0].reactions,
									context:validationModels[0].context
								};
								Association.update({id:associationModels[0]._id, newAssociationModel}).then(function(association){
									console.log('UPDATED ASSOCIATION', association);
									Association.publishCreate(association);
								});
							}
						});

					});
					
				});

			});

		};

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		function getProtocolTokens(model){
			var protocolTokens = ['CRE8', 'CRE8+CONTENT', model.id, 'CRE8+CONTENT+'+model.id ];
			return protocolTokens;
		};

		var model = {

			title: req.param('title'),
			type: req.param('type'),
			content: req.param('content'),

			user: req.param('user'),
			creator: req.param('user'),

			//TODO: DEPRECIATE
			contentModel: req.param('contentModel'),

			associatedModels: req.param('associatedModels'),

			//PATCH
			reactions: {plus:0, minus:0},
			attention: {general:0},

			data:{
				apps:{
					reactions: {plus:0, minus:0},
					attention: {general:0}
				}
			}

		};

		console.log('CREATE CONTENT', model);

		Content.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				//TODO: POPULATE USER
				User.find({id:model.user}).then(function(userModels){

					model.user = userModels[0];
					Content.publishCreate(model);
					createNotification(model);
					createValidation(model);
					mintTokens(model);
					res.json(model);

				});
			}
		});
	},

	//IS UPDATING REAL ONCHAIN? | NEW TYPE? NAH
	//IT'S A NEW 'CREATE' THAT OVERLAPS. 
	update: function(req, res){

		//UPDATE HISTORY IN MODEL

	}

};