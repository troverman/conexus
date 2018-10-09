
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

		if(req.query.market){
			var market = req.query.market;
			Post.find({market:market})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Post.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.order){
			var order = req.query.order;
			Post.find({order:order})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Post.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.post){
			var post = req.query.post;
			Post.find({post:post})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Post.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.profile){
			var profile = req.query.profile;
			Post.find({profile:profile})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('profile')
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

		else if (req.query.tag){
			var tag = req.query.tag;
			Post.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Post.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.task){
			var task = req.query.task;
			Post.find({task:task})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('task')
			.populate('user')
			.then(function(models) {
				Post.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.transaction){
			var transaction = req.query.transaction;
			Post.find({transaction:transaction})
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
			.populate('work')
			.populate('user')
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
			market: req.param('market'),
			order: req.param('order'),
			parent: req.param('parent'),
			parentModel: req.param('parentModel'),
			post: req.param('post'),
			profile: req.param('profile'),
			project: req.param('project'),
			tags: req.param('tags'),
			task: req.param('task'),
			title: req.param('title'),
			transaction: req.param('transaction'),
			type: req.param('type'),
			user: req.param('user'),
			work: req.param('work'),
		};
		Post.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				//TODO: POPULATE USER
				Post.publishCreate(model);
				res.json(model);
			}
		});
	},

	//IS UPDATING REAL ONCHAIN? | NEW TYPE? NAH
	//IT'S A NEW 'CREATE' THAT OVERLAPS. 
	update: function(req,res){
		var id = req.param('id');
		var model = {
			parent: req.param('parent'),
			parentModel: req.param('parentModel'),
			work: req.param('work'),
		};
		Post.update({id: id}, {parent:model.parent,parentModel:model.parentModel,work:model.work})
		.then(function(model){
			Post.publishUpdate(id, model[0]);
			res.json(model);
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