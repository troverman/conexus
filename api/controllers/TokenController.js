/**
 * TokenController
 */

module.exports = {

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		console.log('GET TOKEN', req.query)

		Token.watch(req);

		if (req.query.string){
			Token.find({string:req.query.string})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Token.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.query){
			console.log(req.query)
			Token.find()
			.where({string: {contains: req.query.query}})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Token.subscribe(req, models);
				res.json(models);
			});
		}

		else{
			Token.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Token.subscribe(req, models);

				//TODO...
				//Token.find({}).count()
				//var numRecords = await Token.count();
				Token.count().then(function(numRecords){
					var returnObj = {data:models, info:{count:numRecords}};
					console.log(returnObj)
					res.json(returnObj);
				});
				
			});
		}

	},

};

