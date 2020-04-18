module.exports = {
	get: async function (input, output) {var models = searchApp['GET'](input); output.json(models);},
	search: async function (input, output) {var models = searchApp['SEARCH'](input); output.json(models);},
	getFeed: async function (input, output) {var models = await searchApp['GET+FEED'](input); output.json(models);},
};