//CRE8.PROEJCT.ALPHA
var App = {
	
	'CONNECTION+CRYPTO': require('crypto'),
	'CONNECTION+Q': require('q'),

	'CONNECTION+SELF+ATTRIBUTES':{
        model: {type: 'string', defaultsTo: 'PROJECT'},
        title: {type: 'string'},
        description: {type: 'string', allowNull:true},
        avatarUrl: {type: 'string', defaultsTo: '/images/loading.gif'},
        urlTitle: {type: 'string'},
        context: {type: 'string'},
        location: {type: 'json'},
        associatedModels: {type: 'json'},
        user: {model: 'user'},
        creator: {type: 'string'},
        info: {type: 'json'},
        information: {type: 'json'},
        data: {type: 'json'},
        dataHash: {type: 'string'},
        hash: {type: 'string'}, 
        //COUNTS
        //TODO: APPS - DATA ?? REACTIONS.. ..association mapping?
        //associations:content:1
        contentCount: {type: 'number',defaultsTo: 0},
        itemCount: {type: 'number',defaultsTo: 0},
        memberCount: {type: 'number',defaultsTo: 0},
        taskCount: {type: 'number',defaultsTo: 0},
        timeCount: {type: 'number',defaultsTo: 0},
        liveCount: {type: 'number',defaultsTo: 0},
    },
    'DB': function(){return global['Project']},

    //OR GLOBAL REFRENCE..?
    'CONNECTION+MEMBERAPP': function(){return global['memberApp']},
    'CONNECTION+GOOGLEAPP': function(){return global['googleApp']}

    'INIT':function(model){
    	//var self = {
	    //	connnections:{
	    //		self:{
	    //			connections:{
	    //				self:{attributes:{}}
	    //			}
	    //		},
	    //		project:{},
	    //	}
	    //};
    },

	'GET': async function(req) {

		var deferred = App['CONNECTION+Q'].defer();
		var limit = parseInt(req.query.limit) || 10;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';

		var urlTitle = req.query.urlTitle;
		var id = req.query.id;
		var query = req.query.query;
		var tag = req.query.tag;

		//DEDUPLICATE
		if (req.query.id || req.query.urlTitle){
			var query = {};
			if (req.query.id){query.id = req.query.id}
			if (req.query.urlTitle){query.urlTitle = req.query.urlTitle}
			var models = await App['DB']().find(query);
			return associationApp['GET'](models[0]);
		}
			
		//SEARCHING FILTERING....
		//LOCATION
		else if(req.query.location){
			var location = req.query.location.map(function(obj){return parseFloat(obj)});
			var distance = req.query.distance || 5000;
			App['DB']().getDatastore().manager.collection('project')
			.find({"location.coordinates": {$near:{$geometry: {type: "Point" , coordinates: location}, $maxDistance: distance, $minDistance: 0}}})
			.limit(limit).skip(skip).toArray(function (err, models) {
				if (models){models = models.map(function(obj){obj.id = obj._id.toString(); return obj;});}
				deferred.resolve(models);
			});
			return deferred.promise;
		}

		//QUERY
		//TODO: APPRECIATE QUERY LANGUAGE
		else if(req.query.query){
			var models = await App['DB']().find({or: [{title: {contains: query}}, {urlTitle: {contains: query}}, {description: {contains: query}}]}).limit(limit).skip(skip).sort(sort);
			return models;
		}

		//TAG
		else if(req.query.tag){
			var models = await App['DB']().find({tags:{contains: tag}}).limit(limit).skip(skip).sort(sort)
			var numRecords = await App['DB']().count({tags:{contains: tag}});
			App['DB']().subscribe(req, models);
			var returnObj = {data:models, info:{count:numRecords}};
			//TODO: RETURN PROMISE
			return returnObj;
		}

		else{
			var models = await App['DB']().find({}).limit(limit).skip(skip).sort(sort).populate('user');
			var numRecords = await App['DB']().count();
			App['DB']().subscribe(req, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp['GET'](models[x]));}
			var populatedModels = await App['CONNECTION+Q'].all(promises);
			for (x in models){models[x] = populatedModels[x];}
			var returnObj = {data:models, info:{count:numRecords}};
			return returnObj
		}
	},

	'CREATE': async function (req) {
		var model = {
			model: 'PROJECT',
			title: req.param('title'),
			//context: req.param('context'),
			location: req.param('location'),
			description: req.param('description'),
			creator: req.param('user'),
			user: req.param('user'),
			parent: req.param('parent'),
			urlTitle: req.param('title').replace(/\s/g, '-').toLowerCase().replace('#','').replace('/',''),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		//TODO: READ
		//CREATEING SELF DEFINED VALIDATIONS OF SOME TYPE CREATES THE MDOEL
			//INSIDE OUT HERE
			//ONLY 'CREATE' IS VALIDATE?

		var project = await App['DB']().create(model)
		
		var userModels = await App['CONNECTION+MEMBERAPP']()['DB']().find({id:project.user.toString()});

		if(project._id){project.id = project._id.toString()}
		project.associatedModels = req.param('associatedModels');
		project.user = userModels[0];

		var location = await App['CONNECTION+GOOGLEAPP']()['GETCODE'](project);

		project.location = location;

		var projectModel = await App['DB']().update({id:project._id.toString()}, {location:location});
							
		console.log('UPDATE PROJECT LOCATION -- GEO CODE');

		App['DB']().subscribe(req, [project.id]);
		App['DB']().publish([projectModel[0].id], {verb: 'create', data: projectModel[0]});

		//eventApp['CREATE'](project);

		//notificationApp['CREATE+PROJECT'](project);
		
		//validationApp['CREATE'](project);

		//TODO: DEFINE CONNECTION PERMISSIONS
		//createCharter()
			//Project-Connection
			//(Project-Association)
			//Project-Member - Creator 
			//Project-Member - Member
			//Project-Order
			//Project-Validation
			//Project-Task
			//Project-Task-Time
			//Project-Transaction
			//Project-Item
			//Project-Content

		//INVERT THIS..
			//DEFINE THE CREATION OF PROJECT BY VALDIDATION
				//NOT CREATE -- GET WHAT WE CREATE THEN VALIDATE ?
		//TODO: - CREATOR ASSOCIATIONS TO ALL ???? !!!!! (HMM)
		
		//createProjectMember
		//HARDCODE PROJECT CREATOR
		var newValidation = {
            creator:project.user.id,
            user:project.user.id,
            content:'CREATOR OF THE PROJECT '+ project.title,
            associatedModels:[{type:'MEMBER', id:project.user.id}, {type:'PROJECT', id:project.id}],
            context:{general:100},
            connection:{title:'PROJECT CREATOR', parameters:{}},
        	information:{},
			data:{apps:{reactions: {plus:0,minus:0},attention:{general:0}}}
        };

		newValidation.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(newValidation)).digest('hex');
        var newValidationModel = await Validation.create(newValidation);

		associationApp['CREATE'](newValidationModel);

		App['TOKENS+CREATE'](project);

		return project;
	},
	
	//TODO: LIFECYCLE 
 	afterCreate: async function (model, next) {
        var colorArray = ['2ab996', '24242e', 'ff6a6a', 'ddbea8'];
        var colorInt = Math.floor(Math.random() * (colorArray.length));
        var avatarUrl = 'https://ui-avatars.com/api/?size=256&name='+model.title+'&color=fff&background='+colorArray[colorInt];
        model.avatarUrl = avatarUrl;
        await App['DB']().update({id: model.id}, model)
        return next(null, model);
    },

	'TOKENS+GET': function(model){
		//give all (init) project tokens to creator-->1?
		//MANIFOLD.. SEPERATE FROM (EVENT) ACTION
		var protocolTokens = ['CRE8', 'CRE8+PROJECT', 'CRE8+PROJECT+'+model.id, model.title.toUpperCase()];
		return protocolTokens;
	},
	'TOKENS+CREATE': function(model){
		var protocolTokens = App['TOKENS+GET'](model);
	},
};
module.exports = App;