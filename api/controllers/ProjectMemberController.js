/**
 * ProjectMemberController
 *
 */

module.exports = {

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

