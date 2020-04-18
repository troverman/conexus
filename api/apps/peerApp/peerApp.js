//CRE8.PEER.ALPHA
var App = {
	//config options and sets
	//ipfs.create
	//app that exists as connections to types of peers 
	// --> an organization / catagorization app from code governance vantage 
		//ids are hashes / dynamic 
			//ipfs vs HASH
	//peer is a combinatorial obj
	'CONNECTION+SELF+ATTRIBUTES': {
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
	'DB': function(){return global['Peer']},

	'GET':function(input){
		return App['DB']().find({});
	},
	'CREATE': async function(input){
		var model = {
			info: input.param('info'),
			information: input.param('information'),
			versionHash: 'UNSTABLE PRE-ALPHA',
			data: input.param('data'),
			reputation: {},
			validiatedBlocks: [],
			creator: input.param('creator'),
		};
		return App['DB']().create(model);
	},
	//PEERBUILD APP >> CREATE SUPER STRUCTURE AND (PROTOCOL TYPES
	'BUILD':function(){},
};
module.exports = App;