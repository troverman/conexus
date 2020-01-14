//CRE8.ORBIT.DB
//IMPORT IN NODE
//import * as name from "module-name";
//DYNAMIC IMPORTS .. 
//let module = await import('/modules/my-module.js');
module.exports = {

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
		crypto:require('crypto'),
	},

	//HIGHER ORDER INIT FUNCTIONS --> IE EXPOSED GLOBALS 
	//EXPOSE iPFS AND DATA BASES
	//INIT APP WIL EXPOSE APPS RENDERED AND RUN THE INIT FUNCTIONS TO SPIN UP LISTENERS AND WEBSOCKETS ETC
	//THE BOOT PROCESS 
	//SHARING THE ENTIRE PEER AS BLOB 

	init: function(){

		const ipfsOptions = {
			EXPERIMENTAL: {
				pubsub: true
			}
		};
		const ipfs = new orbitdbApp.import.ipfs(ipfsOptions);

		ipfs.on('error', (e) => console.error(e))
		ipfs.on('ready', async () => {

			const orbitdb = await orbitdbApp.import.orbitdb.createInstance(ipfs);
			
			const keyvalueDb = await orbitdb.keyvalue('TEST');
			const docDb = await orbitdb.docs('CRE8.MEMBER');
			const logDb = await orbitdb.log('');

			//THINK ABOUT CONENSUS 
			sails.db = logDb
			console.log(sails.db);

			await keyvalueDb.load();
			await docDb.load();
			await logDb.load();

			//
			//orbitdbApp.database = 

			logDb.events.on('replicated', (address) => {
				console.log(db.iterator({ limit: -1 }).collect());
			});

			//EMITTER
			//EMIT DATA
			
			async function createEvent(newEventModel){
				newEventModel.hash = orbitdbApp.import.crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newEventModel)).digest('hex');
				newEventModel._id = orbitdbApp.import.crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(newEventModel)).digest('hex');

				var newEventModelString = JSON.stringify(newEventModel);
				const hash = await logDb.add(newEventModelString);
				const result = logDb.iterator({ limit: -1 }).collect();

				//console.log(JSON.stringify(result, null, 2));
				//console.log(hash);

				//const testHash = await keyvalueDb.put(newEventModel.hash, newEventModel);
				//console.log(testHash);

				const hashDoc = await docDb.put(newEventModel);
				console.log(hashDoc);


				const results = await docDb.get('');
				console.log(results);
			}

		});

		//RETURN PROMISE 
	}

	
};