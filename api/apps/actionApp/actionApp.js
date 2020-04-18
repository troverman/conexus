//CRE8.ACTION.ALPHA
var App = {
	'CONNECTION+CRYPTO': global['appApp']['GET+REQUIRE']('crypto'),
	//TODO: API OVERWRITE FOR ROUTING
	//API APP --> //ROUTING APP //--> HTTP APP
	//CONNECTION+DATAMODEL+SELF : {HASH || STRING} | ACTION
	'CONNECTION+SELF+ATTRIBUTES': {
    	model: {type: 'string', defaultsTo: 'ACTION'},
  	    amount: {type: 'string'},
		type: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        data: {type: 'json'},
    },
    //ROUTES APP IMPORT :: GENERAL SERVER .. 
	'routes':{},
	//DB :: GENERTIC:: TODO: A LOT
	'DB': function(){return global['Action']},
	'GET': async function(req){
		//TODO: PARSE QUERY | QUERY PARSE APP <:P
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;
		if(req.query.id){return App['DB']().find({id:id}).limit(limit).skip(skip).sort(sort);}
		//TODO: ASSOCIATION | ITEM ASSOCIATION
		else{return App['DB']().find({}).limit(20).skip(skip).sort(sort);}
	},
	'CREATE':async function(req){
		var model = {
			model: 'ACTION',
			type: req.param('type'),
			amount: req.param('amount'),
			associatedModels: req.param('associatedModels'),
			user: req.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		return App['DB']().create(model);
	}	
};
module.exports = App;