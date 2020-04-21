//CRE8.APP.ALPHA
var App = {

	//SET OF TYPES / PROTOCOLS 
	//WORK ON TYPE COMPOSITION

	//IMPORTS ARE APP-APP CONNECTIONS 
		//CREATING THESE DYNAMICALLY IN THE BASE STRING STRING MAPPING :: IE THEY ARE IN A DB

	//RECURSIVE DEPENDENCIES 
	//BUILDER REDUCES THE TREE . . . || BUILD FROM DISCRETE CONNECTIONS | ASSOCIATIONS | VALIDATIONS (CREATER DEFINED :: ADD CHARETE FOR APPS ? :: SOON : EQUIP THE CONSTRUCTIO AS THEY SAY )  .. 

	//RUN TIME BUILDER SOMETIME :: 

	'CONNECTION+SELF': {
        model: {type: 'string', defaultsTo: 'APP'},
		title: {type: 'string'},
		description: {type: 'json'},
		information: {type: 'json'},
        data: {type: 'json'},
        protocols: {type: 'json'},
        associatedModels: {type: 'json'},
        creator: {model: 'user'},
    },

	'GET+REQUIRE': function(model){return require(model)},

	//DATA PRIMITIVES >>> DB REQUIRE NETWORKING ..  .. ? DIRECT>
	'GET+STRING':function(model){return model},
	'GET+HASH':function(model){return model},
	'GET+GLOBAL': function(model){return global(model)},


	//SHOULD BE DYNAMIC BUILT HASH .. 
	//REDUCE App manager to App App : probz 
	'CONNECTION+APP:CRYPTO': function(){ return global['appApp']['GET+REQUIRE']('crypto')},
	//STRUCT UP THE APP OBJ TOO >>
	'CONNECTION+APP:Q': function(){ return global['appApp']['GET+REQUIRE']('q')},
	'CONNECTION+APP:ORBITDB': function(){ return global['appApp']['GET+REQUIRE']('orbit-db')},
	'CONNECTION+APP:NETWORKING': function(){ return global['appApp']['GET+REQUIRE']('orbit-db')},

	//HM
	'CONNECTION+APP:ASSOCIATIONAPP': function(){return global['associationApp']},
	'CONNECTION+APP:ASSOCIATIONAPP': function(){return global['associationApp']},

	//'CONNECTION+APP:EVENTAPP': App['GET+STRING']('EVENTAPP'),
	//'CONNECTION+APP:VALIDATIONAPP': App['GET+STRING']('VALIDATIONAPP'),	


	//IN DATABASE IDENTIFIER 
    'DB':  async function(){return orbitdb.docs('CRE8.APP:{PEER_HASH}')},
    //PATCH
    'DB':  async function(){return global['App']},
    'INIT': async function(){await App['DB'].load();},
	//'FIND':function(model){return sails.models.app.find(model);},

	//THIS FILE
	//THE PEER IS SELF
	//self.connections.connections;
	//self.connections.connections.association;
	//self.connections.connections.association.validation;
	//self.connections.connections.validation.association = {find:function(model){}};
	//self.connections.connections.association['TOKEN STAKED'];

	//App.connections.app.find();
	//self.connections.app.find(); --> 

	//GOOD FOR NOW 
		//SOON CORE APP
        //INIT(GET DATA (INIT-CORE BUILD)) --> RETURNS DYNAMIC FUNCTIONS TO BE RUN BY COMPOSTABLE FUNCTION API [CRE*] --> WASM
        //for (x in apps){}
        //CREATE OBJECT
        //INIT JSON OBJ // THE ENVIRONMENT WE ARE IN 
        //RUN INIT FXN 

	//TODO
	'GET': async function(input){

		var deferred = App['CONNECTION+APP:Q']().defer();

		var limit = parseInt(input.query.limit) || 1;
		var skip = parseInt(input.query.skip) || 0;
		var sort = input.query.sort;
		var id = input.query.id;

		//ACTIVITY PROCESSR || EVENT IN CONEX : P 
		console.log('appApp.get', 'CALL:', utilityServiceApp.guid(), input.query);

		if(input.query.id){
			var apps = await App['DB']().find({id:id});//.limit(limit).skip(skip).sort(sort);
			//-->IMPORT TRIE . . . :P
			//App.subscribe(req, [apps[0].id]);
			//TODO: MANY-MANY RELATIONSHIP; SEE NOTIFICATIONS . . . 
			var models = await associationApp['GET'](apps[0]);
			//var models = await App['CONNECTION+APP:ASSOCIATIONAPP']()['GET'](apps[0]);
		}
		else{
			var models = await App['DB']().find({});//.limit(100).skip(skip).sort(sort);
			//App.subscribe(req, apps.map(function(obj){return obj.id}));
		}
		return models;
	},

	'CREATE': async function(input){

		var model = {
			model: 'APP',
			title: input.param('title'),
			description: input.param('description'),
			information: input.param('information'),
			data: input.param('data'),
			protocols: input.param('protocols'),
			context: input.param('context'),
			creator: input.param('creator'),
			data:{apps:{reactions: {plus:0,minus:0}, attention:{general:0}}}
		};
		model.hash = App['CONNECTION+CRYPTO']().createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		
		//ACTIVITY PROCESSOR
		console.log('appApp.create', 'CALL:', utilityServiceApp.guid(), model);

		var newApp = await App['DB']().create(model);

		//FLAT :: MORE THAN ORBIT ...
		//APP['DB+PUT'](dataModel);
		//LOL
		await App['DB']().put({_id:Math.random(), string:Math.random()});

		//SOCKS
		App['DB']().publish([model.id], {verb: 'create', data: model});
		
		eventApp.create(newApp);
		//App['CONNECTION+APPS:EVENTAPP'].create(newApp);
		//App['CONNECTION+APPS:EVENTAPP+CREATE'](newApp); // TODO FLATTEN PROCESSING IN MODULE LOADER :)

		validationApp.createLegacy(newApp);
		//App['CONNECTION+APPS:VALIDATIONAPP'].createLegacy(newApp); // TODO FLATTEN PROCESSING IN MODULE LOADER :)
		//App['CONNECTION+APPS:VALIDATIONAPP+CREATE'](newApp); // TODO FLATTEN PROCESSING IN MODULE LOADER :)

		//REDUCE
		return App['DB']().find({hash:model.hash});

	},

	'TOKENS+GET': function(model){
		var tokens = [
			'CRE8', 
			'CRE8+APP', 
			'CRE8+APP+'+model.title.toUpperCase(), 
		];
		return tokens;
	},
	'TOKENS+CREATE':async function (model){
		var tokens = App['TOKENS+GET'](model);	
	}

};
module.exports = App;