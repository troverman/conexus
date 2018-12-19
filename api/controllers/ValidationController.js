module.exports = {

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		var project = req.query.project;
		var task = req.query.task;
		var user = req.query.user;
		var time = req.query.time;
		var id = req.query.id;

		Validation.watch(req);

		if (req.query.project){
			Validation.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});
		}

		//DO BOTH task and proj
		else if (req.query.task){
			Validation.find({task:task})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('task')
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.user){
			Validation.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});
		}

		else if (req.query.time){
			Validation.find({time:time})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.id){
			Validation.find({id:id})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.then(function(models) {
				Validation.subscribe(req, models);
				res.json(models);
			});
		}

		else{res.json(models);}

	},

	//TODO | SECURITY
	create: function (req, res) {
		var model = {

			content: req.param('content'),
			reputation: req.param('reputation'), //SAVED USER REP
			user: req.param('user'),
			validation: req.param('validation'), //ACTUAL 'VOTE'

			//ASSOICATED MODEL {BINARY -- }

			//DEPRECIATE
			task: req.param('task'),
			project: req.param('project'),
			time: req.param('time'),
			//validation: req.param('validation'),

			//PATCH
			reactions: {plus:0,minus:0},


		};

		//SHOULD DO ANOTHER FIND.. NON RELIENT ON FRONTEND DATA
		User.find({id:model.user}).then(function(userModel){

			var reputation = {};

			//TIME.FIND//  --> PREVENTS IRREVELATNT VALIDATION DIMENSIONS | TASK
			//FIND DIMENSIONS .. MATCH WITH FRONTEND INPUT

			for (x in Object.keys(model.validation)){

				//TODO | BETTER..
				if (userModel[0].reputation[Object.keys(model.validation)[x]]){
					//GENERAL SHOULD BE IN THE MAPPING --> DEPECRIETE THIS / FORMALIZE THE GENERAL REP DIMENSION & OTHER MAPPINGS
					//WIP
					if (Object.keys(model.validation)[x] == 'general'){
						reputation[Object.keys(model.validation)[x]] = userModel[0].totalWork;
					}
					else{reputation[Object.keys(model.validation)[x]] = userModel[0].reputation[Object.keys(model.validation)[x]]}
				}

				else{
					reputation[Object.keys(model.validation)[x]] = 0;
				}

			}

			model.reputation = reputation;

			Validation.create(model)
			.exec(function(err, validation) {
				if (err) {return console.log(err);}
				else {
					console.log(validation);
					Validation.publishCreate(validation);
					res.json(validation);
				}
			});

		});


	},

};