/**
 * OrderController
 */

module.exports = {

	getSome: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip =  parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var id = req.query.id;
		var setAlpha = req.query.setAlpha;
		var setBeta = req.query.setBeta;
		var user = req.query.user;
		var project = req.query.user;
		var order = req.query.order;

		console.log('GET ORDER', req.query);

		Order.watch(req);

		if(req.query.id){
			Order.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				res.json(models[0]);
			});
		}

		else if(req.query.user){
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
			Order.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				res.json(models);
			});
		}

		//TODO
		else if(req.query.order){
			Order.find({order:order})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				res.json(models);
			});
		}

		//TODO
		else if(req.query.setAlpha && req.query.setBeta){
			//DEPRECIATE ID SET
			Order.find({identiferSet:{contains: setAlpha}, identiferSet1:{contains: setBeta}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				res.json(models);
			});
		}

		//TODO
		else if(req.query.setAlpha && !req.query.setBeta){
			//DEPRECIATE ID SET
			Order.find({identiferSet:setAlpha})
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
		console.log('CREATE ORDER', model);
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

