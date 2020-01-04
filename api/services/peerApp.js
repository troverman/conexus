//CRE8.PEER.ALPHA
module.exports = {

	//config options and sets
	//ipfs.create
	//app that exists as connections to types of peers 
	// --> an organization / catagorization app from code governance vantage 
		//ids are hashes / dynamic 
			//ipfs vs HASH
	//peer is a combinatorial obj

	attributes: {
        model: {type: 'string', defaultsTo: 'PEER'},
		info: {type: 'json'},
		information: {type: 'json'},
		reputation: {type: 'json'}, // MOSTSLY BLOCK IDNETIFERS.. AND IMMUTABLE TOTAL MACHIENE ATTENTION -- ? YES
		validiatedBlocks: {type: 'json'},
        data: {type: 'json'},
        dataHash: {type: 'string'},
        hash: {type: 'string'},
        versionHash: {type: 'string'},
        creator: {model: 'user'},
    },

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
	build:function(){},
};