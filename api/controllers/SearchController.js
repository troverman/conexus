module.exports = {
	get: async function (req, res) {
		var models = searchApp.get(req);
		res.json(models);
	},
	search: async function (req, res) {
		var models = searchApp.search(req);
		res.json(models);
	},
	getFeed: async function (req, res) {
	    var models = await searchApp.getFeed(req);
	    console.log(models)
		res.json(models);
	},
};