/**
 * OrderController
 */

module.exports = {

	getOne: function(req, res) {
		Order.findOne(req.param('id'))
		.populate('user')
		.then(function(model) {
			Order.subscribe(req, model);
			res.json(model);
		});
	},

	getSome: function(req, res) {

		var limit = req.query.limit || 10;
		var skip = req.query.skip || 0;
		var sort = req.query.sort || 'createdAt DESC';

		//var filter = req.query.filter;

		Order.watch(req);

		console.log(req.query);

		//IDSET DEPRECIATE...

		if(req.query.identiferSet && req.query.identiferSet1){
			var identiferSet = req.query.identiferSet;
			var identiferSet1 = req.query.identiferSet1;
			Order.find({identiferSet:{contains: identiferSet}, identiferSet1:{contains: identiferSet1}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				res.json(models);
			});
		}

		else if(req.query.identiferSet && !req.query.identiferSet1){
			var identiferSet = req.query.identiferSet;
			//Order.find({identiferSet:{contains: identiferSet}})
			Order.find({identiferSet:identiferSet})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
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
				res.json(models);
			});
		}

		else if(req.query.project){
			var project = req.query.user;
			Order.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				res.json(models);
			});
		}

		else{
			Order.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				res.json(models);
			});
		}
		
	},

	create: function (req, res) {
		
		var model = {

			setAlpha: req.param('setAlpha'),
			setBeta: req.param('setBeta'),

			status: req.param('status'),
			type: req.param('type'),

			creator: req.param('creator'),
			user: req.param('user'),

			reactions:{plus:0,minus:0},

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

