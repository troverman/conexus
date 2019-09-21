//DEPRECIATE
//CRE8.FOLLOWER

module.exports = {

	//DEPRECIATE
	getFollowers: function(req, res) {
		Follower.find({followed:req.param('id')})
		.populate('follower')
		.populate('followed')
		.then(function(models) {
			Follower.subscribe(req, models);
			res.json(models);
		});
	},

	getFollowing: function(req, res) {
		Follower.find({follower:req.param('id')})
		.populate('follower')
		.populate('followed')
		.then(function(models) {
			Follower.subscribe(req, models);
			res.json(models);
		});
	},

	create: function (req, res) {

		function createNotification(model, userModel){
			var notificationModel = {
				user: model.followed,
				type: 'FOLLOW',
				title: 'New Follower',
				content:userModel[0].username+' started following you',
				data:{apps:{member:userModel[0]}},
				priority:70,
				isRead: false,
			};
			Notification.create(notificationModel).then(function(notification){
				console.log('CREATE NOTIFICATION', notification);
				Notification.publishCreate(notification);
			});
		};

		var model = {
			followed: req.param('followed'),
			follower: req.param('follower'),
		};

		console.log('CREATE FOLLOWER', model);

		Follower.create(model)
		.exec(function(err, follower) {
			if (err) {return console.log(err);}
			else {

				//TODO:!!!
				//CONNECTION..
				//MEMBER-MEMBER VALIDATION! 
					//""FRIEND SHIP"" IS REPROCITY 
					//MEMBER-->MEMBER
					//MEMBER<--MEMBER
						//MEMBER--MEMBER--VALIDATION

				//TODO
				//UPDATE COUNTS IN MODELS
				//STORED IN APPS? Defined by connection?
				//data:{
					//apps:{
					//	friends:1,
					//	followers:100,
					//}
				//}

				//createEvent(follower);

				User.find({id:model.followed}).then(function(userModel){
					userModel[0].followerCount++;
					User.update({id:model.followed}, {followerCount:userModel[0].followerCount}).then(function(user){});
				});
				
				User.find({id:model.follower}).then(function(userModel){
					userModel[0].followingCount++;
					User.update({id:model.follower}, {followingCount:userModel[0].followingCount}).then(function(user){});
					createNotification(follower, userModel);
				});

				//createValidation(itemModel);
				//mintTokens(itemModel);

				Follower.publish([follower.id], {verb: 'create', data: follower});
				res.json(follower);

			}
		});
	}
	
};

