module.exports = {

	getOne: function(req, res) {
		User.findOne(req.param('id'))
		.populate('passports')
		.then(function(model) {
			User.subscribe(req, model);
			res.json(model);
		});
	},

	getSome: function(req, res) {
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		User.watch(req);
		User.find({})
		.limit(limit)
		.skip(skip)
		.sort(sort)
		.then(function(models) {
			User.subscribe(req, models);
			res.json(models);
		});
	},

	getByUsername: function(req, res) {
		User.find({username: req.param('path')})
		.spread(function(model) {
			User.subscribe(req, model);
			res.json(model);
		});
	},

	create: function (req, res) {
		var model = {
			username: req.param('username'),
			email: req.param('email'),
			firstName: req.param('firstName')
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
			//email: req.param('email'),
			//username : req.param('username'),
			avatarUrl: req.param('avatarUrl'),
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