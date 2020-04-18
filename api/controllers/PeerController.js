//1-many w member
//CRE8.PEER
module.exports = {
	get: async function(input, output) {var model = await peerApp['GET'](input); output.json(model);},
	create: async function (input, output) {var newModel = await peerApp['CREATE'](output); output.json(newModel);}
};