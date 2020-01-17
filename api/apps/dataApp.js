//CRE8.DATA
//IMPORT IN NODE
//import * as name from "module-name";
//DYNAMIC IMPORTS .. 
//let module = await import('/modules/my-module.js');
const App = {

	//META MODEL / META DATA!
	//meta:{
		//FUNCTION TILE
		//FUNCTION DESCRIPTION
		//M.ATTENTION

	//},
	//MODULAR DECENTRALIZED DOCUMENT DATABASE 
		//--> ALPHA 
	//database:null,
	//globals:{
	//},
	//export:{
	//},
	import:{
		ipfs: require('ipfs'),
		orbitdb: require('orbit-db'),
		crypto: require('crypto'),
		vm: require('vm'),
	},

	//HIGHER ORDER INIT FUNCTIONS --> IE EXPOSED GLOBALS 
	//EXPOSE iPFS AND DATA BASES
	//INIT APP WIL EXPOSE APPS RENDERED AND RUN THE INIT FUNCTIONS TO SPIN UP LISTENERS AND WEBSOCKETS ETC
	//THE BOOT PROCESS 
	//SHARING THE ENTIRE PEER AS BLOB 
	//TODO: THINK ABOUT CONENSUS 

	//THIS IS BIG INIT 
	//BREAKEM UP 
	//~~ REDO SAILS INIT LOAD .. 
	//. routes in each file exxx...

	init: function(){
		const ipfsOptions = {EXPERIMENTAL: {pubsub: true}};
		const ipfs = new App.import.ipfs(ipfsOptions);
		ipfs.on('error', (e) => console.error(e))
		ipfs.on('ready', async () => {
			const orbitdb = await App.import.orbitdb.createInstance(ipfs);
			//TODO: STORE.IDENTITY LINK TO USER .. THIS IS DB IDENTITY CONTEXT 
			const docDb = await orbitdb.docs('CRE8.MEMBER');
			//const logDb = await orbitdb.log('');
			console.log('loading...');

			//logDb.events.on('replicated', (address) => {
			//	console.log(db.iterator({ limit: -1 }).collect());
			//});

			//var newRecords = await User.find();
			//newRecords.map(obj=>obj._id=obj.id)
			//for (x in newRecords){ /*await logDb.add(JSON.stringify(newRecords[x]));*/ await docDb.put(newRecords[x]);}
			//const records = docDb.get('');
			//console.log(records);
			//const all = docDb.query((doc) => doc.username == 'troverman')
			//console.log(all);

			//const docDbAtt = await orbitdb.docs('CRE8.ATTENTION');
			//await docDbAtt.load();
			//var newRecords = await Attention.find();
			//newRecords.map(obj=>obj._id=obj.id)
			//for (x in newRecords){ console.log(newRecords[x].id); await docDbAtt.put(newRecords[x]);}
			//const records = docDbAtt.get('');
			//console.log(records);

			//META CIRCULAR
			//--> DOC SHOULD BE HAS OF OBJ..
												//App.hash 
			//--> EXPERIMENTAL (:)
			const Protocols = await orbitdb.docs('CRE8.PROTOCOL', {indexBy: 'hash'});
			await Protocols.load();
			//hash = id
			App.hash = App.import.crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(App)).digest('hex');
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
			//var result = App.import.vm.runInNewContext('var self =' + self.string + '; console.log(self);');

			//LOADS DATA APP / SELF DYNAMICALLY
			//console.log(result);

			//DO THE SAME WITH N PROTOCOLS FOR INIT






			//EMITTER
			//EMIT DATA
			//COMBINE DB TYPES FOR A REDUCTION 
			//IE HASH LOG FOR TRUTH FOREST
			async function createEvent(newEventModel){

				newEventModel.hash = App.import.crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newEventModel)).digest('hex');
				newEventModel._id = App.import.crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newEventModel)).digest('hex');

				var newEventModelString = JSON.stringify(newEventModel);
				const hash = await logDb.add(newEventModelString);
				const result = logDb.iterator({ limit: -1 }).collect();

				const hashDoc = await docDb.put(newEventModel);
				console.log(hashDoc);

				const results = await docDb.get('');
				console.log(results);
			}

		});
	}
};

//TODO: THINK APP VS DATA APP.. THIS IS A CREATIVE WITH DYNAMIC INITS
App.hash = App.import.crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(App)).digest('hex');
console.dir(App);
module.exports = App;