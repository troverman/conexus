//CRE8.DATA
const App = {

	//MY OWN DATABASE (WHATS MY ENVIR :: ) -> NATIVE STORAGE : CHROME LOCAL 
	//TRUTH BUILDING:: BUILD MY VERSION OF YOUR VERSION AND SHARE <TRAVERSAL TRUTH 'PEERHASH:ME'+'PEERHASH:PEER' --> BUILD RECURSIVE TRUTH ETC : TO BUILD TRUTH SCORE IN CONTEXT ..: )>

	//DATA AND TRUTH !! 
	//META MODEL / META DATA!
	//meta:{
		//FUNCTION TILE
		//FUNCTION DESCRIPTION
		//M.ATTENTION
	//},
	//MODULAR DECENTRALIZED DOCUMENT DATABASE 
	//database:null,

	'CONNECTION+IPFS': global['appApp']['GET']({type:'require', string:'ipfs'}),
	'CONNECTION+ORBIT-DB':  require('orbit-db'),//global['appApp']['GET']({type:'require', string:'orbit-db'}),
	'CONNECTION+CRYPTO': global['appApp']['GET']({type:'require', string:'crypto'}),
	'CONNECTION+VM': global['appApp']['GET']({type:'require', string:'vm'}),

	//IMPORT IN NODE
	//ES6 SYNTAX 
	//import * as name from "module-name";
	//DYNAMIC IMPORTS .. 
	//let module = await import('/modules/my-module.js');

	//import {protocolA, protocolB} from "app"
	//App['CONNECTION+APP+PROTOCOLA'] = protocolA; --> HEADER HALF SELF DEFINED >> :: SYNTAX :: JS COMPILER IS OKAY 

	//HIGHER ORDER INIT FUNCTIONS --> IE EXPOSED GLOBALS 
	//EXPOSE iPFS AND DATA BASES

	//GENERATORS / INIT GENERATORS HAVE LISTER CONNECTION :)
		//STARTING A LISTNER AS ACTIVITY (HMMMM :))
		//RUNNING AND BUILDING CODE DYNAMICALLY ...
		//ATTACH A MODULE :)))))))))))) --> STORED AS STRING 
			//ATTACH AN APP WITH FUNCTION .. 
			//LINK ACTIVITY MODEL TO MODEULE MODEL 
			//VALIDATION THRU REPLICATIOn
			//ALSO TRANSMITTING DATA TO NON SELF ENTITIES // SELF.CONNECTIONS.PEERS...
	'INIT': async function INIT(){

		//TODO: NETWORKING APP: PEER CONFIGURE 
		const ipfsOptions = {EXPERIMENTAL: {pubsub: true}};
		const ipfs = new App['CONNECTION+IPFS'](ipfsOptions);

		ipfs.on('error', (e) => console.error(e))
		ipfs.on('ready', async () => {

			//LOL
			const orbitdb = await App['CONNECTION+ORBIT-DB'].createInstance(ipfs);

			//TODO: STORE.IDENTITY LINK TO USER .. THIS IS DB IDENTITY CONTEXT 
			//DEFINED BY PEER HASH && DATAMODEL
			var dbString = 'PEER::DATA'
			const db = await orbitdb.docs(dbString);
			console.log('loading...');
	
			const records = db.get('');
			console.log(records);
			const all = db.query((doc) => doc.username == 'troverman')
			console.log(all);


			//INTERESTING FOR LOADING WRAPPER:: MAKE SURE CODE IS DYNAMIC :: 
			//PROCESS THRU DYNAMIC SELF INIT .. ON LOAD PROTOCOL :: 
			//META CIRCULAR
			//--> DOC SHOULD BE HAS OF OBJ..
												//App.hash 
			//--> EXPERIMENTAL (:)
			const Protocols = await orbitdb.docs('CRE8.PROTOCOL', {indexBy: 'hash'});
			await Protocols.load();

			//hash = id
			App.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(App)).digest('hex');
			const dynamicSelf = Protocols.query((data) => data.hash == App.hash);
			var self = '';
			
			//MMM BLoAT IS AROUND RE SAILS ETC
			//var protocolModel = JSON.parse(JSON.stringify(dataApp));
			//DATA APP vs APP
			var protocolModel = {string:JSON.stringify(dataApp), hash:App.hash};
			if(dynamicSelf.length == 0){
				await Protocols.put(protocolModel);
				self = Protocols.query((data) => data.hash == App.hash)[0];
			}

			//ERR: CIRCULAR REFRENCE
			//if(dynamicSelf.length == 0){self = await Protocols.put(App);}
			else{self=dynamicSelf[0]}
			//console.log(JSON.parse(self.string));

			//LOAD SELF IN VM 
			//var result = App['CONNECTION+VM'].runInNewContext('var self =' + self.string + '; console.log(self);');

			//LOADS DATA APP / SELF DYNAMICALLY
			//console.log(result);

			//DO THE SAME WITH N PROTOCOLS FOR INIT






			//EMITTER
			//EMIT DATA
			//COMBINE DB TYPES FOR A REDUCTION 
			//IE HASH LOG FOR TRUTH FOREST
			async function createEvent(newEventModel){

				newEventModel.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(newEventModel)).digest('hex');
				newEventModel._id = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(newEventModel)).digest('hex');

				//var newEventModelString = JSON.stringify(newEventModel);
				//const hash = await logDb.add(newEventModelString);
				//const result = logDb.iterator({ limit: -1 }).collect();

				const hashDoc = await docDb.put(newEventModel);
				console.log(hashDoc);

				const results = await docDb.get('');
				console.log(results);
			}

		});
	},
};

//TODO: THINK APP VS DATA APP.. THIS IS A CREATIVE WITH DYNAMIC INITS
App.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(App)).digest('hex');
module.exports = App;