
//CRE8.ITEM.ALPHA
const crypto = require('crypto');
const mongodb = require('mongodb');
const Q = require('q');

//recursive..
//init(req, res, params);
//params are 

module.exports = {

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

    //HASH OF ATTRIBUTES ???
    //DB TYPES ??
    //HASH TABLE EASIER .. ? 
    //LOG Db? 
    //I LIKE THE INIT FXN
    //db: await orbitdb.docs('CRE8.ITEM'),
    //init: async function(){
    //	await ContentApp.db.load();
    //},

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


	import: { 
		request: require('request'),
		Q: require('q'),
		//React: require('react'),
		//event: require('event'),
			//IMPORT DATABASE CONNECTION 
	},


	//DATA MODELS ARE CONNECTIONS

	//TEST
	//REDUCE INTO SELF CONECTION W CONTEXT --> INTERNAL FUNCTION MAPPING 
	language: 'Javascript',
	compiler:'V8',

	attentionParams:{},

	//test
	//LANGUAGES ARE COMPILER PARAMETERS
	conpilerParams:{
		identifier:['x', 'color', 'UP'],
		keyword:['if', 'while', 'return'],
		separator:['}', '('],
		operator:['+','<','='],
		literal: true,
	},

	//value language
	//~~ CONGRUENCE MEANS CONTEXT FREE GRAMMER
	meta:{
		separator:[','],
		operator:['+','-','*',''],
		
	},

	
	connections:[
		{
			type:'connection', 
			id:'self', 
			params:{
				//DATA MODEL.
			}	
		}
	],

	get: function(req, res, params){

		//params ^^same as above ; recursive :)

	},

	//. . . heh 
	get: async function(req) {
		var deferred = Q.defer();
		//[req.model].get(req);
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';
		console.log('GET ITEM', req.query);
		if(req.query.id){
			//LOL WOW
			//EITHER HASH OR ID...
			//REDUCE ~? ALBEIT IS THERE STRENGTH IN A MULTI-IDENTIFER STRUCT? ~ PLURLALITY IS A STRENGTH (?)
			var id = req.query.id;
			var query = {};

			//NO
			if (mongodb.ObjectID.isValid(id)){query = { "id": id }}
			else{query = { dataHash: id}}

			var models = await Item.find(query).limit(limit).skip(skip).sort(sort);
			console.log('leal');
			if (models.length > 0){
				var itemModel = models[0];
				itemModel.id = itemModel._id.toString();
				var userModel = await User.find({id:itemModel.user.toString()});
				itemModel.user = userModel[0];
				Item.subscribe(req, [itemModel.id]);
				return associationApp.get(itemModel);
			}
		}
		else if (req.query.tag){
			var tag = req.query.tag;
			var models = await Item.find({tags:{contains: tag}}).limit(limit).skip(skip).sort(sort).populate('user')
			var numRecords = await Item.count({tags:{contains: tag}});
			Item.subscribe(req, models);
			var returnObj = {data:models, info:{count:numRecords}};
			deferred.resolve(models);
		}
		else if (req.query.user){
			var user = req.query.user;
			return Item.find({user:user}).limit(limit).skip(skip).sort(sort).populate('user') 
		}
		else{
			var models = await Item.find({}).limit(limit).skip(skip).sort(sort).populate('user');
			var numRecords = await Item.count();
			Item.subscribe(req, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp.get(models[x]));}
			var populatedModels = await Q.all(promises)
			for (x in models){models[x] = populatedModels[x];}
			var returnObj = {data:models, info:{count:numRecords}};
			//TODO: PROMISIFY
			deferred.resolve(returnObj);
		}
		return deferred.promise;
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
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		console.log('CREATE ITEM', model);
		var itemModel = await Item.create(model);
		var userModels = await User.find({id:model.user});
		itemModel.associatedModels = req.param('associatedModels') || [];
		itemModel.user = userModels[0];
		Item.subscribe(req, [itemModel]);
		Item.publish([itemModel.id], {verb: 'create', data: itemModel});
		validationApp.createLegacy(itemModel);
		eventApp.create(itemModel);
		itemApp.tokens.create(itemModel);
		return Item.find({hash:model.hash});
	},

	//EACH PROTOCOL / APP ADDS TO THE VALUE LANGUAGE.. 
	//3rd layer of compilation . . 
	tokens:{
		//CHANGE TO VERBS?
		//GET FROM CONNECTION? --> IT"S IN DATA MODEL
		get:function(model){
			var protocolTokens = [
				'CRE8', 
				'CRE8+ITEM',
				'CRE8+ITEM+'+model.id,
			];
			//FOR X IN 
			var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
			var prefix = 'CRE8+ITEM';
			var string = prefix+'+'+hash;
			protocolTokens.push(string);
			return protocolTokens;
		},
		create:function(model){
			var protocolTokens = itemApp.tokens.get(model);
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
	},




};



//TODO: STACK TRACK FOR TOKENIZATION.. 
//SOME META LOGGER.. 
//const StackTrace = require('stacktrace-js');
//StackTrace.get()
//.then(function(stack){
	//console.log(stack.map(function(obj){return obj.functionName}));
//})
//.catch(function(err){});
//hmm --> GOOD BUT DO IN EACH AS STATIC
//var origCall = Function.prototype.call;
//Function.prototype.call = function (thisArg) {
    //console.log("calling a function", thisArg);
    //var args = Array.prototype.slice.call(arguments, 1);
    //origCall.apply(thisArg, arguments[arguments.length-1]);
//};
//console.trace();


