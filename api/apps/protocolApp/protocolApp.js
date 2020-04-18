//CRE8.PROTOCOL.ALPHA
//REDUCE? 
var App = {
    'CONNECTION+SELF+ATTRIBUTES' : {
		//DEPRECIATE
        model: {type: 'string', defaultsTo: 'PROTOCOL'},
		title: {type: 'string'},
		permissions:{type:'json'},
		logic:{type:'json'},
    },
    //DEFINE DATA MODEL(S)
	//attributes: [
	//	{
	//		title: 'Protocol',
	//		dataModel:{
	//			title: {type: 'string'},
	//			permissions:{type:'json'},
	//			logic:{type:'json'},
	//	    }
	//	}
    //],
	'DB': function(){return global['Protocol']},
	//CUSTOM FUNCTIONS
	//'GET': function(input, output) {queryLanguage.queryParse();},
	'GET': async function(input){
		var id = input.query.id;
		var limit = parseInt(input.query.limit) || 1 ;
		var skip = parseInt(input.query.skip) || 0;
		var sort = input.query.sort || 'createdAt DESC';
		//console.log(input.query, 'HELLLOOOOOOO');
		var query = {};
		if (input.query.id){query = {id:input.query.id}}
		var protocol = await Protocol.find(query).limit(limit).skip(skip).sort(sort);
		console.log(protocol)
		return protocol;
	},
	'CREATE': async function(model){
		//TODO: I/O
		//TODO: SOON
		//FIND OR CREATE
		var protocol = await Protocol.find({hash:model.hash});
		if (protocol.length == 0 ){protocol = await Protocol.create(model);}
		return protocol
	},
	//FRONTEND; JSX; TO BUILD THE ENGINE.. 
		//APP DEFINED ROUTES. ETC
			//COMPILES TO APP IN BROWER , NATIVLY
		//CORE CONTAINS THE BUILDER
	'VIEWS':{}	
};
module.exports = App;