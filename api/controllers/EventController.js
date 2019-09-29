//CRE8.EVENT
module.exports = {

	get: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';	

		console.log('GET EVENT', req.query)	

		if(req.query.id){
			Event//.find({id:req.query.id})
			.find()
			.limit(limit)
			.skip(skip)
			.sort(sort)
        	.then(function(models){
        		console.log(models)
				//Event.subscribe(req, [models[0].id]);
				//populate
				res.json(models);
			});
		}

		else{
			res.json([]);
		}

	},

};