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
	'GET': async function(input){
		//TODO: PARSE QUERY | QUERY PARSE APP <:P
		var limit = parseInt(input.query.limit) || 1;
		var skip = parseInt(input.query.skip) || 0;
		var sort = input.query.sort;
		var id = input.query.id;
		if(input.query.id){return App['DB']().find({id:id}).limit(limit).skip(skip).sort(sort);}
		//TODO: ASSOCIATION | ITEM ASSOCIATION
		else{return App['DB']().find({}).limit(20).skip(skip).sort(sort);}
	},
	'CREATE':async function(input){
		var model = {
			model: 'ACTION',
			type: input.param('type'),
			amount: input.param('amount'),
			associatedModels: input.param('associatedModels'),
			user: input.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		return App['DB']().create(model);
	}	
};
module.exports = App;