module.exports = {
	getAll: function(req, res) {
		User.getAll()
		.spread(function(models) {
			User.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getOne: function(req, res) {
		User.getOne(req.param('id'))
		.spread(function(model) {
			User.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			// res.send(404);
		});
	},

	getByUsername: function(req, res) {
		User.find()
		.where({username: req.param('path')})
		.spread(function(model) {
			User.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},


	create: function (req, res) {
		var model = {
			username: req.param('username'),
			email: req.param('email'),
			first_name: req.param('first_name')
		};

		User.create(model)
		.exec(function(err, model) {
			if (err) {
				return console.log(err);
			}
			else {
				User.publishCreate(model.toJSON());
				res.json(model);
			}
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