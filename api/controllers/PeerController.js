//1-many w member
//CRE8.PEER
module.exports = {
	get: async function(req, res) {
		var model = await peerApp.get(req); 
		res.json(model);
	},
	create: async function (req, res) {
		var newModel = await peerApp.create(req);
		res.json(newModel);
	}
};