/**
 * ProjectController
 *
 */

module.exports = {

	getAll: function(req, res) {
		Project.getAll()
		.spread(function(models) {
			Project.watch(req);
			Project.subscribe(req, models);
			res.json(models);
		})
	},

	getOne: function(req, res) {
		Project.getOne(req.param('id'))
		.then(function(model) {
			Project.subscribe(req, model[0]);
			res.json(model[0]);
		})
	},

	getByUrl: function(req, res) {
		Project.find()
		.where({urlTitle: req.param('path')})
		.then(function(model) {
			Project.subscribe(req, model[0]);
			res.json(model[0]);
		})
	},

	getChildren: function(req, res) {
		Project.find()
		.where({parent: req.param('parent')})
		.then(function(model) {
			res.json(model);
		})
		
	},

	create: function (req, res) {

		var model = {
			title: req.param('title'),
			urlTitle: req.param('urlTitle'),
			user: req.param('user'),
			parent: req.param('parent'),
		};

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
		// Otherwise, find and destroy the model in question
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

