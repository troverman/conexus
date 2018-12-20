/**
 * TokenController
 */

module.exports = {

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		Token.watch(req);

		//TODO MANIFOLD FILTERS

		//+SEARCHED

		Token.find({})
		.limit(limit)
		.skip(skip)
		.sort(sort)
		.then(function(models) {
			Token.subscribe(req, models);
			res.json(models);
		});
	},

};

