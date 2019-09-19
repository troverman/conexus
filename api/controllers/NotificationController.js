//CRE8.NOTIFICATION

module.exports = {

	get: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		
		console.log('GET NOTIFICATION', req.query);

		Notification.watch(req);
		
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
		var model = {isRead: req.param('isRead')};
		console.log('UPDATE NOTIFICATION', id, model);
		Notification.update({id: id}, model)
		.then(function(model){
			console.log(model);
			Notification.publishUpdate(id, model);
			res.json(model);
		});
	},

};

