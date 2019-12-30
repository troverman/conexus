//CRE8.PEER
module.exports = {
    attributes: {
        
        //DEPRECIATE
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
};
