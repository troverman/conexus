module.exports = {

	getSome: function(req, res) {

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var id = req.query.id;
		var username = req.query.username;

		User.watch(req);

		console.log(req.query)

		if (req.query.id){
			User.find({id:id}).then(function(){
				User.subscribe(req, models);
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

	//KINDA HACKY
	getByUsername: function(req, res) {
		User.find()
		.where({
		  or: [
		    {username: req.param('path')},
		    {id: req.param('path')}
		]})
		.spread(function(model) {
			User.subscribe(req, model);
			res.json(model);
		});
	},

	create: function (req, res) {
		var model = {
			username: req.param('username'),
			email: req.param('email'),
			firstName: req.param('firstName'),
			lastName: req.param('lastName'),
			address: req.param('address'),
		};
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
		var id = req.param('id');
		var model = {
			description : req.param('description'),
			username : req.param('username'),
			email: req.param('email'),
			avatarUrl: req.param('avatarUrl'),
			coverUrl: req.param('coverUrl'),
			firstName: req.param('firstName'),
			lastName: req.param('lastName'),
			address: req.param('address'),
			dateOfBirth: req.param('dateOfBirth'),
			eyeColor: req.param('eyeColor'),
			gender: req.param('gender'),
			height: req.param('height'),
		};
		User.update({id: id}, model)
		.then(function(model){
			User.publishUpdate(id, model);
			res.json(model);
		});
	},

	//TODO: RESET KEYS
	upload: function(req,res){
		res.setTimeout(0)
		var options = {
			adapter: require("skipper-s3"),
			key: sails.config.secret.AMAZON.key,
		 	secret: sails.config.secret.AMAZON.secret,
		 	bucket: sails.config.secret.AMAZON.bucket,
		}
		var byteCount = req.file('picture')._files[0].stream.byteCount
		req.file('picture')
		.on('progress', function (event){
			//why is this doubled
			//server processing --> to s3. 
			//need to programatically delete s3 chunks if fail / and on delete
			var percentageUploaded = event.written/byteCount
			console.log(percentageUploaded)
			//File.publishUpdate(newFile.id, event)
		})
		.upload(options, function response(err,uploadedFiles){
			console.log('we are in the code')
			if (err) {
		    	return res.negotiate(err);
		    	console.log(err)
		    }
		    if (uploadedFiles.length === 0){
		    	return res.badRequest('No file was uploaded');
		    }
		    console.log(uploadedFiles)
		    var amazonUrl = uploadedFiles[0].extra.Location;
		    return res.json({amazonUrl: amazonUrl});
		});

	},

	subscribe: function(req, res) {
    	//Find all current users in the user model
	    //User.find(function foundUsers(err, users) {
	      //if (err) return next(err);
	      // subscribe this socket to the user instance rooms
		  //console.log('----')
	      //User.subscribe(req, users);
	      //console.log('----')
	    //});
  	}
  	
};