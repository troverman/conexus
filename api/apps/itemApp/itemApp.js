//CRE8.connections.apps.Item().ALPHA
var App = {
	//HASH OF ATTRIBUTES ???
    //DB TYPES ??
    //HASH TABLE EASIER .. ? 
    //LOG Db? 
    //I LIKE THE INIT FXN
    //db: await orbitdb.docs('CRE8.ITEM'),
    init: async function(){
    //	await ContentApp.db.load();
    },
	attributes: {
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
	connections:[{
		type:'connection', 
		id:'self',
		connections:[{
			type:'item',
			id:'self',
			connections:[{	
				params:{}	
			}]
		}],
	}],
	connections:[{
		type:'connection', 
		id:'self', 
		params:{
			//DATA MODEL.
		}	
	}],
	//connections.apps --> dyanmic 
	//static --> todo write static parser / init convert to dynamic connection JSON representation
	connections: {
		apps: {
			//TODO: CREATE DECENTRALIZED REQUIRE :O)))))!
			//IE REPLACE WITH AppManager.get(#HASH)
			crypto: function(){return appManagerApp.get('crypto')},
			mongodb: function(){return appManagerApp.get('mongodb')},
			Q: function(){return appManagerApp.get('q')},
			//Item: function(){return Item.init('');},

			//TODO: MODULARIZE
			//contentApp: require('./contentApp'),
			//reactionApp: require('./reactionApp'),
			//attentionApp: require('./attentionApp'), --> DATA LAYER IN (APP) SHARED ATTRIBUTES
			//React: require('react'),
			//event: require('event'),
				//IMPORT DATABASE CONNECTION 
		}
	},
	//DATA MODELS ARE CONNECTIONS
	//TEST
	//REDUCE INTO SELF CONECTION W CONTEXT --> INTERNAL FUNCTION MAPPING 
	language: 'Javascript',
	attentionParams:{},

	//TODO: .. HASH: NEEDS TO BE UNIQUE .. 
	//connections.self.routes
	routes:{
		//get/api/{HASH}
		'get /api/item': 'ItemController.get',
		'post /api/item': 'ItemController.create',

		//BUILD AND RENDER VIEWS .. 
		'get /items': 'HomeController.index',
		'get /item/:id': 'HomeController.index',
	},

	//LANGUAGES ARE COMPILER PARAMETERS
	compilerParams:{
		identifier:['x', 'color', 'UP'],
		keyword:['if', 'while', 'return'],
		separator:['}', '('],
		operator:['+','<','='],
		literal: true,
	},
	//value language
	//~~ CONGRUENCE MEANS CONTEXT FREE GRAMMER
	meta:{separator:[','], operator:['+','-','*','']},

	//recursive..
	//init(req, res, params);
	//get: function(req, res, params){/*params ^^same as above ; recursive :)*/},
	get: async function(req) {
		//[req.model].get(req);
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		console.log('itemApp.get', 'CALL:', utilityServiceApp.guid(), req.query);
		var returnObj = {};
		if(req.query.id){
			//THERE STRENGTH IN A MULTI-IDENTIFER STRUCT ~ PLURLALITY IS A STRENGTH
			var id = req.query.id;
			var query = {};
			//NO
			if (App.connections.apps.mongodb().ObjectID.isValid(id)){query = { "id": id }}
			//else{query = { dataHash: id}} //MAP LEGACY TOKENS TO HASH :)
			else{query = { hash: id}}
			var models = await connections.apps.Item().find(query).limit(limit).skip(skip).sort(sort);
			if (models.length > 0){
				var itemModel = models[0];
				//itemModel.id = itemModel._id.toString();
				//var userModel = await User.find({id:itemModel.user.toString()});
				//itemModel.user = userModel[0];
				connections.apps.Item().subscribe(req, [itemModel.id]);
				var models = await associationApp.get(itemModel);
				returnObj = models;
			}
		}
		else if (req.query.tag){
			var tag = req.query.tag;
			var models = await connections.apps.Item().find({tags:{contains: tag}}).limit(limit).skip(skip).sort(sort).populate('user');
			var numRecords = await connections.apps.Item().count({tags:{contains: tag}});
			connections.apps.Item().subscribe(req, models);
			var returnObj = {data:models, info:{count:numRecords}};
			return returnObj;
		}
		else if (req.query.user){
			var user = req.query.user;
			var models = await connections.apps.Item().find({user:user}).limit(limit).skip(skip).sort(sort).populate('user');
			returnObj = models;
		}
		else{
			var models = await connections.apps.Item().find({}).limit(limit).skip(skip).sort(sort).populate('user');
			var numRecords = await connections.apps.Item().count();
			connections.apps.Item().subscribe(req, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp.get(models[x]));}
			var populatedModels = await App.connections.apps.Q().all(promises)
			for (x in models){models[x] = populatedModels[x];}
			var returnObj = {data:models, info:{count:numRecords}};
		}
		return returnObj;
	},
	create: async function (req) {
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
		model.hash = App.connections.apps.crypto().createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		console.log('CREATE ITEM', model);
		var itemModel = await connections.apps.Item().create(model);
		var userModels = await User.find({id:model.user});
		itemModel.associatedModels = req.param('associatedModels') || [];
		itemModel.user = userModels[0];
		connections.apps.Item().subscribe(req, [itemModel]);
		connections.apps.Item().publish([itemModel.id], {verb: 'create', data: itemModel});
		validationApp.createLegacy(itemModel);
		eventApp.create(itemModel);
		App.tokens.create(itemModel);
		return connections.apps.Item().find({hash:model.hash});
	},
	//EACH PROTOCOL / APP ADDS TO THE VALUE LANGUAGE.. 
	//3rd layer of compilation . . 
	tokens:{
		//CHANGE TO VERBS?
		//GET FROM CONNECTION? --> IT"S IN DATA MODEL
		get:function(model){
			var protocolTokens = ['CRE8', 'CRE8+ITEM', 'CRE8+ITEM+'+model.id];
			//FOR X IN 
			var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
			var prefix = 'CRE8+ITEM';
			var string = prefix+'+'+hash;
			protocolTokens.push(string);
			return protocolTokens;
		},
		create:function(model){
			var protocolTokens = App.tokens.get(model);
			//
		},
		//functional bridge between data events and tokenization
	},
	//FLATTEN? AND STANDARIZE & MADE MODULAR . . . 
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