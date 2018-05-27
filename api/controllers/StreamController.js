/**
 * StreamController
 *
 * @description :: Server-side logic for managing Tasks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	getAll: function(req, res) {
		Stream.getAll()
		.spread(function(models) {
			Stream.watch(req);
			Stream.subscribe(req, models);
			res.json(models);
		});
	},

	getByProject: function(req, res) {
		Stream.find()
		.where({project: req.param('id')})
		.then(function(model) {
			Stream.watch(req);
			//Stream.subscribe(req, model);
			res.json(model);
		});
	},

	getOne: function(req, res) {
		Stream.getOne(req.param('id'))
		.spread(function(model) {
			Stream.subscribe(req, model);
			res.json(model);
		});
	},

	create: function (req, res) {
		var model = {
			title: req.param('title'),
			project: req.param('project'),
			taskContent: req.param('taskContent'),
			taskValue: req.param('taskValue'),
			user: req.param('user')
		};
		Stream.create(model)
		.exec(function(err, task) {
			if (err) {return console.log(err);}
			else {
				Stream.publishCreate(task);
				res.json(task);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		Stream.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Stream.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Stream.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

