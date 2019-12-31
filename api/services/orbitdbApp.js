//CRE8.ORBIT.DB
module.exports = {

	//MODULAR DECENTRALIZED DOCUMENT DATABASE 
		//--> ALPHA 

	import:{
		ipfs: require('ipfs'),
		orbitdb: require('orbit-db'),
		crypto:require('crypto'),

	},

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

			await keyvalueDb.load();
			await docDb.load();
			await logDb.load();

			logDb.events.on('replicated', (address) => {
				console.log(db.iterator({ limit: -1 }).collect());
			});

			for (var i = 0; i<1000000000;i++){
				var newEventModel = {
					iterator:i,
					data:{
						random:Math.random()
					},
					connection:{
						params:{
							type:'MY MAN' + i
						}
					},
				};
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

			}

			const result = await docDb.get('');
			console.log(result)

		});
	}

	
};