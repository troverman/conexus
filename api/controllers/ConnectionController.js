var Q = require('q');

module.exports = {
	
	getSome: function(req, res) {

		var limit = parseInt(req.query.limit) || 100;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET CONNECTION', req.query);

		Peer.watch(req);

		if(req.query.id){
			Connection.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
        	.then(function(models) {
				res.json(models[0]);
			});
		}

		//creator is address.. 
		if(req.query.creator){
			Peer.find({creator:creator})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('creator')
        	.then(function(models) {
				res.json(models[0]);
			});
		}

		else{
			Peer.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Peer.subscribe(req, models);
				res.json(models);
			});
		}
		
	},

	create: function (req, res) {
		var model = {
			info: req.param('info'),
			data: req.param('data'),
			reputation: {},
			validiatedBlocks: [],
			versionHash: 'UNSTABLE PRE-ALPHA',
			creator: req.param('creator'),
		};

		console.log('CREATE PEER', model);
		Connection.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				Connection.publishCreate(model);
				res.json(model);
			}
		});
	},

};