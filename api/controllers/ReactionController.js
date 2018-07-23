/**
 * PostVoteController
 *
 */

module.exports = {

	getAll: function(req, res) {
		Reaction.getAll()
		.spread(function(models) {
			PostVote.watch(req);
			PostVote.subscribe(req, models);
			res.json(models);
		});
	},

	getOne: function(req, res) {
		Reaction.getOne(req.param('id'))
		.spread(function(model) {
			PostVote.subscribe(req, model);
			res.json(model);
		});
	},

	getByPost: function(req, res) {
		var postId = req.param('id');
		Reaction.getByPost(postId)
		.spread(function(model) {
			Reaction.subscribe(req, model);
			res.json(model);
		});
	},

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

