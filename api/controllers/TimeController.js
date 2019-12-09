//CRE8.TIME
module.exports = {
	get: async function(req, res) {
		var model = await timeApp.get(req); 
		res.json(model);
	},
	create: async function (req, res) {
		var newModel = await timeApp.create(req);
		res.json(newModel);
	}
};