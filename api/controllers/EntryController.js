/**
 * EntryController
 */

module.exports = {

	getSome: function(req, res) {
		if(req.query.project){
			var project = req.query.project;
			Entry.find({project:project})
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
			Entry.find({user:user})
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
			Entry.find({})
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

	getOne: function(req, res) {
		Entry.getOne(req.param('id'))
		.spread(function(model) {
			Stream.subscribe(req, model);
			res.json(model);
		});
	},

	create: function (req, res) {
		var model = {
			amount: req.param('amount'),
			identifer: req.param('amount'),
			project: req.param('project'),
			user: req.param('user'),
		};
		Entry.create(model)
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
		Entry.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Entry.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Entry.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

