/**
 * ProjectMemberController
 */

module.exports = {

	getSome: function(req, res) {
		
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		var project = req.query.project;
		var user = req.query.user;

		ProjectMember.watch(req);
		if (req.query.project){
			ProjectMember.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				ProjectMember.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.user){
			ProjectMember.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				ProjectMember.subscribe(req, models);
				res.json(models);
			});
		}

		else{
			ProjectMember.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				ProjectMember.subscribe(req, models);
				res.json(models);
			});
		}

	},

	create: function (req, res) {
		var model = {
			project: req.param('project'),
			user: req.param('user'),
			//validation: 0
		};
		ProjectMember.create(model)
		.exec(function(err, member) {
			if (err) {return console.log(err);}
			else {

				//DO ++
				//CREATE MOTION.. VALIDATE?????????

				//TODO: REQUEST TO VALIDATE MEMBER JOIN
				//for (x in time.associatedModels){
				//	if (time.associatedModels[x].type == 'PROJECT'){
				//		ProjectMember.find({project:time.associatedModels.address}).then(function(projectMembers){
				//			for (x in projectMembers){
								//var notificationModel = {
								//	user: projectMembers[x],
								//	type: 'Request to Validate',
								//	content:'New Time, '+userModel.username +' is requesting validation for '+time,
								//};
								//Notification.create(notificationModel).then(function(notification){
								//	Notification.publishCreate(follower[0]);
								//});
				//			}
				//		});
				//	}
				//}

				ProjectMember.find({user:model.user}).then(function(projectMemberModel){
					var projectCount = 0;
					projectCount = projectMemberModel.length;
					User.update({id:model.user}, {projectCount:projectCount}).then(function(user){});
					ProjectMember.publishCreate(member);
					res.json(member);
				});

			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		ProjectMember.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			ProjectMember.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				ProjectMember.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

