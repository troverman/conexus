//CRE8.CONNECTION
module.exports = {
	get: async function(req, res) {
		var model = await connectionApp.get(req); 
		res.json(model);
	},
	create: async function (req, res) {
		var newModel = await connectionApp.create(req);
		res.json(newModel);
	}
};