//CRE8.NOTIFICATION

module.exports = {

	get: function(req, res) {

		var limit = req.query.limit || 1;
		var skip = req.query.skip || 0;
		var sort = req.query.sort || 'createdAt DESC';
		
		console.log('GET NOTIFICATION', req.query);
		
		if (req.query.user){
			if (req.query.isRead){
				Notification.find({user:req.query.user, isRead:req.query.isRead})
				.limit(limit)
				.skip(skip)
				.sort(sort)
				.then(function(models) {
					Notification.subscribe(req, models.map(function(obj){return obj.id}));
					res.json(models);
				});
			}
			else{
				Notification.find({user:req.query.user})
				.limit(limit)
				.skip(skip)
				.sort(sort)
				.then(function(models) {
					Notification.subscribe(req, models.map(function(obj){return obj.id}));
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
				Notification.subscribe(req, models.map(function(obj){return obj.id}));
				res.json(models);
			});
		}

	},

	update: function(req,res){
		var id = req.param('id');
		var model = {isRead: req.param('isRead')};
		console.log('UPDATE NOTIFICATION', id, model);
		Notification.update({id: id}, model).then(function(model){
			Notification.publish([model[0].id], {verb: 'update', data: model});
			res.json(model);
		});
	},

};

