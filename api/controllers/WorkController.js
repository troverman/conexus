/**
 * WorkController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	getSome: function(req, res) {

		var task = req.query.task;
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;


		Work.find({task:task})
		.limit(limit)
		.skip(skip)
		.sort(sort)
		.populate('user')
		.then(function(models) {
			res.json(models);
		})
		.fail(function(err) {
		});
	
	},


	create: function (req, res) {
		var model = {
			amount: req.param('amount'),
			identifer: req.param('identifer'),
			task: req.param('task'),
			user: req.param('user'),
			verificationScore: req.param('verificationScore')
		};

		Work.create(model)
		.exec(function(err, post) {
			if (err) {return console.log(err);}
			else {
				Post.publishCreate(post);
				res.json(post);
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

