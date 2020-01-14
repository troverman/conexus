//CRE8.IPFS.ALPHA
module.exports = {

	//IPFS PROTOCOL 
	//CRE8 PACKAGE MANAGER

	//NEED TO CREATE CRE8 CLI // CRE8 INSTALL
	//NODE_MODULES
		//SELF CONNECTIONS 
	import:{
		ifps: require('ipfs'),
	},

	//RE: ORBIT | IDENDITY 

	//RE: THINK TRUTH FOREST AS SELF CONNECTION

	///IPFS --> libp2p --> 

	//TODO: CONNECTIONS (&& MACHIENE ATTENTION)

	///PEER --> NETWORKING -->

	create: async function(){
		var nodeModel = {  
			config: {
				Addresses: {
					Swarm: [
						//'/dns4/wrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star'
					]
				}
			}
		};
 		var node = await ipfs.import.ifps.create(nodeModel);
 	},

};