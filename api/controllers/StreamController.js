/**
 * StreamController
 *
 * @description :: Server-side logic for managing Tasks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	getSome: function(req, res) {
		if(req.query.project){
			var project = req.query.project;
			Stream.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Stream.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}

		else{
			Stream.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}
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

	update: function (req, res) {},

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

