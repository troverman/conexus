/**
 * StreamController
 */

module.exports = {

	getOne: function(req, res) {
		Stream.findOne(req.param('id'))
		.then(function(model) {
			Stream.subscribe(req, model);
			res.json(model);
		});
	},

	getSome: function(req, res) {
		if(req.query.project){
			var project = req.query.project;
			Stream.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Stream.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}

		else{
			Stream.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}
	},

	create: function (req, res) {
		var model = {
			title: req.param('title'),
			stream: req.param('stream'),
			project: req.param('project'),
			task: req.param('task'),
			user: req.param('user')
		};
		Stream.create(model)
		.exec(function(err, task) {
			if (err) {return console.log(err);}
			else {
				Stream.publishCreate(task);
				res.json(task);
			}
		});
	},

	update: function (req, res) {},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		Stream.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Stream.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Stream.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

