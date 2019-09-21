//CRE8.PEER
const Q = require('q');

module.exports = {
	
	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 100;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET PEER', req.query);

		if(req.query.id){
			Peer.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
        	.then(function(models) {
				res.json(models[0]);
			});
		}

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
			information: req.param('information'),
			versionHash: 'UNSTABLE PRE-ALPHA',
			data: req.param('data'),
			reputation: {},
			validiatedBlocks: [],
			creator: req.param('creator'),
		};
		console.log('CREATE PEER', model);
		Peer.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				Peer.publish([model.id], {verb: 'create', data: model});
				res.json(model);
			}
		});
	},
	
};