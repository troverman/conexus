module.exports = {

	get: function(req, res) {
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var id = req.query.id;
		console.log('GET ASSOCIATION', req.query)
		Association.watch(req);
		if(req.query.id){
			Association.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				res.json(models);
			});
		}
		//mm
		else if (req.query.app){
			var app = req.query.app;
			Association.native(function(err, association) {
				association.find({"associatedModels.id": {$in :[app]}})
				.limit(1000)
				.skip(0)
				.sort({'createdAt':-1})
				.toArray(function (err, associationModels) {
					console.log(associationModels)
					associationModels = associationModels.map(function(obj){obj.id = obj._id; return obj;});
					res.json(associationModels);
				});
			});
		}
	}

};