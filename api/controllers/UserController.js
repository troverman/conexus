module.exports = {

	getSome: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var id = req.query.id;
		var username = req.query.username;
		console.log('GET USER', req.query);

		if (req.query.id){
			User.find({id:id}).then(function(models){
				User.subscribe(req, models[0]);
				res.json(models[0]);
			});
		}

		else if (req.query.username){
			User.find({username:username}).then(function(models){
				User.subscribe(req, models);
				res.json(models[0]);
			});
		}

		//SEARCH
		else if (req.query.query){
			User.find()
			.where({
				or: [
					{firstName: {contains: req.query.query}},
					{lastName: {contains: req.query.query}},
					{username: {contains: req.query.query}},
				]
			})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				console.log(models)
				User.subscribe(req, models);
				res.json(models);
			});
		}
		//FIND BY.. USERNAME
		else{
			User.find({})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.then(function(models) {
				User.subscribe(req, models);
				res.json(models);
			});
		}

	},

	create: function (req, res) {
		var model = {
			username: req.param('username'),
			email: req.param('email'),
			firstName: req.param('firstName'),
			lastName: req.param('lastName'),
			address: req.param('address'),
		};
		console.log('CREATE USER', model);
		User.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err);}
			else {
				User.publishCreate(model.toJSON());
				res.json(model);
			}
		});
	},

	update: function(req,res){
		//TODO: SECURITY
		var id = req.param('id');
		var model = {
			username:req.param('username'),
			email:req.param('email'),
			phoneNumber:req.param('phoneNumber'),
			avatarUrl:req.param('avatarUrl'),
			coverUrl:req.param('coverUrl'),
			firstName:req.param('firstName'),
			lastName:req.param('lastName'),
			dateOfBirth: req.param('dateOfBirth'),
			apps: req.param('apps'),
			//address: req.param('address'),
			//eyeColor: req.param('eyeColor'),
			//gender: req.param('gender'),
			//height: req.param('height'),
		};
		if (req.param('description')){model.description = req.param('description')}
		console.log('UPDATE USER', id, model);
		User.update({id: id}, model)
		.then(function(model){
			User.publishUpdate(id, model);
			res.json(model);
		});
	},

	//TODO: IPFS BLOB / PEER UPLOAD
	upload: function(req,res){
	},

};