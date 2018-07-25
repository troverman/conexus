/**
 * ProjectMemberController
 */

module.exports = {

	getSome: function(req, res) {
		
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		var project = req.query.project;

		ProjectMember.watch(req);

		ProjectMember.find({project:project})
		.limit(limit)
		.skip(skip)
		.sort(sort)
		.populate('user')
		.populate('project')
		.then(function(models) {
			ProjectMember.subscribe(req, models);
			res.json(models);
		});

	},

	getByProject: function(req, res) {
		ProjectMember.find()
		.where({project: req.param('id')})
		.populate('user')
		.then(function(models) {
			ProjectMember.watch(req);
			res.json(models);
		});
	},

	create: function (req, res) {
		var project = req.param('project');
		var user = req.param('user');
		var model = {
			project: project,
			user: user
		};
		ProjectMember.create(model)
		.exec(function(err, member) {
			if (err) {return console.log(err);}
			else {
				ProjectMember.publishCreate(member);
				res.json(member);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		ProjectMember.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			ProjectMember.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				ProjectMember.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

