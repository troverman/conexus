/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	getAll: function(req, res) {
		Post.getAll()
		.spread(function(models) {
			Post.watch(req);
			Post.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getOne: function(req, res) {
		Post.getOne(req.param('id'))
		.spread(function(model) {
			Post.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	create: function (req, res) {
		var userId = req.param('user');
		var model = {
			title: req.param('title'),
			post_content: req.param('post_content'),
			url_title: req.param('url_title'),
			user: userId
		};

		Post.create(model)
		.exec(function(err, post) {
			if (err) {
				return console.log(err);
			}
			else {
				sails.log('POST_CRE8')
				Post.publishCreate(post);
				res.json(post);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id provided.');
		}

		// Otherwise, find and destroy the model in question
		Post.findOne(id).exec(function(err, model) {
			if (err) {
				return res.serverError(err);
			}
			if (!model) {
				return res.notFound();
			}

			Post.destroy(id, function(err) {
				if (err) {
					return res.serverError(err);
				}

				Post.publishDestroy(model.id);
				return res.json(model);
			});
		});
	},

	addView: function (req, res, next) {
		var id = req.param('id');

		/*Post.findOne(id).exec(function(err, model){
			var newCount = (model.views + 1);
			model.views = newCount;
			model.save(function(err) {
				if (err) return next(err);
				console.log('The new views count is: ' + newCount);
			});
		});*/

		/*add view websockets??*/
		Post.getOne(req.param('id'))
		.spread(function(model) {
			var newCount = (model.views + 1);
			model.views = newCount;

			model.save(function(err) {
				if (err) return next(err);

				Post.subscribe(req, model);
				res.json(model);
				
			});


		})
		.fail(function(err) {
			res.send(404);
		});
	}
	
};

