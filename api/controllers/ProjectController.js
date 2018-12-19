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
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		Project.watch(req);

		console.log(req.query)
		//WEIRD BUG 
		if(req.query.query){
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
			//DEPRECIATE
			urlTitle: req.param('title').replace(/\s/g, '-').toLowerCase().replace('#','').replace('/',''),
			user: req.param('user'),
			parent: req.param('parent'),
		};

		//TODO: GEOCODE

		Project.create(model)
		.exec(function(err, project) {
			if (err) {
				return console.log(err);
			}
			else {
				Project.publishCreate(project);
				res.json(project);
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

