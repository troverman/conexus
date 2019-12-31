//CRE8.USER
//TODO: RENAME TO MEMBER
//CRE8.MEMBER
module.exports = {
	get: async function(req, res) {
		var model = await memberApp.get(req); 
		res.json(model);
	},
	update: async function (req, res) {
		var newModel = await memberApp.update(req);
		res.json(newModel);
	}
};
