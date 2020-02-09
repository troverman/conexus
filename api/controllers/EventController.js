//CRE8.EVENT
module.exports = {
	get: async function(req, res) {
		var model = await eventApp.get(req); 
		res.json(model);
	},
	create: async function(req, res) {
		var model = await eventApp.create(req); 
		res.json(model);
	},
};