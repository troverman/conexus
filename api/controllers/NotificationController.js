/**
 * NotificationController
 */

module.exports = {

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;

		Notification.watch(req);

		//BUILD UP

		console.log(req.query);
		
		if (req.query.user){

			if (req.query.isRead){

				Notification.find({user:req.query.user, isRead:req.query.isRead})
				.limit(limit)
				.skip(skip)
				.sort(sort)
				.then(function(models) {
					Notification.subscribe(req, models);
					res.json(models);
				});

			}

			else{

				Notification.find({user:req.query.user})
				.limit(limit)
				.skip(skip)
				.sort(sort)
				.then(function(models) {
					Notification.subscribe(req, models);
					res.json(models);
				});

			}

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

	update: function(req,res){
		var id = req.param('id');
		var model = {
			isRead: req.param('isRead'),
		};
		Notification.update({id: id}, model)
		.then(function(model){
			console.log(model);
			Notification.publishUpdate(id, model);
			res.json(model);
		});
	},

};

