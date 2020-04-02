//CRE8.APP.ALPHA
//SET OF TYPES / PROTOCOLS 
//WORK ON TYPE COMPOSITION
//var Self = {
var App = {

	//IMPORTS ARE APP-APP CONNECTIONS 
		//CREATING THESE DYNAMICALLY IN THE BASE STRING STRING MAPPING :: IE THEY ARE IN A DB

	//RECURSIVE DEPENDENCIES 
	//BUILDER REDUCES THE TREE . . . || BUILD FROM DISCRETE CONNECTIONS | ASSOCIATIONS | VALIDATIONS (CREATER DEFINED :: ADD CHARETE FOR APPS ? :: SOON : EQUIP THE CONSTRUCTIO AS THEY SAY )  .. 

	//RUN TIME BUILDER SOMETIME :: 

	import:{
		Q: require('q'),
		crypto: require('crypto'),
		orbitdb: require('orbitdb'), //SERIOUSLY REDUCE AND EXPAND THIS :: THIS NOT A SOLUTION HAHAHA || FUN FOR DYNAMIC TESTING I SUPPOSE AND FOR 'LEARNING'
	},

	//SHOULD BE DYNAMIC BUILT HASH .. 
	'CONNECTION+APP:CRYPTO': require('crypto'),
	'CONNECTION+APP:Q': require('crypto'),
	'CONNECTION+APP:ORBITDB': require('orbitdb'),

	//CONNECTION
		//MODULELOADER(string)
	'CONNECTION+APP:EVENTAPP': eventApp,
	'CONNECTION+APP:VALIDATIONAPP': validationApp,	


	//SELF>...
	//META MODEL , , , ,
	//redundant wrapper? completeness? 
	'CONNECTION+APP:{SELF}': {attributes:{}},
	attributes: {
        model: {type: 'string', defaultsTo: 'APP'},
		title: {type: 'string'},
		description: {type: 'json'},
		information: {type: 'json'},
        data: {type: 'json'},
        protocols: {type: 'json'},
        associatedModels: {type: 'json'},
        creator: {model: 'user'},
    },


    //TREE OBJ VS SET OF OBJ 
    //APPS ARE SETS OF {SELF} DEF CONNECTIONS
	connections:[
		{
			//APP ID ?
			type: 'APP', 
			//id: --> REDUCTION DESIRED ~~ HASH ID 
			attributes:{
		    }
		}
	],


    'DB': await orbitdb.docs('CRE8.APP'),
    'INIT': async function(){await App.db.load();},

	'FIND':function(model){
		console.log(sails.models.app._adapter)
		return sails.models.app;
	},

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
	'GET': async function(req){

		//const records = App.db.get('');
		var deferred = App.import.Q.defer();
		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		//ACTIVITY PROCESSR || EVENT IN CONEX : P 
		console.log('appApp.get', 'CALL:', utilityServiceApp.guid(), req.query);

		if(req.query.id){
			var apps = await App.find({id:id}).limit(limit).skip(skip).sort(sort);
			//-->IMPORT TRIE . . . :P
			App.subscribe(req, [apps[0].id]);
			//TODO: MANY-MANY RELATIONSHIP; SEE NOTIFICATIONS . . . 
			var models = await associationApp.get(apps[0]);
		}
		else{
			var models = await App.find({}).limit(100).skip(skip).sort(sort);
			App.subscribe(req, apps.map(function(obj){return obj.id}));
		}
		return models;
	},

	'CREATE': async function(req){

		var model = {
			model: 'APP',
			title: req.param('title'),
			description: req.param('description'),
			information: req.param('information'),
			data: req.param('data'),
			protocols: req.param('protocols'),
			context: req.param('context'),
			creator: req.param('creator'),
			data:{apps:{reactions: {plus:0,minus:0}, attention:{general:0}}}
		};
		model.hash = App.import.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		
		//ACTIVITY PROCESSOR
		console.log('appApp.create', 'CALL:', utilityServiceApp.guid(), model);

		var newApp = await App.create(model);

		//FLAT :: MORE THAN ORBIT ...
		//APP['DB+PUT'](dataModel);
		await App['DB'].put({_id:Math.random(), string:Math.random()});

		//SOCKS
		App.publish([model.id], {verb: 'create', data: model});
		
		eventApp.create(newApp);
		//App['CONNECTION+APPS:EVENTAPP'].create(newApp);
		//App['CONNECTION+APPS:EVENTAPP+CREATE'](newApp); // TODO FLATTEN PROCESSING IN MODULE LOADER :)

		validationApp.createLegacy(newApp);
		//App['CONNECTION+APPS:VALIDATIONAPP'].createLegacy(newApp); // TODO FLATTEN PROCESSING IN MODULE LOADER :)
		//App['CONNECTION+APPS:VALIDATIONAPP+CREATE'](newApp); // TODO FLATTEN PROCESSING IN MODULE LOADER :)

		//REDUCE
		return App['FIND']({hash:model.hash});

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