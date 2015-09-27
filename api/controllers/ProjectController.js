/**
 * ProjectController
 *
 * @description :: Server-side logic for managing Projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	getAll: function(req, res) {
		Project.getAll()
		.spread(function(models) {
			Project.watch(req);
			Project.subscribe(req, models);

			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getOne: function(req, res) {
		Project.getOne(req.param('id'))
		.spread(function(model) {
			Project.subscribe(req, model);
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
			Project_content: req.param('Project_content'),
			url_title: req.param('url_title'),
			user: userId
		};

		Project.create(model)
		.exec(function(err, Project) {
			if (err) {
				return console.log(err);
			}
			else {
				Project.publishCreate(Project);
				res.json(Project);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id provided.');
		}

		// Otherwise, find and destroy the model in question
		Project.findOne(id).exec(function(err, model) {
			if (err) {
				return res.serverError(err);
			}
			if (!model) {
				return res.notFound();
			}

			Project.destroy(id, function(err) {
				if (err) {
					return res.serverError(err);
				}

				Project.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

