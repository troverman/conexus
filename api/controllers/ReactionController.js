//CRE8.REACTION
module.exports = {
	create: async function(req, res) {
		var model = await reactionApp.create(req); 
		res.json(model);
	},
};
