//CRE8.TRANSACTION
module.exports = {
	get: async function(req, res) {
		var model = await transactionApp.get(req); 
		res.json(model);
	},
	create: async function (req, res) {
		var newModel = await transactionApp.create(req);
		res.json(newModel);
	}
};
