module.exports = {

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		var project = req.query.project;
		var task = req.query.task;
		var user = req.query.user;
		var work = req.query.work;

		Validation.watch(req);

		if (req.query.project){
			Validation.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});
		}

		//DO BOTH task and proj
		else if (req.query.task){
			Validation.find({task:task})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.user){
			Validation.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.work){
			Validation.find({work:work})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});
		}

		else{res.json(models);}

	},

	//TODO
	create: function (req, res) {
		var model = {
			project: req.param('project'),
			task: req.param('task'),
			user: req.param('user'),
			validation: req.param('validation'),
			work: req.param('work'),
		};
		console.log(model);
		Validation.create(model)
		.exec(function(err, validation) {
			if (err) {return console.log(err);}
			else {
				console.log(validation);
				Validation.publishCreate(validation);
				res.json(validation);
			}
		});
	},

};