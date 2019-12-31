//CRE8.NOTIFICATION
module.exports = {
	get: async function(req, res) {
		var model = await notificationApp.get(req); 
		res.json(model);
	},
	update: async function (req, res) {
		var newModel = await notificationApp.update(req);
		res.json(newModel);
	}
};

