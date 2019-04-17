/**
 * FollowerController
 */


//TODO: RELATIONSHIP?
module.exports = {

	getSome: function(req, res) {
		//var follower;
		//var followed;
	},

	getFollowers: function(req, res) {
		var followedId = req.param('id');
		Follower.getFollowers(followedId)
		.spread(function(models) {
			Follower.watch(req);
			Follower.subscribe(req, models);
			res.json(models);
		});
	},

	getFollowing: function(req, res) {
		var followerId = req.param('id');
		Follower.getFollowing(followerId)
		.spread(function(models) {
			Follower.watch(req);
			Follower.subscribe(req, models);
			res.json(models);
		});
	},

	create: function (req, res) {

		var model = {
			followed: req.param('followed'),
			follower: req.param('follower'),
		};

		console.log(model);

		Follower.create(model)
		.exec(function(err, follower) {
			if (err) {return console.log(err);}
			else {
				console.log(follower);

				//MEH
				User.find({id:model.followed}).then(function(userModel){
					userModel[0].followerCount++;
					User.update({id:model.followed}, {followerCount:userModel[0].followerCount}).then(function(user){});
				});
				
				User.find({id:model.follower}).then(function(userModel){
					userModel[0].followingCount++;
					User.update({id:model.follower}, {followingCount:userModel[0].followingCount}).then(function(user){});

					//MB REFACTOR THIS BLOCK
					//WHATS THE DATA?
					var notificationModel = {
						user: model.followed,
						type: 'FOLLOW',
						title: 'New Follower',
						content:userModel[0].username+' started following you',
						info:userModel[0],
						priority:70,
					};

					Notification.create(notificationModel).then(function(notification){
						Notification.publishCreate(notification);
					});
					
				});

				Follower.publishCreate(follower);
				res.json(follower);

			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		Follower.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Follower.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Follower.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

