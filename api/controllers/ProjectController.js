//CRE8.PROJECT
module.exports = {
	get: async function(req, res) {
		var model = await projectApp.get(req); 
		res.json(model);
	},
	create: async function (req, res) {
		var newModel = await projectApp.create(req);
		res.json(newModel);
	}
};


