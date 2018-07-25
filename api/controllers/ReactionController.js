/**
 * ReactionController
 */

module.exports = {

	getOne: function(req, res) {
		Reaction.findOne(req.param('id'))
		.then(function(model) {
			Reaction.subscribe(req, model);
			res.json(model);
		});
	},

	getSome: function(req, res) {},

	create: function (req, res) {
		var userId = req.param('user');
		var model = {
			vote: req.param('vote'),
			post: req.param('post'),
			user: userId
		};
		Reaction.create(model)
		.exec(function(err, post) {
			if (err) {return console.log(err);}
			else {
				Reaction.publishCreate(post);
				res.json(post);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		Reaction.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Reaction.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Reaction.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

