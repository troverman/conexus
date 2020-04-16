//CRE8.EVENT.ALPHA
var App = {	
	//APP-APP CONNECTION 
	'CONNECTION+SELF': {
        type: {type: 'string'},
        data: {type: 'json'},
        model: {type: 'json'},  

     	//PLACE OF STUDY
	        	//CONSENSUS PLUGIN
	        	//VALIDATION MESH WHICH PROVIDES EVENT HISTORY AND CONTEXT 
	        		//TRUTH TREES
	    truthForestHashSet:{type:'json'}  
      
    },


    //{HASH}:{HASH},
	//'CONNECTION+APP:SOCKET':require('socket'),

	'CONNECTION+SELF+LANGUAGE': 'Javascript', // CONNECTION+SELF+LANGUAGE -> Javascript 
	'CONNECTION+SELF+RUNTIME':'V8',

	//DATABASE? .. ETC :: OR :: orbit db doc ::: contains identity ::: Peer libP2P Networking -:> Data 
	//'CONNECTION+SELF+DATAMODEL': Event,

	'GET': async function(req){

		//TODO:
		//model.input, model.output, query . . 
		//provide context hash
		//truth variance 

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort || 'createdAt DESC';	

		console.log('eventApp.get', 'CALL:', utilityServiceApp.guid(), req.query);

		//TODO: AUDIT 
		if(req.query.id){return Event.find({id:req.query.id}).limit(limit).skip(skip).sort(sort);}
		else{return Event.find().limit(limit).skip(skip).sort(sort);}
	},
	'CREATE': async function(model){
		//model.input, model.output
		//SLOWLY PHASE OUT STATIC DEFINED MODELS --> EVENT HEADER 
		var eventModel = {
			//model:{
				//ERR: MONOO DOEST LIKE THE SHA-256 ID
				hashId:model.hash, // THIS IS AN UPDGRADE : RE THE PRESENT MOMENT DUPLICATION OF HASH AND IDS 
				type:model.type || model.model, //LEGACY :|
			//},
			//WE CAN REDUCE THIS TO MACHIENE VALIDATION (EVENT-(EVENT-EVENT..) ASSOCIATION) :: 
			//BETTER NEAME IS ? 
			truthForestHashSet:[],
			//TYPE DATA CHECKER? 
			data: model,
		};
		//EVENT IS DEFINED IN model/event . . . unify 
		//LEGACY BOOTSTRAPPING
			//TRIE ATTEMPT ~ REDUCE TO BINARY THX ~
		var newEvent = await Event.create(eventModel);

		//REDUCE / SOCKET BROADCAST 
		Event.publish([newEvent.id], {verb: 'create', data: newEvent});

	},
};
module.exports = App;
