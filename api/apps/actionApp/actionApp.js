//CRE8.ACTION.ALPHA
var App = {

	//GLOBALS STRUCTURE ..
	//UHM .. HOW DOES IT LOAD ITSELF ..
	//'CONNECTION+APPMANAGERAPP': global['appMangerApp'],

	'CONNECTION+CRYPTO': global['appApp']['GET+REQUIRE']('crypto'),
	//TODO: API OVERWRITE FOR ROUTING
	//API APP
		//ROUTING APP
			//--> HTTP APP
	//CONNECTION+DATAMODEL+SELF : {HASH || STRING} | ACTION
	'CONNECTION+SELF+ATTRIBUTES': {
    	//TODO: DEFINE
    	//DEPRECIATE
    	model: {type: 'string', defaultsTo: 'ACTION'},
  	    amount: {type: 'string'},
		type: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        data: {type: 'json'},
    },

    //ROUTES APP IMPORT :: GENERAL SERVER .. 
	'routes':{},

	get: async function(req){
		//TODO: PARSE QUERY | QUERY PARSE APP <:P
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;
		console.log('actionApp.create', 'CALL:', utilityServiceApp.guid(), req.query);
		if(req.query.id){return Action.find({id:id}).limit(limit).skip(skip).sort(sort);}
		//TODO: ASSOCIATION | ITEM ASSOCIATION
		else{return Action.find({}).limit(20).skip(skip).sort(sort);}
	},
	create:async function(req){
		var model = {
			model: 'ACTION',
			type: req.param('type'),
			amount: req.param('amount'),
			associatedModels: req.param('associatedModels'),
			user: req.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = App.import.crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		console.log('actionApp.create', 'CALL:', utilityServiceApp.guid(), model);
		return Action.create(model);
	}	
};
module.exports = App;