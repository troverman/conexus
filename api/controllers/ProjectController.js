/**
 * ProjectController
 */

module.exports = {

	getOne: function(req, res) {
		Project.findOne(req.param('id'))
		.then(function(model) {
			Project.subscribe(req, model);
			res.json(model);
		})
	},

	getSome: function(req, res) {
		var limit = parseInt(req.query.limit);
		var skip = parseInt(req.query.skip);
		var sort = req.query.sort;
		Project.watch(req);

		//WEIRD BUG 

		//Project.find().limit(10000000).then(function(projects){
		//	for (x in projects){
		//		if (projects[x].location){
		//			projects[x].location.coordinates = [parseFloat(projects[x].location.lng), parseFloat(projects[x].location.lat)];
		//			projects[x].location.lat = parseFloat(projects[x].location.lat);
		//			projects[x].location.lng = parseFloat(projects[x].location.lng);
		//			//projects[x].location.type = 'Point';
		//			delete projects[x].location.type;
		//			console.log(projects[x])
		//			Project.update({id:projects[x].id},{location:projects[x].location}).then(function(){console.log('updated')})
		//		}
		//	}
		//});

		//ASSOCIATION
		if(req.query.association){
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
			var location = req.query.location.map(function(obj){return parseFloat(obj)})
			Project.native(function(err, project) {
				project.find({
					"location.coordinates": {
						$near:{
							$geometry: {
				          		type: "Point" ,
				          		coordinates: location,
				       		},
							$maxDistance: 1600,
							$minDistance: 0,
				       	}
				     }
				})
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					models = models.map(function(obj){obj.id = obj._id; return obj;});
					console.log(err, models, req.query, location);
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
		Project.find()
		.where({parent: req.param('id').toString()})
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

