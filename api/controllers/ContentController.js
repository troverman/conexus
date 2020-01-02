//CRE8.CONTENT
module.exports = {
	get: async function(req, res) {
		var model = await contentApp.get(req); 
		res.json(model);
	},
	create: async function (req, res) {
		var newModel = await contentApp.create(req);
		res.json(newModel);
	}
};