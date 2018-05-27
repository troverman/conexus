/**
 * ProjectEntryController
 *
 */

module.exports = {

	getByProject: function(req, res) {
		ProjectEntry.find()
		.where({project: req.param('id')})
		.populate('user')
		.then(function(models) {
			ProjectEntry.watch(req);
			res.json(models);
		});
	},

	create: function (req, res) {
		var amount = req.param('amount');
		var category = req.param('category');
		var project = req.param('project');
		var user = req.param('user');
		var model = {
			amount: amount,
			category: category,
			project: project,
			user: user
		};
		ProjectEntry.create(model)
		.exec(function(err, member) {
			if (err) {return console.log(err);}
			else {
				ProjectEntry.publishCreate(member);
				res.json(member);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		ProjectEntry.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			ProjectEntry.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				ProjectEntry.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

