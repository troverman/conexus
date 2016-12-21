/**
 * FollowerController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	getAll: function(req, res) {
		Follower.getAll()
		.spread(function(models) {
			Follower.watch(req);
			Follower.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getOne: function(req, res) {
		Follower.getOne(req.param('id'))
		.spread(function(model) {
			Follower.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	getFollowers: function(req, res) {

		var FollowedId = req.param('id');
		Follower.getFollowers(FollowedId)
		.spread(function(models) {
			Follower.watch(req);
			Follower.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getFollowing: function(req, res) {

		var FollowerId = req.param('id');
		Follower.getFollowing(FollowerId)
		.spread(function(models) {
			Follower.watch(req);
			Follower.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	create: function (req, res) {

		var FollowedId = req.param('followed');
		var FollowerId = req.param('follower');

		var model = {
			followed: FollowedId,
			follower: FollowerId,
		};

		Follower.create(model)
		.exec(function(err, follower) {
			if (err) {
				return console.log(err);
			}
			else {
				Follower.getOne(follower.id).then(function(follower){
					Follower.publishCreate(follower[0]);
					res.json(follower[0]);
				});
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id provided.');
		}

		// Otherwise, find and destroy the model in question
		Follower.findOne(id).exec(function(err, model) {
			if (err) {
				return res.serverError(err);
			}
			if (!model) {
				return res.notFound();
			}

			Follower.destroy(id, function(err) {
				if (err) {
					return res.serverError(err);
				}

				Follower.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

