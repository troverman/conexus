
module.exports = {
	getAll: function(req, res) {
		Message.getAll()
		.spread(function(models) {
			Message.watch(req);
			Message.subscribe(req, models);
			res.json(models);
		});
	},

	getSome: function(req, res) {

	},

	getOne: function(req, res) {
		Message.getOne(req.param('id'))
		.spread(function(model) {
			Message.subscribe(req, model);
			res.json(model);
		});
	},

	getByProject: function(req, res) {
		var projectId = req.param('id');
		Message.getByProject(projectId)
		.spread(function(model) {
			Message.watch(req);
			Message.subscribe(req, model);
			res.json(model);
		});
	},

	getByUser: function(req, res) {
		var userId = req.param('id');
		Message.getByUser(userId)
		.spread(function(model) {
			Message.watch(req);
			Message.subscribe(req, model);
			res.json(model);
		});
	},

	create: function (req, res) {
		var userId = req.param('user');
		var model = {
			title: req.param('title'),
			project: req.param('project'),
			user: userId
		};
		Message.create(model)
		.exec(function(err, message) {
			if (err) {return console.log(err);}
			else {
				Message.publishCreate(message);
				res.json(message);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		Message.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Message.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Message.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}

};