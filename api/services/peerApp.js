//CRE8.PEER.ALPHA
module.exports = {

	//config options and sets
	//ipfs.create
	//app that exists as connections to types of peers 
	// --> an organization / catagorization app from code governance vantage 
		//ids are hashes / dynamic 
			//ipfs vs HASH
	//peer is a combinatorial obj

	get:function(req){
		return Peer.find(req);
	},
	create:async function(req){

		var model = {
			info: req.param('info'),
			information: req.param('information'),
			versionHash: 'UNSTABLE PRE-ALPHA',
			data: req.param('data'),
			reputation: {},
			validiatedBlocks: [],
			creator: req.param('creator'),
		};
		return Peer.create(model);
	},
	build:function(){

	},


};