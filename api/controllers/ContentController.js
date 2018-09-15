
module.exports = {
	
	getOne: function(req, res) {
		Content.findOne(req.param('id'))
        .then(function (model) {
			res.json(model);
        });
	},

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		Content.watch(req);

		if(req.query.market){
			var market = req.query.market;
			Content.find({market:market})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.order){
			var order = req.query.order;
			Content.find({order:order})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.post){
			var post = req.query.post;
			Content.find({post:post})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.profile){
			var profile = req.query.profile;
			Content.find({profile:profile})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('profile')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.project){
			var project = req.query.project;
			Content.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.task){
			var task = req.query.task;
			Content.find({task:task})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('task')
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.transaction){
			var transaction = req.query.transaction;
			Content.find({transaction:transaction})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.work){
			var work = req.query.work;
			Content.find({work:work})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('work')
			.populate('user')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Content.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}

		else{
			Content.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				Content.subscribe(req, models);
				res.json(models);
			});
		}
	},

	create: function (req, res) {
		var model = {
			content: req.param('content'),
			market: req.param('market'),
			order: req.param('order'),
			post: req.param('post'),
			profile: req.param('profile'),
			project: req.param('project'),
			task: req.param('task'),
			transaction: req.param('transaction'),
			user: req.param('user'),
			work: req.param('work'),
		};
		Content.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				//TODO: POPULATE USER
				Content.publishCreate(model);
				res.json(model);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		Content.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Content.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Content.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}

};