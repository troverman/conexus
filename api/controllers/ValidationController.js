
//CRE8.VALIDATION
module.exports = {
	get: async function(req, res) {
		//var model = await validationApp.get(req);
		//var model = await validationApp.[req.method](req);
		var model = await validationApp.get(req); 
		res.json(model);
	},
	create: async function (req, res) {
		var newModel = await validationApp.create(req);
		res.json(newModel);
	}
};