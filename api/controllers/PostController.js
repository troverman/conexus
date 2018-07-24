
module.exports = {
	
	getOne: function(req, res) {
		Post.findOne(req.param('id'))
        .populate('user')
        .populate('project')
        .populate('profile')
        .populate('task')
        .populate('work')
        .then(function (model) {
			res.json(model);
        });
	},

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		
		Post.watch(req);

		if (req.query.task){
			var task = req.query.task;
			Post.find({task:task})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Post.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.work){
			var work = req.query.work;
			Post.find({work:work})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Post.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.project){
			var project = req.query.project;
			Post.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				Post.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Post.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				Post.subscribe(req, models);
				res.json(models);
			});
		}

		else{
			Post.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				Post.subscribe(req, models);
				res.json(models);
			});
		}
	},

	create: function (req, res) {
		var model = {
			content: req.param('content'),
			post: req.param('post'),
			project: req.param('project'),
			task: req.param('task'),
			user: req.param('user'),
			work: req.param('work'),
		};
		console.log(model)
		Post.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				Post.publishCreate(model);
				res.json(model);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		Post.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Post.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Post.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}

};