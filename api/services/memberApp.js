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

		function getAssociations(model){
			var deferred = Q.defer();
			Association.getDatastore().manager.collection('association')
			.find({$and : [{"associatedModels.id": {$in:[model.id]}}]}).limit(1000).skip(0).sort({'createdAt':-1})
			.toArray(function (err, associationModels) {
				if (associationModels.length > 0){
					associationModels.map(function(obj){obj.id=obj._id; return obj});
					model.associationModels = associationModels;
					var promises = [];
					for (x in model.associationModels){
						for (y in associationModels[x].associatedModels){
							if (associationModels[x].associatedModels[y].type=='ACTION'){promises.push(Action.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='APP'){promises.push(App.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='ATTENTION'){promises.push(Attention.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='CONTENT'){promises.push(Content.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='ITEM'){promises.push(Item.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='MEMBER'){promises.push(User.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='PROJECT'){promises.push(Project.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TASK'){promises.push(Task.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TIME'){promises.push(Time.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='TRANSACTION'){promises.push(Transaction.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
							if (associationModels[x].associatedModels[y].type=='VALIDATION'){promises.push(Validation.find({id:associationModels[x].associatedModels[y].id}).then(function(models){return models[0]}))}
						}
					}
					Q.all(promises).then((populatedModels)=>{
						var index = -1 
						for (x in model.associationModels){
							for (y in associationModels[x].associatedModels){
								index++;
								model.associationModels[x].associatedModels[y].data = populatedModels[index];
							}
						}
						deferred.resolve(model);
					});
				}
				else{deferred.resolve(model);}
			});
			return deferred.promise;
		};

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
					getAssociations(models[0]).then(function(models){
						return models;
					});
				}
				else{return {}}
			});
		}

		else if (req.query.query){
			var models = await User.find()
			.where({
				or: [
					{firstName: {contains: req.query.query}},
					{lastName: {contains: req.query.query}},
					{username: {contains: req.query.query}},
				]
			}).limit(limit).skip(skip).sort(sort)
			User.subscribe(req, models);
			return models
		}

		else{
			var models = await User.find({}).limit(limit).skip(skip).sort(sort);
			var numRecords = await User.count();
			User.subscribe(req, models);
			var returnObj = {data:models, info:{count:numRecords}};
			return returnObj;
		}

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