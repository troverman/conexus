//CRE8.CONNECTION.ALPHA
var App = {
	'CONNECTION+SELF+ATTRIBUTES':{
        //2nd order parameters
		hash: {type: 'string'}, //id or hash ??
		title: {type: 'string'},
		description: {type: 'string'},
        context: {type: 'json'},
        attributes: {type: 'json'},
	    context: {type: 'json'},
	    mapping: {type: 'json'},   
	    logic: {type:'json'}  
    },
	'CONNECTION+CRYPTO': global['appApp']['GET']({type:'require', string:'crypto'}),
	'DB': function(){return global['Connection']},
    'GET': async function(input){
		var limit = parseInt(input.query.limit) || 100;
		var skip = parseInt(input.query.skip) || 0;
		var sort = input.query.sort;
		var id = input.query.id;
		var response = {};
		if(input.query.id){response = App['DB']().find({id:id}).limit(limit).skip(skip).sort(sort);}
		else if(input.query.creator){response = App['DB']().find({creator:creator}).limit(limit).skip(skip).sort(sort);}
		else{response = App['DB']().find({}).limit(limit).skip(skip).sort(sort);}
		return response;
	},
	'CREATE': async function(input){
		var model = {
			model: 'CONNECTION',
			creator: input.param('creator'),
			title:input.param('title'),
			description:input.param('description'),
			information: input.param('information'), //parameters?
			associatedModels: input.param('associatedModels'),//id, type..
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');

		//DATABASE :: MODEL :: CONNECTION :: TODO: APP CENTRIC MODEL INIT 
		//DEFINE MODEL
		var newConnection = await App['DB']().create(model);
		App['DB']().publish([newConnection.id], {verb: 'create', data: newConnection});

		//App['CONNECTION+EVENTAPP']['CREATE'](newConnection);
		//eventApp.create(newConnection);

		//App['CONNECTION+VALIDATIONAPP']['CREATE'](newConnection);
		validationApp['CREATE'](newConnection);

		return App['DB']().find({hash:model.hash});
	},
	'VIEWS': {
		//SOME TYPING MB: IE JAVASCRIPT 
		'App.js':'function SerializeMe(){}',
		'CoolGuyId.js':'',
		'HASH':'DYNAMICALLY SERVED FROM SELF OR PEER NET | AppApp::ProtocolApp::DataApp',
	},
	//SETS OF VIEWS COMPILES
	//OKAY DATA-TOKEN CONNECTION . . .
	//STATIC SELF CONNECTION CONSTRUCTOR --> THIS IS SUPER IN COMPOSITION 
	//HMM 
	//'CONNECTION+TOKENS+'
};
module.exports = App;
