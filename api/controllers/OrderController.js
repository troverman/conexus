/**
 * OrderController
 */

module.exports = {

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		
		Order.watch(req);

		if(req.query.identiferSet && req.query.identiferSet1){
			var identiferSet = req.query.identiferSet;
			var identiferSet1 = req.query.identiferSet1;
			Order.find({identiferSet:identiferSet, identiferSet1:identiferSet1})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				console.log(models);
				res.json(models);
			});
		}

		else if(req.query.identiferSet && !req.query.identiferSet1){
			var identiferSet = req.query.identiferSet;
			Order.find({identiferSet:identiferSet})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				console.log(models);
				res.json(models);
			});
		}

		else if(req.query.user){
			var user = req.query.user;
			Order.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				console.log(models);
				res.json(models);
			});
		}

		else{
			Order.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				console.log(models);
				res.json(models);
			});
		}
	},

	getOne: function(req, res) {
		Order.findOne(req.param('id'))
		.then(function(model) {
			Order.subscribe(req, model);
			res.json(model);
		});
	},

	create: function (req, res) {
		var model = {
			amountSet: req.param('amountSet'),
			identiferSet: req.param('identiferSet'),
			amountSet1: req.param('amountSet'),
			identiferSet1: req.param('identiferSet'),
			user: req.param('user'),
		};
		Order.create(model)
		.exec(function(err, order) {
			if (err) {return console.log(err);}
			else {
				console.log(order);
				Order.publishCreate(order);
				res.json(order);
			}
		});
	},

	update: function (req, res) {},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		Order.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Order.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Order.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

