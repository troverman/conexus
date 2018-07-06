/**
 * TaskController
 *
 * @description :: Server-side logic for managing Tasks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	getAll: function(req, res) {
		Task.getAll()
		.spread(function(models) {
			Task.watch(req);
			Task.subscribe(req, models);
			res.json(models);
		});
	},

	getByProject: function(req, res) {
		Task.find()
		.where({project: req.param('id')})
		.then(function(model) {
			Task.watch(req);
			//Task.subscribe(req, model);
			res.json(model);
		});
	},

	getOne: function(req, res) {
		Task.getOne(req.param('id'))
		.spread(function(model) {
			Task.subscribe(req, model);
			res.json(model);
		});
	},

	//TODO
	create: function (req, res) {
		var model = {
			title: req.param('title'),
			project: req.param('project'),
			content: req.param('content'),


			completeIdentifierSet: req.param('completeIdentifierSet'),
			completeBountySet: req.param('completeBountySet'),

			tags: req.param('tags'),

			timeIdentifierSet: req.param('timeIdentifierSet'),
			timeBountySet: req.param('timeBountySet'),

			verificationIdentifierSet: req.param('verificationIdentifierSet'),
			verificationBountySet: req.param('verificationBountySet'),
			
			members: req.param('members'),
			parent: req.param('parent'),
			user: req.param('user'),
		};
		Task.create(model)
		.exec(function(err, task) {
			if (err) {return console.log(err);}
			else {
				Task.publishCreate(task);
				res.json(task);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		Task.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Task.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Task.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

