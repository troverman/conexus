//CRE8.Item().ALPHA
var App = {

	'CONNECTION+SELF+ATTRIBUTES': {
        //DEPRECIATE
        model: {type: 'string', defaultsTo: 'ITEM'},
        title: {type: 'string'},
        associatedModels: {type: 'json'}, 
        context: {type: 'string'},
        content: {type: 'string'},
        info: {type: 'json'},
        information: {type: 'json'},
        location: {type: 'json'},
        status: {type: 'string'},
        isGenerator:{type:'boolean', allowNull: true},
        //COMPONENTS ARE BIG!
        compontentItems: {type: 'json'},
        verbs:{type:'string'},
        actions:{type:'string'},
        owner: {type: 'string', allowNull: true},
        creator: {type: 'string'},
        user: {model: 'user'},
        data: {type: 'json'},
        dataHash: {type: 'string', allowNull: true},
        hash: {type: 'string', allowNull: true}, //id
    },

	'CONNECTION+CRYPTO': function(){return appApp['GET+REQUIRE']('crypto')},
	'CONNECTION+MONGODB': function(){return appApp['GET+REQUIRE']('mongodb')},
	'CONNECTION+Q': function(){return appApp['GET+REQUIRE']('q')},
	//'CONNECTION+CONTENTAPP': function(){return appApp['GET']('./contentApp')},
	//'CONNECTION+REACTIONAPP': function(){return appApp['GET']('./reactionApp')},
	//'CONNECTION+ATTENTIONAPP': function(){return appApp['GET']('./attentionApp')},

	'ASSOCIATION+SELF+LANGUAGE': 'Javascript',
	//lol
	'ASSOCIATION+SELF+ATTENTIONPARAMS':{},
	'ASSOCIATION+SELF+COMPILERPARAMS':{
		identifier:['x', 'color', 'UP'],
		keyword:['if', 'while', 'return'],
		separator:['}', '('],
		operator:['+','<','='],
		literal: true,
	},
	'ASSOCIATION+SELF+META':{separator:[','], operator:['+','-','*','']},

	//TODO: GET DYNAMIC INIT VIA PEER LOAD :: USE App+SELF+HASH ;; uhh,, init fxn 
	//connections.self.routes
	
	//'CONNECTION+SELF+ROUTES':{
		//get/api/{HASH}
		//'get /api/item': 'ItemController.get',
		//'post /api/item': 'ItemController.create',
		//BUILD AND RENDER VIEWS .. 
		//'get /items': 'HomeController.index',
		//'get /item/:id': 'HomeController.index',
	//},

    'DB':  async function(){
    //	var dbString = 'CRE8.ITEM';
    //	await orbitdb.docs(dbString)
    },

	'DB': function(){return global['Item']},
	'DB+MONGO': function(){return global['Item']},

    'INIT': async function(){
    //	await App['DB'].load();
    },
	//[req.model].get(req);

	'GET': async function(req) {
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';

		var returnObj = {};
		if(req.query.id){
			//THERE STRENGTH IN A MULTI-IDENTIFER STRUCT ~ PLURLALITY IS A STRENGTH
			var id = req.query.id;
			var query = {};
			//NO
			if (App['CONNECTION+MONGODB']().ObjectID.isValid(id)){query = { "id": id }}
			//else{query = { dataHash: id}} //MAP LEGACY TOKENS TO HASH :)
			else{query = { hash: id}}
			var models = await App['DB+MONGO']().find(query).limit(limit).skip(skip).sort(sort);
			if (models.length > 0){
				var itemModel = models[0];
				//itemModel.id = itemModel._id.toString();
				//var userModel = await User.find({id:itemModel.user.toString()});
				//itemModel.user = userModel[0];
				App['DB+MONGO']().subscribe(req, [itemModel.id]);
				var models = await associationApp['GET'](itemModel);
				returnObj = models;
			}
		}
		else if (req.query.tag){
			var tag = req.query.tag;
			var models = await App['DB+MONGO']().find({tags:{contains: tag}}).limit(limit).skip(skip).sort(sort).populate('user');
			var numRecords = await App['DB+MONGO']().count({tags:{contains: tag}});
			App['DB+MONGO']().subscribe(req, models);
			var returnObj = {data:models, info:{count:numRecords}};
			return returnObj;
		}
		else if (req.query.user){
			var user = req.query.user;
			var models = await App['DB+MONGO']().find({user:user}).limit(limit).skip(skip).sort(sort).populate('user');
			returnObj = models;
		}
		else{
			var models = await App['DB+MONGO']().find({}).limit(limit).skip(skip).sort(sort).populate('user');
			var numRecords = await App['DB+MONGO']().count();
			App['DB+MONGO']().subscribe(req, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp['GET'](models[x]));}
			var populatedModels = await App['CONNECTION+Q']().all(promises)
			for (x in models){models[x] = populatedModels[x];}
			var returnObj = {data:models, info:{count:numRecords}};
		}
		return returnObj;
	},
	'CREATE': async function (req) {
		var model = {
			model: 'ITEM',
			type: 'ITEM',
			title: req.param('title'),
			content: req.param('content'),
			location: req.param('location'),
			context: req.param('context'),
			info: req.param('info'),
			information: req.param('info'),
			user: req.param('user'),
			creator: req.param('user'),
			owner: req.param('owner'),
			data: req.param('data'),
		};
		if (!model.data){model.data = {};}
		model.data.apps = {
			actions:[],
			reactions:{plus:0,minus:0},
			attention:{general:0},
			json:{},
		};
		model.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var itemModel = await App['DB+MONGO']().create(model);

		var userModels = await User.find({id:model.user});
		itemModel.associatedModels = req.param('associatedModels') || [];
		itemModel.user = userModels[0];
		App['DB+MONGO']().subscribe(req, [itemModel]);
		App['DB+MONGO']().publish([itemModel.id], {verb: 'create', data: itemModel});

		validationApp.createLegacy(itemModel);
		eventApp['CREATE'](itemModel);
		App['TOKENS+CREATE'](itemModel);

		return App['DB+MONGO']().find({hash:model.hash});

	},

	'TOKENS+GET': function(model){
		var protocolTokens = ['CRE8', 'CRE8+ITEM', 'CRE8+ITEM+'+model.id];
		var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var prefix = 'CRE8+ITEM';
		var string = prefix+'+'+hash;
		protocolTokens.push(string);
		return protocolTokens;
	},
	'TOKENS+CREATE':function(model){
		var protocolTokens = App['TOKENS+GET'](model);
	},
	//DEFINE LANGUAGE AND PARAMETERS FOR VIEW PARSING --> IMPORT THE PARSERS
	//SEPERATE APP TO RETURN HTML
	views:{
		item:{
			route:'/item/:id',
			controller:function(){},
			templates:[{}],
		},
		itemTokens:{
			route:'/item/:id/tokens',
			controller:function(){},
			templates:[{}],
		},
		items:{
			route:'/items',
			controller:function(){
				//export default class Component extends React.Component {
				//    function = () => {
				//    };
				//    render() {
				//    	//OR DOWNLOADED
				//        return (
				//            '<html></html>'
				//        );
				//    }
				//}
			},
			templates:[{}],
		},
	}
};
module.exports = App;