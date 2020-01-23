//CRE8.PROEJCT.ALPHA
const crypto = require('crypto');
const mongodb = require('mongodb');
const Q = require('q');

module.exports = {

	attributes: {
        
        //DEPRECIATE
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
    afterCreate: function (model, next) {
        var colorArray = ['2ab996', '24242e', 'ff6a6a', 'ddbea8'];
        var colorInt = Math.floor(Math.random() * (colorArray.length));
        var avatarUrl = 'https://ui-avatars.com/api/?size=256&name='+model.title+'&color=fff&background='+colorArray[colorInt];
        model.avatarUrl = avatarUrl;
        Project.update({id: model.id}, model).then(function(model){return next(null, model);});
    },

    init:function(model){

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

	get: async function(req) {

		var deferred = Q.defer();
		var limit = parseInt(req.query.limit) || 10;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';

		var urlTitle = req.query.urlTitle;
		var id = req.query.id;
		var query = req.query.query;
		var tag = req.query.tag;

		console.log('GET PROJECT', req.query);

		//CREATE PEER SELF DATABASE . . .

		//DEDUPLICATE
		if (req.query.id || req.query.urlTitle){
			var query = {};
			if (req.query.id){query.id = req.query.id}
			if (req.query.urlTitle){query.urlTitle = req.query.urlTitle}
			var models = await Project.find(query);
			return associationApp.get(models[0]);
		}
			
		//SEARCHING FILTERING....
		//LOCATION
		else if(req.query.location){
			var location = req.query.location.map(function(obj){return parseFloat(obj)});
			var distance = req.query.distance || 5000;
			Project.getDatastore().manager.collection('project')
			.find({
				"location.coordinates": {
					$near:{
						$geometry: {
			          		type: "Point" ,
			          		coordinates: location,
			       		},
						$maxDistance: distance,
						$minDistance: 0,
			       	}
			     }
			}).limit(limit).skip(skip).toArray(function (err, models) {
				if (models){models = models.map(function(obj){obj.id = obj._id.toString(); return obj;});}
				//TODO: RETRUN PORMISE
				deferred.resolve(models);
			});
		}

		//QUERY
		//TODO: APPRECIATE QUERY LANGUAGE
		else if(req.query.query){
			var models = await Project.find({
				or: [
					{title: {contains: query}},
					{urlTitle: {contains: query}},
					{description: {contains: query}},
				]
			}).limit(limit).skip(skip).sort(sort);
			deferred.resolve(models);
		}

		//TAG
		else if(req.query.tag){
			var models = await Project.find({tags:{contains: tag}}).limit(limit).skip(skip).sort(sort)
			var numRecords = await Project.count({tags:{contains: tag}});
			Project.subscribe(req, models);
			var returnObj = {data:models, info:{count:numRecords}};
			//TODO: RETURN PROMISE
			deferred.resolve(returnObj);
		}

		else{
			var models = await Project.find({}).limit(limit).skip(skip).sort(sort).populate('user');
			var numRecords = await Project.count();
			Project.subscribe(req, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp.get(models[x]));}
			var populatedModels = await Q.all(promises);
			for (x in models){models[x] = populatedModels[x];}
			var returnObj = {data:models, info:{count:numRecords}};
			deferred.resolve(returnObj);
		}

		return deferred.promise;

		//return new Promise((resolve, reject) => {resolve(returnObj)}

	},

	create: async function (req) {
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
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		console.log('CREATE PROJECT', model);

		//TODO: READ
		//CREATEING SELF DEFINED VALIDATIONS OF SOME TYPE CREATES THE MDOEL
			//INSIDE OUT HERE
			//ONLY 'CREATE' IS VALIDATE?

		var project = await Project.create(model)
		
		var userModels = await User.find({id:project.user.toString()});

		if(project._id){project.id = project._id.toString()}
		project.associatedModels = req.param('associatedModels');
		project.user = userModels[0];

		var location = await googleApp.geoCode(project);

		project.location = location;

		var projectModel = await Project.update({id:project._id.toString()}, {location:location});
							
		console.log('UPDATE PROJECT LOCATION -- GEO CODE');

		Project.subscribe(req, [project.id]);
		Project.publish([projectModel[0].id], {verb: 'create', data: projectModel[0]});

		eventApp.create(project);
		notificationApp.create.project(project);
		validationApp.create(project);

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
            associatedModels:[
                {type:'MEMBER', id:project.user.id},
                {type:'PROJECT', id:project.id},
            ],
            context:{general:100},
            connection:{
            	title:'PROJECT CREATOR',
            	parameters:{},
            },
        	information:{},
			data:{apps:{reactions: {plus:0,minus:0},attention:{general:0}}}
        };
		newValidation.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newValidation)).digest('hex');

        var newValidationModel = await Validation.create(newValidation);
		console.log('CREATE VALIDATION', newValidationModel);
		createAssociation(newValidationModel);

		projectApp.tokens.create(project);

		//TODO: RETURN PROMISE
		return project;
	
	},
	
	tokens:{
		create: function(model){
			var protocolTokens = getProtocolTokens(model);
		},
		//FACTOR TO RETURN ENTIER TOKEN MODEL
		get:function(model){
			//give all (init) project tokens to creator-->1?
			//MANIFOLD.. SEPERATE FROM (EVENT) ACTION
			var protocolTokens = [
				'CRE8', 
				'CRE8+PROJECT', 
				'CRE8+PROJECT+'+model.id,
				model.title.toUpperCase()
			];
			return protocolTokens;
		},
	}
};