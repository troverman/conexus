//CRE8.MEMBER.ALPHA
//SESSIONAPP, PEERAPP
var App = {
	'CONNECTION+Q':require('q'), 
	'CONNECTION+MONGODB':require('mongodb'), 
	'CONNECTION+REQUEST':require('request'), 
	//META MODEL IN APP INHERITANCE ?? IE DYNAMIC PROTOCOL SETS >>> DM VS APP DM
	'CONNECTION+SELF+ATTRIBUTES': {
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
        followingCount: {type: 'number',defaultsTo: 0},
        followerCount: {type: 'number',defaultsTo: 0},
        notificationCount: {type: 'number',defaultsTo: 0},
        projectCount: {type: 'number',defaultsTo: 0},
        totalWork: {type: 'number',defaultsTo: 0},
        //MAPPINGS
        //reputation: {type: 'json'},
        balance: {type: 'json'},
        //mappingOfTimeStampString -> LatLng
        //Location Token Manifold minting logic
        //Location+lat+lng+datetime
        locationTime: {type: 'json'},
        //PASSPORT
        passports: { collection: 'Passport', via: 'user' },
        //DATA
        data: {type: 'json'},
        apps: {type: 'json'},
    },
	'DB': function(){return global['User']},

	//GET MEMBER IS LOL RN
	'GET': async function(input) {
		var deferred = App['CONNECTION+Q'].defer();
		var limit = parseInt(input.query.limit) || 1;
		var skip = parseInt(input.query.skip) || 0;
		var sort = input.query.sort || 'createdAt DESC';
		var id = input.query.id;
		var username = input.query.username;
		if (input.query.id || input.query.username){
			var query = {$or:[]};
			if (input.query.username){
				if (App['CONNECTION+MONGODB'].ObjectID.isValid(input.query.username)){query.$or.push({"_id":{$eq:App['CONNECTION+MONGODB'].ObjectID(input.query.username)}});}
				else{query.$or.push({"username":input.query.username});}
			}
			if (input.query.id){
				if (App['CONNECTION+MONGODB'].ObjectID.isValid(input.query.id)){query.$or.push({"_id":{$eq:App['CONNECTION+MONGODB'].ObjectID(input.query.id)}});}
			}
			App['DB']().getDatastore().manager.collection('user').find(query).limit(limit).skip(skip).sort({'createdAt':-1}).toArray(async function (err, models) {
				console.log(models)
				if (models.length > 0){
					var userModel = models[0];
					userModel.id = userModel._id.toString();
					App['DB']().subscribe(input, [models[0].id]);
					var models = await associationApp['GET'](models[0]);
					console.log(models, models[0])
					return models;
				}
				deferred.resolve(models);
			});
		}
		else if (input.query.query){
			var models = await App['DB']().find().where({or: [{firstName: {contains: input.query.query}}, {lastName: {contains: input.query.query}}, {username: {contains: input.query.query}}]});
			var numRecords = await App['DB']().where({or: [{firstName: {contains: input.query.query}}, {lastName: {contains: input.query.query}}, {username: {contains: input.query.query}}]}).count();
			var returnObj = {data:models, info:{count:numRecords}};
			deferred.resolve(returnObj);
		}
		else{
			var models = await App['DB']().find({}).limit(limit).skip(skip).sort(sort);
			var numRecords = await App['DB']().count();
			App['DB']().subscribe(req, models);
			var returnObj = {data:models, info:{count:numRecords}};
			deferred.resolve(returnObj);
		}
		return deferred.promise;
	},
	'UPDATE': async function(req){
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
		var model = await App['DB']().update({id: id}, model);
		App['DB']().publish([model.id], {verb: 'update', data: model});
		return model;
	},
	'CREATE':async function(){},
	//TODO:: LIFECYCLE CODE .. 
    afterCreate: async function(model, next){
        var colorArray = ['2ab996', '24242e', 'ff6a6a', 'ddbea8'];
        var colorInt = Math.floor(Math.random() * (colorArray.length + 1));
        var avatarUrl = 'https://ui-avatars.com/api/?size=256&name='+model.username+'&color=fff&background='+colorArray[colorInt];
        model.avatarUrl = avatarUrl;
        var url = "https://api.unsplash.com/photos/random?page=1&client_id=b996e9314d68deae5fe37098f096cd6b3b035f5c63989805aa23d4bd8c7358a2&secret=2ddbfdd90eaf2bcfc6f3cec5ec58c677b35cb470dc63d39e0e0372755b59c434%27";
        App['CONNECTION+REQUEST'](url, async function (error, response, body) {
            var body = JSON.parse(body);
            if (body.urls){model.coverUrl = body.urls.small;}
            //TODO           
            model.apps = {cre8:{recordAttention:true,tutorial:true}};
            var model = await App['DB']().update({id: model.id}, model)
            //emailService.sendTemplate('welcome', model.email, 'Welcome To CREATE!', {username: model.username});
            return next(null, model);
        });
    }
};
module.exports = App;