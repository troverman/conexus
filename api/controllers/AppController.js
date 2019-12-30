//CRE8.APP
module.exports = {
	get: async function(req, res) {
		var model = await appApp.get(req); 
		res.json(model);
	},
	create: async function (req, res) {
		var newModel = await appApp.create(req);
		res.json(newModel);
	}
};