//CRE8.__ITEM__ACTION
module.exports = {
	get: async function(req, res) {
		var model = await actionApp.get(req); 
		res.json(model);		
	},
	create: async function (req, res) {
		var newModel = await actionApp.create(req);
		res.json(newModel);
	},
};