/**
 * TaskController
 */

module.exports = {

	getOne: function(req, res) {
		Task.watch(req);
		Task.findOne(req.param('id'))
		.populate('project')
		.then(function(model) {
			Task.subscribe(req, model);
			res.json(model);
		});
	},

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		console.log(req.query);

		Task.watch(req);

		if (req.query.project){
			var project = req.query.project;
			Task.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('project')
			.populate('user')
			.then(function(models) {
				Task.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.search){
			var search = req.query.search;
			console.log(search, limit,skip,sort)
			Task.find()
			.where({
				or: [
					{content: {contains: search}},
					{tags: {contains: search}},
					{title: {contains: search}},
					{user: {contains: search}}
				]
			})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('project')
			.populate('user')
			.then(function(models) {
				Task.subscribe(req, models);
				res.json(models);
			});	
		}

		else if (req.query.tag){
			var tag = req.query.tag;
			Task.find({tags:{contains: tag}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('project')
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
			content: req.param('content'),
			tags: req.param('tags'),
			location: req.param('location'),
			associatedModels: req.param('associatedModels'),
			user: req.param('user'),

			//DEPRECIATE
			project: req.param('project'),

			//PATCH
			reactions: {plus:0,minus:0},

		};
		Task.create(model)
		.exec(function(err, task) {
			if (err) {return console.log(err);}
			else {

				//TODO:IMPLICIT VALIDATION
				//ASSOCIATED MOELS ... ? 
				var validationModel = {
					conntent:'IMPLICIT VALIDATION ON TASK CREATE',
					validation:{}, //model.tags
					reputation:{}, //user.rep based on ^
					associatedModels: [
						//{type:'PROJECT',address:model.id},
						{type:'TASK',address:task.id}
					],
					reactions: {plus:0,minus:0},
					user: req.param('user'),
				};
				//Validate.create(validationModel).then(function(validation){
				//	console.log('CREATED IMPLICIT VALIDATION', validation);
				//});

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

