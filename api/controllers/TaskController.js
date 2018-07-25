/**
 * TaskController
 */

module.exports = {

	getOne: function(req, res) {
		Task.watch(req);
		Task.findOne(req.param('id'))
		.then(function(model) {
			Task.subscribe(req, model);
			res.json(model);
		});
	},

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		
		Task.watch(req);

		if (req.query.project){
			var task = req.query.task;
			Task.find({task:task})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Task.subscribe(req, models);
				res.json(models);
			});
		}

		else{
			Task.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				Task.subscribe(req, models);
				res.json(models);
			});
		}
	},

	//TODO
	create: function (req, res) {
		var model = {
			title: req.param('title'),
			project: req.param('project'),
			content: req.param('content'),
			tags: req.param('tags'),

			completeIdentifierSet: req.param('completeIdentifierSet'),
			completeBountySet: req.param('completeBountySet'),


			timeIdentifierSet: req.param('timeIdentifierSet'),
			timeBountySet: req.param('timeBountySet'),

			verificationIdentifierSet: req.param('verificationIdentifierSet'),
			verificationBountySet: req.param('verificationBountySet'),
			
			members: req.param('members'),
			parent: req.param('parent'),
			user: req.param('user'),
		};
		Task.create(model)
		.exec(function(err, task) {
			if (err) {return console.log(err);}
			else {
				Task.publishCreate(task);
				res.json(task);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		Task.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Task.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Task.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

