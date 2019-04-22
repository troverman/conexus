/**
 * ProjectController
 */

module.exports = {


	getSome: function(req, res) {
		var limit = parseInt(req.query.limit);
		var skip = parseInt(req.query.skip);
		var sort = req.query.sort;
		var urlTitle = req.query.urlTitle;
		var id = req.query.id;

		console.log(req.query);

		Project.watch(req);

		if (req.query.id){
			Project.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Project.find({id:models[0].parent}).then(function(parentModel){
					models[0].parent = parentModel[0];
					res.json(models[0]);
				});
			});
		}

		else if (req.query.urlTitle){
			Project.find({urlTitle:urlTitle})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Project.find({id:models[0].parent}).then(function(parentModel){
					models[0].parent = parentModel[0];
					res.json(models[0]);
				});
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
			Project.native(function(err, project) {
				project.find({
					"location.coordinates": {
						$near:{
							$geometry: {
				          		type: "Point" ,
				          		coordinates: location,
				       		},
							$maxDistance: 5000,
							$minDistance: 0,
				       	}
				     }
				})
				.limit(limit)
				.skip(skip)
				//.sort({'dist':-1})
				.toArray(function (err, models) {
					if (models){
						models = models.map(function(obj){obj.id = obj._id; return obj;});
					}
					//console.log(err, models, req.query, location);
					res.json(models);
				});
			});
		}

		//QUERY
		else if(req.query.query){
			var query = req.query.query;
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
			var tag = req.query.tag;
			Project.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Project.subscribe(req, models);
				res.json(models);
			});
		}

		//FILTER
		else if(req.query.filter){

			//COMPOUND
			//ASSOCIATIONS
			//{"associatedModels.address": {
			//	$in :[req.query.association]}
			//}
			//LOCATIONS
			//"location.coordinates": {
			//	$near:{
			//		$geometry: {
		    //      	type: "Point" ,
		    //      	coordinates: location,
		    //   	},
			//		$maxDistance: 1600,
			//		$minDistance: 0,
		    //   }
		    //}
			//QUERIES
			//{title: {contains: query}}
			//TAGS
			//tags:{contains: tag}
			
		}

		else{
			Project.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Project.subscribe(req, models);
				res.json(models);
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
		var model = {
			title: req.param('title'),
			tags: req.param('tags'),
			location: req.param('location'),
			description: req.param('description'),
			urlTitle: req.param('title').replace(/\s/g, '-').toLowerCase().replace('#','').replace('/',''),
			user: req.param('user'),
			parent: req.param('parent'),
		};

		Project.create(model)
		.exec(function(err, project) {
			if (err) {return console.log(err);}
			else {

				//TODO: SECURITY! HIDE THIS
				const googleMapsClient = require('@google/maps').createClient({
					key: 'AIzaSyDcTGxD4H3lnx84u8EPcbh7PodbsEyzbg4'
				});

				//TODO: AS A SERVICE / UTIL / CONTRACT
				googleMapsClient.geocode({address: project.location}, function(err, response) {
					if (!err) {
						var location = {
							address:response.json.results[0].formatted_address,
							lat:parseFloat(response.json.results[0].geometry.location.lat),
							lng:parseFloat(response.json.results[0].geometry.location.lng),
							coordinates: [parseFloat(response.json.results[0].geometry.location.lng), parseFloat(response.json.results[0].geometry.location.lat)],
						};
						console.log(location, project.id);
						Project.update({id:project.id}, {location:location}).then(function(model){
							console.log('update');
							Project.publishCreate(model);
							res.json(model);
						});
					}
				});

				//LINKAGE.. ? ASSOCIATED MODELS
				//AS VALIDATION?????
				//ON PROJECT CREATE, CREATE VALIDATION WITH ASSOCIATED MODELS OF USER AND PROJECT
				var validationModel = {
					associatedModels: [
						{type:'PROJECT', address:project.id},
						{type:'MEMBER', address:model.user},
					],
					validation: {general:1}
				};

				//Validation.create(validationModel).then(function(){
					//console.log('VALIDATIONCREATE')
				//});

				var projectMemberModel = {
					project: project.id,
					user: model.user,
					validation: {general:1}
				};

				ProjectMember.create(projectMemberModel).then(function(){
					console.log('PROJECTMEMBERCREATE')
				});

			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		Project.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Project.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Project.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

