//CRE8.PROJECT
const Q = require('q');

module.exports = {

	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 10;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';

		var urlTitle = req.query.urlTitle;
		var id = req.query.id;
		var query = req.query.query;
		var tag = req.query.tag;

		console.log('GET PROJECT', req.query);

		if (req.query.id){
			Project.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				if (models[0].parent){
					Project.find({id:models[0].parent}).then(function(parentModel){
						models[0].parent = parentModel[0];
						res.json(models[0]);
					});
				}
				else{res.json(models[0]);}
			});
		}

		else if (req.query.urlTitle){
			Project.find({urlTitle:urlTitle})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				if (models[0].parent){
					Project.find({id:models[0].parent}).then(function(parentModel){
						models[0].parent = parentModel[0];
						res.json(models[0]);
					});
				}
				else{res.json(models[0]);}
			});
		}

		//ASSOCIATION
		else if(req.query.association){
			Project.native(function(err, project) {
				project.find({"associatedModels.address": {
					$in :[req.query.association]}
				})
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					models = models.map(function(obj){obj.id = obj._id; return obj;});
					Project.subscribe(req, models);
					res.json(models);
				});
			});
		}

		//LOCATION
		else if(req.query.location){
			var location = req.query.location.map(function(obj){return parseFloat(obj)});
			var distance = req.query.distance || 5000;
			Project.native(function(err, project) {
				project.find({
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
					if (models){
						models = models.map(function(obj){obj.id = obj._id.toString(); return obj;});
					}
					res.json(models);
				});
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
			.then(function(models) {
				Project.count().then(function(numRecords){
					Project.subscribe(req, models);
					var returnObj = {data:models, info:{count:numRecords}};
					res.json(returnObj);
				});
			});
		}

	},

	//KINDA HACKY
	getByUrl: function(req, res) {
		Project.find()
		.where({
		  or: [
		    {urlTitle: req.param('path')},
		    {id: req.param('path')}
		]})
		.then(function(model) {
			//for x in // multiple parents
			Project.find({id:model[0].parent}).then(function(parentModel){
				model[0].parent = parentModel[0];
				Project.subscribe(req, model[0]);
				res.json(model[0]);
			});
		});
	},

	getChildren: function(req, res) {
		Project.find({parent: req.param('id').toString()})
		.then(function(model) {
			res.json(model);
		})
	},

	create: function (req, res) {

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

		function createEvent(model){
			var eventModel = {
				type:'create',
				model:{id:model.id,type:model.model},
				data:{},
			};
			Event.create(eventModel);
		};

		function createNotification(model){};

		function createProjectMember(model){
			var projectMemberModel = {
				project: model.id,
				user: model.user.id,
				context: {general:100},
				type:'Creator'
			};
			ProjectMember.create(projectMemberModel).then(function(){
				console.log('PROJECTMEMBER CREATE');
			});
		};

		function createValidation(model){
			for (x in model.associatedModels){
				var newValidation = {
					content:model.id + ' VALIDATION',
					user: model.user.id,
					creator: model.user.id,
					data:{apps:{reactions: {plus:0,minus:0}, attention:{general:0}}}

				};
				newValidation.connection = {
					id:1,
					type:'HUMAN',
					title:'STANDARD MULTI, AGNOSTIC MODELS',
					parameters:{
						mapping:['context','reputation','computed'],
						logic:'context[%context]*reputation[%context]'
					},
				};
				//CONNECTION DEFINED MAPPINGS
				for (y in newValidation.connection.parameters.mapping){
					newValidation[newValidation.connection.parameters.mapping[y]] = {};
				}
				var associatedModelObj = {};
				if (model.associatedModels[x].id.toLowerCase() == 'self'){associatedModelObj = {type:model.model, id:model.id}}
				else{associatedModelObj = {type:model.associatedModels[x].type, id:model.associatedModels[x].id};}
				newValidation.associatedModels = [
					{type:model.model, id:model.id},
					associatedModelObj
				];
				for (y in model.associatedModels[x].context){newValidation.context[model.associatedModels[x].context[y].text] = model.associatedModels[x].context[y].score;}
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
								var newAssociationModel = newValidationModel;
								Association.create(newAssociationModel).then(function(association){
									console.log('CREATED ASSOCIATION', association);
									Association.publishCreate(association);
									Association.publish([association.id], {verb: 'create', data: association});
								});
							}
							else{
								console.log('ASSOCIATION EXISTS -- COMPUTE')
							}
						});
					});
				});
			});
		};

		function mintTokens(model){
			var protocolTokens = getProtocolTokens(model);
		};

		//FACTOR TO RETURN ENTIER TOKEN MODEL
		function getProtocolTokens(model){
			//give all (init) project tokens to creator-->1?
			var protocolTokens = ['CRE8', 'CRE8+PROJECT', model.title.toUpperCase()];
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

		console.log('CREATE PROJECT', model);

		Project.create(model)
		.exec(function(err, project) {
			if (err) {return console.log(err);}
			else {

				User.find({id:model.user.toString()}).then(function(userModels){

					if(project._id){project.id = project._id.toString()}
					project.associatedModels = req.param('associatedModels');
					project.user = userModels[0];

					console.log(project);

					googleGeoCodeService(project).then(function(location){
				
						project.location = location;

						Project.update({id:project._id.toString()}, {location:location}).then(function(projectModel){
							
							console.log('UPDATE PROJECT LOCATION -- GEO CODE');
							console.log(projectModel);

							Project.subscribe(req, [project]);
							Project.publish([projectModel[0].id], {verb: 'create', data: projectModel[0]});

							//createEvent(project);
							createNotification(project);	
							createValidation(project);

							//upgrading helps
							createProjectMember(project);
							mintTokens(project);

							res.json(model);

						});
					});
				});
			}
		});
	}

};

