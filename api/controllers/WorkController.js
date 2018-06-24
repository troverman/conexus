/**
 * WorkController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		if (req.query.task){
			var task = req.query.task;
			Work.find({task:task})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				res.json(models);
			});
		}

		else if(req.query.project){
			var project = req.query.project;
			Work.find({project:project})
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
			Work.find({user:user})
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
			Work.find({})
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


	create: function (req, res) {
		var model = {
			amount: req.param('amount'),
			content: req.param('content'),
			identifer: req.param('identifer'),
			task: req.param('task'),
			user: req.param('user'),
			project: req.param('project'),
			verificationScore: req.param('verificationScore')
		};

		Work.create(model)
		.exec(function(err, work) {
			if (err) {return console.log(err);}
			else {
				Work.publishCreate(work);
				Work.json(work);
			}
		});
	},

	update: function(req, res) {
		var id = req.param('id');
		//OR CREATE VERIFICATION..
		var model = {verificationScore: 100};
		Work.update({id: id}, model).exec(function afterwards(err, updated){
		  if (err) {
		    return;
		  }
		});
	},
	
};

