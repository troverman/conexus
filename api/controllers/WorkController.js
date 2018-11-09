/**
 * WorkController
 */

module.exports = {

	getOne: function(req, res) {
		Work.findOne(req.param('id'))
        .populate('user')
        .populate('project')
        .populate('task')
        .populate('stream')
        .then(function (model) {
			res.json(model);
        });
	},

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

		//else if (req.query.work){}

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

		//GET SESSION --> RN FRONTEND BAD SECURITY LEL
		//MASSIVE AUDIT NEEDED 

		var model = {
			amount: req.param('amount'),
			content: req.param('content'),
			task: req.param('task'),
			tags: req.param('tags'),
			user: req.param('user'),
			//project: req.param('project'),
			stream: req.param('stream'),
			verificationScore: req.param('verificationScore'),
			//RETROACTIVE | VS CREATED AT
			startTime: req.param('startTime'),
			//source: req.param('source'), //TIME TRACK | STREAM + TIME TRACK | RETORACTIVE | API

		};

		console.log(model)

		Work.create(model)
		.exec(function(err, work) {
			if (err) {return console.log(err);}
			else {
				User.find({id:model.user}).then(function(userModel){
					userModel[0].totalWork = parseInt(userModel[0].totalWork) + parseInt(model.amount);
					User.update({id:model.user}, {totalWork:userModel[0].totalWork}).then(function(user){});
				});

				/*
				User.find().then(function(userModel){
					for (x in userModel){
						Work.find({user:userModel[x].id})
						.then(function(models) {
							if (models.length > 0){
								var sum = 0;
								for (y in models){sum += parseInt(models[y].amount)}
								User.update({id:models[0].user}, {totalWork:sum}).then(function(user){});
								console.log(sum);
							}
						});
					}
				});
				*/

				Work.publishCreate(work);
				res.json(work);
			}
		});
	},

	update: function(req, res) {
		var id = req.param('id');
		//AND CREATE VERIFICATION..
		var model = {verificationScore: 100};
		Work.update({id: id}, model).exec(function afterwards(err, updated){
		  if (err) {
		    return;
		  }
		});
	},
	
};

