//CRE8.PROJECT
const crypto = require('crypto');
const mongodb = require('mongodb');
const Q = require('q');

//PUT IN UTIL SERVICE
//EXTERNAL
function googleGeoCodeService(model){
	var deferred = Q.defer();
	//TODO: SECURITY! HIDE THIS.. SECRET INFORMATION.. NEED ENCRYPTION.
	var googleMapsClient = require('@google/maps').createClient({
		key: 'AIzaSyDcTGxD4H3lnx84u8EPcbh7PodbsEyzbg4'
	});
	googleMapsClient.geocode({address: model.location}, function(err, response) {
		location = null;
		if (!err) {
			location = {
				address:response.json.results[0].formatted_address,
				lat:parseFloat(response.json.results[0].geometry.location.lat),
				lng:parseFloat(response.json.results[0].geometry.location.lng),
				coordinates: [parseFloat(response.json.results[0].geometry.location.lng), parseFloat(response.json.results[0].geometry.location.lat)],
			};
			deferred.resolve(location);
		}
		else{deferred.resolve(location);}
	});
	return deferred.promise;
};

module.exports = {

	get: function(req, res) {

		//DO COMPLEX (COMB IT) FILTER WITH 
		function getAssociations(model){
			var deferred = Q.defer();
			Association.getDatastore().manager.collection('association')
			.find({$and : [{"associatedModels.id": {$in:[model.id]}}]}).limit(1000).skip(0).sort({'createdAt':-1})
			.toArray(function (err, associationModels) {
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
							if (associationModels[x].associatedModels[y].type=='CONNECTION'){promises.push(Connection.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
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
						if (model.associationModels[x].context){
							for (y in Object.keys(model.associationModels[x].context)){
								var context = Object.keys(model.associationModels[x].context)[y].toString();
								if(!model.context[context.toString()]){model.context[context.toString()] = model.associationModels[x].context[context.toString()];}
								else{model.context[context.toString()] = model.context[context.toString()] + model.associationModels[x].context[context.toString()];}
							}
						}
					}
					Q.all(promises).then((populatedModels)=>{
						var index = -1 
						for (x in model.associationModels){
							for (y in associationModels[x].associatedModels){
								index++;
								model.associationModels[x].associatedModels[y].data = populatedModels[index];
							}
						}
						deferred.resolve(model);
					});
				}
				else{deferred.resolve(model);}
			});
			return deferred.promise;
		};

		var limit = parseInt(req.query.limit) || 10;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';

		var urlTitle = req.query.urlTitle;
		var id = req.query.id;
		var query = req.query.query;
		var tag = req.query.tag;

		console.log('GET PROJECT', req.query);

		if (req.query.id || req.query.urlTitle){
			
			var query = {$or:[]};
			if (req.query.urlTitle){
				if (mongodb.ObjectID.isValid(req.query.urlTitle)){query.$or.push({"_id":{$eq:mongodb.ObjectID(req.query.urlTitle)}});}
				else{query.$or.push({"urlTitle":req.query.urlTitle});}
			}
			Project.getDatastore().manager.collection('project')
			.find(query).limit(limit).skip(skip).sort({'createdAt':-1})
			.toArray(function (err, models) {
				if (models.length > 0){
					var projectModel = models[0];
					projectModel.id = projectModel._id.toString();
					Project.subscribe(req, [models[0].id]);
					//DEPRECIATE
					if (models[0].parent){
						Project.find({id:models[0].parent}).then(function(parentModel){
							models[0].parent = parentModel[0];
							getAssociations(models[0]).then(function(models){res.json(models);});
						});
					}
					else{getAssociations(models[0]).then(function(models){res.json(models);});}
				}
				else{res.json([]);}
			});
		}

		//SEARCHING FILTERING....
		//LOCATION
		else if(req.query.location){
			var location = req.query.location.map(function(obj){return parseFloat(obj)});
			var distance = req.query.distance || 5000;
			Project.getDatastore().manager.collection('project')
			.find({
				"location.coordinates": {
					$near:{
						$geometry: {
			          		type: "Point" ,
			          		coordinates: location,
			       		},
						$maxDistance: distance,
						$minDistance: 0,
			       	}
			     }
			})
			.limit(limit)
			.skip(skip)
			.toArray(function (err, models) {
				if (models){models = models.map(function(obj){obj.id = obj._id.toString(); return obj;});}
				res.json(models);
			});
		}

		//QUERY
		else if(req.query.query){
			Project.find()
			.where({
				or: [
					{title: {contains: query}},
					{urlTitle: {contains: query}},
					{description: {contains: query}},
				]
			})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Project.subscribe(req, models);
				res.json(models);
			});	
		}

		//TAG
		else if(req.query.tag){
			Project.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Project.count({tags:{contains: tag}}).then(function(numRecords){
					Project.subscribe(req, models);
					var returnObj = {data:models, info:{count:numRecords}};
					res.json(returnObj);
				});
			});
		}

		else{
			Project.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Project.count().then(function(numRecords){
					Project.subscribe(req, models.map(function(obj){return obj.id}));
					var promises = [];
					for (x in models){promises.push(getAssociations(models[x]));}
					Q.all(promises).then((populatedModels)=>{
						for (x in models){models[x] = populatedModels[x];}
						var returnObj = {data:models, info:{count:numRecords}};
						res.json(returnObj);
					});
				});
			});
		}
	},

	create: function (req, res) {
	
		function createEvent(model, verb){
			var eventModel = {
				model:{id:model.id,type:model.model},
				verb: verb,
			};
			Event.create(eventModel).then(function(model){
				console.log('CREATE EVENT', model);
				Event.publish([model.id], {verb: 'create', data: model});
			});
		};

		function createNotification(model){};

		//LET'S GO
		//TODO: PARAMETERS
			//SUPER SET OF CONTEXT
		function createValidation(model){

			for (x in model.associatedModels){

				var newValidation = {
					content:model.id + ' VALIDATION',
					user: model.user.id,
					creator: model.user.id,
					parameters:{},
					context:{},
					data:{apps:{reactions: {plus:0,minus:0},attention:{general:0}}},
				};


				Connection.find().then(function(connectionModels){
					console.log(connectionModels);



				});


				//NO HARDCODE!
				newValidation.connection = {
					id: null,
					title:'DEFAULT',
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
				for (y in newValidation.connection.parameters.mapping){
					newValidation.parameters[newValidation.connection.parameters.mapping[y]] = {};
				}

				var associatedModelObj = {};

				//NO HARDCODE
				if (model.associatedModels[x].id){

					//Connection.find({model.associatedModels[x].connection}).then(function(connectionModels){});

					if (model.associatedModels[x].id.toLowerCase() == 'self'){
						associatedModelObj = {type:model.model, id:model.id}
					}

					else{
						associatedModelObj = {type:model.associatedModels[x].type, id:model.associatedModels[x].id};
					}

					newValidation.associatedModels = [
						{type:model.model, id:model.id},
						associatedModelObj
					];

					for (y in model.associatedModels[x].context){
						newValidation.context[model.associatedModels[x].context[y].text] = model.associatedModels[x].context[y].score;
					}

					Validation.create(newValidation).then(function(newValidationModel){
						console.log('CREATE VALIDATION', newValidationModel);
						createAssociation(newValidationModel);
						createEvent(newValidationModel, 'create');
					});

				}

				else{

					Connection.find().then(function(connectionModels){
						console.log('NO ID!!!!');
						//console.log(connectionModels);
					});

				}

			}
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
						Association.create(newAssociationModel).then(function(association){
							console.log('CREATED ASSOCIATION', association);
							createEvent(newValidationModel, 'create');
							Association.publish([association.id], {verb: 'create', data: association});
						});
					}
					else{
						console.log('ASSOCIATION EXISTS -- COMPUTE')
					}
				});
			});
		};

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		//FACTOR TO RETURN ENTIER TOKEN MODEL
		function getProtocolTokens(model){
			//give all (init) project tokens to creator-->1?

			//MANIFOLD.. SEPERATE FROM (EVENT) ACTION
			var protocolTokens = [
				'CRE8', 
				'CRE8+PROJECT', 
				'CRE8+PROJECT+'+model.id,
				model.title.toUpperCase()
			];
			return protocolTokens;
		};

		var model = {
			model: 'PROJECT',
			
			title: req.param('title'),

			//context: req.param('context'),
			location: req.param('location'),
			description: req.param('description'),
			
			creator: req.param('user'),
			user: req.param('user'),

			parent: req.param('parent'),
			urlTitle: req.param('title').replace(/\s/g, '-').toLowerCase().replace('#','').replace('/',''),

			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		console.log('CREATE PROJECT', model);

		//TODO: READ
		//CREATEING SELF DEFINED VALIDATIONS OF SOME TYPE CREATES THE MDOEL
			//INSIDE OUT HERE
			//ONLY 'CREATE' IS VALIDATE?

		Project.create(model)
		.exec(function(err, project) {
			if (err) {return console.log(err);}
			else {

				User.find({id:model.user.toString()}).then(function(userModels){

					if(project._id){project.id = project._id.toString()}
					project.associatedModels = req.param('associatedModels');
					project.user = userModels[0];

					googleGeoCodeService(project).then(function(location){
				
						project.location = location;

						Project.update({id:project._id.toString()}, {location:location}).then(function(projectModel){
							
							console.log('UPDATE PROJECT LOCATION -- GEO CODE');

							Project.subscribe(req, [project.id]);
							Project.publish([projectModel[0].id], {verb: 'create', data: projectModel[0]});

							createEvent(project, 'create');
							createNotification(project);
							createValidation(project);

							//TODO: DEFINE CONNECTION PERMISSIONS
							//createCharter()
								//Project-Connection
								//(Project-Association)
								//Project-Member - Creator 
								//Project-Member - Member
								//Project-Order
								//Project-Validation
								//Project-Task
								//Project-Task-Time
								//Project-Transaction
								//Project-Item
								//Project-Content

							//INVERT THIS..
								//DEFINE THE CREATION OF PROJECT BY VALDIDATION
									//NOT CREATE -- GET WHAT WE CREATE THEN VALIDATE ?

							//TODO: - CREATOR ASSOCIATIONS TO ALL ???? !!!!! (HMM)
							
							//createProjectMember
							//HARDCODE PROJECT CREATOR
							var newValidation = {
				                creator:project.user.id,
				                user:project.user.id,
				                content:'CREATOR OF THE PROJECT '+ project.title,
				                associatedModels:[
				                    {type:'MEMBER', id:project.user.id},
				                    {type:'PROJECT', id:project.id},
				                ],
				                context:{general:100},
				                connection:{
				                	title:'PROJECT CREATOR',
				                	parameters:{},
				                },
			                	information:{},
            					data:{apps:{reactions: {plus:0,minus:0},attention:{general:0}}}
				            };
		            		newValidation.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newValidation)).digest('hex');

				            Validation.create(newValidation).then(function(newValidationModel){
								console.log('CREATE VALIDATION', newValidationModel);
								createAssociation(newValidationModel);
							});
			
							mintTokens(project);
							res.json(project);

						});
					});
				});
			}
		});
	}

};

