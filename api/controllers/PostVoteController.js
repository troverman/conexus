/**
 * PostVoteController
 *
 */

module.exports = {

	getAll: function(req, res) {
		PostVote.getAll()
		.spread(function(models) {
			PostVote.watch(req);
			PostVote.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getOne: function(req, res) {
		PostVote.getOne(req.param('id'))
		.spread(function(model) {
			PostVote.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});

	},

	getByPost: function(req, res) {

		var postId = req.param('id');
		PostVote.getByPost(postId)
		.spread(function(model) {
			PostVote.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});

	},


	create: function (req, res) {

		var userId = req.param('user');
		var model = {
			vote: req.param('vote'),
			post: req.param('post'),
			user: userId
		};

		PostVote.create(model)
		.exec(function(err, post) {
			if (err) {return console.log(err);}
			else {
				PostVote.publishCreate(post);
				res.json(post);
			}
		});
	},


	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		PostVote.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			PostVote.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				PostVote.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

