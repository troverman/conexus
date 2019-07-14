/**
 * OrderController
 */

var Q = require('q');

module.exports = {

	getSome: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		
		console.log('GET ORDER', req.query);

		Order.watch(req);

		if(req.query.id){
			Order.find({id:req.query.id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				res.json(models[0]);
			});
		}

		else if(req.query.user){
			Order.find({user:req.query.user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				res.json(models);
			});
		}

		else if(req.query.project){
			Order.find({project:req.query.project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				res.json(models);
			});
		}

		//MARKET.. IS ONLY
		//HIGH COMBINATORIAL..... CAN SEE LOWER BOUDED ORDERS IN TRAVERSAL (AS WE OPEN UP)



		//CHECK OUT THE OR GETS

		else if(req.query.setAlpha){
			var query = {};
			query[ "setAlpha."+req.query.item] = {$gt: 0};
			Order.native(function(err, order) {
				order.find(query)
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					models = models.map(function(obj){obj.id = obj._id; return obj;});
					var promises = [];
					for (x in models){promises.push(User.find({id:models[x].user.toString()}))}
					Q.all(promises).then((populatedModels)=>{
						for (x in models){models[x].user = populatedModels[x][0];}
						res.json(models);
					});
				});
			});
		}
		else if(req.query.setBeta){
			var query = {};
			query[ "setBeta."+req.query.item] = {$gt: 0};
			Order.native(function(err, order) {
				order.find(query)
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					models = models.map(function(obj){obj.id = obj._id; return obj;});
					var promises = [];
					for (x in models){promises.push(User.find({id:models[x].user.toString()}))}
					Q.all(promises).then((populatedModels)=>{
						for (x in models){models[x].user = populatedModels[x][0];}
						res.json(models);
					});
				});
			});
		}

		//identifier 
		else if(req.query.item || req.query.market){

			var item = req.query.item || req.query.market;

			var orQuery = { $or: []};
			var query1 = {};
			var query2 = {};
			query1[ "setAlpha."+item] = {$gt: 0};
			query2[ "setBeta."+item] = {$gt: 0};
			orQuery.$or.push(query1);
			orQuery.$or.push(query2);

			Order.native(function(err, order) {
				order.find(orQuery)
				.limit(limit)
				.skip(skip)
				.sort({'createdAt':-1})
				.toArray(function (err, models) {
					if (models.length != 0){
						models = models.map(function(obj){obj.id = obj._id; return obj;});
						var promises = [];
						for (x in models){promises.push(User.find({id:models[x].user.toString()}))}
						Q.all(promises).then((populatedModels)=>{
							for (x in models){models[x].user = populatedModels[x][0];}
							res.json(models);
						});
					}
					else{res.json(models)}
				});
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
			creator: req.param('user'),
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

