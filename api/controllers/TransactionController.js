/**
 * TransactionController
 */

module.exports = {

	getSome: function(req, res) {
		
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		Transaction.watch(req);
		if(req.query.project){
			var project = req.query.project;
			Transaction.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Transaction.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}

		else if(req.query.to){
			var to = req.query.to;
			Transaction.find({to:to})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {


				//Project.find({id:to})

				//User.find({id:to})

				//Project.find({id:from})

				//User.find({id:from})


				res.json(models)
			});
		}

		else if(req.query.from){
			var from = req.query.from;
			Transaction.find({from:from})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				res.json(models);
			});
		}

		else{
			Transaction.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				res.json(models);
			});
		}
	},

	getOne: function(req, res) {
		Transaction.find({id:req.param('id')})
		.then(function(model) {
			Transaction.subscribe(req, model[0]);
			res.json(model[0]);
		});
	},

	create: function (req, res) {
		var model = {
			amount: req.param('amount'),
			content: req.param('content'),
			identifier: req.param('identifier'),
			to: req.param('to'),
			from: req.param('from'),
			ledger: req.param('ledger'),
			user: req.param('user'),
		};
		Transaction.create(model)
		.exec(function(err, task) {
			if (err) {return console.log(err);}
			else {
				Transaction.publishCreate(task);
				res.json(task);
			}
		});
	},

	update: function (req, res) {},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		Transaction.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Transaction.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Transaction.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

