//CRE8.TASK
module.exports = {
	get: async function(req, res) {
		var model = await taskApp.get(req); 
		res.json(model);
	},
	create: async function (req, res) {
		var newModel = await taskApp.create(req);
		res.json(newModel);
	}
};


