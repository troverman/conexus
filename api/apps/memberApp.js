//CRE8.MEMBER.ALPHA

//SESSIONAPP, PEERAPP
const Q = require('q');
const mongodb = require('mongodb');
module.exports = {

	attributes: {
        model: {type: 'string', defaultsTo: 'MEMBER'},

        avatarUrl: {type: 'string', defaultsTo: 'images/avatar.png'},
        coverUrl: {type: 'string'},
        username: {type: 'string', required: true, unique: true},

        //IDENTITY AND PASSPORTS..
        email: {type: 'string', required: true, unique: true},
        phoneNumber: {type: 'string', allowNull: true},

        //INFORMATION
        info: {type: 'json'},
        information: {type: 'json'},
        firstName: {type: 'string', allowNull: true},
        lastName: {type: 'string', allowNull: true},
        dateOfBirth: {type: 'string', allowNull: true},
        address: {type: 'string', allowNull: true},

        //STATUS.. APP
        loggedIn: {type: 'boolean', defaultsTo: false},
        isWorking: {type: 'boolean', defaultsTo: false},
        isLive: {type: 'boolean', defaultsTo: false},

        //DATA
        //COUNTS.. APP
        followingCount: {type: 'number',defaultsTo: 0},
        followerCount: {type: 'number',defaultsTo: 0},
        notificationCount: {type: 'number',defaultsTo: 0},
        projectCount: {type: 'number',defaultsTo: 0},
        totalWork: {type: 'number',defaultsTo: 0},

        //MAPPINGS
        //..APP
        //reputation: {type: 'json'},
        balance: {type: 'json'},
        
        //mappingOfTimeStampString -> LatLng
        //Location Token Manifold minting logic
        //balance..
        //Location+lat+lng+datetime
        locationTime: {type: 'json'},
        
        //PASSPORT
        passports: { collection: 'Passport', via: 'user' },

        //DATA
        data: {type: 'json'},
        apps: {type: 'json'},

    },

    //TODO
    afterCreate: function(model, next){

        var colorArray = ['2ab996', '24242e', 'ff6a6a', 'ddbea8'];
        var colorInt = Math.floor(Math.random() * (colorArray.length + 1));
        var avatarUrl = 'https://ui-avatars.com/api/?size=256&name='+model.username+'&color=fff&background='+colorArray[colorInt];
        model.avatarUrl = avatarUrl;

        var url = "https://api.unsplash.com/photos/random?page=1&client_id=b996e9314d68deae5fe37098f096cd6b3b035f5c63989805aa23d4bd8c7358a2&secret=2ddbfdd90eaf2bcfc6f3cec5ec58c677b35cb470dc63d39e0e0372755b59c434%27";
        request(url, function (error, response, body) {
            var body = JSON.parse(body);
            if (body.urls){model.coverUrl = body.urls.small;}
            //TODO           
            model.apps = {cre8:{recordAttention:true,tutorial:true}};
            User.update({id: model.id}, model)
            .then(function(model){
                //emailService.sendTemplate('welcome', model.email, 'Welcome To CREATE!', {username: model.username});
                return next(null, model);
            });
        });
        
    },

	get: async function(req) {
		var deferred = Q.defer();
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		var id = req.query.id;
		var username = req.query.username;
		if (req.query.id || req.query.username){
			var query = {$or:[]};
			if (req.query.username){
				if (mongodb.ObjectID.isValid(req.query.username)){query.$or.push({"_id":{$eq:mongodb.ObjectID(req.query.username)}});}
				else{query.$or.push({"username":req.query.username});}
			}
			if (req.query.id){
				if (mongodb.ObjectID.isValid(req.query.id)){query.$or.push({"_id":{$eq:mongodb.ObjectID(req.query.id)}});}
			}
			User.getDatastore().manager.collection('user').find(query).limit(limit).skip(skip).sort({'createdAt':-1}).toArray(function (err, models) {
				if (models.length > 0){
					var userModel = models[0];
					userModel.id = userModel._id.toString();
					User.subscribe(req, [models[0].id]);
					associationApp.get(models[0]).then(function(models){
						deferred.resolve(models);
					});
				}
				else{return deferred.resolve({})}
			});
		}
		else if (req.query.query){
			return User.find()
			.where({
				or: [
					{firstName: {contains: req.query.query}},
					{lastName: {contains: req.query.query}},
					{username: {contains: req.query.query}},
				]
			});
		}
		else{
			var models = await User.find({}).limit(limit).skip(skip).sort(sort);
			var numRecords = await User.count();
			User.subscribe(req, models);
			var returnObj = {data:models, info:{count:numRecords}};
			deferred.resolve(returnObj)
		}
		return deferred.promise;
	},

	update: async function(req){
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
			apps: req.param('apps')
		};
		if (req.param('description')){model.description = req.param('description')}
		console.log('UPDATE USER', id, model);
		var model = await User.update({id: id}, model);
		User.publish([model.id], {verb: 'update', data: model});
		return model;
	},

	create:async function(){},
	
};