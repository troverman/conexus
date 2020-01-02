//CRE8.ITEM
module.exports = {
	get: async function(req, res) {
		var model = await itemApp.get(req); 
		res.json(model);
	},
	create: async function (req, res) {
		var newModel = await itemApp.create(req);
		res.json(newModel);
	}
};