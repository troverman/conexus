/**
 * NotificationController
 */

module.exports = {

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		Notification.watch(req);

		if (req.query.string){
			Notification.find({string:req.query.string})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Notification.subscribe(req, models);
				res.json(models);
			});
		}

		else{
			Notification.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				Notification.subscribe(req, models);
				res.json(models);
			});
		}

	},

};

