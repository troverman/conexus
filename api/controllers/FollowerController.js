/**
 * FollowerController
 */
module.exports = {

	get: function(req, res) {
		console.log('GET FOLLOWERS', req.query);

	},

	//DEPRECIATE
	getFollowers: function(req, res) {
		Follower.find({followed:req.param('id')})
		.populate('follower')
		.populate('followed')
		.then(function(models) {
			Follower.watch(req);
			Follower.subscribe(req, models);
			res.json(models);
		});
	},

	getFollowing: function(req, res) {
		Follower.find({follower:req.param('id')})
		.populate('follower')
		.populate('followed')
		.then(function(models) {
			Follower.watch(req);
			Follower.subscribe(req, models);
			res.json(models);
		});
	},

	//TODO:!!!
	//CONNECTION..
	//MEMBER-MEMBER VALIDATION! 

		//""FRIEND SHIP"" IS REPROCITY 
		//MEMBER-->MEMBER
		//MEMBER<--MEMBER

			//MEMBER--MEMBER--VALIDATION

	create: function (req, res) {

		var model = {
			followed: req.param('followed'),
			follower: req.param('follower'),
		};

		console.log('CREATE FOLLOWER', model);

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

					var notificationModel = {
						user: model.followed,
						type: 'FOLLOW',
						title: 'New Follower',
						content:userModel[0].username+' started following you',
						data:{apps:{member:userModel[0]}},
						priority:70,
						isRead: false,
					};

					//USER.FIND --> IF USER NOTIFICATION PERMISSION
					Notification.create(notificationModel).then(function(notification){
						console.log('CREATE NOTIFICATION', notification);
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

